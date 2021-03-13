import React from 'react'
import styles from './Homepage.module.css'
// import Gif from '/javascript-gif/Gif.js'
// import Picture from '../../img/HomePage.gif'
import Picture from '../../img/HomePage2.webp'

const Homepage = () => (
    <div className={styles.Container}>
        <h1>Lets create your own phonebook</h1>
        <img
            src={Picture}
            alt="loading..."
            width="400"
            className={styles.GifContainer}
        />
    </div>
)

export default Homepage
