import React, {useState} from 'react'

import {IoMdHelpBuoy} from 'react-icons/io'
import {IoSearch, IoCart} from 'react-icons/io5'
import {AiOutlineUser} from 'react-icons/ai'

import './index.css'

export default function Header() {
  const [toggle, setToggle] = useState(false)

  const showSideMenu = () => {
    setToggle(true)
  }

  const hideSideMenu = () => {
    setToggle(false)
  }

  return (
    <>
      <div
        className="side-box"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? 'visible' : 'hidden',
        }}
      >
        <div
          onClick={e => {
            e.stopPropagation()
          }}
          className="side-menu-content"
          style={{
            left: toggle ? '0%' : '-100%',
          }}
        ></div>
      </div>
      <header className="head">
        <div className="head1">
          <div className="head2">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
              alt="swiggy-logo"
              className="swiggy-img"
            />
          </div>
          <div className="head-options">
            <span className="font-bold">BM Nagar</span> Hyderabad, Telangana
            India
          </div>
          <div>
            <img
              src="https://www.svgrepo.com/show/315098/caret-down.svg"
              className="caret-down"
              onClick={showSideMenu}
            />
          </div>
          <nav className="list-items">
            <li className="list-it">
              <IoSearch />
              Search
            </li>
            <li className="list-it">
              <img
                src="https://cdn-icons-png.flaticon.com/512/272/272535.png"
                className="list-image"
                alt="discount"
              />
              Offers
            </li>
            <li className="list-it">
              <IoMdHelpBuoy />
              Help
            </li>
            <li className="list-it">
              <AiOutlineUser />
              Sign In
            </li>
            <li className="list-it">
              <IoCart />
              Cart
            </li>
          </nav>
        </div>
      </header>
    </>
  )
}
