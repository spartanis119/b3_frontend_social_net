import { Outlet } from "react-router-dom"
import { HeaderPriv } from "./HeaderPriv"
import { Sidebar } from "./Sidebar"

export const PrivateLayout = () => {
  return (
    <>
      {/* Menu de navegacion principal */}
      <HeaderPriv />
      {/* Contenido principal */}
      <section className="layout_content">
        <Outlet />
      </section>
      {/* Sidebar */}
      <Sidebar/>
    </>
  )
}
