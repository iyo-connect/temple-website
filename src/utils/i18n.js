import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"
import homeEnLang from '../assets/locales/en/home.json'
import aboutEnLang from '../assets/locales/en/home.json'
import taLang from '../assets/locales/ta/home.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources:{
        en:{
          
          translation: homeEnLang,  aboutEnLang
          // {
          //       greeting: "Hello, Welcome! ",
          //       description: {
          //         line1:
          //           "<1>Live and allow others to live</1>; hurt no one; life is dear to all living beings. - <1>{{title}}</1>",
          //         line2:
          //           "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."
          //       }
          //   }
        },
        ta:{
          translation: taLang
            
          // {
          //       greeting: "வணக்கம், வருக! ",
          //       description: {
          //           line1: "<1>வாழுங்கள், மற்றவர்களை வாழ விடுங்கள்</1>; யாரையும் துன்புறுத்தாதே; எல்லா உயிர்களுக்கும் உயிர் மிகவும் பிரியமானது. - <1>{{title}}</1>",
          //           line2: "கடந்த காலத்தில் வசிக்க வேண்டாம், எதிர்காலத்தைப் பற்றி கனவு காணாதீர்கள், தற்போதைய தருணத்தில் மனதை ஒருமுகப்படுத்துங்கள்."
          //       }
          //   }
        }
    }
    
   
  })

  export default i18n
