interface DarkmodeProps {
  // activatingDarkMode: boolean
  onClick: () => void
  iconImg?: boolean
}

export default function Darkmode({ onClick, iconImg }: DarkmodeProps) {
  return (
    <>
      {/* <div className={`${activatingDarkMode ? "bg-black text-white" : "bg-white text-black"}`}></div> */}
      <button className="w-[1.5rem] h-[1.5rem] cursor-pointer" onClick={onClick}>
        <img
          src={`${iconImg ? "/icon_light_mode.png" : "/icon_dark-mode.png"}`}
          alt="darkmode icon"
          className="object-contain"
        />
      </button>
    </>
  )
}

// export default function Darkmode() {
//   const [darkMode, setDarkMode] = useState<boolean>(false)

//   function changingMode() {
//     setDarkMode(!darkMode)
//   }

//   return (
//     <>
//       <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}></div>
//       <button className="w-[1.5rem] h-[1.5rem] cursor-pointer" onClick={changingMode}>
//         <img src="/icon_dark-mode.png" alt="darkmode icon" className="object-contain" />
//       </button>
//     </>
//   )
// }
