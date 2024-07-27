import React from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
    {code:'en', lang:"English"},
    {code:'ta', lang:"Tamil"},
    {code:'hi', lang:"Hindi"},
]

const LanguageSelector = () => {
    const {i18n} = useTranslation()

    const changeLanguage = (lng) =>{
        i18n.changeLanguage(lng)
    }

  return (
    <div className='md:container flex md:gap-4 gap-1 m-1 items-center'>
        {languages.map((lng)=>{
            return <button className='bg-slate-900 text-gray-50 hover:text-yellow-500 rounded px-4 py-1 hover:bg-slate-700' key={lng.code} onClick={()=>changeLanguage(lng.code)}> {lng.lang} </button>
        })} <span className='text-center'>Welcome! </span>
    </div>
  )
}

export default LanguageSelector