import React from 'react'
import styles from './Chat.module.css'
import { message } from '../../../model/types'

function Chat(props:message) {
    return (
        props.sender.id === 1 ?
        <div className={styles.container}>
            <div className={styles.image}>
                <img src="./logo192.png" alt="" />
            </div>
            <div className={styles.message}>
                {props.message}
            </div>
        </div>
        :
        <div className={styles.container2}>
            <div className={styles.image2}>
                <img src="./logo192.png" alt="" />
            </div>
            <div className={styles.message2}>
                {props.message} 
            </div>
        </div>
    )
}

export default Chat