import { useState } from "react"
import Header from "../components/header/Header"
import { Outlet } from "react-router"
import Footer from "../components/footer/Footer"
import Darkmode from "../components/darkmode/Darkmode"

// interface LayoutProps {
//   onClick: () => void
//   iconImg?: boolean
// }

export default function Layout() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  function changingMode() {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
        <Header onClick={changingMode} iconImg={darkMode} />
        {/* <Darkmode onClick={changingMode} iconImg={darkMode} /> */}
        <main className="pl-[2rem] pr-[2rem]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
