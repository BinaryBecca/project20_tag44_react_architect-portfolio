import Contacts from "../../components/contacts/Contacts"
import Headline from "../../components/headline/Headline"
import Button from "../../components/button/Button"

export default function Homepage() {
  return (
    <>
      <section className="grid grid-cols-[1fr_2fr] gap-[1rem] items-center mb-[4rem]">
        <Headline headline="PROJECT" headline2="Lorum" />

        <div className="relative">
          <img src="/Home1.jpg" alt="house" className="object-contain" />
          <div className="absolute bottom-0 left-0">
            <Button
              to=""
              buttonText="View Project"
              backgroundColor="white"
              textColor="black"
              arrowImage="/icon_arrow_black.png"
            />
          </div>
        </div>
      </section>
    </>
  )
}
