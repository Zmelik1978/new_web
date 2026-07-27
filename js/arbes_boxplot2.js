Highcharts.chart('container-boxplot2', {

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
            'Advokát chuďasů',
            'Lotr Gólo',
            'Duhový bod nad hlavou',
            'Lilie v úpalu slunečním',
            'Duhokřídlá Psyché',
            'Poslední dnové lidstva',
            'Moderní Magdaléna',
            'Před domem smutku',
            'Připij si, bratříčku!',
            'Svatý Václav',
            'Trilobit',
            'Zbožňovatel slečny Esterházy',
            'Démantová garnitura',
            'Kamarádi',
            'Nalezenec',
            'Noc na hřbitově',
            'Odumírající drahokam',
            'Sladký hřích',
            'Bílé svatební šaty',
            'Blíženci',
            'Jedna z těch, které mě zajímaly',
            'Poslední škamna',
            'Rodinné drama',
            'Zpuchřelá nitka',
            'Dobrodružství ve výsadní hospodě',
            'Lampičky',
            'Penězokaz',
            'Samovrah',
            ],
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
            [1, 9, 17, 30, 175], // Advokát chu´dasů
            [1, 10, 18, 29, 195], // Lotr Gólo
            [3, 10, 16, 26, 74], // Duhový bod nad hlavou
            [2, 8, 16, 23, 102], // Lilie v úpalu slunečním
            [1, 10, 17, 28, 191], // Duhokřídlá Psyché
            [1, 11, 21, 34, 164], // Poslední dnové lidstva
            [1, 9, 16, 26, 178], // Moderní Magdaléna
            [1, 9, 16, 27, 169], // Před domem smutku
            [1, 9, 15, 25, 159], // Připij si, bratříčku!
            [1, 10, 17, 30, 136], // Svatý Václav
            [3, 13, 23, 32, 145], // Trilobit
            [1, 10, 16, 27, 121], //  Zbožňovatel slečny Esterházy
            [1, 9, 17, 30, 221], // Démantová garnitura, 
            [1, 8, 15, 26, 82], // Kamrádi 
            [2, 11, 19, 28, 131], //Nalezenec
            [1, 10, 20, 31, 130], // Noc na hřbitově
            [2, 11, 17, 27, 131], // Odumírající drahokam
            [1, 12, 20, 32, 130], // Sladký hřích
            [1, 9, 16, 26, 92], // Bílé svatební šaty
            [3, 11, 17, 28, 91], // Blíženci
            [1, 11, 19, 31, 122], //Jedna z těch, které mě zajímaly
            [1, 10, 18, 29, 146], // Poslední škamna
            [1, 9, 15, 23, 107], // Rodinné drama
            [2, 9, 14, 22, 99], // Zpuchřelá nitka
            [2, 10, 18, 26, 87], // Dobrodružství ve výsadní hospodě
            [1, 9, 16, 29, 135], // Lampičky
            [2, 9, 14, 22, 62], // Penězokaz
            [1, 12, 21, 29, 92], // Samovrah
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
