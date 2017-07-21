function isPhoneFormatValid(phone) {
  const regExp = /^\+?[0-9\- ]+$/;
  return phone.length > 0
    && regExp.test(phone)
    && phone.length >= 9;
}

module.exports = isPhoneFormatValid;