Highcharts.chart('container-PCA', {
    chart: {
        height: 1200,
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'MDS Distant Matrix'
    },
    xAxis: {
        title: {
            text: 'MDS 1'
        },
        gridLineWidth: 0, // Removes grid lines on the X-axis
        plotLines: [{
            color: 'black', // Vertical axis color
            width: 1,       // Vertical axis width
            value: 0        // Position of the vertical axis
        }]
    },
    yAxis: {
        title: {
            text: 'MDS 2'
        },
        gridLineWidth: 0, // Removes grid lines on the Y-axis
        plotLines: [{
            color: 'black', // Horizontal axis color
            width: 1,       // Horizontal axis width
            value: 0        // Position of the horizontal axis
        }]
    },
    series: [{
        name: 'Karolina Světlá',
        data: [
            { x: 1794.504975, y: -1112.910055, name: 'F. L. Věk I' },
            { x: -869.2678251, y: -2533.919566, name: 'F. L. Věk II' },
            { x: -1945.509473, y: -912.3173037, name: 'F. L. Věk III' },
            { x: 23.27381655, y: 793.8135048, name: 'F. L. Věk IV' },
            { x:  -931.9234682, y: -185.6127899, name: 'F. L. Věk V' },
            { x: 4597.103526, y: 1298.626748, name: 'Filozofská historie' },
            { x: -2668.181551, y: 2652.319462, name: 'Temno'}
            
            
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}', // Displays the name of the point
            style: {
                fontSize: '10px',
                color: '#000000'
            }
        }
    }]
});