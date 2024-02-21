import React from 'react'
import styles from './Item.module.css'
import { item } from '../../../model/types'
import { RiMore2Fill } from "react-icons/ri";

function Item(props:item) {
    return (
        <label className={styles.container}>
            <div>
                {props.name}
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
            </div>
            <RiMore2Fill />
        </label>
    )
}

export default Item