Highcharts.chart('container-sentiment-analysis', {

    chart: {
        type: 'columnrange',
        inverted: true
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: [
            "U snědeného krámu I", 
            "U snědeného krámu II",
            "U snědeného krámu III",
            "U snědeného krámu IV",
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
            'Smlouva pánů Škrabouta a Rysa - a její zánik (ZPZ)',
            'Náš \"Mikoláš\" (ZPZ)',
            'První výdělek (ZPZ)',
            'Hvězdáři (ZPZ)',
            'Příběh dušičkový'
            ]
    },

    yAxis: {
        title: {
            text: ''
        }
    },

    tooltip: {
        valueSuffix: ''
    },

    plotOptions: {
        columnrange: {
            dataLabels: {
                enabled: true,
                format: '{y}'
            }
        }
    },

    legend: {
        enabled: false
    },

    series: [{
        name: '',
        data: [
            [-496, 388],   
            [-419, 384],
            [-516, 471],
            [-552, 408],
            [-749, 637],
            [-735, 618], //Tchán Kondelík a zeť Vejvara
            [-44, 48], //Zamrzá!
            [-49, 60], //Spiritista
            [-59, 88], //Dvě těžké chvíle ze života páně Klokočova
            [-70, 79], //To se tak nebere!
            [-49, 63], //Ztracený ráj páně Tetřevův
            [-54, 81], //Malíř a malíř!
            [-88, 127], //Proč pan Tadeáš Bezinka chodí oholen a ostříhán
            [-65, 67], //Pan Alojs
            [-139, 119], //Dobrý muž Koňura
            [-57, 67], //Kterak pan Vilibald Vonásek dobyl svobody
            [-78, 77], //Poslední sázka
            [-65, 69], //Tajný společník páně Kobrčův
            [-59, 72], //Smlouva pánů Škabrouta a Rysa – a její zánik
            [-92, 114], //Náš Mikoláš
            [-66, 45], //První výdělek
            [-56, 50], //Hvězdáři
            [-526, 431], // Příběh dušičkový
        ]
    }]

});