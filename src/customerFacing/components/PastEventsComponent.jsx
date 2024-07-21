import React from 'react'
import god2 from '../../assets/images/god2.jpg'
import { Link } from 'react-router-dom'

const PastEventsComponent = () => {
  return (
    <div className='container-full bg-gray-50 md:mx-4 my-12 p-12 shadow-xl'>
        <h2 className="text-center md:mb-16 mb-8 text-red-900 sm:text-5xl text-2xl font-bold mb-4">Past Events</h2>
        <div className='container-full flex lg:flex-row flex-col gap-4'>
            <div className='lg:w-1/4  flex flex-col gap-4 items-center border rounded-lg p-8'>
                <img src={god2} alt="godImg" />
                <h4 className='font-medium text-xl'>Celeberation of Mahotasava</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, voluptatibus. A saepe placeat dolore quia ea dignissimos vel inventore vitae temporibus voluptates harum blanditiis omnis nisi architecto nostrum amet veniam, iusto recusandae aliquam modi. Maxime, fugiat? Corrupti aperiam placeat excepturi fuga minima quasi dolorum dolores, quibusdam voluptate doloremque necessitatibus nostrum.</p>
                <button className='font-medium bg-red-700 text-gray-50 px-8 py-2 rounded '>
                    <Link to='#'>Read More</Link>
                </button>
            </div>
            <div className='lg:w-1/4   flex flex-col gap-4 items-center border rounded-lg p-8'>
                <img src={god2} alt="godImg" />
                <h4 className='font-medium text-xl'>Celeberation of Mahotasava</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, voluptatibus. A saepe placeat dolore quia ea dignissimos vel inventore vitae temporibus voluptates harum blanditiis omnis nisi architecto nostrum amet veniam, iusto recusandae aliquam modi. Maxime, fugiat? Corrupti aperiam placeat excepturi fuga minima quasi dolorum dolores, quibusdam voluptate doloremque necessitatibus nostrum.</p>
                <button className='font-medium bg-red-700 text-gray-50 px-8 py-2 rounded '>
                    <Link to='#'>Read More</Link>
                </button>

            </div>
            <div className='lg:w-1/4  flex flex-col gap-4 items-center border rounded-lg p-8'>
                <img src={god2} alt="godImg" />
                <h4 className='font-medium text-xl'>Celeberation of Mahotasava</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, voluptatibus. A saepe placeat dolore quia ea dignissimos vel inventore vitae temporibus voluptates harum blanditiis omnis nisi architecto nostrum amet veniam, iusto recusandae aliquam modi. Maxime, fugiat? Corrupti aperiam placeat excepturi fuga minima quasi dolorum dolores, quibusdam voluptate doloremque necessitatibus nostrum.</p>
                <button className='font-medium bg-red-700 text-gray-50 px-8 py-2 rounded '>
                    <Link to='#'>Read More</Link>
                </button>

            </div>
            <div className='lg:w-1/4  flex flex-col gap-4 items-center border p-8'>
                <img src={god2} alt="godImg" />
                <h4 className='font-medium text-xl'>Celeberation of Mahotasava</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, voluptatibus. A saepe placeat dolore quia ea dignissimos vel inventore vitae temporibus voluptates harum blanditiis omnis nisi architecto nostrum amet veniam, iusto recusandae aliquam modi. Maxime, fugiat? Corrupti aperiam placeat excepturi fuga minima quasi dolorum dolores, quibusdam voluptate doloremque necessitatibus nostrum.</p>
                <button className='font-medium bg-red-700 text-gray-50 px-8 py-2 rounded '>
                    <Link to='#'>Read More</Link>
                </button>

            </div>
            
        </div>
    </div>
  )
}

export default PastEventsComponent