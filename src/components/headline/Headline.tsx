interface HeadlineProps {
  headline: string
  headline2?: string
  activatingDarkMode: boolean
}

export default function Headline({ headline, headline2, activatingDarkMode }: HeadlineProps) {
  return (
    <>
      <div className="leading-[3rem] mb-[2rem]">
        <h1 className="text-[3rem] font-light text-gray-400">{headline}</h1>
        <h2 className={`text-[3rem] font-bold ${activatingDarkMode ? "text-white" : "text-gray-400"}`}>{headline2}</h2>
      </div>
    </>
  )
}
