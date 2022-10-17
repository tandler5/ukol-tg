import React, { useId, useState } from 'react';
import { IoCheckmarkCircleSharp, IoCloseCircleSharp } from 'react-icons/io5';
import profileImage from './../../images/2083_d00b341d7d.png';
function AccountSettings() {
  const firstname = useId();
  const lastname = useId();
  const email = useId();
  const jobTitle = useId();
  const [password, setPassword] = useState('');
  return (
    <div className='h-full w-full  font-bold text-2xl'>
      <h2>Account</h2>
      <div className='mt-[2%] h-full'>
        <p className='text-xl font-semibold text-slate-900'>Profile</p>
        <div className='w-1/1 h-[12%] flex flex-row'>
          <div className='w-1/2 h-full flex flex-col pt-5'>
            <label
              htmlFor={firstname}
              className='text-base font-semibold text-slate-700'
            >
              First Name
            </label>
            <input
              className='rounded w-[90%] border-2 h-[50%] border-slate-400 text-base font-semibold p-2 text-slate-800'
              type='text'
              id={firstname}
            />
          </div>
          <div className='w-1/2 h-full  flex flex-col pt-5'>
            <label
              htmlFor={lastname}
              className='text-base font-semibold text-slate-700'
            >
              Last Name
            </label>
            <input
              className='rounded w-[90%] border-2 h-[50%] border-slate-400 text-base font-semibold p-2 text-slate-800'
              type='text'
              id={lastname}
            />
          </div>
        </div>
        <div className='w-1/1 h-[12%] flex flex-row'>
          <div className='w-1/2 h-full flex flex-col pt-5'>
            <label
              htmlFor={email}
              className='text-base font-semibold text-slate-700'
            >
              E-mail
            </label>
            <input
              className='rounded w-[90%] border-2 h-[50%] border-slate-400 text-base font-semibold p-2 text-slate-800'
              type='email'
              id={email}
            />
          </div>
          <div className='w-1/2 h-full flex flex-col pt-5'>
            <label
              htmlFor={jobTitle}
              className='text-base font-semibold text-slate-700'
            >
              Job Title
            </label>
            <input
              className='rounded w-[90%] border-2 h-[50%] border-slate-400 text-base font-semibold p-2 text-slate-800'
              type='email'
              id={jobTitle}
            />
          </div>
        </div>
        <div className='w-1/1 h-[12%] flex flex-row'>
          <div className='w-1/2 h-full flex flex-col pt-5'>
            <p className='text-base font-semibold text-slate-700'>Photo</p>
            <div className='flex flex-row items-center'>
              <img
                src={profileImage}
                alt=''
                className='h-12 w-12 rounded-full'
              />
              <button className='border-slate-400 border-2 bg-white rounded text-base px-3 h-10 ml-5 text-slate-800'>
                Change
              </button>
              <button className=' rounded text-base px-3 h-10 ml-5 text-slate-800'>
                Remove
              </button>
            </div>
          </div>
        </div>
        <p className='text-xl font-semibold text-slate-900 mt-7'>Password</p>
        <div className='w-1/1 h-[12%] flex flex-row'>
          <div className='w-1/2 h-full flex flex-col pt-5'>
            <label
              htmlFor={firstname}
              className='text-base font-semibold text-slate-700'
            >
              Current password
            </label>
            <input
              className='rounded w-[90%] border-2 h-[50%] border-slate-400 text-base font-semibold p-2 text-slate-800'
              type='password'
              id={firstname}
            />
          </div>
          <div className='w-1/2 h-full  flex flex-col pt-5'>
            <label
              htmlFor={lastname}
              className='text-base font-semibold text-slate-700'
            >
              New Password
            </label>
            <input
              className='rounded w-[90%] border-2 h-[50%] border-slate-400 text-base font-semibold p-2 text-slate-800'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id={lastname}
            />
          </div>
        </div>
        <div className='w-1/1 h-[12%] flex flex-row'>
          <div className='w-1/2 h-full flex flex-col pt-5'></div>
          {password.length > 0 && (
            <div className='w-1/2 h-full  flex flex-col'>
              <div className='flex flex-row'>
                {password.length > 7 ? (
                  <IoCheckmarkCircleSharp size={22} color='#04e762' />
                ) : (
                  <IoCloseCircleSharp size={22} color='#d90429' />
                )}
                <p className='text-base font-semibold text-slate-700 ml-[1%]'>
                  at least 8 characters long
                </p>
              </div>
              <div className='flex flex-row'>
                {password
                  .split('')
                  .some((item) => item >= 'a' && item <= 'z') ? (
                  <IoCheckmarkCircleSharp size={22} color='#04e762' />
                ) : (
                  <IoCloseCircleSharp size={22} color='#d90429' />
                )}
                <p className='text-base font-semibold text-slate-700 ml-[1%]'>
                  at least 1 lower-case character
                </p>
              </div>
              <div className='flex flex-row'>
                {password
                  .split('')
                  .some((item) => item >= 'A' && item <= 'Z') ? (
                  <IoCheckmarkCircleSharp size={22} color='#04e762' />
                ) : (
                  <IoCloseCircleSharp size={22} color='#d90429' />
                )}
                <p className='text-base font-semibold text-slate-700 ml-[1%]'>
                  at least 1 Upper-case character
                </p>
              </div>
              <div className='flex flex-row'>
                {password
                  .split('')
                  .some((item) => item >= '0' && item <= '9') ? (
                  <IoCheckmarkCircleSharp size={22} color='#04e762' />
                ) : (
                  <IoCloseCircleSharp size={22} color='#d90429' />
                )}
                <p className='text-base font-semibold text-slate-700 ml-[1%]'>
                  at least 1 number
                </p>
              </div>
            </div>
          )}
        </div>
        <div className='w-1/1 h-[12%] flex flex-row pt-10'>
          <div className='w-1/2 h-full flex flex-col pt-5'></div>
          <div className='w-1/2 h-full  flex flex-row justify-evenly'>
            <button className='bg-[#e8f0fe] w-[40%] rounded h-10 border-2 text-lg text-slate-700 border-slate-400'>
              Change Password
            </button>
            <button className='bg-[#38b200] w-[40%] rounded h-10 border text-lg text-white border-[#3ec600]'>
              Safe Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
