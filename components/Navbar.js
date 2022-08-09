import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [isShown, setIsShown] = useState(false);
    
    return (
        <div>
            <div className="grid grid-cols-12 gap-x-4 text-gray-700 border-b fixed left-0 dark:bg-stone-800 dark:text-indigo-300  bg-white right-0 border-gray-50 h-24 items-center shadow px-4">
                <div className="col-span-7 grid grid-cols-12 gap-x-4">
                    <div className="col-span-3  ">
                        <Image  src="/img/spy.png" alt="Logo Spy" className="object-fit "  width={140} height={30} />
                    </div>
                    <div className="flex items-center space-x-8">
                        <span className="relative" onMouseEnter={() => setIsShown('trade')} onMouseLeave={() => setIsShown(false)}>
                            Trade
                            {isShown == 'trade' && (
                                <div className="absolute top-8 left-0 bg-white dark:bg-stone-800 border dark:border-0 border-gray-200 shadow-md w-52 rounded-lg">
                                    <div className="py-2 px-6">Exchange</div>
                                    <div className="py-2 px-6">Liquidity</div>
                                </div>
                            )}
                        </span>
                        <span className="relative" onMouseEnter={() => setIsShown('earn')} onMouseLeave={() => setIsShown(false)}>
                            Earn
                            {isShown == 'earn' && (
                                <div className="absolute top-8 left-0 bg-white dark:bg-stone-800 border dark:border-0 border-gray-200 shadow-md w-52 rounded-lg">
                                    <div className="py-2 px-6">Farms</div>
                                    <div className="py-2 px-6">New Farms</div>
                                    <div className="py-2 px-6">The Auto</div>
                                    <div className="py-2 px-6">Referral</div>
                                </div>
                            )}
                        </span>
                        <span className="relative" onMouseEnter={() => setIsShown('launchpad')} onMouseLeave={() => setIsShown(false)}>
                            Launchpad
                            {isShown == 'launchpad' && (
                                <div className="absolute top-8 left-0 bg-white  dark:bg-stone-800 border dark:border-0 border-gray-200 shadow-md w-52 rounded-lg">
                                    <div className="py-2 px-6">Launchpad</div>
                                </div>
                            )}
                        </span>
                        <span className="relative" onMouseEnter={() => setIsShown('nfts')} onMouseLeave={() => setIsShown(false)}>
                            NFTs
                            {isShown == 'nfts' && (
                                <div className="absolute top-8 left-0 bg-white dark:bg-stone-800 border dark:border-0 border-gray-200 shadow-md w-52 rounded-lg">
                                    <div className="py-2 px-6">NFTs</div>
                                </div>
                            )}
                        </span>
                        <span className="relative" onMouseEnter={() => setIsShown('icon')} onMouseLeave={() => setIsShown(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                            {isShown == 'icon' && (
                                <div className="absolute top-8 left-0 bg-white dark:bg-stone-800 border dark:border-0 border-gray-200 shadow-md w-52 rounded-lg">
                                    <div className="py-2 px-6">Governance</div>
                                </div>
                            )}
                        </span>
                    </div>
                </div>
                <div className="col-span-5 flex justify-end items-center space-x-4">
                    <span className="flex items-center space-x-2 ">
                        <span className="flex items-center">
                            <Image  src="/img/logo-spy.png" alt="Logo Spy" className="object-fit "  width={20} height={20} />
                        </span>
                        <span className="font-bold text-lg">$0.034</span>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-1 rounded-full font-bold text-lg">Connect Wallet</button>
                </div>
            </div>
        </div>
    )
}