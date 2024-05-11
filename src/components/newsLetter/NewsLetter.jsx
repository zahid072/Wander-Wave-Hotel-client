import React from 'react'
import { FaPhone } from 'react-icons/fa'


const NewsLetter = () => {
  return (
    <div>
      <div
          className="py-20 md:py-28 mt-20 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url("https://i.ibb.co/0ZTk0wT/newsletterbg.png")`,
          }}
        >
          <div className="flex md:flex-row flex-col gap-5 justify-center lg:mx-36 md:mx-5 mx-2">
            <div
              className="md:w-3/5 w-full p-4 rounded bg-[#2c4549d0]"
              
            >
              <div className=" p-4 border md:py-10 rounded text-white h-full flex md:flex-row flex-col items-center">
               <div className='md:w-1/2'>
                <h1 className="text-center md:text-4xl font-semibold ">
                  OUR TIMING
                </h1>
               <div className="text-center text-xl max-w-80 mt-3">
                  <p>MONDAY - THURSDAY</p>
                  <p className='text-lg'>07:00 - 15:00</p>
                  <p className='text-lg'>16:00 - 22:00</p>
                </div>
                <div className="text-center text-xl max-w-80 mt-3">
                  <p>FRIDAY - SUNDAY</p>
                  <p className='text-lg'>07:00 - 15:00</p>
                  <p className='text-lg'>16:00 - 22:00</p>
                </div>
               </div>
                  <div className='w-full md:w-1/2 md:mt-0 mt-4'>
                  <p className='md:text-4xl text-3xl '><FaPhone className='mx-auto'/></p>
                   <h1 className='md:text-4xl  text-2xl mt-4 text-center'>+880 1234802384</h1>  
                    </div>     
              </div>
            </div>
            <div
              className="md:w-2/5 w-full bg-white rounded p-5 bg-cover flex items-center bg-center bg-no-repeat"
              
            >
              <div className="p-5 border space-y-4 rounded bg-[#ffffff5e] md:py-16 w-full h-full">
                <h1 className='md:text-4xl text-3xl font-bold font-gilda text-center'>Newsletter</h1>
                
                <h3 className="text-gray-900 text-2xl font-semibold text-center">
                SIGN UP FOR SPECIAL OFFERS
                </h3>
                <div className="flex items-center md:flex-row flex-col">
                  <input
                    type="text"
                    placeholder="your@email.com"
                    className=" py-3 px-3 md:border-r-0 w-full border-[3px] border-black focus:outline-none rounded md:rounded-r-none"
                  />
                  <button className='btn md:border-2 hover:border-2 hover:border-black border-black text-white rounded md:rounded-l-none hover:bg-[#2c4549e4] bg-[#2c4549d0] md:w-28 w-full md:mt-0 mt-5 md:h-[53px]'>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NewsLetter
