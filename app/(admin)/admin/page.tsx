import Image from "next/image";
import { LuArrowLeftToLine } from "react-icons/lu";

export default function Admin() {
  return (

    <div className='relative h-full' >
      <div className='w-full py-6 mt-1 space-y-6 px-2 '>
        <div className="grid grid-cols-3 gap-3">
          <div className="p-20 bg-blue-50 rounded-lg">

          </div>
          <div className="p-20 bg-yellow-50 rounded-lg">

          </div>
          <div className="p-20 bg-red-50 rounded-lg">

          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-24 bg-green-50 rounded-lg">

          </div>
          <div className="p-24 bg-lime-50 rounded-lg">

          </div>
        </div>


      </div>
      <div className='flex items-center h-[8%] justify-center border-t border-b w-full p-2 absolute bottom-0'>
        
      </div>
    </div>
  );
}
