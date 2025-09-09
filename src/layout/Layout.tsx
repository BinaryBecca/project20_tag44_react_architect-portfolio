import { useEffect, useState } from "react"
import Header from "../components/header/Header"
import { Outlet, useLocation } from "react-router"
import Footer from "../components/footer/Footer"
import Loader from "../components/loader/Loader"
// import Darkmode from "../components/darkmode/Darkmode"

// interface LayoutProps {
//   activatingDarkMode: boolean
//   iconImg?: boolean
// }

export default function Layout() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const [isloading, setIsLoading] = useState<boolean>(true)
  const location = useLocation()

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 200)
  }, [location.pathname])

  function changingMode() {
    setDarkMode(!darkMode)
  }

  console.log("isLoading", isloading)

  return (
    <>
      <div>
        {isloading ? (
          <Loader />
        ) : (
          <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
            <Header onClick={changingMode} activatingDarkMode={darkMode} />
            {/* <Darkmode onClick={changingMode} iconImg={darkMode} /> */}
            <main className="pl-[2rem] pr-[2rem]">
              <Outlet />
            </main>
            <Footer activatingDarkMode={darkMode} />
          </div>
        )}
      </div>
    </>
  )
}
