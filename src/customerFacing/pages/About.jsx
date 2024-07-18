import React from 'react'
import banerImg1 from "../../assets/images/about-banner_0.jpg"


const About = () => {
    const administration = [
        {name:"Mohan Anchata", position:"President"},
        {name:"Pratik Dudhia", position:"Vice President"},
        {name:"Girish Kaimal", position:"Secretary"},
    ]

  return (
    <div className='md:container'>
        <div className='relative mb-4' > 
            <img src={banerImg1} className='blur-[1px] bg-cover  bg-center h-60 w-full ' alt="bannerImg" />
            <h1 className='absolute bottom-20 md:right-36 right-12 text-white font-medium md:text-6xl text-3xl'>About</h1>
        </div>
        
        <div className="history my-12 bg-gradient-to-r from-indigo-300 border-2 drop-shadow-lg md:p-8 p-4">
            <h2 className='text-3xl font-medium'>History</h2>
            <p className="sm:m-4 my-4 sm:px-20 sm:text-xl sm:leading-10">
            Shri Saibaba Sansthan Trust, Shirdi, is the Governing and
            Administrative body of Shri Saibaba's Samadhi Temple and all others
            temples in this premises, and devoted towards teachings of Saibaba{" "}
            <span className="text-red-600 font-bold"> "Sabka Malik Ek" </span>{" "}
            and providing amenities to Sai devotees who are visiting Shirdi and
            Sai Samadhi Temple.
          </p>
            <p className='md:container my-2 sm:leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero commodi officia, doloremque nulla nisi excepturi possimus distinctio deserunt reiciendis eos at exercitationem a, facilis quo velit necessitatibus suscipit! Doloremque modi doloribus provident, tempore ex aperiam fugit ratione quasi eum ullam ad quia quaerat corrupti vero, et numquam dolorum nihil porro libero amet placeat illo? Pariatur eius nam atque natus suscipit reiciendis a labore, praesentium laudantium hic, voluptatibus magnam placeat magni odio obcaecati aliquam quisquam distinctio cum tenetur fugiat mollitia quo. Accusamus quos consequatur magni fugit cum nihil laboriosam ipsam quam, eveniet facilis. Similique suscipit architecto voluptas incidunt iure doloremque dolor.</p>
            <p className="md:container my-2 sm:leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eaque in aperiam ullam odit ex laboriosam perferendis. Dolorum, sed? Distinctio doloribus est blanditiis pariatur, hic excepturi facilis atque? Voluptatum quae corrupti labore eum facere nemo cumque necessitatibus laudantium reiciendis eveniet veniam distinctio repellendus, illo quam at. Reprehenderit, libero fugit. Libero, iste asperiores ratione deserunt necessitatibus exercitationem nihil voluptas praesentium itaque modi nobis. Eligendi quibusdam fugit, commodi magnam rerum consequatur nostrum provident! Dicta ipsa consequuntur labore inventore animi, eos laudantium saepe distinctio adipisci, excepturi commodi sint accusantium porro, delectus aliquam consectetur possimus alias vitae temporibus impedit dolor consequatur dolorum. Sunt enim iusto corporis minima, assumenda neque eius nisi consectetur itaque molestiae distinctio quae totam in expedita facilis cum exercitationem. Ea enim harum, molestiae temporibus expedita impedit, doloremque laudantium sequi voluptate at ipsa nam libero, voluptas qui placeat et. Doloremque alias officia, reiciendis, corporis quibusdam unde voluptas quod eveniet dolorem, deserunt nemo?
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