#! /bin/bash

# Variables to configure our reporting
accessibility_pass_rate=100
best_practice_pass_rate=87
performance_pass_rate=80
pwa_pass_rate=0
seo_pass_rate=80

lighthouse_ci=./node_modules/.bin/lighthouse-ci
application_host=http://localhost:5400

artifacts_directory=artifacts
tmp_directory=tmp

html_start="<html><head><title>Lighthouse tests</title><link rel='stylesheet' href='https://static.parliament.uk/pugin/stylesheets/main.css'/></head><body><main><section><div class='container'><h1>Lighthouse tests <small>Build: ${TRAVIS_BUILD_NUMBER:-non-ci}</small></h1><ol>"
html_content=""
html_end="</ol></div></section></main></body></html>"

echo "Running Lighthouse tests:"

# Echo out pass rates for clarity
echo "========================"
echo "|      Pass rates      |"
echo "------------------------"
echo "Performance:         $performance_pass_rate"
echo "Progressive Web App: $pwa_pass_rate"
echo "Acessibility:        $accessibility_pass_rate"
echo "Best Practice:       $best_practice_pass_rate"
echo "SEO:                 $seo_pass_rate"
echo "========================"

# Create a directory to store our lighthouse builds
echo "Creating artifacts directory: $artifacts_directory/$tmp_directory"
mkdir -p $artifacts_directory/$tmp_directory

# Run multiple Lighthouse audit and threshold for the CI to pass
lighthouse_exit_status=0
lighthouse_test_number=0

for filePath in $(find ./data -name '*.json'); do
  filePathString=$(find $filePath | sed 's/^.\/data//' | sed 's/\/index.json$//' | sed 's/.json$//')
  filePathName=$(find $filePath | sed 's/^.\/data//' | sed 's/.json$//')
  fileTitle=$(cut -d'"' -f4 <<< $(cat $filePath | grep -m 1 "\"title\""))

  echo "Testing: $application_host$filePathString"
  ($lighthouse_ci $application_host$filePathString --accessibility=$accessibility_pass_rate --best-practice=$best_practice_pass_rate --performance=$performance_pass_rate --pwa=$pwa_pass_rate  --seo=$seo_pass_rate --report=$artifacts_directory/$tmp_directory)
  lighthouse_test_status=$?

  echo "Exited with: $lighthouse_test_status"

  html_content+="<li><a href='$lighthouse_test_number/report.html'>${fileTitle}</a>"

  if [[ $lighthouse_test_status != 0 ]];then
    lighthouse_exit_status=$lighthouse_test_status
    html_content+=" &#x274C;"
  else
    html_content+=" &#x1F389;"
  fi

  echo "Saving report to $artifacts_directory/$lighthouse_test_number"
  mkdir -p $artifacts_directory/$lighthouse_test_number
  mv $artifacts_directory/$tmp_directory/report.html $artifacts_directory/$lighthouse_test_number/

  html_content+="</li>"

  lighthouse_test_number=$(($lighthouse_test_number + 1))
done

echo "Cleaning up artifact tmp directory"
rm -r $artifacts_directory/$tmp_directory

echo "Building: $artifacts_directory/index.html"
echo $html_start$html_content$html_end > $artifacts_directory/index.html

echo "Exiting lighthouse script with: $lighthouse_exit_status"

exit $((lighthouse_exit_status))
