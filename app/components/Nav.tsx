'use client'
import { signIn, signOut } from 'next-auth/react'
import { Session } from 'next-auth'



export default function Nav ({user}: Session){
    
    return(
        <nav>
       <div>
           <div className="container mx-auto flex items-center justify-between pt-[20px]"> 
                 <div>
                  <h1 className="text-[32px] font-semibold cursor-pointer">Functional Beings</h1>
                 </div>
                    <div className="flex items-center gap-[50px]">
                        <ul className="flex items-center gap-[40px] cursor-pointer font-semibold">
                             <li><a href="">Treatments</a></li>
                             <li><a href="">Prices</a></li>
                             <li><a href="">Contact</a></li>
                             <button className="bg-blue-950 rounded-[7px] text-white text-[16px] py-[10px] px-[20px] cursor-pointer font-semibold tracking-[0.4px]">
                             <a href="">Booking</a>
                             </button>
                             {!user && (
                                <li>
                                    <button onClick={() => signIn()}>Sign In</button>
                                </li>
                             )}
                             {user && (
                                <li>
                                    <button onClick={() => signOut()}>Sign Out</button>
                                </li>
                             )}
                             
                        </ul>
                    </div>
          </div>
          <div className="grid grid-cols-2 mt-[40px] pb-[40px]">
            <div>

            </div>
            <div>

            </div>
          </div>
      </div>
        </nav>
    )
}