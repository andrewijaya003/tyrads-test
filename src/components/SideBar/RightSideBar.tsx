import React from 'react'
import styles from './RightSideBar.module.css'
import { RiArrowRightLine, RiMore2Fill } from 'react-icons/ri'
import Spend from '../Spend/Spend'

function RightSideBar() {
    return (
        <div className={styles.sidenav}>
            <div className={styles.sec1}>
                <div className={styles.title}>
                    Expenses and income
                </div>
                <div className={styles.details}>
                    <div className={styles.expensedetail}>
                        <div className={styles.expense}>
                            Expense
                        </div>
                        <div className={styles.percentage}>
                            75%
                        </div>
                        <div className={styles.number}>
                            5653
                        </div>
                    </div>
                    <div className={styles.separator}>
                        <div className={styles.sep} />
                        <div className={styles.vs}>
                            VS
                        </div>
                        <div className={styles.sep} />
                    </div>
                    <div className={styles.incomedetail}>
                        <div className={styles.income}>
                            Income
                        </div>
                        <div className={styles.percentage}>
                            25%
                        </div>
                        <div className={styles.number}>
                            2656
                        </div>
                    </div>
                </div>
                <div className={styles.laser}>
                    <div className={styles.laserexpense} />
                    <div className={styles.laserincome} />
                </div>
            </div>
            <div className={styles.sec2}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        Latest spending
                    </div>
                    <div className={styles.more}>
                        <RiMore2Fill />
                    </div>
                </div>
                <div className={styles.spends}>
                    <Spend />
                </div>
                <div className={styles.view}>
                    View all <RiArrowRightLine />
                </div>
            </div>
            <div className={styles.sec3}>
                <div className={styles.top}>
                    Go to premium
                </div>
                <div className={styles.crown}>
                    <img src="./crown.png" alt="" />
                </div>
                <div className={styles.ask}>
                    Need more features?
                </div>
                <div className={styles.ans}>
                    Update your account to premium to get more features
                </div>
                <div className={styles.button}>
                    Get now
                </div>
            </div>
        </div>
    )
}

export default RightSideBar