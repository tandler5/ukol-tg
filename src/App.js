import './App.css';
import Settings from './components/Settings';
function App() {
  return (
    <div className='flex flex-col h-full justify-start'>
      <div className='w-full h-[50px] bg-[#363636] border-b-2 border-[rgba(0,0,0,0.1)]'></div>
      <div className='flex flex-row w-full h-[calc(100%-75px)]'>
        <div className='w-[52px] h-[full-75px] bg-[#f8f8f8] shadow-xl relative'></div>
        <div className='flex-auto w-[80%] h-[full-50px] bg-[#f6f6f6]'>
          <Settings />
        </div>
      </div>
      <div className='bg-[#363636] w-full h-[25px]'></div>
    </div>
  );
}

export default App;
