import { Link, NavLink } from "react-router"
import Darkmode from "../darkmode/Darkmode"

interface NavProps {
  onClick: () => void
  iconImg?: boolean
}

export default function Nav({ onClick, iconImg }: NavProps) {
  const linkClass = ({ isActive }: { isActive: boolean }) => `${isActive ? "border-t border-b py-[1rem]" : "py-[1rem]"}`

  return (
    <>
      {/* <nav className="flex justify-between items-center p-[2rem] w-full"> */}
      <nav className="grid grid-cols-[1fr_3fr_1fr] gap-[4rem] p-[2rem] w-full items-center">
        <div>
          <img src="/icon_logo.png" alt="" />
        </div>

        <div className="flex justify-end gap-[2rem]">
          <NavLink to="/" className={linkClass}>
            MAIN
          </NavLink>
          <NavLink to="gallery" className={linkClass}>
            GALLERY
          </NavLink>
          <NavLink to="projects" className={linkClass}>
            PROJECTS
          </NavLink>
          <NavLink to="certifications" className={linkClass}>
            CERTIFICATIONS
          </NavLink>
          <NavLink to="contacts" className={linkClass}>
            CONTACTS
          </NavLink>
        </div>

        {/* <img src="/icon_dark-mode.png" alt="darkmode icon" className="w-[1.5rem] h-[1.5rem] object-contain" /> */}
        <div>
          <Darkmode onClick={onClick} iconImg={iconImg} />
        </div>
      </nav>
    </>
  )
}
