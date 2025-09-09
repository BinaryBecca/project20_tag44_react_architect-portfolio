import React from "react"

interface HeadlineProps {
  headline: string
  headline2?: string
}

export default function Headline({ headline, headline2 }: HeadlineProps) {
  return (
    <>
      <div className="leading-[3rem] mb-[2rem]">
        <h1 className="text-[3rem] font-light text-gray-400">{headline}</h1>
        <h2 className="text-[3rem] font-bold text-black">{headline2}</h2>
      </div>
    </>
  )
}
