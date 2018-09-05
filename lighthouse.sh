#! /bin/bash

# Array of all paths to audit
paths=(
  http://localhost:5400
  http://localhost:5400/search
  http://localhost:5400/search?q=banana
  http://localhost:5400/search/zero_results
)

# Run multiple Lighthouse audit and threshold for the CI to pass
for i in ${paths[@]}; do
  ./node_modules/.bin/lighthouse-ci ${i} --performance=80 --pwa=40 --accessibility=90 --best-practice=80 --seo=80
done
