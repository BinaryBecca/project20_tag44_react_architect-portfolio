import Nav from "../nav/Nav"

interface HeaderProps {
  onClick: () => void
  activatingDarkMode: boolean
}

export default function Header({ onClick, activatingDarkMode }: HeaderProps) {
  return (
    <>
      <header>
        <Nav onClick={onClick} activatingDarkMode={activatingDarkMode} />
      </header>
    </>
  )
}
