import Button from "../../components/button/Button"
import Headline from "../../components/headline/Headline"

interface ContactProps {
  activatingDarkMode: boolean
}

export default function Contacts({ activatingDarkMode }: ContactProps) {
  return (
    <>
      <article className="flex flex-col mb-[4rem]">
        <Headline headline="Contact Us" activatingDarkMode={activatingDarkMode} />

        <section className="grid grid-cols-[1fr_2fr] gap-[1rem]">
          <fieldset className="flex flex-col items-start justify-between gap-[.8rem]">
            <input type="text" placeholder="Name" className="bg-gray-100 p-[.8rem] w-[20rem]" />
            <input type="number" placeholder="Phone Number*" className="bg-gray-100 p-[.8rem] w-[20rem]" required />
            <input type="text" placeholder="Email*" className="bg-gray-100 p-[.8rem] w-[20rem]" required />
            <input type="text" placeholder="Interested in" className="bg-gray-100 p-[.8rem] w-[20rem]" />
            <input type="text" placeholder="Message*" className="bg-gray-100 p-[.8rem] w-[20rem] h-[8rem]" />
          </fieldset>

          <img src="/Contact.jpg" alt="Person with mobile phone" className="object-contain" />
        </section>

        <div className="flex justify-start items-start w-full h-[10rem]">
          <Button to="" buttonText="SEND EMAIL" />
        </div>
      </article>
    </>
  )
}
