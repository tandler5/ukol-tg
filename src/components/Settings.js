import React, { useState } from 'react';
import {
  IoSettingsOutline,
  IoNotificationsOutline,
  IoHeartOutline,
  IoKeyOutline,
  IoGridOutline,
} from 'react-icons/io5';
import { TbLayoutGridAdd } from 'react-icons/tb';
import AccountSettings from './settings-modules/AccountSettings';
import ApplicationSettings from './settings-modules/ApplicationSettings';
import DocumentSubscriptionsSettings from './settings-modules/DocumentSubscriptionsSettings';
import IntegrationsSettings from './settings-modules/IntegrationsSettings';
import NotificationsSettings from './settings-modules/NotificationsSettings';
import SecuritySettings from './settings-modules/SecuritySettings';

function Settings() {
  const [contentId, setContentId] = useState(0);
  const getContent = (contentId) => {
    switch (contentId) {
      case 1:
        return <ApplicationSettings />;
      case 2:
        return <DocumentSubscriptionsSettings />;
      case 3:
        return <NotificationsSettings />;
      case 4:
        return <IntegrationsSettings />;
      case 5:
        return <SecuritySettings />;
      default:
        return <AccountSettings />;
    }
  };
  return (
    <div className=' flex flex-row h-full w-1/1'>
      <div className='flex-auto w-1/4 h-full bg-white border-r-2 relative'>
        <div className='bg-white h-[7%] flex items-center px-3 text-lg font-semibold border-b-2'>
          <p>Settings</p>
        </div>
        <div
          className={`h-[10%] ${
            contentId === 0 ? 'bg-[#f7faff]' : 'bg-white'
          } border-b-2 px-3 flex flex-row cursor-pointer`}
          onClick={() => setContentId(0)}
        >
          <div className='h-full w-[8%] pt-3'>
            <IoSettingsOutline size={22} color='rgb(51 65 85)' />
          </div>
          <div className='h-full flex flex-col justify-evenly py-3 ml-[1%]'>
            <p className='text-base font-semibold text-slate-800'>Account</p>
            <p className='text-[1.3vh] font-normal text-slate-500'>
              Change your name, job title, profile picture or password.<br></br>
              Setup 2-step login authentication.
            </p>
          </div>
        </div>
        <div
          className={`h-[10%] ${
            contentId === 1 ? 'bg-[#f7faff]' : 'bg-white'
          } border-b-2 px-3 flex flex-row cursor-pointer`}
          onClick={() => setContentId(1)}
        >
          <div className='h-full w-[8%] pt-3'>
            <IoGridOutline size={22} color='rgb(51 65 85)' />
          </div>
          <div className='h-full flex flex-col justify-evenly py-3 ml-[1%]'>
            <p className='text-base font-semibold text-slate-800'>
              Application
            </p>
            <p className='text-[1.3vh] font-normal text-slate-500'>
              Change the app language and basic app settings.<br></br> Set the
              date and time formatting.
            </p>
          </div>
        </div>
        <div
          className={`h-[10%] ${
            contentId === 2 ? 'bg-[#f7faff]' : 'bg-white'
          } border-b-2 px-3 flex flex-row cursor-pointer`}
          onClick={() => setContentId(2)}
        >
          <div className='h-full w-[8%] pt-3'>
            <IoHeartOutline size={22} color='rgb(51 65 85)' />
          </div>
          <div className='h-full flex flex-col justify-evenly py-3 ml-[1%]'>
            <p className='text-base font-semibold text-slate-800'>
              Document Subscriptions
            </p>
            <p className='text-[1.3vh] font-normal text-slate-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
              Phasellus vel pellentesque enim. Mauris.
            </p>
          </div>
        </div>
        <div
          className={`h-[10%] ${
            contentId === 3 ? 'bg-[#f7faff]' : 'bg-white'
          } border-b-2 px-3 flex flex-row cursor-pointer`}
          onClick={() => setContentId(3)}
        >
          <div className='h-full w-[8%] pt-3'>
            <IoNotificationsOutline size={22} color='rgb(51 65 85)' />
          </div>
          <div className='h-full flex flex-col justify-evenly py-3 ml-[1%]'>
            <p className='text-base font-semibold text-slate-800'>
              Notifications
            </p>
            <p className='text-[1.3vh] font-normal text-slate-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
              Phasellus vel pellentesque enim. Mauris.
            </p>
          </div>
        </div>
        <div
          className={`h-[10%] ${
            contentId === 4 ? 'bg-[#f7faff]' : 'bg-white'
          } border-b-2 px-3 flex flex-row cursor-pointer`}
          onClick={() => setContentId(4)}
        >
          <div className='h-full w-[8%] pt-3'>
            <TbLayoutGridAdd size={22} color='rgb(51 65 85)' />
          </div>
          <div className='h-full flex flex-col justify-evenly'>
            <p className='text-base font-semibold text-slate-800'>
              Integrations
            </p>
            <p className='text-[1.3vh] font-normal text-slate-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
              Phasellus vel pellentesque enim. Mauris.
            </p>
          </div>
        </div>
        <div
          className={`h-[10%] ${
            contentId === 5 ? 'bg-[#f7faff]' : 'bg-white'
          } border-b-2 px-3 flex flex-row cursor-pointer`}
          onClick={() => setContentId(5)}
        >
          <div className='h-full w-[8%] pt-3'>
            <IoKeyOutline size={22} color='rgb(51 65 85)' />
          </div>
          <div className='h-full flex flex-col justify-evenly'>
            <p className='text-base font-semibold text-slate-800'>Security</p>
            <p className='text-[1.3vh] font-normal text-slate-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
              Phasellus vel pellentesque enim. Mauris.
            </p>
          </div>
        </div>
      </div>
      <div className='flex-auto w-3/4 h-full bg-[#f8fafc]'>
        <div className='h-full px-[8%] py-5 overflow-scroll'>
          {getContent(contentId)}
        </div>
      </div>
    </div>
  );
}

export default Settings;
