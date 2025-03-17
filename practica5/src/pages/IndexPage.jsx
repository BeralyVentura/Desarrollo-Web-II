import React from "react";
import { useLocation } from "react-router-dom"

export const IndexPage = () => {

const {pathname}=useLocation() 
    const isHome = pathname === '/'

  return (
    <div>IndexPage</div>
  )
}
