import { createTheme, createText, createBox, opacity } from '@shopify/restyle'

const palette = {
  grayLight: '#22223b',

  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#2a9d8f',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#FCFCFC',
  red: "#e76f51",
  gray: "#DBDBDB",

  blackGrey: "#4e4f48",
  black1: "#818181",

  blue1: "#383CA3",



};


const theme = createTheme({
  colors: {
    blueMain: "#0373F3",
    blueBorder: "#CDE3FD",


    blue1: "#7db2d4",
    gray2: "#e4e4e4",
    den: "#0B0B0B",
    black: "#000",
    darkblue: "#2a9d8f",
    mainBackground: palette.white,
    mainForeground: palette.black,
    cardPrimaryBackground: palette.purplePrimary,
    buttonPrimaryBackground: palette.purplePrimary,
    redColor: palette.red,
    white: palette.white,
    greenLight: palette.greenLight,
    gray1: palette.grayLight,
    BlackLuninace: palette.blackGrey,
    black1: palette.black1,
    lavenda: "#9b5de5",
    greenLight1: "#06d6a0",
    yallowLight: "#f9c74f"



  },
  spacing: {
    a: -17,
    o: 0,
    xs: 3,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    q: 30
  },
  borderRadii: {
    xxs: 2,
    xs: 3,
    s: 8,
    m: 16,
    l: 24,
    xl: 45,
  },

  textVariants: {
    text18_70: {
      fontFamily: 'SFUIText-Semibold',
      fontWeight: '600',
      fontSize: 18,
      lineHeight: 20,
      color: "black",
      opacity: 0.8
    },
    text36_100_black: {
      fontFamily: 'SFUIText-Bold',
      fontWeight: '600',
      fontSize: 36,
      lineHeight: 36,
      color: "black",
    },
    text36_100_blue: {
      fontFamily: 'SFUIText-Bold',
      fontWeight: '600',
      fontSize: 36,
      lineHeight: 36,
      color: "blueMain",
    },
    boxtitle: {
      fontFamily: 'SFUIText-Bold',
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 20,
      color: "black",
    },
    boxsubtitle: {
      fontFamily: 'SFUIText-LightItalic',
      fontWeight: '600',
      fontSize: 12,
      lineHeight: 16,
      color: "black",
    },
    boxsubtitleLight:{
      fontFamily: 'SFUIText-Light',
      fontWeight: '600',
      fontSize: 12,
      lineHeight: 16,
      color: "black",
    },
    tltleInScreen: {
      fontFamily: 'SFUIText-Semibold',
      fontWeight: '900',
      fontSize: 18,
      lineHeight: 22,
      color: "black",
      opacity: 0.7
    },
    welcome: {
      fontFamily: 'SFUIText-Semibold',
      fontWeight: '600',
      fontSize: 36,
      lineHeight: 36,
      color: "mainBackground"
    },
    subWelcome: {
      fontFamily: 'SFUIText-RegularItalic',
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 18,
      color: "mainBackground"
    },
    titlesmall: {
      fontFamily: 'SFUIText-Semibold',
      fontWeight: '600',
      fontSize: 15,
      lineHeight: 17,
      color: "mainBackground",

    },
    titleGray: {
      fontFamily: 'SFUIText-Semibold',
      fontWeight: '600',
      fontSize: 15,
      lineHeight: 15,
      color: "mainForeground",
    },
    remenber: {
      fontFamily: 'SFUIText-Regular',
      fontSize: 14,
      lineHeight: 14,
      color: "blue1"
    },
    login: {
      fontFamily: 'SFUIText-Regular',
      fontSize: 14,
      lineHeight: 14,
      color: "mainBackground"
    },
    titleScreen: {
      fontFamily: 'SFUIText-Semibold',
      fontSize: 30,
      lineHeight: 30,
      color: "mainForeground"
    },
    empty: {
      fontFamily: 'SFUIText-Regular',
      fontSize: 14,
      lineHeight: 14,
    },
    subbanner: {
      fontFamily: 'SFUIText-Medium',
      fontWeight: '900',
      fontSize: 14,
      lineHeight: 25,
      color: "mainBackground"
    },
    headerBanner: {
      fontFamily: 'SFUIText-Heavy',
      fontSize: 24,
      lineHeight: 26,
      color: "mainBackground"
    },
    buttonBanner: {
      fontFamily: 'SFUIText-Heavy',
      fontWeight: '900',
      fontSize: 14,
      lineHeight: 25,
      color: "mainBackground"
    },
    text1: {
      fontFamily: 'SFUIText-Semibold',
      fontSize: 14,
      lineHeight: 16,
    },
    text2: {
      fontFamily: 'SFUIText-SemiboldItalic',
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 20,
    },
    dateTime: {
      fontFamily: 'SFUIText-Regular',
      fontSize: 10,
      lineHeight: 12,
    },
    textTitle: {
      fontFamily: 'SFUIText-Semibold',
      fontSize: 17,
      lineHeight: 19,
      color: "den"
    },
    subControl: {
      fontFamily: 'SFUIText-Light',
      fontSize: 14,
      lineHeight: 14,
      color: "black"
    },

    header: {
      fontFamily: 'SFUIText-Bold',
      fontWeight: 'bold',
      fontSize: 30,
      lineHeight: 30,

    },
    subheader: {
      fontFamily: 'SFUIText-RegularItalic',
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 20,

    },
    body: {
      ontWeight: 'SFUIText-LightItalic',
      fontSize: 14,
      lineHeight: 24,
    },
    more: {
      ontWeight: 'SFUIText-LightItalic',
      fontSize: 14,
      lineHeight: 24,
      color: "black1",

    }

  },

  breakpoints: {

  },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;