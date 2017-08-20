const type = {
  base: 'Helvetica Neue',
  // base: 'Roboto',
  // bold: 'Roboto-Bold',
};

const size = {
  small: 12,
  regular: 14,
  regularPlus: 16,
  title: 18,
};

const style = {
  smallText: {
    fontFamily: type.base,
    fontSize: size.small,
  },
  regularText: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  labelText: {
    fontFamily: type.base,
    fontSize: size.regular,
    fontWeight: 'bold',
  },
  input: {
    fontFamily: type.base,
    fontSize: size.regularPlus,
  },
  headerText: {
    fontFamily: type.base,
    fontSize: size.title,
    fontWeight: 'bold',
  },
};

export default {
  type,
  size,
  style,
};