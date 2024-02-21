import React from 'react'
import styles from './Transaction.module.css'
import { transaction } from '../../../model/types'
import { RiMore2Fill } from 'react-icons/ri'

function Transaction(props:transaction) {
    const year = props.date.getFullYear()
    const month = props.date.getMonth()
    const day = props.date.getDate()

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.image}>
                    <img src="./logo192.png" alt="" />
                </div>
                <div className={styles.desc}>
                    <div className={styles.name}>
                        {props.user.name}
                    </div>
                    <div className={styles.date}>
                        {props.date.toLocaleDateString('en-gb', {
                            day: "2-digit",
                            month: 'long',
                            year: 'numeric'
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.price}>
                    ${props.price.toString()}
                </div>
                <div className={styles.more}>
                    <RiMore2Fill />
                </div>
            </div>
        </div>
    )
}

export default Transaction