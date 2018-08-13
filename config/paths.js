module.exports = [
  // Match requests to /search
  '/^\\/search/',
  // Match requests to /statutory-instruments/<8_character_alphanumeric_id>
  '/^\\/statutory-instruments\\/[a-zA-z0-9]{8}$/'
]
