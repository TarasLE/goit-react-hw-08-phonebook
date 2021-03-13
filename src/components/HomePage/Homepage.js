import React from 'react'
import styles from './Homepage.module.css'
import Picture from '../../img/HomePage2.webp'
import { CSSTransition } from 'react-transition-group'

const Homepage = () => (
    <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={{
            appear: styles.HeaderFadeAppear,
            appearActive: styles.HeaderFadeAppearActive,
        }}
    >
        <div className={styles.Container}>
            <h1>Lets create your own phonebook</h1>
            <img
                src={Picture}
                alt="loading..."
                width="400"
                className={styles.GifContainer}
            />
        </div>
    </CSSTransition>
)

export default Homepage
