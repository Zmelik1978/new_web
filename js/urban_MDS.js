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
        name: 'Miloš Urban',
        data: [
            { x: 457.042184, y: 3383.012763, name: 'Poslední tečka za rukopisy'},
            {x: 3117.719997, y: 508.1125723, name: 'Sedmikostelí'},
            {x: 1677.274793, y: -158.9826181, name: 'Hastrman (1st part)'},
            {x: 731.3296754, y: -648.1920095, name: 'Hastrman (2nd part)'},
            {x: 1552.759712, y: 2039.344419, name: 'Stín katedrály'},
            {x: -1010.755692, y: -902.1965707, name: 'Lord Mord'},
            {x: -2656.626932, y: -725.5814422, name: 'Boletus Arcanus'},
            {x: -1477.521676, y: 1029.494594, name: 'Praga Piccola'},
            {x: 2356.008623, y: -2870.932378, name: 'Pole a palisáda'},
            {x: -138.6908804, y: -3125.141798, name: 'Michaela'},
            {x: -1512.370211, y: 175.8732366, name:'Továrna na maso'},
            {x: -3096.169592, y: 1295.189232, name: 'Závěrka...'}   
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