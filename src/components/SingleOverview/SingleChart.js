import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function SingleChart(props) {
    const data = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [],
            hoverBackgroundColor: []
        }]
    };

    if (!!props.list.length){
        props.list.forEach((item, index) => {
            data.labels.push(item.description);
            data.datasets[0].data.push(parseFloat(item.amount));
            props.overview === 'Income' ? data.datasets[0].backgroundColor.push(`hsl(171,100%,${35 + 6 * index}%)`) : data.datasets[0].backgroundColor.push(`hsl(348,100%,${61 + 8 * index}%)`)
            props.overview === 'Income' ? data.datasets[0].hoverBackgroundColor.push(`hsl(173,20%,${50}%)`) : data.datasets[0].hoverBackgroundColor.push(`hsl(348,20%,${61}%)`)
        });
    }
    return (
        <Pie data={data} />
    );
}

export default SingleChart;