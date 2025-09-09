import { Link } from "react-router"
import Darkmode from "../darkmode/Darkmode"

interface NavProps {
  onClick: () => void
  iconImg?: boolean
}

export default function Nav({ onClick, iconImg }: NavProps) {
  return (
    <>
      {/* <nav className="flex justify-between items-center p-[2rem] w-full"> */}
      <nav className="grid grid-cols-[1fr_3fr_1fr] gap-[4rem] p-[2rem] w-full items-center">
        <div>
          <img src="/icon_logo.png" alt="" />
        </div>

        <div className="flex justify-end gap-[2rem]">
          <Link to="/">MAIN</Link>
          <Link to="gallery">GALLERY</Link>
          <Link to="projects">PROJECTS</Link>
          <Link to="certifications">CERTIFICATIONS</Link>
          <Link to="contacts">CONTACTS</Link>
        </div>

        {/* <img src="/icon_dark-mode.png" alt="darkmode icon" className="w-[1.5rem] h-[1.5rem] object-contain" /> */}
        <div>
          <Darkmode onClick={onClick} iconImg={iconImg} />
        </div>
      </nav>
    </>
  )
}
