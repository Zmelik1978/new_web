Highcharts.chart('container-boxplot', {

    chart: {
        type: 'boxplot'
    },

    title: {
        text: ""
    },

    legend: {
        enabled: false
    },

    xAxis: {
        categories: [
            'U snědeného krámu I', 
            'U snědeného krámu II',
            'U snědeného krámu III',
            'U snědeného krámu IV',
            'Otec Kondelík a ženich Vejvara',
            'Tchán Kondelík a zeť Vejvara',
            'Zamrzá! (ZPZ)',
            'Spiritista (ZPZ)',
            'Dvě těžké chvíle ze života páně Klokočova (ZPZ)',
            'To se tak nebere! (ZPZ)',
            '\"Ztracený ráj\" páně Tetřevův (ZPZ)',
            'Malíř a malíř! (ZPZ)',
            'Proč pan Tadeáš Bezinka chodí oholen a ostříhán (ZPZ)',
            'Pan Alojs (ZPZ)',
            'Dobrý muž Koňura (ZPZ)',
            'Kterak pan Vilibald Vonásek dobyl svobody (ZPZ)',
            'Poslední sázka (ZPZ)',
            'Tajný společník páně Kobrčův (ZPZ)',
            'Smlouva pánů Škrabrouta a Rysa - a její zánik (ZPZ)',
            'Náš \"Mikoláš\" (ZPZ)',
            'První výdělek (ZPZ)',
            'Hvězdáři (ZPZ)',
            'Historie o doktoru Faustovi',
            'Příběh dušičkový'
            ]
    },
    plotOptions: {
        series: {
            color: '#004C99'
            }
    },
    yAxis: {
        title: {
            text: 'sentence length per word count'
        },
        plotLines: []
    },

    series: [{
        name: 'Hodnoty',
        data: [
            [1, 8, 14, 23, 136],
            [1, 9, 14, 22, 145],
            [1, 9, 15, 24, 132],
            [1, 9, 14, 22, 104],
            [1, 7, 12, 20, 132],
            [1, 7, 13, 20, 176], // Tchán Kondelík
            [1, 7, 14, 22, 72],
            [2, 9, 15, 25, 78],
            [2, 12, 19, 31, 89], //Dvě těžké chvíle
            [1, 11, 16, 24, 83],
            [1, 11, 22, 39, 128],
            [1, 8, 16, 22, 102], //MAlíř a malíř!
            [1, 9, 16, 26, 124],
            [2, 9, 14, 20, 95],
            [2, 11, 16, 24, 57], // Dobrý muž Koňura
            [2, 9, 15, 25, 95], 
            [2, 9, 15, 23, 59], 
            [1, 10, 16, 23, 58], //Tajný společník páně Kobrčův
            [1, 12, 18, 26, 77],
            [2, 8, 15, 23, 108],
            [3, 11, 16, 24, 99],
            [2, 11, 22, 31, 144],
            [2, 14, 21, 31, 162], // Historie o doktoru Faustovi
            [1, 7, 11, 18, 101], // Příběh dušičkový
            ],
        
    }, {
        name: 'Outliers',
        color: Highcharts.getOptions().colors[0],
        type: 'scatter',
        data: [ // x, y positions where 0 is the first category

        ],
        marker: {
            fillColor: 'white',
            lineWidth: 1,
            lineColor: Highcharts.getOptions().colors[0]
        },
        tooltip: {
            pointFormat: 'Observation: {point.y}'
        }
    }]

});
