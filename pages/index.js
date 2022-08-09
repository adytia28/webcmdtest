import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isShown, setIsShown] = useState(false);
  const [isOption, setIsOption] = useState('live');

  const data = [
    {
      type:'SPY-BUSD',
      core:'Core',
      number:'40582X',
      apy:'987.62%',
      earn:'SPY + Fees',
      harvest:'324 Hour (s)',
      nextHarvest:'--:--:--',
    },
    {
      type:'SPY-BNB',
      core:'Core',
      number:'42178X',
      apy:'677.96%',
      earn:'SPY + Fees',
      harvest:'324 Hour (s)',
      nextHarvest:'--:--:--',
    },
    {
      type:'SPY-USDC',
      core:'Core',
      number:'20240X',
      apy:'1,216.66%',
      earn:'SPY + Fees',
      harvest:'324 Hour (s)',
      nextHarvest:'--:--:--',
    },
  ]
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

      <div className="grid grid-cols-3 mt-8 gap-8">
        {data.map((value, index) => {
          return (
            <div key={index} className="bg-white shadow-md border border-gray-100 rounded-xl p-4">
                <div className="flex items-center justify-between gap-x-2">
                  <div>
                    <Image  src="/img/logo-spy.png" alt="Logo Spy" className="object-fit "  width={50} height={50} />
                  </div>
                  <div>
                    <div className="text-right font-bold text-xl text-blue-900">{value.type}</div>
                    <div className="flex items-center space-x-2">
                      <span className="border-2 border-cyan-500 space-x-2 flex items-center px-2 rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="text-cyan-500">{value.core}</span>
                      </span>
                      <span className="bg-cyan-500 text-white px-2.5 py-1 rounded-full text-sm">{value.number}</span>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                    <div className="flex items-center justify-between space-x-2 space-y-1">
                        <span>APY:</span>
                        <span className="flex items-center space-x-2">
                          <span className="font-bold text-lg text-blue-900">{value.apy}</span>
                          <span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clip-rule="evenodd" />
                          </svg>
                          </span>
                        </span>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <span>Earn:</span>
                        <span className="flex items-center space-x-2">
                          <span className="font-bold text-lg text-blue-900">{value.earn}</span>
                        </span>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <span>Harvest Lookup:</span>
                        <span className="flex items-center space-x-2">
                          <span className="font-bold text-lg text-blue-900">{value.harvest}</span>
                        </span>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <span>Next Harvest In:</span>
                        <span className="flex items-center space-x-2">
                          <span className="font-bold text-lg text-blue-900">{value.nextHarvest}</span>
                        </span>
                    </div>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
