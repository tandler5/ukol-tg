import React, { useState, useId } from 'react';
import Britain from './../../images/britain.png';
import Czech from './../../images/czech.webp';
import moment from 'moment';
import Option from './Options';
import { BsQuestionCircleFill } from 'react-icons/bs';
function ApplicationSettings() {
  const [language, setLanguage] = useState(0);
  const [dateFormat, setDateFormat] = useState(0);
  const [shortDateFormat, setShortDateFormat] = useState(0);
  const [timeFormat, setTimeFormat] = useState(0);
  const [page, setPage] = useState(0);
  const timezone = useId();
  const [checkbox, setCheckbox] = useState(false);
  return (
    <div className='h-full w-full font-bold text-2xl mb-20'>
      <h2>Application</h2>
      <div className='mt-[2%] h-full'>
        <div className='flex flex-row h-max'>
          <div className='w-1/2 h-max flex-auto flex flex-col'>
            <div className='h-1/3'>
              <p className='text-xl font-semibold text-slate-900'>Language</p>
              <p className='text-base font-semibold text-slate-700'>
                Displayed language
              </p>
            </div>
            <div className='w-full basis-1/3	flex-none h-2/3 flex flex-row pt-5'>
              <div
                className={`w-[32%]  flex h-2/3 flex-row justify-around items-center ${
                  language === 0 ? 'bg-slate-300' : 'bg-slate-100'
                } border-2 border-slate-400 rounded h-[80%] py-3 px-1 select-none	`}
                onClick={() => setLanguage(0)}
              >
                <img src={Britain} alt='England flag' className='h-7 w-auto' />
                <p className='text-xl font-semibold text-slate-700'>English</p>
              </div>
              <div
                className={`w-[32%] flex flex-row justify-around items-center ${
                  language === 1 ? 'bg-slate-300' : 'bg-slate-100'
                } border-2 border-slate-400 rounded h-[80%] py-3 px-1 ml-2 select-none object-contain	`}
                onClick={() => setLanguage(1)}
              >
                <img
                  src={Czech}
                  alt='Czech Republic flag'
                  className='h-7 w-auto'
                />
                <p className='text-xl font-semibold text-slate-700'>Czech</p>
              </div>
              <div
                className={`w-[32%]  flex-1 h-2/3 flex-row justify-around items-center ${
                  language === 0 ? 'bg-slate-300' : 'bg-slate-100'
                } border-2 border-slate-400 rounded h-[80%] py-3 ml-2 px-1 select-none invisible	`}
              ></div>
            </div>
          </div>
          <div className='w-1/2 h-[12%] flex-auto flex flex-col '>
            <div className='h-max'>
              <p className='text-xl font-semibold text-slate-900'>Page</p>
              <p className='text-base font-semibold text-slate-700'>
                Page after login
              </p>
            </div>
            <div className='w-full h-max flex flex-row pt-5 justify-evenly'>
              <div
                className={`w-[32%]  flex flex-row justify-around items-center ${
                  page === 0 ? 'bg-slate-300' : 'bg-slate-100'
                } border-2 border-slate-400 rounded h-max py-3 px-1 select-none	`}
                onClick={() => setPage(0)}
              >
                <p className='text-xl font-semibold text-slate-700'>
                  My Dashboard
                </p>
              </div>
              <div
                className={`w-[32%]  flex flex-row justify-around items-center ${
                  page === 1 ? 'bg-slate-300' : 'bg-slate-100'
                } border-2 border-slate-400 rounded h-full py-3 px-1 select-none	`}
                onClick={() => setPage(1)}
              >
                <p className='text-xl font-semibold text-slate-700'>
                  Documents list
                </p>
              </div>
              <div
                className={`w-[32%] flex flex-row justify-around items-center ${
                  page === 2 ? 'bg-slate-300' : 'bg-slate-100'
                } border-2 border-slate-400 rounded py-3 px-1 select-none	`}
                onClick={() => setPage(2)}
              >
                <p className='text-xl font-semibold text-slate-700'>Document</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full h-max flex flex-col mt-2'>
          <div className='w-full'>
            <p className='text-xl font-semibold text-slate-900 mt-3'>Date</p>
          </div>
          <div className='w-1/2'>
            <p className='text-base font-semibold text-slate-700'>Format</p>
          </div>
          <div className='flex flex-row h-max mt-5'>
            <div
              className={`w-[16%] h-max flex flex-row justify-around items-center ${
                dateFormat === 0 ? 'bg-slate-300' : 'bg-slate-100'
              } border-2 border-slate-400 rounded h-[80%] py-3 px-1 select-none	`}
              onClick={() => setDateFormat(0)}
            >
              <p className='text-xl font-semibold text-slate-700'>
                {moment(new Date()).format('MM/DD/YYYY')}
              </p>
            </div>
            <div
              className={`w-[16%] h-max flex flex-row justify-around items-center ${
                dateFormat === 1 ? 'bg-slate-300' : 'bg-slate-100'
              } border-2 border-slate-400 rounded h-[80%] py-3 px-1 ml-2 select-none	`}
              onClick={() => setDateFormat(1)}
            >
              <p className='text-xl font-semibold text-slate-700'>
                {moment(new Date()).format('MM/DD/YY')}
              </p>
            </div>
            <div
              className={`w-[16%] h-max flex flex-row justify-around items-center ${
                dateFormat === 2 ? 'bg-slate-300' : 'bg-slate-100'
              } border-2 border-slate-400 rounded h-[80%] py-3 px-1 ml-2 select-none	`}
              onClick={() => setDateFormat(2)}
            >
              <p className='text-xl font-semibold text-slate-700 text-center'>
                {moment(new Date()).format('DD.MM.YYYY')}
              </p>
            </div>
            <div
              className={`w-[16%] h-max flex flex-row justify-around items-center ${
                dateFormat === 3 ? 'bg-slate-300' : 'bg-slate-100'
              } border-2 border-slate-400 rounded h-[80%] py-3 px-1 ml-2 select-none	`}
              onClick={() => setDateFormat(3)}
            >
              <p className='text-xl font-semibold text-slate-700'>
                {moment(new Date()).format('DD/MM/YYYY')}
              </p>
            </div>
            <div
              className={`w-[16%] h-max flex flex-row justify-around items-center ${
                dateFormat === 4 ? 'bg-slate-300' : 'bg-slate-100'
              } border-2 border-slate-400 rounded h-[80%] py-3 px-1 ml-2 select-none	`}
              onClick={() => setDateFormat(4)}
            >
              <p className='text-xl font-semibold text-slate-700'>
                {moment(new Date()).format('YYYY-MM-DD')}
              </p>
            </div>
          </div>
          <div className='w-1/2 mt-5'>
            <p className='text-base font-semibold text-slate-700'>
              Short Format
            </p>
          </div>
          <div className='flex flex-row h-max'>
            <div
              className={`w-[16%] h-max flex flex-row justify-around items-center ${
                shortDateFormat === 0 ? 'bg-slate-300' : 'bg-slate-100'
              } border-2 border-slate-400 rounded h-[80%] py-3 px-1 select-none	`}
              onClick={() => setShortDateFormat(0)}
            >
              <p className='text-xl font-semibold text-slate-700'>
                {moment(new Date()).format('MMM DD')}
              </p>
            </div>
            <div
              className={`w-[16%] h-max flex flex-row justify-around items-center ${
                shortDateFormat === 1 ? 'bg-slate-300' : 'bg-slate-100'
              } border-2 border-slate-400 rounded h-[80%] py-3 px-1 ml-2 select-none	`}
              onClick={() => setShortDateFormat(1)}
            >
              <p className='text-xl font-semibold text-slate-700'>
                {moment(new Date()).format('DD.MM.')}
              </p>
            </div>
          </div>
        </div>
        <div className='w-1/1 h-max'>
          <p className='text-xl font-semibold text-slate-900 mt-6'>Time</p>
          <div className='flex flex-row'>
            <div className='w-1/2'>
              <p className='text-base font-semibold text-slate-700'>Format</p>
            </div>
            <div className='w-1/2'>
              <p className='text-base font-semibold text-slate-700'>Zone</p>
            </div>
          </div>
        </div>
        <div className='w-1/1 h-max flex flex-row'>
          <div className='w-1/2 flex flex-row'>
            <div
              className={`w-[32%] h-max flex flex-row justify-around items-center ${
                timeFormat === 0 ? 'bg-slate-300' : 'bg-slate-100'
              } border-2 border-slate-400 rounded h-full py-3 px-1 select-none	`}
              onClick={() => setTimeFormat(0)}
            >
              <p className='text-xl font-semibold text-slate-700'>
                12H (AM/PM)
              </p>
            </div>
            <div
              className={`w-[32%] h-max flex flex-row justify-around items-center ${
                timeFormat === 1 ? 'bg-slate-300' : 'bg-slate-100'
              } border-2 border-slate-400 rounded h-full py-3 px-1 ml-2 select-none	`}
              onClick={() => setTimeFormat(1)}
            >
              <p className='text-xl font-semibold text-slate-700'>24H</p>
            </div>
          </div>
          <div className='w-1/2 h-[80%] flex flex-col pt-5'>
            <Option checkbox={checkbox} />
            <div className='flex flex-row'>
              <input
                type='checkbox'
                name={timezone}
                id={timezone}
                onChange={() => setCheckbox(!checkbox)}
              />
              <label
                htmlFor={timezone}
                className='text-sm font-base text-slate-700 ml-2'
              >
                Set Timezone Automatically
              </label>
              <div className='group ml-2'>
                <BsQuestionCircleFill color={'rgb(148 163 184)'} />
                <span className='invisible mt-2 group-hover:visible absolute text-sm font-base w-[18%] text-slate-900 bg-slate-300 rounded p-2'>
                  The timezone settings in your profile will be regularly
                  checked. If incorrect, it will be automatically updated.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col h-max mt-5'>
          <div className='w-full '>
            <div className='w-full flex flex-row '>
              <div className='w-1/2'>
                <p className='text-xl font-semibold text-slate-900'>Paper</p>
              </div>
              <div className='w-1/2'>
                <p className='text-xl font-semibold text-slate-900'>Number</p>
              </div>
            </div>
            <div className='flex flex-row w-full'>
              <div className='w-1/2'>
                <p className='text-base font-semibold text-slate-700'>Format</p>
              </div>
              <div className='w-1/2'>
                <p className='text-base font-semibold text-slate-700'>Format</p>
              </div>
            </div>
            <div className='h-max w-full flex flex-row'>
              <div className='w-1/2'>
                <select
                  defaultValue='1'
                  className='rounded bg border-slate-400 border-2 h-full bg-slate-300 text-slate-700 text-base w-[calc(64%+0.5rem)]'
                >
                  <option value='4'>A5</option>
                  <option value='1'>A4</option>
                  <option value='3'>A3</option>
                  <option value='2'>Letter</option>
                  <option value='5'>Legal</option>
                  <option value='6'>Tabloid</option>
                </select>
              </div>
              <div className='w-1/2'>
                <select
                  defaultValue='1'
                  className='rounded bg border-slate-400 border-2 h-full bg-slate-300 text-slate-700 text-base w-[calc(64%+0.3rem)]'
                >
                  <option value='1'>1 000 000,00</option>
                  <option value='2'>1,000,000.00</option>
                  <option value='3'>1.000.000,00</option>
                </select>
              </div>
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
      </div>
    </div>
  );
}

export default ApplicationSettings;
