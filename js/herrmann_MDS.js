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
        name: 'Ignát Herrmann',
        data: [
            { x: -119.5574925, y: -468.316939, name: 'U snědeného krámu I' },
            {x: 929.0344298, y: 991.3742863, name: 'U snědeného krámu II'},
            {x: 2392.839984, y: 1141.64855, name: 'U snědeného krámu III'},
            {x: 1121.653245, y: -127.4778245, name: 'U snědeného krámu IV'},
            {x: -174.3945243, y: 1587.792125, name: 'Otec Kondelík a ženich Vejvara'},
            {x: -1187.380597, y: 1768.583397, name: 'Tchán Kondelík a zeť Vejvara'},
            {x: -4591.392612, y: -265.5987834, name: 'Zamrzá!'},
            {x: -3573.236634, y: 4516.339253, name: 'Spiritista'},
            {x: 2454.543361, y: 4478.389071, name: 'Dvě těžké chvíle ze života páně Klokočova'},
            {x: 7535.703036, y: 4758.412117, name: 'To se tak nebere'},
            {x: -1980.997128, y: 5155.080955, name: 'Ztracený ráj páně Tetřevův'},
            {x: -7905.14923, y: 1752.098282, name: 'Malíř a malíř!'},
            {x: 4745.565416, y: 824.9991524, name: 'Proč pan Tadeáš Bezinka chodí oholen a ostříhán'},
            {x: 132.3752179, y: 6214.769771, name: 'Pan Alojs'},
            {x: -1276.933037, y: -4409.682132, name: 'Dobrý muž Koňura'},
            {x: -4838.749974, y: 1860.574964, name: 'Kterak pan Vilibald Vonásek dobyl svobody'},
            {x: 1019.845121, y: -3910.766362, name: 'Poslední sázka'},
            {x: -7342.520276, y: -2390.251648, name: 'Tajný společník páně Kobrčův'},
            {x: -4861.168451, y: -5612.804758, name: 'Smlouva pánů Škrabouta a Rysa'},
            {x: 8312.185683, y: 590.723679, name: 'Náš Mikoláš'},
            {x: 6802.363203, y: -4967.903206, name: 'První výdělek'},
            {x: 3830.872829, y: -13883.31146, name: 'Hvězdáři'},
            {x: -1425.50157, y: 395.3275112, name: 'Příběh dušičkový'}
            
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