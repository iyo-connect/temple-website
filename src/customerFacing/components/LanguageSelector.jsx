import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "ta", lang: "Tamil" },
  { code: "hi", lang: "Hindi" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <select
        className=" my-1 w-min bg-slate-900 text-gray-50 hover:text-yellow-500 rounded px-2 py-1  hover:bg-slate-700"
        onChange={changeLanguage}
        defaultValue={localStorage.getItem('i18nextLng') || 'en'}
      >
        {languages.map((lng) => (
          <option key={lng.code} value={lng.code}>
            {lng.lang}
          </option>
        ))}
      </select>
    </>
  );
};

export default LanguageSelector;
