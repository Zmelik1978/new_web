Highcharts.chart('container-toponyms', {

    title: {
        text: ""
    },

    subtitle: {
        text: ""
    },

    yAxis: {
        title: {
            text: "i.p.m."
        }
    },

    /* ZDE ZAPISOVAT TOPONYMA*/
    xAxis: {
        categories: [
            "Praha",
            "Vršovice",
            "U Kalicha",
            "Vltava",
            "Hradčany",
            "Karlovo nám.",
            "Libeň", 
            "Pankrác",
            "Břevnov",
            "Emauzy",
            "Havlíčkovo nám.",
            "Kostel sv. Ignáce",
            "Malá Strana",
            "Na Kuklíku",
            "Nusle",
            "Vinohrady",
            "Žižkov",
            "Karlín",
            "motolské cvičiště",
            "Zderaz",
            "Karlův most",
            "Klamovka",
            "Krakovská ul.",
            "Panská ul.",
            "Příčná ul.",
            "Salmova ul.",
            "Spálená ul.",
            "Stoletá kavárna",
            "Střelecký ostrov",
            "U Banzetů",
            "Václavské nám.",
            "Vodičkova ul.",
            "Bendlova kavárna",
            "Botič",
            "Bredovská ul.",
            "Břevnovský klášter",
            "Dejvice",
            "Dlouhá třída",
            "Eliščin most",
            "Ječná ul.",
            "Jindřišská ul.",
            "Josefov \"v židech\"",
            "Karlova ul.",
            "Kostel sv. Haštala",
            "Košíře",
            "Královská třída",
            "Montmartre",
            "Myslíkova ul.",
            "Nekázanka",
            "Podol",
            "Reprezentační dům",
            "Řetězová ul.",
            "Smíchov",
            "U Exnerů",
            "U Mariánského obrazu",
            "U Mrtvoly",
            "U Štupartů",
            "U Šuhů",
            "U Valšů",
            "U Zlatého věnce",
            "Vojtěšská ul.",
            "Vyěehrad",
            "Zámecké schody",
            "Zemské muzeum"
]
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
 
    series: [{
        name: '',
        data: [290.77, 218.078726420238, 163.559044815178, 127.212590411805, 109.039363210119, 90.8661360084324, 90.8661360084324, 90.8661360084324, 72.6929088067459, 72.6929088067459, 72.6929088067459, 72.6929088067459, 72.6929088067459, 72.6929088067459, 72.6929088067459, 72.6929088067459, 72.6929088067459, 54.5196816050594, 54.5196816050594, 54.5196816050594, 36.3464544033729, 36.3464544033729, 36.3464544033729, 36.3464544033729, 36.3464544033729, 36.3464544033729, 36.3464544033729, 36.3464544033729, 36.3464544033729, 36.3464544033729, 36.3464544033729, 36.3464544033729, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865, 18.1732272016865
]
    }
    ],

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