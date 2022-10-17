import React, { useState, useId } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { RiCheckboxCircleFill } from 'react-icons/ri';
function NotificationsSettings() {
  const [notifications, setNotifications] = useState([]);
  const [days, setDays] = useState([]);
  const [weekDays, setWeekDays] = useState([]);
  const [monthly, setMonthly] = useState(true);
  const [annually, setAnnually] = useState(true);
  const [action, setAction] = useState(false);
  const monthdaylabel = useId();
  const annualdaylabel = useId();
  const weeklabel = useId();
  const monthlabel = useId();
  const annuallabel = useId();
  const addNotification = (documentname) => {
    notifications.some((item) => item === documentname)
      ? setNotifications(notifications.filter((item) => item !== documentname))
      : setNotifications([...notifications, documentname]);
  };
  const addDays = (dayname) => {
    days.some((item) => item === dayname)
      ? setDays(days.filter((item) => item !== dayname))
      : setDays([...days, dayname]);
  };
  const addWeekDays = (weekname) => {
    weekDays.some((item) => item === weekname)
      ? setWeekDays(weekDays.filter((item) => item !== weekname))
      : setWeekDays([...weekDays, weekname]);
  };
  return (
    <div className='h-full w-full  font-bold text-2xl'>
      <h2>Notifications</h2>
      <div className='mt-[2%] h-full'>
        <p className='text-xl font-semibold text-slate-900'>
          Email Notifications
        </p>
        <div className='w-1/1 h-[10%] flex flex-row'>
          <div className='w-1/2 flex flex-col pt-5 h-full'>
            <label className='text-base font-semibold text-slate-700'>
              Number of business days before task's end date
            </label>
            <input
              min={0}
              className='rounded w-[90%] border-2 h-full border-slate-400 text-base font-semibold p-2 text-slate-800'
              type='number'
            />
          </div>
          <div className='w-1/2 flex flex-col pt-5 h-full'>
            <label className='text-base font-semibold text-slate-700'>
              New action email notification
            </label>

            <input
              type='checkbox'
              checked={action}
              className='h-10 w-10'
              onChange={() => setAction(!action)}
            />
          </div>
        </div>
        <p className='text-xl font-semibold text-slate-900 my-10'>
          Actions Summary
        </p>
        <div className='flex flex-row justify-evenly mt-5'>
          <div
            onClick={
              notifications.some((item) => item === 'Daily')
                ? null
                : () => addNotification('Daily')
            }
            className='group flex flex-col relative justify-evenly rounded items-center w-[23%] border-dashed border-8 h-64 cursor-pointer border-slate-300 hover:border-solid hover:border-slate-600'
          >
            {notifications.some((item) => item === 'Daily') ? (
              <RiCheckboxCircleFill className=' text-[#70e000] absolute bottom-[90%] left-[80%] bg-white rounded-full text-6xl' />
            ) : null}

            {notifications.some((item) => item === 'Daily') ? (
              <div className='flex flex-col justify-evenly h-full w-full'>
                {notifications.some((item) => item === 'Daily') ? (
                  <p className='text-xl text-slate-400 font-bold text-center group-hover:text-slate-600'>
                    Daily
                  </p>
                ) : null}

                <div className='flex flex-row justify-evenly items-center h-[20%]'>
                  <div
                    onClick={() => addDays('Mon')}
                    className={`h-max w-[22%] border-2 rounded ${
                      days.some((item) => item === 'Mon')
                        ? 'bg-[#70e000] border-[#70e000]'
                        : null
                    } text-base flex justify-center border-slate-300`}
                  >
                    Mon
                  </div>
                  <div
                    onClick={() => addDays('Tue')}
                    className={`h-max w-[22%] border-2 rounded ${
                      days.some((item) => item === 'Tue')
                        ? 'bg-[#70e000] border-[#70e000]'
                        : null
                    } text-base flex justify-center border-slate-300`}
                  >
                    Tue
                  </div>
                  <div
                    onClick={() => addDays('Wed')}
                    className={`h-max w-[22%] border-2 rounded ${
                      days.some((item) => item === 'Wed')
                        ? 'bg-[#70e000] border-[#70e000]'
                        : null
                    } text-base flex justify-center border-slate-300`}
                  >
                    Wed
                  </div>
                </div>
                <div className='flex flex-row justify-evenly items-start h-[20%]'>
                  <div
                    onClick={() => addDays('Thu')}
                    className={`h-max w-[22%] border-2 rounded ${
                      days.some((item) => item === 'Thu')
                        ? 'bg-[#70e000] border-[#70e000]'
                        : null
                    } text-base flex justify-center border-slate-300`}
                  >
                    Thu
                  </div>
                  <div
                    onClick={() => addDays('Fri')}
                    className={`h-max w-[22%] border-2 rounded ${
                      days.some((item) => item === 'Fri')
                        ? 'bg-[#70e000] border-[#70e000]'
                        : null
                    } text-base flex justify-center border-slate-300`}
                  >
                    Fri
                  </div>
                  <div
                    onClick={() => addDays('Sat')}
                    className={`h-max w-[22%] border-2 rounded ${
                      days.some((item) => item === 'Sat')
                        ? 'bg-[#70e000] border-[#70e000]'
                        : null
                    } text-base flex justify-center border-slate-300`}
                  >
                    Sat
                  </div>
                </div>
                <div className='flex flex-row justify-evenly items-start h-[20%] w-full'>
                  <div
                    onClick={() => addDays('Sun')}
                    className={`h-max w-[22%] border-2 rounded ${
                      days.some((item) => item === 'Sun')
                        ? 'bg-[#70e000] border-[#70e000]'
                        : null
                    } text-base flex justify-center border-slate-300`}
                  >
                    Sun
                  </div>

                  <input
                    type='time'
                    className='border border-slate-300 rounded text-slate-800 h-max text-base'
                  />
                </div>
                <p className='text-base font-semibold'>&nbsp;</p>
              </div>
            ) : (
              <AiFillPlusCircle className=' text-slate-800  bg-slate-100 rounded-full text-6xl group-hover:scale-150 group-hover:text-8xl group-hover:transition-all' />
            )}
            {!notifications.some((item) => item === 'Daily') ? (
              <p className='text-xl text-slate-400 font-bold text-center group-hover:text-slate-600'>
                Daily
              </p>
            ) : null}

            <div
              className={`h-15 w-full bg-slate-300 group-hover:bg-red-500 ${
                notifications.some((item) => item === 'Daily')
                  ? 'flex justify-center items-center'
                  : 'hidden'
              }`}
              onClick={() => addNotification('Daily')}
            >
              <p className='text-center text-white text-2xl'>Disable</p>
            </div>
          </div>
          <div
            onClick={
              notifications.some((item) => item === 'Weekly')
                ? null
                : () => addNotification('Weekly')
            }
            className='group flex flex-col relative justify-evenly rounded items-center w-[23%] border-dashed border-8 h-64 cursor-pointer border-slate-300 hover:border-solid hover:border-slate-600'
          >
            {notifications.some((item) => item === 'Weekly') ? (
              <RiCheckboxCircleFill className=' text-[#70e000] absolute bottom-[90%] left-[80%] bg-white rounded-full text-6xl' />
            ) : null}

            {notifications.some((item) => item === 'Weekly') ? (
              <div className='flex flex-col justify-evenly h-full w-full'>
                {notifications.some((item) => item === 'Weekly') ? (
                  <p className='text-xl text-slate-400 font-bold text-center group-hover:text-slate-600'>
                    Weekly
                  </p>
                ) : null}

                <div className='flex flex-row justify-evenly items-center h-[20%]'>
                  <div
                    onClick={() => addWeekDays('Mon')}
                    className={`h-max w-[22%] border-2 rounded ${
                      weekDays.some((item) => item === 'Mon')
                        ? 'bg-[#70e000] border-[#70e000]'
                        : null
                    } text-base flex justify-center border-slate-300`}
                  >
                    Mon
                  </div>
                  <div
                    onClick={() => addWeekDays('Tue')}
                    className={`h-max w-[22%] border-2 rounded ${
                      weekDays.some((item) => item === 'Tue')
                        ? 'bg-[#70e000] border-[#70e000]'
                        : null
                    } text-base flex justify-center border-slate-300`}
                  >
                    Tue
                  </div>
                  <div
                    onClick={() => addWeekDays('Wed')}
                    className={`h-max w-[22%] border-2 rounded ${
                      weekDays.some((item) => item === 'Wed')
                        ? 'bg-[#70e000] border-[#70e000]'
                        : null
                    } text-base flex justify-center border-slate-300`}
                  >
                    Wed
                  </div>
                </div>
                <div className='flex flex-row justify-evenly items-start h-[20%]'>
                  <div
                    onClick={() => addWeekDays('Thu')}
                    className={`h-max w-[22%] border-2 rounded ${
                      weekDays.some((item) => item === 'Thu')
                        ? 'bg-[#70e000] border-[#70e000]'
                        : null
                    } text-base flex justify-center border-slate-300`}
                  >
                    Thu
                  </div>
                  <div
                    onClick={() => addWeekDays('Fri')}
                    className={`h-max w-[22%] border-2 rounded ${
                      weekDays.some((item) => item === 'Fri')
                        ? 'bg-[#70e000] border-[#70e000]'
                        : null
                    } text-base flex justify-center border-slate-300`}
                  >
                    Fri
                  </div>
                  <div
                    onClick={() => addWeekDays('Sat')}
                    className={`h-max w-[22%] border-2 rounded ${
                      weekDays.some((item) => item === 'Sat')
                        ? 'bg-[#70e000] border-[#70e000]'
                        : null
                    } text-base flex justify-center border-slate-300`}
                  >
                    Sat
                  </div>
                </div>
                <div className='flex flex-row justify-evenly items-start h-[20%] w-full'>
                  <div
                    onClick={() => addWeekDays('Sun')}
                    className={`h-max w-[22%] border-2 rounded ${
                      weekDays.some((item) => item === 'Sun')
                        ? 'bg-[#70e000] border-[#70e000]'
                        : null
                    } text-base flex justify-center border-slate-300`}
                  >
                    Sun
                  </div>

                  <input
                    type='time'
                    className='border border-slate-300 rounded text-slate-800 h-max text-base'
                  />
                </div>
                <div className='flex flex-row justify-evenly items-center'>
                  <label htmlFor={weeklabel} className='text-sm font-semibold'>
                    Repeat every
                  </label>
                  <input
                    id={weeklabel}
                    min={0}
                    type='number'
                    className='border border-slate-300 rounded text-slate-800 h-max text-base w-1/5 text-right'
                  />
                  <label htmlFor={weeklabel} className='text-sm font-semibold'>
                    . week
                  </label>
                </div>
              </div>
            ) : (
              <AiFillPlusCircle className=' text-slate-800  bg-slate-100 rounded-full text-6xl group-hover:scale-150 group-hover:text-8xl group-hover:transition-all' />
            )}
            {!notifications.some((item) => item === 'Weekly') ? (
              <p className='text-xl text-slate-400 font-bold text-center group-hover:text-slate-600'>
                Weekly
              </p>
            ) : null}

            <div
              className={`h-15 w-full bg-slate-300 group-hover:bg-red-500 ${
                notifications.some((item) => item === 'Weekly')
                  ? 'flex justify-center items-center'
                  : 'hidden'
              }`}
              onClick={() => addNotification('Weekly')}
            >
              <p className='text-center text-white text-2xl'>Disable</p>
            </div>
          </div>
          <div
            onClick={
              notifications.some((item) => item === 'Monthly')
                ? null
                : () => addNotification('Monthly')
            }
            className='group flex flex-col relative justify-evenly rounded items-center w-[23%] border-dashed border-8 h-64 cursor-pointer border-slate-300 hover:border-solid hover:border-slate-600'
          >
            {notifications.some((item) => item === 'Monthly') ? (
              <RiCheckboxCircleFill className=' text-[#70e000] absolute bottom-[90%] left-[80%] bg-white rounded-full text-6xl' />
            ) : null}

            {notifications.some((item) => item === 'Monthly') ? (
              <div className='flex flex-col justify-evenly h-full w-full items-center'>
                {notifications.some((item) => item === 'Monthly') ? (
                  <p className='text-xl text-slate-400 font-bold text-center group-hover:text-slate-600'>
                    Monthly
                  </p>
                ) : null}
                <div className=' w-[97%] h-[15%] flex flex-row'>
                  <div
                    className={`w-1/2 h-full ${
                      monthly
                        ? 'bg-[#70e000] text-black'
                        : 'border-2 border-slate-400 text-slate-400'
                    } flex justify-center items-center rounded-l`}
                    onClick={() => setMonthly(true)}
                  >
                    <p className='text-sm text-center'>Specific Day</p>
                  </div>
                  <div
                    onClick={() => setMonthly(false)}
                    className={`w-1/2 h-full ${
                      !monthly
                        ? 'bg-[#70e000] text-black'
                        : 'border-2 border-slate-400 text-slate-400'
                    } flex justify-center items-center rounded-r`}
                  >
                    <p className='text-sm  text-center'>Periodically</p>
                  </div>
                </div>
                <div className='flex flex-row w-[97%] h-[25%]'>
                  <div
                    className={`flex flex-row justify-evenly items-end  w-[50%] border-2 ${
                      monthly ? 'border-[#70e000]' : 'border-slate-200'
                    } rounded-l`}
                  >
                    <div className='flex flex-col justify-evenly items-center'>
                      <label
                        htmlFor={monthdaylabel}
                        className='text-base text-slate-800'
                      >
                        Day
                      </label>
                      <div className='flex flex-row justify-center items-center h-1/2'>
                        <input
                          id={monthdaylabel}
                          type='number'
                          min='1'
                          max='31'
                          className='border-2 rounded border-slate-300 text-base w-[65%] text-right'
                        />
                        <p className='text-base'>.</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex flex-row justify-evenly items-end  w-[50%] border-2 ${
                      !monthly ? 'border-[#70e000]' : 'border-slate-200'
                    } rounded-r`}
                  >
                    <div className='flex flex-col justify-evenly items-evenly w-full h-full'>
                      <select className='text-sm'>
                        <option value='1'>first</option>
                        <option value='2'>second</option>
                        <option value='3'>third</option>
                        <option value='4'>fourth</option>
                        <option value='99'>last</option>
                      </select>
                      <select className='text-sm'>
                        <option value='1'>day</option>
                        <option value='3'>week day</option>
                        <option value='4'>weekend</option>
                        <option value='11'>Monday</option>
                        <option value='12'>Tuesday</option>
                        <option value='13'>Wednesday</option>
                        <option value='14'>Thursday</option>
                        <option value='15'>Friday</option>
                        <option value='16'>Saturday</option>
                        <option value='17'>Sunday</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row justify-evenly items-start h-[20%] w-full'>
                  <input
                    type='time'
                    className='border border-slate-300 rounded text-slate-800 h-max text-base'
                  />
                </div>
                <div className='flex flex-row justify-evenly items-center'>
                  <label htmlFor={monthlabel} className='text-sm font-semibold'>
                    Repeat every
                  </label>
                  <input
                    id={monthlabel}
                    min={0}
                    type='number'
                    className='border border-slate-300 rounded text-slate-800 h-max text-base w-1/5 text-right'
                  />
                  <label htmlFor={monthlabel} className='text-sm font-semibold'>
                    . month
                  </label>
                </div>
              </div>
            ) : (
              <AiFillPlusCircle className=' text-slate-800  bg-slate-100 rounded-full text-6xl group-hover:scale-150 group-hover:text-8xl group-hover:transition-all' />
            )}
            {!notifications.some((item) => item === 'Monthly') ? (
              <p className='text-xl text-slate-400 font-bold text-center group-hover:text-slate-600'>
                Monthly
              </p>
            ) : null}

            <div
              className={`h-15 w-full bg-slate-300 group-hover:bg-red-500 ${
                notifications.some((item) => item === 'Monthly')
                  ? 'flex justify-center items-center'
                  : 'hidden'
              }`}
              onClick={() => addNotification('Monthly')}
            >
              <p className='text-center text-white text-2xl'>Disable</p>
            </div>
          </div>
          <div
            onClick={
              notifications.some((item) => item === 'Annually')
                ? null
                : () => addNotification('Annually')
            }
            className='group flex flex-col relative justify-evenly rounded items-center w-[23%] border-dashed border-8 h-64 cursor-pointer border-slate-300 hover:border-solid hover:border-slate-600'
          >
            {notifications.some((item) => item === 'Annually') ? (
              <RiCheckboxCircleFill className=' text-[#70e000] absolute bottom-[90%] left-[80%] bg-white rounded-full text-6xl' />
            ) : null}

            {notifications.some((item) => item === 'Annually') ? (
              <div className='flex flex-col justify-evenly h-full w-full items-center'>
                {notifications.some((item) => item === 'Annually') ? (
                  <p className='text-xl text-slate-400 font-bold text-center group-hover:text-slate-600'>
                    Annually
                  </p>
                ) : null}
                <div className=' w-[97%] h-[15%] flex flex-row'>
                  <div
                    className={`w-1/2 h-full ${
                      annually
                        ? 'bg-[#70e000] text-black'
                        : 'border-2 border-slate-400 text-slate-400'
                    } flex justify-center items-center rounded-l`}
                    onClick={() => setAnnually(true)}
                  >
                    <p className='text-sm text-center'>Specific Day</p>
                  </div>
                  <div
                    onClick={() => setAnnually(false)}
                    className={`w-1/2 h-full ${
                      !annually
                        ? 'bg-[#70e000] text-black'
                        : 'border-2 border-slate-400 text-slate-400'
                    } flex justify-center items-center rounded-r`}
                  >
                    <p className='text-sm  text-center'>Periodically</p>
                  </div>
                </div>
                <div className='flex flex-row w-[97%] h-[45%]'>
                  <div
                    className={`flex flex-col justify-evenly items-end  w-[50%] h-full`}
                  >
                    <div
                      className={`flex flex-col justify-evenly items-center ${
                        annually ? 'border-[#70e000]' : 'border-slate-200'
                      } border-2 rounded-l w-full h-[50%]`}
                    >
                      <label
                        htmlFor={annualdaylabel}
                        className='text-base text-slate-800'
                      >
                        Day
                      </label>
                      <div className='flex flex-row justify-center items-center h-1/2 w-max'>
                        <input
                          id={annualdaylabel}
                          type='date'
                          min={new Date().getFullYear() + '-01-01'}
                          max={new Date().getFullYear() + 1 + '-12-31'}
                          className='text-sm w-[90%] text-right border-0'
                        />
                      </div>
                    </div>
                    <div className='flex flex-row justify-center items-center h-[50%] w-full'>
                      <input
                        type='time'
                        className='border border-slate-300 rounded text-slate-800 h-max text-base'
                      />
                    </div>
                  </div>
                  <div
                    className={`flex flex-row justify-evenly items-end  w-[50%] border-2 ${
                      !annually ? 'border-[#70e000]' : 'border-slate-200'
                    } rounded-r`}
                  >
                    <div className='flex flex-col justify-evenly items-evenly w-full h-full'>
                      <select className='text-sm'>
                        <option value='1'>first</option>
                        <option value='2'>second</option>
                        <option value='3'>third</option>
                        <option value='4'>fourth</option>
                        <option value='99'>last</option>
                      </select>
                      <select className='text-sm'>
                        <option value='1'>day</option>
                        <option value='3'>week day</option>
                        <option value='4'>weekend</option>
                        <option value='11'>Monday</option>
                        <option value='12'>Tuesday</option>
                        <option value='13'>Wednesday</option>
                        <option value='14'>Thursday</option>
                        <option value='15'>Friday</option>
                        <option value='16'>Saturday</option>
                        <option value='17'>Sunday</option>
                      </select>
                      <select className='text-sm'>
                        <option value='1'>in January</option>
                        <option value='2'>in February</option>
                        <option value='3'>in March</option>
                        <option value='4'>in April</option>
                        <option value='5'>in May</option>
                        <option value='6'>in June</option>
                        <option value='7'>in July</option>
                        <option value='8'>in August</option>
                        <option value='9'>in September</option>
                        <option value='10'>in October</option>
                        <option value='11'>in November</option>
                        <option value='12'>in December</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className='flex flex-row justify-evenly items-center'>
                  <label
                    htmlFor={annuallabel}
                    className='text-sm font-semibold'
                  >
                    Repeat every
                  </label>
                  <input
                    id={annuallabel}
                    min={0}
                    type='number'
                    className='border border-slate-300 rounded text-slate-800 h-max text-base w-1/5 text-right'
                  />
                  <label
                    htmlFor={annuallabel}
                    className='text-sm font-semibold'
                  >
                    . month
                  </label>
                </div>
              </div>
            ) : (
              <AiFillPlusCircle className=' text-slate-800  bg-slate-100 rounded-full text-6xl group-hover:scale-150 group-hover:text-8xl group-hover:transition-all' />
            )}
            {!notifications.some((item) => item === 'Annually') ? (
              <p className='text-xl text-slate-400 font-bold text-center group-hover:text-slate-600'>
                Annually
              </p>
            ) : null}

            <div
              className={`h-15 w-full bg-slate-300 group-hover:bg-red-500 ${
                notifications.some((item) => item === 'Annually')
                  ? 'flex justify-center items-center'
                  : 'hidden'
              }`}
              onClick={() => addNotification('Annually')}
            >
              <p className='text-center text-white text-2xl'>Disable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsSettings;
