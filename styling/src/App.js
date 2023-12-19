import './App.css';
import Add from './Components/Add';
import Show from './Components/Show'
import {HiMenuAlt3} from 'react-icons/hi'

function App() {
  return (
    <div className="flex gap-6">
      <div className="bg-[#0e0e0e] min-h-screen w-72">
        <div className='py-3 flex justify-end'>
            <HiMenuAlt3 size={26} className='cursor-pointer' />
        </div>
      </div>
      <div className='w-2/5'>
        <Add/>
        <Show />
      </div>
    </div>
  );
}

export default App;



