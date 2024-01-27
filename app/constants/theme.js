export const COLORS = {
  primary: "#0DD7B4", // orange
  secondary: "#562FB6", // gray
  black: "#000000",
  white: "#FFFFFF",
  lightGray: "#F5F5F6",
  gray: "#898C95",
  darkGray: "#757D85",
  bg: "#0D0F1F",
};

export const SIZES = {
  base: 10,
  small: 12,
  graySmall: 11,
  font: 14,
  h4: 16,
  h3: 18,
  h2: 24,
  h1: 34,
};

export const FONTS = {
  bold: "EncodeSansBold",
  boldItalic: "EncodeSansBoldItalic",
  semiBold: "EncodeSansSemiBold",
  semiBoldItalic: "EncodeSansSemiBoldItalic",
  medium: "EncodeSansMedium",
  mediumItalic: "EncodeSansMediumItalic",
  regular: "EncodeSansRegular",
  regularItalic: "EncodeSansRegularItalic",
  light: "EncodeSansLight",
  lightItalic: "EncodeSansLightItalic",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
