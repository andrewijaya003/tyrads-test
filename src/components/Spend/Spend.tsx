import React from 'react'
import styles from './Spend.module.css'
import { spend } from '../../../model/types'

const spends: spend[] = [
    {
        id: 1,
        user: {
			id: 1,
			name: "Jhon .D"
		},
        name: 'Online store',
        date: new Date(Date.parse('2023-05-30T08:00:00Z'))
    },
    {
        id: 2,
        user: {
			id: 1,
			name: "Jhon .D"
		},
        name: 'Pay the hospital',
        date: new Date(Date.parse('2023-05-28T22:00:00Z'))
    },
    {
        id: 3,
        user: {
			id: 1,
			name: "Jhon .D"
		},
        name: 'Tickets',
        date: new Date(Date.parse('2023-05-10T12:00:00Z'))
    }
]

function Spend() {
    return (
        <div className={styles.container}> 
            {
                spends.map((s) => (
                        <div className={styles.wrap}>
                            <div className={styles.image}>
                                <img src="./logo192.png" alt="" />
                            </div>
                            <div className={styles.desc}>
                                <div className={styles.name}>
                                    {s.name}
                                </div>
                                <div className={styles.date}>
                                    {s.date.toLocaleDateString('en-us', {
                                        day: "2-digit",
                                        month: 'long',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </div>
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}

export default Spend