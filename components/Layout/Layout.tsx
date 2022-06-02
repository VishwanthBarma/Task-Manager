import React from 'react'
import NavBar from './NavBar'

type LayoutProps = {
    children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <NavBar />
      <main>{ children }</main>
    </div>
  )
}

export default Layout