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
        name: 'Daniela Hodrová',
        data: [
            { x: -2392.234972, y: 1078.131966, name: 'Podobojí' },
            { x: -2665.937302, y: -1068.840675, name: 'Kukly'},
            { x: -76.57699728, y: -948.1740639, name: 'Théta'},
            { x: 2850.851832, y: -3672.705806, name: 'Město vidím'},
            { x: 384.5015907, y: 2471.086267, name: 'Točité věty'},
            { x: 1899.395848, y: 2140.502311, name: 'Pewrunův den'},         
            
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