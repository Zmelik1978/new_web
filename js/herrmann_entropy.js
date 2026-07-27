Highcharts.chart('container-entropy', {
    title: {
        text: "Entropy"
    },
    yAxis: {
        title: {
            text: 'Entropy'
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
        color: '#009900'
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
            lineColor: 'green',
            name: 'entropy',
            color: 'green',
            data: [
                9.10,
                9.01,
                8.92,
                8.90,
                8.91,
                8.78, //Tchán Kondelík a zeť Vejvara
                7.98, //Zamrzá!
                7.87, //Spiritista
                8.14, //Dvě těžké chvíle ze života páně Klokočova
                8.25, //To se tak nebere!
                8.01, //Ztracený ráj páně Tetřevův 
                8.10, //Malíř a malíř!
                8.32, //Proč pan Tadeáš Bezinka chodí oholen a ostříhán
                7.99, //Pan Alojs
                8.25, //Dobrý muž Koňura
                8.01, //Kterak pan Vilibald Vonásek dobyl svobody
                8.16, //Poslední sázka
                7.88, //Tajný společník páně Kobrčův
                8.13, //Smlouva pánů Škabrouta a Rysa – a její zánik
                8.07, //Náš Mikoláš
                8.17, //První výdělek
                8.21, //Hvězdáři
                8.90,
                8.80,  // Příběh dušičkový
            ] // entropy
        }, {
        
            marker: {
            fillColor: 'transparent'
        },
            lineColor: 'brown',
            name: 'rel. entropy',
            color: 'brown',
            data: [
                0.73,
                0.72,
                0.71,
                0.71,
                0.67,
                0.66, //Tchán Kondelík a zeť Vejvara
                0.83, //Zamrzá!
                0.83, //Spiritista
                0.81, //Dvě těžké chvíle ze života páně Klokočova
                0.82, //To se tak nebere!
                0.82, //Ztracený ráj páně Tetřevův 
                0.82, //Malíř a malíř!
                0.80, //Proč pan Tadeáš Bezinka chodí oholen a ostříhán
                0.82, //Pan Alojs
                0.79, //Dobrý muž Koňura
                0.82, //Kterak pan Vilibald Vonásek dobyl svobody
                0.81, //Poslední sázka
                0.81, //Tajný společník páně Kobrčův
                0.83, //Smlouva pánů Škabrouta a Rysa – a její zánik
                0.78, //Náš Mikoláš
                0.82, //První výdělek
                0.83, //Hvězdáři
                0.75,
                0.70, // Příběh dušičkový
            ] // rel. entropy

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