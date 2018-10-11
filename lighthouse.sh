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

html_start="<html><head><title>Lighthouse tests</title><link rel='stylesheet' href='https://static.parliament.uk/pugin/stylesheets/main.css'/></head><body><h1>Lighthouse tests <small>Build: ${TRAVIS_BUILD_NUMBER:-non-ci}</small></h1><ul>"
html_content=""
html_end="</ul></body></html>"

# Array of all paths to audit
paths=(
  "/"
  "/search"
  "/search?q=banana"
  "/search?count=10&q=banana&start_index=11"
  "/search/zero_results"
  "/statutory-instruments"
  "/statutory-instruments/12345678"
  "/proposed-negative-statutory-instruments"
  "/proposed-negative-statutory-instruments/12345678"
  "/groups"
  "/groups/12345678"
  "/groups/12345678/layings"
)

names=(
  "Homepage"
  "Search: landing"
  "Search: results"
  "Search: results (nth page)"
  "Search: zero results"
  "Statutory instruments: index page"
  "Statutory instruments: show page"
  "Proposed Negative Statutory Instruments: index page"
  "Proposed Negative Statutory Instruments: show page"
  "Groups: index page"
  "Groups: show page page"
  "Group Layings: index page"
)

echo "Running Lighthouse tests:"

# Check that we have the same number of names and paths
if [[ ${#paths[@]} != ${#names[@]} ]];then
  echo "ERROR: Please ensure there is a 'name' for each 'path' provided."
  exit 1
fi

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
for path in ${paths[@]}; do
  echo
  echo "Testing: $application_host$path"
  ($lighthouse_ci $application_host$path --accessibility=$accessibility_pass_rate --best-practice=$best_practice_pass_rate --performance=$performance_pass_rate --pwa=$pwa_pass_rate  --seo=$seo_pass_rate --report=$artifacts_directory/$tmp_directory)
  lighthouse_test_status=$?

  echo "Exited with: $lighthouse_test_status"

  html_content+="<li><a href='$lighthouse_test_number/report.html'>${names[$lighthouse_test_number]}</a>"

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
