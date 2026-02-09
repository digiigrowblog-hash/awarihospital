"use client"

import Image from "next/image"
import Link from "next/link"

export default function FloatingIcons() {
    return(
       <div className="">
        <div className="fixed bottom-5 md:right-5 right-2 md:transform md:-translate-y-1/2 flex flex-col gap-4 p-4 z-50">
          <Link href="https://share.google/ujZ74XmiFclveo8uD" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
            <Image width={20} height={20} src="/images/gmb.png" alt="GMB" className="md:w-9 md:h-9 w-7 h-7"/>
          </Link>
          
          
        </div>

       </div>
    )
}