import React, { useState, useRef } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { RiCheckboxCircleFill } from 'react-icons/ri';
function IntegrationsSettings() {
  const [accounts, setAccoutns] = useState([]);
  const inputRef = useRef(null);
  const addAccount = (account) => {
    setAccoutns([...accounts, account]);
  };
  const removeAccount = (account) => {
    setAccoutns(
      accounts.filter((item, id) => id !== accounts.indexOf(account))
    );
  };
  return (
    <div className='h-full w-full font-bold text-2xl'>
      Integrations
      <div className='mt-[2%] h-full w-full '>
        <p className='text-lg font-semibold text-slate-900'>
          Use this feature to link your other TeamGuru instances accounts to
          this Primary account.<br></br> Once setup you will be able to switch
          between instances easily
        </p>
        <p className='text-xl text-left text-slate-600 my-5'>Add Account</p>
        <div className='h-full flex flex-col justify-start overflow-y-scroll pb-48'>
          <div className='flex flex-col justify-evenly mt-3'>
            {accounts.map((item) => {
              return (
                <div
                  onClick={() => removeAccount(item)}
                  className='group flex flex-row justify-start px-5 rounded items-center w-full mb-3 border-8 h-20 cursor-pointer border-slate-300 hover:border-dashed hover:border-red-600'
                >
                  <RiCheckboxCircleFill className=' text-[#70e000] group-hover:text-red-500 bg-slate-100 rounded-full text-2xl w-30' />

                  <p className='text-xl ml-3 text-slate-400 font-bold text-center group-hover:text-slate-600'>
                    {item}
                  </p>
                </div>
              );
            })}
            <div
              className='flex flex-row justify-start px-5 rounded items-center w-full
               border-dashed border-8 h-20 cursor-pointer border-slate-300 hover:border-[#70e000]'
            >
              <AiFillPlusCircle
                onClick={() => addAccount(inputRef.current.value)}
                className=' text-slate-800 bg-slate-100 rounded-full text-5xl '
              />

              <input
                ref={inputRef}
                placeholder='Pairing code'
                className='text-lg ml-3 pl-2 text-slate-400 font-bold text-left border-slate-300 border-2'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegrationsSettings;
