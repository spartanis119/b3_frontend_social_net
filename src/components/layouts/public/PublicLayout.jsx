import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderPub } from './HeaderPub'

export const PublicLayout = () => {
  return (
    <>
      {/* Menu de navegacion principal publico */}
      <HeaderPub />
      {/* Contenido principal public */}
      <section>
        <Outlet/>
      </section>
    </>
  )
}
