import { color } from 'framer-motion'
import React from 'react'

function LeaderBoard() {
  return (
    <div className="m-0 p-0 main w-full  bg-white text-black flex ">

      {/* left sidebar */}
      <div className='bg-slate-300 w-1/5 border-e-2 border-slate-200'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </div>

      {/* right sidebar */}
      <div className='bg-white w-4/5 p-4'>

        {/* first row */}
        <div className='flex justify-between'>


          <form class="max-w-md flex items-center justify-center">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />

            </div>
          </form>


          <div className='flex justify-center'>
            <div class="flex w-full items-center justify-center bg-grey-lighter">
              <label class=" flex gap-4 items-center px-2 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue">
                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <span class=" text-base leading-normal">Upload</span>
                <input type='file' class="hidden" />
              </label>
            </div>
            <div className='flex justify-center mx-4 p-2 items-center'>
              <i class="fa-solid fa-message mx-4 fa-xl"></i>
              <i class="fa-regular fa-bell mx-4 fa-xl"></i>
              <img class="w-10 h-10 object-cover rounded-full mx-4" src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=" alt="Rounded avatar" />

            </div>
          </div>

        </div>

        {/* second row */}

        <div className=' flex flex-col m-1 p-1'>
          <div className='flex justify-start items-center m-2'>
            <h2>Leaderboard</h2>
          </div>
          <div className='flex justify-start items-center m-2'>

            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 mb-2  focus:outline-none dark:focus:ring-blue-800">Reviews</button>

            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 mb-2 ">Ratings</button>

            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 mb-2 ">Followers</button>


          </div>

          {/* final third row */}
          <div className='flex flex-col'>

            {/* first person */}
            <div className="flex justify-between items-center my-3 ">

              {/* name field */}
              <div className="flex gap-3 justify-between items-center mx-2">
                <i class="fa-solid fa-medal fa-xl" ></i>
                <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" alt="Rounded avatar" />
                <div className='flex flex-col mx-3'>
                  <h5 className='font-bold'>thomag herson</h5>
                  <p>Product desginer</p>
                </div>
              </div>

              {/* rating field */}
              <div className="flex gap-10 justify-center mx-2">
                <div className='flex gap-2 justify-center items-center mx-2'>
                <i class="fa-regular fa-message"></i>
                  <p>2.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-regular fa-star text-[#FFD43B]"></i>
                  <p>4.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-solid fa-eye"></i>
                  <p>6.4k</p>
                </div>
              </div>

              {/* follow button field */}
              <div className="flex gap-5 justify-center items-center mx-2">
                <button type="button" class="focus:outline-none text-white bg-blue-500 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
                <i class="fa-solid fa-link"></i>
              </div>
            </div>

            {/* second person */}
            <div className="flex justify-between items-center my-3 ">

              {/* name field */}
              <div className="flex gap-3 justify-between items-center mx-2">
                <i class="fa-solid fa-medal fa-xl" ></i>
                <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" alt="Rounded avatar" />
                <div className='flex flex-col mx-3'>
                  <h5 className='font-bold'>thomag herson</h5>
                  <p>Product desginer</p>
                </div>
              </div>

              {/* rating field */}
              <div className="flex gap-10 justify-center mx-2">
                <div className='flex gap-2 justify-center items-center mx-2'>
                <i class="fa-regular fa-message"></i>
                  <p>2.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-regular fa-star text-[#FFD43B]"></i>
                  <p>4.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-solid fa-eye"></i>
                  <p>6.4k</p>
                </div>
              </div>

              {/* follow button field */}
              <div className="flex gap-5 justify-center items-center mx-2">
                <button type="button" class="focus:outline-none text-white bg-blue-500 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
                <i class="fa-solid fa-link"></i>
              </div>
            </div>

            {/* third person */}
            <div className="flex justify-between items-center my-3 ">

              {/* name field */}
              <div className="flex gap-3 justify-between items-center mx-2">
                <i class="fa-solid fa-medal fa-xl" ></i>
                <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" alt="Rounded avatar" />
                <div className='flex flex-col mx-3'>
                  <h5 className='font-bold'>thomag herson</h5>
                  <p>Product desginer</p>
                </div>
              </div>

              {/* rating field */}
              <div className="flex gap-10 justify-center mx-2">
                <div className='flex gap-2 justify-center items-center mx-2'>
                <i class="fa-regular fa-message"></i>
                  <p>2.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-regular fa-star text-[#FFD43B]"></i>
                  <p>4.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-solid fa-eye"></i>
                  <p>6.4k</p>
                </div>
              </div>

              {/* follow button field */}
              <div className="flex gap-5 justify-center items-center mx-2">
                <button type="button" class="focus:outline-none text-white bg-blue-500 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
                <i class="fa-solid fa-link"></i>
              </div>
            </div>
            {/* fourth person */}
            <div className="flex justify-between items-center my-3 ">

              {/* name field */}
              <div className="flex gap-3 justify-between items-center mx-2">
                <i class="fa-solid fa-medal fa-xl" ></i>
                <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" alt="Rounded avatar" />
                <div className='flex flex-col mx-3'>
                  <h5 className='font-bold'>thomag herson</h5>
                  <p>Product desginer</p>
                </div>
              </div>

              {/* rating field */}
              <div className="flex gap-10 justify-center mx-2">
                <div className='flex gap-2 justify-center items-center mx-2'>
                <i class="fa-regular fa-message"></i>
                  <p>2.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-regular fa-star text-[#FFD43B]"></i>
                  <p>4.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-solid fa-eye"></i>
                  <p>6.4k</p>
                </div>
              </div>

              {/* follow button field */}
              <div className="flex gap-5 justify-center items-center mx-2">
                <button type="button" class="focus:outline-none text-white bg-blue-500 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
                <i class="fa-solid fa-link"></i>
              </div>
            </div>

            {/* fifth person */}
            <div className="flex justify-between items-center my-3 ">

              {/* name field */}
              <div className="flex gap-3 justify-between items-center mx-2">
                <i class="fa-solid fa-medal fa-xl" ></i>
                <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" alt="Rounded avatar" />
                <div className='flex flex-col mx-3'>
                  <h5 className='font-bold'>thomag herson</h5>
                  <p>Product desginer</p>
                </div>
              </div>

              {/* rating field */}
              <div className="flex gap-10 justify-center mx-2">
                <div className='flex gap-2 justify-center items-center mx-2'>
                <i class="fa-regular fa-message"></i>
                  <p>2.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-regular fa-star text-[#FFD43B]"></i>
                  <p>4.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-solid fa-eye"></i>
                  <p>6.4k</p>
                </div>
              </div>

              {/* follow button field */}
              <div className="flex gap-5 justify-center items-center mx-2">
                <button type="button" class="focus:outline-none text-white bg-blue-500 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
                <i class="fa-solid fa-link"></i>
              </div>
            </div>

            {/* sixth person */}
            <div className="flex justify-between items-center my-3 ">

              {/* name field */}
              <div className="flex gap-3 justify-between items-center mx-2">
                <i class="fa-solid fa-medal fa-xl" ></i>
                <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" alt="Rounded avatar" />
                <div className='flex flex-col mx-3'>
                  <h5 className='font-bold'>thomag herson</h5>
                  <p>Product desginer</p>
                </div>
              </div>

              {/* rating field */}
              <div className="flex gap-10 justify-center mx-2">
                <div className='flex gap-2 justify-center items-center mx-2'>
                <i class="fa-regular fa-message"></i>
                  <p>2.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-regular fa-star text-[#FFD43B]"></i>
                  <p>4.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-solid fa-eye"></i>
                  <p>6.4k</p>
                </div>
              </div>

              {/* follow button field */}
              <div className="flex gap-5 justify-center items-center mx-2">
                <button type="button" class="focus:outline-none text-white bg-blue-500 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
                <i class="fa-solid fa-link"></i>
              </div>
            </div>

            {/* seven person */}
            <div className="flex justify-between items-center my-3 ">

              {/* name field */}
              <div className="flex gap-3 justify-between items-center mx-2">
                <i class="fa-solid fa-medal fa-xl" ></i>
                <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" alt="Rounded avatar" />
                <div className='flex flex-col mx-3'>
                  <h5 className='font-bold'>thomag herson</h5>
                  <p>Product desginer</p>
                </div>
              </div>

              {/* rating field */}
              <div className="flex gap-10 justify-center mx-2">
                <div className='flex gap-2 justify-center items-center mx-2'>
                <i class="fa-regular fa-message"></i>
                  <p>2.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-regular fa-star text-[#FFD43B]"></i>
                  <p>4.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-solid fa-eye"></i>
                  <p>6.4k</p>
                </div>
              </div>

              {/* follow button field */}
              <div className="flex gap-5 justify-center items-center mx-2">
                <button type="button" class="focus:outline-none text-white bg-blue-500 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
                <i class="fa-solid fa-link"></i>
              </div>
            </div>
            
            {/* eight person */}
            <div className="flex justify-between items-center my-3 ">

              {/* name field */}
              <div className="flex gap-3 justify-between items-center mx-2">
                <i class="fa-solid fa-medal fa-xl" ></i>
                <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" alt="Rounded avatar" />
                <div className='flex flex-col mx-3'>
                  <h5 className='font-bold'>thomag herson</h5>
                  <p>Product desginer</p>
                </div>
              </div>

              {/* rating field */}
              <div className="flex gap-10 justify-center mx-2">
                <div className='flex gap-2 justify-center items-center mx-2'>
                <i class="fa-regular fa-message"></i>
                  <p>2.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-regular fa-star text-[#FFD43B]"></i>
                  <p>4.4k</p>
                </div>
                <div className='flex gap-2 justify-center items-center mx-2'>
                  <i class="fa-solid fa-eye"></i>
                  <p>6.4k</p>
                </div>
              </div>

              {/* follow button field */}
              <div className="flex gap-5 justify-center items-center mx-2">
                <button type="button" class="focus:outline-none text-white bg-blue-500 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
                <i class="fa-solid fa-link"></i>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LeaderBoard