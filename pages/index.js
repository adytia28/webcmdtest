import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isShown, setIsShown] = useState(false);
  const [isOption, setIsOption] = useState('live');
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div onClick={() => setIsShown(!isShown)} className={`w-10 h-5 rounded-full ${isShown ? 'bg-green-700' : 'bg-gray-800'}`}>
              <div className={`w-5 h-5 rounded-full transition-all transform  border-2 border-indigo-700 bg-gray-900 ${isShown ? '  translate-x-full' : 'translate-x-0'}`} ></div>
          </div>
        </div>

        <div className="w-auto bg-gray-900 dark:bg-gray-700  flex items-center rounded-full">
            <div onClick={() => setIsOption('live')} className={`flex items-center justify-center px-4 py-1  font-bold rounded-full w-16 ${isOption == 'live' ? 'bg-white text-gray-600' : 'text-white'}`}>Live</div>
            <div onClick={() => setIsOption('finished')} className={`flex items-center justify-center px-4 py-1  font-bold rounded-full w-24 ${isOption == 'finished' ? 'bg-white text-gray-600' : 'text-white'}`}>Finished</div>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-8">
          <div className="bg-white shadow-md border border-gray-100 rounded-xl p-4">
              <div className="flex items-center justify-between gap-x-2">
                <div>
                  <Image  src="/img/logo-spy.png" alt="Logo Spy" className="object-fit "  width={50} height={50} />
                </div>
                <div>
                  <div className="text-right font-bold text-xl text-blue-900">SPY-BUSD</div>
                  <div className="flex items-center space-x-2">
                    <span className="border-2 border-cyan-500 space-x-2 flex items-center px-2 rounded-full ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <span className="text-cyan-500">Core</span>
                    </span>
                    <span className="bg-cyan-500 text-white px-2.5 py-1 rounded-full text-sm">40582X</span>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}
