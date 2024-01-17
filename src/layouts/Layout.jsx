import React from 'react'
import styles from "./Layout.module.css"
import { FaHeart } from "react-icons/fa";

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <h1> Crypto App</h1>
        <p>
            <a href="https://botostart.ir">Botostart</a> | React.js
            </p>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Developed by Mona with  </p>
        <FaHeart style={{color:"red"}} />
        
    </footer>
    </>
  )
}

export default Layout