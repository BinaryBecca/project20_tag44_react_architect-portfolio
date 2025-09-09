import Nav from "../nav/Nav"

interface HeaderProps {
  onClick: () => void
  iconImg?: boolean
}

export default function Header({ onClick, iconImg }: HeaderProps) {
  return (
    <>
      <header>
        <Nav onClick={onClick} iconImg={iconImg} />
      </header>
    </>
  )
}
