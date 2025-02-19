import DICTIONARY from "../../nonview/base/DICTIONARY";
import IDX from "../../nonview/base/IDX";

import SriLankaColors from "../../view/_constants/SriLankaColors";

const CACHE_KEY_LANG = "CACHE_KEY_LANG";
const REPLACE_WILDCARD = "000";

class Lang {
  constructor(lang, label, labelEn, shortLabel, color) {
    this.lang = lang;
    this.label = label;
    this.labelEn = labelEn;
    this.shortLabel = shortLabel;
    this.color = color;
  }
}

export const LANG_LIST = [
  new Lang("si", "සිංහල", "Sinhala", "සිං", SriLankaColors.Sinhala),
  new Lang("ta", "தமிழ்", "Tamil", "த", SriLankaColors.Tamil),
  new Lang("en", "English", "English", "En", SriLankaColors.Muslim),
];

export const LANG_IDX = IDX.build(
  LANG_LIST,
  (d) => d.lang,
  (d) => d
);

export default class I18N {
  static BASE_LANG = "en";

  static getLang() {
    let browserLang = localStorage.getItem(CACHE_KEY_LANG);
    if (!browserLang) {
      browserLang = "en";
      localStorage.setItem(CACHE_KEY_LANG, browserLang);
    }
    return browserLang;
  }

  static setLang(browserLang) {
    localStorage.setItem(CACHE_KEY_LANG, browserLang);
  }

  static translate(s) {
    if (!s) {
      return "";
    }
    s = s.trim();
    if (!s.trim()) {
      return s;
    }

    const entry = DICTIONARY[s];
    if (!entry) {
      return s;
    }

    const currentLang = I18N.getLang();
    if (currentLang === I18N.BASE_LANG) {
      return s;
    }

    const translation = entry[currentLang];
    if (!translation) {
      return s;
    }

    return translation;
  }
}

export function t(s, value = "") {
  let translatedS = I18N.translate(s);
  if (value) {
    return translatedS.replaceAll(REPLACE_WILDCARD, value);
  }
  return translatedS;
}
