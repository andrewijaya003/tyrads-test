import React from 'react'
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
    BarElement,
    DoughnutController,
    ArcElement
} from 'chart.js'

import { Doughnut } from 'react-chartjs-2' 

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    DoughnutController,
    ArcElement,
    Filler,
    Title,
    Tooltip,
    Legend
)

const data = {
  labels: ['Done', 'In progress', 'To do', 'Not done'],
  datasets: [
    {
      label: '',
      data: [30, 25, 25, 20],
      backgroundColor: [
        '#525bec',
        '#FAAF62',
        '#f4604e',
        '#dedde2'
      ],
      cutout: '90%',
      circumference: 180,
      rotation: 270
    }
  ]
};

const options = {
	aspectRatio: 2,
}

function HalfdoughnutChart() {
    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default HalfdoughnutChart