#! /bin/bash

# Variable
beautify=./node_modules/.bin/js-beautify

# Beautify json files within the `data` directory
for file in $(find ./data -name '*.json'); do
  ($beautify --config .jsbeautifyrc -f $file -r)
done

# Beautify json files within the `test` directory
for file in $(find ./test/fixtures/json -name '*.json'); do
  ($beautify --config .jsbeautifyrc -f $file -r)
done

echo "Task: Beautify is complete"
