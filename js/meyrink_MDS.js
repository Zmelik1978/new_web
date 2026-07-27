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
        name: 'Gustav Meyrink',
        data: [
            { x: 1521.838403, y: 1407.173296, name: 'Golem' },
            { x: 4787.243642, y: -6028.354304, name: 'Neviditelná Praha' },
            { x: 81.14681608, y: 254.6714917, name: 'Valpuržina noc' },
            { x: 456.5582456, y: 3598.815448, name: 'Bílý dominikán' },
            { x: -2867.838615, y: -3173.864489, name: 'Pražská vizitka' },
            { x: -465.0562672, y: 1609.649456, name: 'Zelená tvář' },
            { x: -3513.892225, y: 2331.9091, name: 'Anděl západního okna' }
            ],
        dataLabels: {
            enabled: true,
            format: '{point.name}',
            style: {
                fontSize: '10px',
                color: '#000000'
            }
        }
    }]
});