import { MdEdit } from "react-icons/md";
// import {  useSelector } from 'react-redux';

const Profile = () => {
  // const userInfo = useSelector((state) => state.user.info);
  return (
    <>

     <div className="w-screen h-screen">
     <div className={` w-full min-h-full box px-5  py-2`}>
        <div className="flex text-center"> 
          <img src="../../public/logo.png" width={50} alt="" />
          <h1 className="text-3xl font-extrabold py-0 text-center px-4 ">your profile</h1>
        </div>
        <div className="w-[40%] my-5   h-36 flex">
          <div className="h-full columns-auto">

            <div className="w-52 rounded-xl overflow-hidden h-full bg-slate-950"><img className="w-full h-full object-cover" src="../../public/img/image_2023-12-28_21-50-20.png" alt="" /></div>
          </div>
          <div className=" mx-3 w-64 ">
           <div className="flex items-center gap-5">
           <h1 className="text-2xl font-bold">username </h1>
            <span className="mt-2"><MdEdit/></span>
           </div>
            <div> <h6 className="font-bold text-xs mb-5">[Designation]</h6></div>
            <div className="flex gap-9 md-3">
              <h4 className="opacity-70">Username</h4><p>abcd1234</p>
            </div>
            <div className="flex gap-9 md-3">
              <h4 className="opacity-70">Country</h4><p>India</p>
            </div>
            <div className="flex gap-9 md-3">
              <h4 className="opacity-70">Website</h4><a href="https://godcrafts.fun/">https://godcrafts.fun/</a>
            </div>
          </div>
        </div>
        <div className="w-full min-h-44 py-2">
          <div className="flex items-center gap-2 ">
            <h1 className="text-2xl font-bold">SKILLS </h1>
            <samp ><MdEdit/></samp>
          </div>
          <div className="xl:w-6/12 lg:w-full px-5 py-1 flex xl:flex-wrap xl:h-32 md:h-18 gap-3 mb-4 overflow-auto">
              <button className={`border-solid px-10 py-2 border-b-slate-800 border-l-slate-500 border-t-blue-500 border-r-blue-400 rounded-3xl border-2`}> SKILLS1</button>
              <button className={`border-solid px-10 py-2 border-b-slate-800 border-l-slate-500 border-t-blue-500 border-r-blue-400 rounded-3xl border-2`}> SKILLS2</button>
              <button className={`border-solid px-10 py-2 border-b-slate-800 border-l-slate-500 border-t-blue-500 border-r-blue-400 rounded-3xl border-2`}> SKILLS3</button>
              <button className={`border-solid px-10 py-2 border-b-slate-800 border-l-slate-500 border-t-blue-500 border-r-blue-400 rounded-3xl border-2`}> SKILLS4</button>
              <button className={`border-solid px-10 py-2 border-b-slate-800 border-l-slate-500 border-t-blue-500 border-r-blue-400 rounded-3xl border-2`}> SKILLS5</button>
              <button className={`border-solid px-10 py-2 border-b-slate-800 border-l-slate-500 border-t-blue-500 border-r-blue-400 rounded-3xl border-2`}> SKILLS6</button>
              <button className={`border-solid px-10 py-2 border-b-slate-800 border-l-slate-500 border-t-blue-500 border-r-blue-400 rounded-3xl border-2`}> SKILLS7</button> 
              <button className={`border-solid px-10 py-2 border-b-slate-800 border-l-slate-500 border-t-blue-500 border-r-blue-400 rounded-3xl border-2`}> SKILLS8</button>
              <button className={`border-solid px-10 py-2 border-b-slate-800 border-l-slate-500 border-t-blue-500 border-r-blue-400 rounded-3xl border-2`}> SKILLS9</button>
              <button className={`border-solid px-10 py-2 border-b-slate-800 border-l-slate-500 border-t-blue-500 border-r-blue-400 rounded-3xl border-2`}> SKILLS10</button>
              <button className={`border-solid px-10 py-2 border-b-slate-800 border-l-slate-500 border-t-blue-500 border-r-blue-400 rounded-3xl border-2`}> SKILLS11</button>
              <button className={`border-solid px-10 py-2 border-b-slate-800 border-l-slate-500 border-t-blue-500 border-r-blue-400 rounded-3xl border-2`}> SKILLS12</button>
              <button className={`border-solid px-10 py-2 border-b-slate-800 border-l-slate-500 border-t-blue-500 border-r-blue-400 rounded-3xl border-2`}> SKILLS13</button>
              <button className={`border-solid px-10 py-2 border-b-slate-800 border-l-slate-500 border-t-blue-500 border-r-blue-400 rounded-3xl border-2`}> SKILLS14</button>
          </div>
        </div>
      <div className="flex flex-grow items-center justify-center self-stretch overflow-auto" >
        <div className="flex flex-grow flex-col items-start justify-between self-stretch overflow-auto" >
          <div className={`flex h-6 w-56 items-center justify-center gap-x-2 leading-none text-black`} >
            <div className="flex w-48  items-center self-stretch">
              Freely about yourself
            </div>
            <MdEdit />
          </div>
          <div className="flex items-center self-stretch w-full py-1 mb-2 text-zinc-400 overflow-auto" >
            Write a few lines about yourself and your character. Tell us about your achievements, priorities and life experience. This way your profile will become more interesting and attract more attention.
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-16">
        <button className="px-10 py-3 bg-sky-400 text-white rounded-full">Save & Continue</button>
      </div>
    </div>
      <div></div>
     </div>
    
    </>
  )
}

export default Profile