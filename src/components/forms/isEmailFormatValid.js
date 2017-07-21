function isEmailFormatValid(email) {
  const regExp = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
  return regExp.test(email)
}

module.exports = isEmailFormatValid;