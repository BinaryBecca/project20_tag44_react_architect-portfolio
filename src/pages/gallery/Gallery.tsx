import React from "react"
import Headline from "../../components/headline/Headline"

export default function Gallery() {
  return (
    <>
      <Headline headline="Photo" headline2="Gallery" />
      <section className="flex flex-wrap gap-[2rem] mb-[4rem]">
        <div className="bg-gray-400 h-[20rem] w-[15rem]"></div>
        <img src="/Gallery1.jpg" alt="image" className="object-cover h-[20rem] w-[15rem]" />
        <img src="/Gallery2.jpg" alt="image" className="object-cover h-[20rem] w-[15rem]" />
        <img src="/Gallery3.jpg" alt="image" className="object-cover h-[20rem] w-[15rem]" />
        <img src="/Gallery4.jpg" alt="image" className="object-cover h-[20rem] w-[15rem]" />
        <img src="/Gallery5.jpg" alt="image" className="object-cover h-[20rem] w-[15rem]" />
        <img src="/Gallery6.jpg" alt="image" className="object-cover h-[20rem] w-[15rem]" />
        <img src="/Gallery7.jpg" alt="image" className="object-cover h-[20rem] w-[15rem]" />
        <img src="/Gallery8.jpg" alt="image" className="object-cover h-[20rem] w-[15rem]" />
        <img src="/Gallery9.jpg" alt="image" className="object-cover h-[20rem] w-[15rem]" />
      </section>
    </>
  )
}
