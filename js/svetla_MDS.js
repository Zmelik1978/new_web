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
            { x: -3678.047188, y: 325.1826182, name: 'Černý Petříček' },
            {x: 5354.839833, y: -2118.597017, name: 'Zvonečková královna'},
            {x: 1188.219758, y: -3494.239284, name: 'První Češka'},
            {x: 1172.754423, y: 3680.766106, name: 'Mladá paní Zapletalová'},
            {x: -3114.950797, y: 1865.763766, name: 'Na košatkách'},
            {x: -922.8160281, y: -258.8761893, name: 'Škapulíř'}
            
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