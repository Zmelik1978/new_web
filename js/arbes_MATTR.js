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
                'Ďábel na skřipci', 
                'Elegie o černých očích', 
                'Svatý Xaverius', 
                'Sivooký démon', 
                'Zázračná madona',
                'Ukřižovaná',
                'Newtonův mozek',
                'Akrobati',
                'Etiopská lilie', 
                'Šílený Job',
                'Můj přítel vrah',
                'Aspoň se pousměj',
                'Dva barikádníci',
                'První noc u mrtvoly',
                'Il divino Boemo',
                'Anna a Marie',
                'Vymírající hřbitov',
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
                'Štrajchpudlíci'
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
                45.13,
                50.89,
                27.91,
                26.31,
                27.46,
                25.78,
                32.53,
                25.26,
                20.36,
                24.49,
                22.83,
                28.20,
                28.78,
                38.24,
                36.88,
                25.97,// Anna a MArie
                34.13,
                21.16,
                21.8, // Zborcené harfy tón
                23.82, // Adamité
                24.10,// Agitátor 
                27.20,
                26.88, // Anděl míru II
                26.59, // Anděl míru III
                24.86, // Anděl míru IV
                18.24, // Moderní upíři
                29.19, // Advokát chuďasů
                29.71, // Lotr Gólo
                47.73, // Duhový bod nad hlavou
                44.52, // Lilie v úpalu slunečním
                28.32, // Duhokřídlá Psyché
                21.96,// Poslední dnové lidstva
                30.39, // 'Moderní Magdaléna',
                38.21, // 'Před domem smutku',
                35.55, // 'Připij si, bratříčku!',
                36.06, // 'Svatý Václav',
                48.86, // 'Trilobit',
                37.62, // 'Zbožňovatel slečny Esterházy',
                26.77, // Démantová garnitura
                43.76, // Kamarádi
                38.62, // Nalezenec
                36.70, // Noc na hřbitově
                44.98, // Odumírající drahokam
                39.80, // Sladký hřích
                51.43, // Bílé svatební šaty
                53.56, // Blíženci
                45.82, //Jedna z těch...
                33.15, // Poslední škamna
                24.78, // Rodinné drama
                48.63, // Zpuchřelá nitka
                43.22, // Dobrodružství ve výsadní hospodě
                25.26, // Lampičky
                56.22, // Penězokaz
                45.47, // Samovrah
                54.70, // Sběhlé švícko
                30.76, // V staré pražské krčmě
                48.74, // Zbožný Tomáš
                18.32, // Štrajchpudlíci
            ] // TTR - blue line
        }, {
        
            marker: {
            fillColor: 'transparent'
        },
            lineColor: 'blue',
            name: 'MATTR',
            color: 'blue',
            data: [
                85.52,
                84.66,
                82.47, 
                83.09,
                83.18,
                83.31,
                82.34,
                82.09,
                83.47,
                82.67,
                82.19,
                82.61,
                83.78,
                82.91,
                83.86,
                83.77,// Anna a MArie
                84.65,
                82.35,
                82.56, // Zborcené harfy tón
                84.13, // Adamité
                83.45, //Agitátor
                83.35,
                82.30, // Anděl míru II
                83.43, // Anděl míru III
                83.50, // Anděl míru IV
                82.94, // Moderní upíři
                83.00, // Advokát chuďasů
                83.52, // Lotr Gólo
                80.82, // Duhový bod nad hlavou
                83.50, // Lilie v úpalu slunečním
                83.30, // Duhokřídlá Psyché
                83.31,// Poslední dnové lidstva
                81.71, // 'Moderní Magdaléna',
                84.04, // 'Před domem smutku',
                83.58, // 'Připij si, bratříčku!',
                84.64, // 'Svatý Václav',
                84.51, // 'Trilobit',
                84.02, // 'Zbožňovatel slečny Esterházy',
                83.28, // Démantová garnitura
                81.23, // Kamarádi
                84.05, // Nalezenec
                85.02, // Noc na hřbitově
                84.28, // Odumírající drahokam
                82.77, // Sladký hřích
                83.60, // Bílé svatební šaty
                85.37, // Blíženci
                82.86, // Jedna z těch, které...
                83.13, // Poslední škamna
                83.02, // Rodinné drama
                84.32, // Zpuchřelá nitka
                83.94, // Dobrodružství ve výsadní hospodě
                82.28, // Lampičky
                84.67, // Penězokaz
                84.57, // Samovrah
                84.35, // Sběhlé švícko
                83.34, // V staré pražské krčmě
                83.91, // Zbožný Tomáš
                83.05, // Štrajchpudlíci
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