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
        name: 'Karel Hynek Mácha',
        data: [
            { x: 1647.62, y: 1669.37, name: 'Cikáni' },
            { x: 9346.12, y: 8919.10, name: 'Karlův Tejn' },
            { x: 10650.45, y: 3363.74, name: 'Klášter sázavský' },
            { x: 4187.51, y: 1803.43, name: 'Křivoklad' },
            { x: 8.81, y: 5702.13, name: 'Márinka' },
            { x: -13444.42, y: 8071.46, name: 'Návrat' },
            { x: -538.01, y: -4613.80, name: 'Pouť krkonošská' },
            { x: 11823.56, y: -26871.85, name: 'Poutník' },
            { x: -9106.03, y: 19119.24, name: 'Přísaha' },
            { x: 4360.08, y: -7920.91, name: 'Sen' },
            { x: -15926.01, y: -13258.76, name: 'Svět smyslný' },
            { x: -10546.85, y: -127.33, name: 'Svět zašlý' },
            { x: 3953.87, y: 8031.34, name: 'Valdice' },
            { x: 9110.47, y: -2142.99, name: 'Viasil Viasilovič' }
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