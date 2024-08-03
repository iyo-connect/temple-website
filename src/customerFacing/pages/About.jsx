import React from 'react'
import banerImg1 from "../../assets/images/about-banner_0.jpg"
import { Trans, useTranslation } from 'react-i18next';


const About = () => {
  const { t } = useTranslation();

    const administration = [
        {name:"Mohan Anchata", position:"President"},
        {name:"Pratik Dudhia", position:"Vice President"},
        {name:"Girish Kaimal", position:"Secretary"},
    ]

    const {about_home, about_god_name, about_home_last } = t("about");
    const {about_para1, about_para2, about_para3} = t("about_page")

  return (
    <div className='md:container'>
        <div className='relative mb-4' > 
            <img src={banerImg1} className='blur-[1px] bg-cover  bg-center h-60 w-full ' alt="bannerImg" />
            <h1 className='absolute bottom-20 md:right-36 right-12 text-white font-medium md:text-6xl text-3xl'>About</h1>
        </div>
        
        <div className="history my-12 bg-gradient-to-r from-indigo-300 border-2 drop-shadow-lg md:p-8 p-4">
            <h2 className='text-3xl font-medium'>History</h2>
            <p className="sm:m-4 my-4 sm:px-20 sm:text-xl sm:leading-10">
            {about_home}{" "}
            <Trans
              i18nKey={about_god_name}
              components={{
                2: <span className="text-red-600 font-bold" />,
                10: <q />,
              }}
            />{" "}
            {about_home_last}
          </p>
            <p className='md:container my-2 sm:leading-6'>
                {about_para1}
            </p>
            <p className="md:container my-2 sm:leading-6">
                {about_para2}
            </p>
            <p className="md:container my-2 sm:leading-6">
                {about_para3}
            </p>
        </div>
        <div className="administration my-12 bg-gradient-to-r from-indigo-300 border-2 drop-shadow-lg p-8">
            <h2 className='text-3xl font-medium'>Administration</h2>
            <div className="flex md:flex-row flex-col gap-4 items-center justify-around my-4 py-2 px-4">
                {administration.map(({name, position}, index)=>(

                <div className='bg-white p-4 rounded-lg shadow text-center' key={index} >
                    <h3 className='text-2xl font-medium mb-4'>{position}</h3>
                    <p className='text-xl font-medium'>{name}</p>
                </div>
                ))}
                
                
            </div>
        </div>

        
    </div>
  )
}

export default About