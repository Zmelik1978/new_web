Highcharts.chart('container-ttr', {
    title: {
        text: "TTR & MATTR"
    },
    yAxis: {
        title: {
            text: '%'
        }
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
        ],
    },
    plotOptions: {
    series: {
        color: '#FF9933'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
   
    series: [{
          
    marker: {
    fillColor: 'transparent',
    lineColor: Highcharts.getOptions().colors[0]
    
    },
        lineColor: 'red',
        name: 'TTR',
        color: 'red',
        data: [
            30.95,
            30.55,
            26.81,
            27.39,
            20.58,
            18.35, // Tchán Kondelík a zeť Vejvara
            53.18, // Zamrzá!
            50.57, //Spiritista
            47.72, //Dvě těžké chvíle ze života páně Klokočova
            52.59, //To se tak nebere!
            52.71, //Ztracený ráj páně Tetřevův
            50.82, //Malíř a malíř!
            48.99, //Proč pan Tadeáš Bezinka chodí oholen a ostříhán
            52.55, //Pan Alojs
            48.02, //Dobrý muž Koňura
            51.64, //Kterak pan Vilibald Vonásek dobyl svobody
            52.35, //Poslední sázka
            46.83, //Tajný společník páně Kobrčův
            53.06, //Smlouva pánů Škabrouta a Rysa – a její zánik
            48.32, // Náš Mikoláš
            53.49, //První výdělek
            61.32, //Hvězdáři
            36.62,
            26.33, // Příběh dušičkový
        ] // TTR - blue line
    }, {
    
        marker: {
        fillColor: 'transparent'
    },
        lineColor: 'blue',
        name: 'MATTR',
        color: 'blue',
        data: [
            83.09,
            83.35,
            83.36,
            82.93,
            83.00,
            82.68,  //Tchán Kondelík a zeť Vejvara
            82.13, //Zamrzá!
            81.84, //Spiritista
            82.30, //Dvě těžké chvíle ze života páně Klokočova
            83.57, //To se tak nebere!
            82.34, //Ztracený ráj páně Tetřevův
            82.69, //Malíř a malíř!
            83.06, //Proč pan Tadeáš Bezinka chodí oholen a ostříhán
            83.22, //Pan Alojs
            83.56, //Dobrý muž Koňura
            81.83, //Kterak pan Vilibald Vonásek dobyl svobody
            84.07, //Poslední sázka
            81.83, //Tajný společník páně Kobrčův
            82.52, //Smlouva pánů Škabrouta a Rysa – a její zánik
            82.87, //Náš Mikoláš
            83.75, //První výdělek
            85.04, //Hvězdáři
            83.87,
            82.68, // Příběh dušičkový
        ] // MATTR - red line

    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});