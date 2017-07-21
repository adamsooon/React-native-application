function isNameFormatValid(name) {
  const regExp = /^[a-ząęćźżłóś\-\s]{3,}$/i;
  return regExp.test(name)
}

module.exports = isNameFormatValid;