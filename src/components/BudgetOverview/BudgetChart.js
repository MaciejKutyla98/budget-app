import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BudgetChart(props) {
    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right'
            },
            title: {
                display: false,
                text: 'Overview Totals'
            },
        },
    };

    const data = {
        data: {
            labels: ['Income', 'Expenses', 'Money Left'],
            datasets: [{
                label: 'Overview Totals',
                backgroundColor: ['rgba(35, 209, 96,0.75)', 'rgba(255, 56, 96,0.75)', 'rgba(32, 156, 238,0.75)'],
                borderColor: ['rgba(35, 209, 96,0.75)', 'rgba(255, 56, 96,0.75)', 'rgba(32, 156, 238,0.75)'],
                data: [
                    props.totalIncome.toFixed(2),
                    -1 * props.totalExpense.toFixed(2),
                    props.amountOfMoney.toFixed(2)
                ]
            }]
        }
    };

    return (
        <Bar options={options} data={data.data} />
    );
}

export default BudgetChart;