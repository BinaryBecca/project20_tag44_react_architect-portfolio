import { Link } from "react-router"

interface FooterProps {
  activatingDarkMode: boolean
}

export default function Footer({ activatingDarkMode }: FooterProps) {
  return (
    <>
      <article className={`mt-[2rem] ${activatingDarkMode ? "bg-white text-black" : "bg-black text-white"}`}>
        <section className="flex flex-row justify-between items-start p-[3rem] mb-[2rem] w-full">
          <img src="/icon_logo_white.png" alt="" />

          <nav className="flex flex-col gap-[3rem]">
            <h2>Information</h2>
            <div className="flex flex-col gap-[1rem]">
              <Link to="/">Main</Link>
              <Link to="gallery">Gallery</Link>
              <Link to="projects">Projects</Link>
              <Link to="certifications">Certifications</Link>
              <Link to="contacts">Contacts</Link>
            </div>
          </nav>

          <div className="flex flex-col gap-[2rem]">
            <h2>Contacts</h2>
            <div className="flex gap-[1rem]">
              <img src="/icon_map.png" alt="map icon" className="w-[1rem] h-[1rem] object-contain" />
              <div>
                <p>1234 Sample Street</p>
                <p>Austin Texas 78704</p>
              </div>
            </div>

            <div className="flex gap-[1rem]">
              <img src="/icon_phone.png" alt="phone icon" className="w-[1rem] h-[1rem] object-contain" />
              <p>512.333.2222</p>
            </div>

            <div className="flex gap-[1rem]">
              <img src="/icon_email.png" alt="mail icon" className="w-[1rem] h-[1rem] object-contain" />
              <p>sampleemail@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-[2rem]">
            <h2>Social Media</h2>
            <div className="flex flex-row gap-[1rem]">
              <img src="/icon_facebook.png" alt="facebook" className="w-[1rem] h-[1rem] object-contain" />
              <img src="/icon_twitter.png" alt="twitter" className="w-[1rem] h-[1rem] object-contain" />
              <img src="/icon_linkedIn.png" alt="linkedin" className="w-[1rem] h-[1rem] object-contain" />
              <img src="/icon_pinterest.png" alt="pinterest" className="w-[1rem] h-[1rem] object-contain" />
            </div>
          </div>
        </section>

        <p className="text-center text-xs">© 2021 All Rights Reserved</p>
      </article>
    </>
  )
}
