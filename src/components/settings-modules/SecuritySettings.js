import React from 'react';
import { TbLogout } from 'react-icons/tb';
function SecuritySettings() {
  return (
    <div className='h-full w-full  font-bold text-2xl'>
      <h2>Security</h2>
      <div className='mt-[2%] h-full w-full'>
        <p className='text-xl font-semibold text-slate-900'>
          Recently Used Device
        </p>
        <div className='w-full h-max flex flex-col mt-5'>
          <div className='border-2 border-slate-400 rounded'>
            <div className='h-max bg-slate-400 w-full pl-2'>
              <p className='text-xl font-bold'>Windows 10</p>
              <p className='text-sm font-semibold text-slate-900'>Right Now</p>
            </div>
            <div className='flex flex-row h-full '>
              <div className='w-1/3 bg-slate-100 p-2'>
                <p className='text-xl font-semibold'>Browsers:</p>
              </div>
              <div className='w-2/3 bg-slate-300 p-2'>
                <div className=' border-b-2 border-slate-600'>
                  <p className='text-xl font-bold'>Chrome 106.0</p>
                  <div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold'>
                        93.99.189.30 - Right now
                      </p>
                    </div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold'>93.99.189.30</p>
                      <TbLogout
                        className='ml-2 cursor-pointer'
                        title='Log Out'
                      />
                    </div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold text-slate-500'>
                        93.99.189.30 - 05.10.2022 17:19
                      </p>
                    </div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold text-slate-500'>
                        93.99.189.30 - 05.10.2022 17:19
                      </p>
                    </div>
                  </div>
                </div>
                <div className=' border-b-2 border-slate-600'>
                  <p className='text-xl font-bold'>Chrome 105.0</p>
                  <div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold'>93.99.189.30</p>
                      <TbLogout
                        className='ml-2 cursor-pointer'
                        title='Log Out'
                      />
                    </div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold'>93.99.189.30</p>
                      <TbLogout
                        className='ml-2 cursor-pointer'
                        title='Log Out'
                      />
                    </div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold text-slate-500'>
                        93.99.189.30 - 05.10.2022 17:19
                      </p>
                    </div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold text-slate-500'>
                        93.99.189.30 - 05.10.2022 17:19
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='border-2 border-slate-400 rounded mt-2'>
            <div className='h-max bg-slate-400 w-full pl-2'>
              <p className='text-xl font-bold'>Mac 10.15</p>
              <p className='text-sm font-semibold text-slate-900'>
                05.10.2022 16:18
              </p>
            </div>
            <div className='flex flex-row h-full '>
              <div className='w-1/3 bg-slate-100 p-2'>
                <p className='text-xl font-semibold'>Browsers:</p>
              </div>
              <div className='w-2/3 bg-slate-300 p-2'>
                <div className=' border-b-2 border-slate-600'>
                  <p className='text-xl font-bold'>Chrome 106.0</p>
                  <div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold'>
                        93.99.189.30 - 05.10.2022 17:19
                      </p>
                      <TbLogout
                        className='ml-2 cursor-pointer'
                        title='Log Out'
                      />
                    </div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold text-slate-500'>
                        93.99.189.30 - 05.10.2022 17:19
                      </p>
                    </div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold text-slate-500'>
                        93.99.189.30 - 05.10.2022 17:19
                      </p>
                    </div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold text-slate-500'>
                        93.99.189.30 - 05.10.2022 17:19
                      </p>
                    </div>
                  </div>
                </div>
                <div className=' border-b-2 border-slate-600'>
                  <p className='text-xl font-bold'>Safari 16.0</p>
                  <div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold text-slate-500'>
                        93.99.189.30 - 05.10.2022 17:19
                      </p>
                    </div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold text-slate-500'>
                        93.99.189.30 - 05.10.2022 17:19
                      </p>
                    </div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold text-slate-500'>
                        93.99.189.30 - 05.10.2022 17:19
                      </p>
                    </div>
                    <div className='flex flex-row'>
                      <p className='text-base font-semibold text-slate-500'>
                        93.99.189.30 - 05.10.2022 17:19
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecuritySettings;
