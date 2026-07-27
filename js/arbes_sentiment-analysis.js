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
        categories: ["Ďábel na skřipci", 
                    "Elegie o černých očích", 
                    "Svatý Xavewrius",
                    "Sivooký démon",
                    "Zázračná madona",
                    "Ukřižovaná",
                    "Newtonův mozek",
                    "Akrobati",
                    "Etiopská lilie",
                    'Šílený Job',
                    'Můj přítel vrah',
                    "Aspoň se pousměj",
                    'Dva barikádnící',
                    "První noc u mrtvoly",
                    "Il divino Boemo",
                    'Anna a Marie',
                    "Vymírající hřbitov",
                    'Kandidáti existence',
                    'Zborcené harfy tón',
                    'Adamité',
                    'Agitátor',
                    'Anděl míru I',
                    'Anděl míru II',
                    'Anděl míru III',
                    'Anděl míru IV',
                    'Moderní upíři',
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
                    'Sběhlé švícko',
                    'V staré pražské krčmě',
                    'Zbožný Tomáš',
                    'Štrajchpudlíci',
                    'Mesiáš I',
                    'Mesiáš II',
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
            [-293, 297],
            [-171, 176],
            [-342, 353],
            [-403, 393],
            [-424, 440],
            [-479, 438],
            [-358, 385],
            [-379, 436],
            [-599, 574],
            [-388, 424],
            [-431, 425],
            [-386, 409], // aspon se pousměj
            [-384, 475],
            [-160, 155], // první noc u mrtvoly
            [-203, 347],
            [-450, 512], // Anna a Marie
            [-315, 383], // Vymírající hřbitov
            [-643, 579], // Kandidáti existence
            [-613, 574], // Zborcené harfy tón
            [-542, 591], //Adamité
            [-639, 587], // Agitátor
            [-424, 367],
            [-452, 420], // Anděl míru II
            [-485, 421],
            [-572, 506], //Anděl míru IV
            [-674, 590], // Moderní upíři
            [-377, 354], // Advokát chu´dasů
            [-416, 423], // Lotr Gólo
            [-73, 65], // Duhový bod nad hlavou
            [-160, 162], // Lilie v úpalu slunečním
            [-500, 482], // Duhokřídlá psyché
            [-671, 681], // Poslední dnové lidstva
            [-313, 280], // Moderní Magdaléna
            [-270, 296], // Před domem smutku
            [-236, 311], // Připij si, bratříčku!
            [-208, 267], // Svatý Václav
            [-102, 117], // Trilobit
            [-211, 249], // Zbožňovatel slečny Esterházy
            [-358, 368], // Démantová garnitura
            [-92, 108], // Kamarádi
            [-165, 271], // Nalezenec
            [-281, 348], // Noc na hřbitově
            [-122, 171], // Odumírající drahokam
            [-171, 174], // Sladký hřích
            [-87, 99], // Bílé svatební šaty
            [-81, 92], // Blíženci
            [-106, 142], // Jedna z těch, které mě zajímaly
            [-307, 319], // Poslední škamna
            [-472, 477], // Rodinné drama
            [-94, 113], // Zpuchřelá nitka
            [-156, 132], // Dobrodružství ve výsadní hospodě
            [-400, 416], // Lampičky
            [-61, 67], // Penězokaz
            [-100, 100], // Samovrah
            [-74, 106], // Sběhlé švícko
            [-313, 342], // V staré pražské krčmě
            [-126, 112], // Zbožný Tomáš
            [-776, 674], // Štrajchpudlíci
            [-756, 701], // Mesiáš I
            [-783, 766], // Mesiáš II
        ]
    }]

});