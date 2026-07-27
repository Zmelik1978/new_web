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
            'Zpuchřelá nitka'
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
                9.11,
                8.51,
                8.88,
                9.07,
                9.12,
                9.08,
                9.05,
                8.97,
                9.19,
                8.88,
                8.73,
                8.99,
                9.06,
                8.60,
                9.17,// Anna a MArie
                8.93,
                9.32,
                9.02,// Kandidáti existence
                9.09, // Zborcené harfy tón
                9.17, // Adamité
                9.12,// Agitátor
                9.07,
                8.99, // Anděl míru II
                9.10, // Anděl míru III
                9.18, // Anděl míru IV
                8.83, // Moderní upíři
                8.80, // Advokát chuďasů
                9.05, // Lotr Gólo
                8.01, // Duhový bod nad hlavou
                8.72, // Lilie v úpalu slunečním
                9.12,// Duhokřídlá Psyché
                9.31, // Poslední dnové lidstava
                8.46, // 'Moderní Magdaléna',
                8.83, //'Před domem smutku',
                8.79, //'Připij si, bratříčku!',
                8.75, //'Svatý Václav',
                8.76, //'Trilobit',
                8.94, //'Zbožňovatel slečny Esterházy',
                8.87, // Démantová garnitura
                8.15, // Kamarádi
                8.80, // Nalezenec
                9.18, // Noc na hřbitově
                8.51, // Odumírající drahokam
                8.27, // Sladký hřích
                8.06, // Bílé svatební šaty
                8.21, // Blíženci
                8.63, // Jedna z těch, které mě zajímaly
                8.83, // Poslední škamna
                8.87, // Rodinné drama
                8.44, // Zpuchřelá nitka
            ] // entropy
        }, {
        
            marker: {
            fillColor: 'transparent'
        },
            lineColor: 'brown',
            name: 'rel. entropy',
            color: 'brown',
            data: [
                0.78,
                0.81,
                0.75,
                0.74,
                0.74,
                0.73,
                0.75,
                0.74,
                0.72,
                0.73,
                0.72,
                0.74,
                0.75,
                0.79,
                0.78,
                0.74,// Anna a MArie
                0.77,
                0.71, // Kandidáti existence
                0.71, //Zborcené harfy tón
                0.73,  // Adamité
                0.72, // Agitátor
                0.73, 
                0.73, // Anděl míru II
                0.73, // Anděl míru III
                0.72, // Anděl míru IV
                0.70, // Moderní upíři
                0.74, // Advokát chuďasů
                0.74, // Lotr Gólo
                0.83, // Duhový bod nad hlavou
                0.80, // Lili v úpalu slunečním
                0.73, // Duhokřídlá Psyché
                0.72, // Poslední dnové lidstava
                0.74, // 'Moderní Magdaléna',
                0.76, //'Před domem smutku',
                0.77, //'Připij si, bratříčku!',
                0.78, //'Svatý Václav',
                0.83, //'Trilobit',
                0.78, //'Zbožňovatel slečny Esterházy',
                0.75, // Démantová garnitura
                0.80, // Kamarádi
                0.78, // Nalezenec
                0.77, // Noc na hřbitově
                0.80, // Odumírající drahokam
                0.78, // Sladký hřích
                0.82, // Bílé svatební šaty
                0.83, // Blíženci
                0.80, //  Jedna z těch, které mě zajímaly
                0.76, // Poslední škamna
                0.72, // Rodinné drama
                0.82, // Zpuchřelá nitka
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