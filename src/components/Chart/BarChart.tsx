import React from 'react'
import styles from './BarChart.module.css'
import { RiArrowDownSLine } from 'react-icons/ri'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement
} from 'chart.js'

import { Bar } from 'react-chartjs-2' 

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Filler,
    Title,
    Tooltip,
    Legend
)


const data = {
  labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
  datasets: [
    {
		backgroundColor: "#525bec",
		data: [60, 30, 30, 23, 20],
    },
	{
		backgroundColor: "#c8caff",
      	data: [55, 23, 18, 15, 10],
	}
  ],
};

const options = {
	scales: {
		y: {
			ticks: {
				beginAtZero: true,
				stepSize: 20
			}
		}
	},
	plugins: {
		legend: {
			display: false
		}
	}
}

function BarChart() {
	return (
		<div className={styles.graph}>
			<div className={styles.dropdown}>
				Filter <RiArrowDownSLine />
				<div className={styles.dropdown_menu}>
					<div className={styles.dropdown_item1}>Month</div>
					<div className={styles.dropdown_item2}>Balance</div>
				</div>
			</div>
			<div className={styles.bar}>
				<Bar data={data} options={options} />
			</div>
		</div>
	)
}

export default BarChart