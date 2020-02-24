module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    // The generic font family is defined in the style.css file
    'font-family-no-missing-generic-family-keyword': null,
    // Ignored at the moment
    'no-descending-specificity': null
  }
}
