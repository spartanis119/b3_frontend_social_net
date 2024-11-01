import { NavPub } from "./NavPub"

export const HeaderPub = () => {
  return (
    <header className='layout__navbar'>
        <div className='navbar__header'>
            <a href="#" className='navbar__title'>Red Social</a>
        </div>
        <NavPub/>
    </header>
  )
}
