'use client'
import Body from './compnonets/mainbody'
import Searchbar from './compnonets/searchbar'
import Navbar from './compnonets/navbar'
import { React, useState, useEffect } from 'react'
import Report from './compnonets/report'
import './body.css'
import updateText from './compnonets/updatatext'

export default function Home() {

  const [fetched, setFetched] = useState(false);
  const [searchNavbar, setSearchNavbar] = useState({ searchbar: true });
  const [weatherReport, setWeatherReport] = useState({});
  const [about, setabout] = useState(false);
  useEffect(() => {
    updateText()
    const intervalId = setInterval(updateText, 1500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const style = !searchNavbar ? 'blur-[6px]' : ''


  return (
    <>
      {<Navbar searchbar={searchNavbar} setsearchbar={setSearchNavbar} setabout={setabout} about={about} />}
      {about && <div className="absolute top-24 z-20 rounded-md p-5  w-96 -right-1 pb-28 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50">
        This app is designed to check the weather report, which was
        coming from weather api if you want any guidance on building this app please contact yaswanthkosuru999@gmail.com
      </div>}
      <div className={` ${style} absolute pl-12 pr-12 pt-5 top-40 pb-96`}>
        {!fetched && <Body />}
        {searchNavbar && fetched && <Report weather_report={weatherReport} />}
      </div>

      <div className='absolute top-44 left-80 right-80 z-20 drop-shadow-2xl'> {!searchNavbar && <Searchbar setweather_report={setWeatherReport} setfetched={setFetched} setsearchbar={setSearchNavbar} />}</div>
    </>
  )
}
