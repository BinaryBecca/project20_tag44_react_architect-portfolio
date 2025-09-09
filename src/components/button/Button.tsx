import { Link } from "react-router"

interface ButtonProps {
  buttonText: string
  to: string
  backgroundColor?: "white" | "black"
  textColor?: "white" | "black"
  arrowImage?: "/icon_arrow.png" | "/icon_arrow_black.png"
}

export default function Button({
  buttonText,
  to,
  backgroundColor = "black",
  textColor = "white",
  arrowImage = "/icon_arrow.png",
}: ButtonProps) {
  return (
    <>
      <Link
        to={to}
        style={{ backgroundColor }}
        className={`flex flex-row items-center justify-center gap-[1.5rem] p-[2rem] max-w-[15rem] mt-[3rem] text-${textColor}`}>
        {buttonText}
        <img src={arrowImage} alt="icon arrow" />
      </Link>
    </>
  )
}
