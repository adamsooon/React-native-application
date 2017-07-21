const type = {
  base: 'Helvetica Neue',
  // base: 'Roboto',
  // bold: 'Roboto-Bold',
};

const size = {
  title: 18,
  input: 16,
  small: 12,
  regular: 14,
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
  title: {
    fontFamily: type.base,
    fontSize: size.title,
    fontWeight: 'bold',
  },
  input: {
    fontFamily: type.base,
    fontSize: size.input,
  },
};

export default {
  type,
  size,
  style,
};