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
        name: 'Jan Neruda',
        data: [
            { x: -1575.86, y: 825.95, name: 'Týden v tichém domě' },
            {x: -601.06, y: -1300.45, name: 'Figurky'},
            {x: 3225.09, y: -4760.56, name: 'Hastrman'},
            {x: -12859.30, y: 9590.69, name: 'U Tří lilií'},   
            {x: 4044.41, y: -1226.04, name: 'O měkkém srdci paní Rusky'},  
            {x: -4115.27, y: -2405.01, name: 'Pan Ryšánek a pan Schlegl'},
            {x: 1280.50, y: -7341.52, name: 'Přivedla žebráka na mizinu'},
            {x: 295.93, y: 5249.44, name: 'Večerní šplechty'},
            {x: -2154.80, y: -6251.76, name: 'Doktor Kazisvět'},
            {x: 6806.43, y: -4779.48, name: 'Jak si nakouřil pan Vorel pěnovku'},
            {x: 6868.03, y: 3608.17, name: 'Svatováclavská mše'},
            {x: 1245.45, y: -112.87, name: 'Jak to přišlo...'},
            {x: -2459.56, y: 8903.43, name: 'Psáno o letošních dušičkách'},
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