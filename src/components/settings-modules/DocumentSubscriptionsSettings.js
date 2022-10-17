import React, { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { RiCheckboxCircleFill } from 'react-icons/ri';
function DocumentSubscriptionsSettings() {
  const [documents, setDocuments] = useState([]);
  const addDocument = (documentname) => {
    documents.some((item) => item === documentname)
      ? setDocuments(documents.filter((item) => item !== documentname))
      : setDocuments([...documents, documentname]);
  };
  return (
    <div className='h-full w-full font-bold text-2xl'>
      Document Subscriptions
      <div className='mt-[2%] h-full w-full '>
        <p className='text-xl font-semibold text-slate-900'>
          Here you can subscribe to a regular PDF export sent to your mailbox.
        </p>
        <div className='h-[calc(50%)] flex flex-col justify-center'>
          <p className='text-xl text-center text-slate-600'>
            You have {documents.length === 0 ? 'no' : documents.length} active
            Document subscription.
          </p>
          <div className='flex justify-evenly mt-3'>
            <div
              onClick={() => addDocument('1.Document')}
              className='group flex flex-col justify-center rounded items-center w-64 border-dashed border-8 h-64 cursor-pointer border-slate-300 hover:border-solid hover:border-slate-600'
            >
              {documents.some((item) => item === '1.Document') ? (
                <RiCheckboxCircleFill className=' text-[#70e000] bg-slate-100 rounded-full text-6xl group-hover:scale-150 group-hover:text-8xl group-hover:transition-all' />
              ) : (
                <AiFillPlusCircle className=' text-slate-800 bg-slate-100 rounded-full text-6xl group-hover:scale-150 group-hover:text-8xl group-hover:transition-all' />
              )}
              <p className='mt-10 text-xl text-slate-400 font-bold text-center group-hover:text-slate-600'>
                1.Document
              </p>
            </div>
            <div
              onClick={() => addDocument('2.Document')}
              className='group flex flex-col justify-center items-center w-64 rounded border-dashed border-8 h-64 cursor-pointer border-slate-300 hover:border-solid hover:border-slate-600'
            >
              {documents.some((item) => item === '2.Document') ? (
                <RiCheckboxCircleFill className=' text-[#70e000] bg-slate-100 rounded-full text-6xl group-hover:scale-150 group-hover:text-8xl group-hover:transition-all' />
              ) : (
                <AiFillPlusCircle className=' text-slate-800 bg-slate-100 rounded-full text-6xl group-hover:scale-150 group-hover:text-8xl group-hover:transition-all' />
              )}
              <p className='mt-10 text-xl text-slate-400 font-bold text-center group-hover:text-slate-600'>
                2.Document
              </p>
            </div>
            <div
              onClick={() => addDocument('3.Document')}
              className='group flex flex-col justify-center items-center w-64 rounded border-dashed border-8 h-64 cursor-pointer border-slate-300 hover:border-solid hover:border-slate-600'
            >
              {documents.some((item) => item === '3.Document') ? (
                <RiCheckboxCircleFill className=' text-[#70e000] bg-slate-100 rounded-full text-6xl group-hover:scale-150 group-hover:text-8xl group-hover:transition-all' />
              ) : (
                <AiFillPlusCircle className=' text-slate-800 bg-slate-100 rounded-full text-6xl group-hover:scale-150 group-hover:text-8xl group-hover:transition-all' />
              )}
              <p className='mt-10 text-xl text-slate-400 font-bold text-center group-hover:text-slate-600'>
                3.Document
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentSubscriptionsSettings;
