Highcharts.chart('container-history', {
    chart: {
        type: 'line'
    },
    title: {
        text: ''
    },
    xAxis: {
        title: {
            text: 'Year'
        },
        categories: [
        '1834',
        '1865',
        '1867',
        '1873',
        '1875',
        '1876',
        '1877',
        '1923',
      ] // Replace with your years
    },
    yAxis: {
        title: {
            text: 'Rf'
        }
    },
    // hodnoty na ose y odpovídají pořadí roků v poli categories
    series: [{
        name: 'direct speach as an inner monologue',
        data: [{
          y: 3876.97,
          name: 'Karel H. Mácha: Marinka'
        }, {
          y: 7059.96,
          name: "Jakub Arbes: Ďábel na skřipci"
        }, {
          y: 31991.17,
          name: "Jan Neruda: Týden v tichém domě"
        }, {
          y: 627.77,
          name: "Jakub Arbes: Sivooký démon"
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }]},

        // další segment
        {
        name: 'unrealised direct speach',
        data: [{
          y: 1292.32,
          name: 'Karel H. Mácha: Marinka'
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }]},

        // další segment
        {
        name: 'personal narrator',
        data: [{
          y: 0,
          name: ''
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 116584.96,
          name: "Jakub Arbes: Sivooký démon"
        }, {
          y: 199544.74,
          name: "Jakub Arbes: Zázračná madona"
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }]},

        // další segment
        {
        name: 'narrator - character',
        data: [{
          y: 888601.71,              
          name: 'Karel H. Mácha: Marinka'
        }, {
          y: 618665.38,
          name: "Jakub Arbes: Ďábel na skřipci"
        }, {
          y: 744444.44,
          name: "Jakub Arbes: Elegie o černých očích"
        }, {
          y: 532165.49,
          name: "Jakub Arbes: Sivooký démon"
        }, {
          y: 479159.62,
          name: "Jakub Arbes: Zázračná madona"
        }, {
          y: 989577.77,
          name: "Jan Neruda: Svatováclavská mše"
        },{
          y: 859510.81,
          name: "Jan Neruda: Jak to přišlo..."
        },
        {
          y: 0,
          name: ""
        }
      ]},

        // další segment
        {
        name: 'heterodiegetic narrator',
        data: [{
          y: 627846.30,
          name: 'Karel H. Mácha: Křivoklad'
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: "0"
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }]},

        // další segment
        {
        name: 'rethorical narrator',
        data: [{
          y: 0,
          name: ''
        }, {
          y: 0,
          name: ""
        }, {
          y: 476098.55,
          name: "Jan Neruda: Týden v tichém domě"
        }, {
          y: 0,
          name: "0"
        }, {
          y: 930945.47,
          name: "Jan Neruda: Pan Ryšánek a pan Schlegl"
        }, {
          y: 911920.53,
          name: "Jan Neruda: Jak si nakouřil pan Vorel pěnovku"
        }, {
          y: 0,
          name: ""
        }, {
          y: 502562.43,
          name: "Jaroslav Hašek: Osudy dobrého vojáka Švejka... I"
        }]},

        // další segment
        {
        name: 'intradiegetic narrator of 1st degree',
        data: [{
          y: 0,
          name: ''
        }, {
          y: 43423.60,
          name: "Jakiub Arbes: Ďábel na skřipci"
        }, {
          y: 0,
          name: ""
        }, {
          y: 293351.17,
          name: "Jakub Arbs: Svatý Xaverius"
        }, {
          y: 207558.67,
          name: "Jan Neruda: Večerní šplechty"
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }]},

        // další segment
        {
        name: 'direct speach in intradiegetic narrator of 1st degree',
        data: [{
          y: 0,
          name: ''
        }, {
          y: 5222.44,
          name: "Jakub Arbes: Ďábel na skřipci"
        }, {
          y: 0,
          name: ""
        }, {
          y: 14887.00,
          name: "Jakub Arbes: Sivooký démon"
        }, {
          y: 10362.69,
          name: "Jan Neruda: Večerní šplechty"
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }]},

        // další segment
        {
        name: 'intradigetic narrator of 2st degree',
        data: [{
          y: 0,
          name: ''
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 27354.71,
          name: "Jakub Arbes: Svatý Xaverius"
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }]},

        // další segment
        {
        name: 'direct speach in intradiegetic narrator of 2st degree',
        data: [{
          y: 0,
          name: ''
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 14583.42,
          name: "Jaku Arbes: Svatý Xaverius"
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }, {
          y: 0,
          name: ""
        }]},

        // další segment
        {
        name: 'text-in-text',
        data: [{
          y: 27914.19,
          name: 'Karel H. Mácha: Marinka'
        }, {
          y: 44100.58,
          name: "Jakub Arbes: Ďábel na skřipci"
        }, {
          y: 188407.80,
          name: "Jan Neruda: Týden v tichém domě"
        }, {
          y: 8699.03,
          name: "Jakub Arbes: Sivooký démon"
        }, {
          y: 18764.03,
          name: "Jaku Arbes: Zázračná madona"
        }, {
          y: 150213.28,
          name: "Jan Neruda: Psáno o letošních dušičkách"
        }, {
          y: 13577.73,
          name: "Jan Neruda: Figurky"
        }, {
          y: 0,
          name: ""
        }]},
    
      ]
    });