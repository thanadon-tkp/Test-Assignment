import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

//css
import '../styles/TopBar.css'

function TopBar() {
  return (
    <div className='top-bar'>
        <div className='noti-icon'>
            <FontAwesomeIcon icon={faBell} size="lg" />
        </div>
        <div className='profile-img'>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900" alt="" />
        </div>
        <div className='profile-name' onClick={() => alert('name')}>
            <p>Akkarapol</p>
        </div>
    </div>
  )
}

export default TopBar