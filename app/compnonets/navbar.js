import Image from "next/image"
import './navbar.css'
import { useRouter } from 'next/navigation'

export default function Navbar({ searchbar, setsearchbar, current_report, setabout, about }) {
    const router = useRouter()
    const handleclick = (event) => {
        setsearchbar(prev => !prev)
    }
    return (
        <div>
            <div className="fixed w-full flex flex-grow-0 flex-col items-center align-middle justify-between pl-20 pr-20 bg-slate-200 sm:flex-row
             z-10">
                <div className="cursor-pointer"  >
                    <Image src='/w.png'
                        priority
                        width={80}
                        height={80}
                        alt="image not found" />
                </div>
                <div className="relative">
                    <input
                        readOnly
                        className=" mt-1  h-14 block w-full px-12 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 cursor-pointer"
                        type="text"
                        placeholder="Search..."
                        onClick={handleclick}
                    />
                    <div className="absolute top-0 right-0 flex items-center h-full pr-4 cursor-pointer " onClick={handleclick}>
                        <img
                            src="/s2.png"
                            alt="Search Icon"
                            className="h-12 w-12 pt-1"
                        />

                    </div>
                </div>
                <div className="flex items-center">
                    <div className="text-3xl font-serif font-bold cursor-pointer" onClick={() => setabout(prev => !prev)}>About</div>
                    {!about && <div className="ml-2 gg-chevron-down cursor-pointer" onClick={() => setabout(prev => !prev)}></div>}
                    {about && <div className="ml-2 gg-chevron-up cursor-pointer " onClick={() => setabout(prev => !prev)}></div>}
                </div></div>

        </div>
    )
}