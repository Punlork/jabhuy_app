type LanguagePropsType = {
  home: String;
};

type LanguagesType = {
  [key: string]: LanguagePropsType;
};

const defaultLanguage: LanguagesType = {
  en: {
    home: 'Home',
  },
  kh: {
    home: 'Home kh',
  },
};

export default defaultLanguage;
