import React from 'react'
import { Image} from "lucide-react";
const Navbar = () => {
  return (
          <nav className="fixed top-0 left-0  w-full bg-zinc-900 text-white px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <Image size={22} />
            Image Gallery
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="text-blue-300">Home</a>
            <a href="#" className="text-zinc-200 hover:text-white">Gallery</a>
            <a href="#" className="text-zinc-200 hover:text-white">About</a>
            <a href="#" className="text-zinc-200 hover:text-white">Contact</a>
          </div>
        </nav>
  )
}

export default Navbar