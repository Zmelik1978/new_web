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
            "Kanálská zahrada",
            "Na Františku",
            "Petřín",
            "Vltava",
            "Staroměstská radnice",
            "Staroměstské náměstí",
            "Wimrovská procházka (sady)",
            "novoměstský hřbitov",
            "Dolejší loďka",
            "Neklanka",
            "vršovický pahorek",
            "zlíchovská kaplička",
            "Jezerka"
        ]
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
 
    series: [{
        name: 'Márinka',
        data: [1292.32, 516.93, 1033.86, 258.46, 258.46, 258.46, 258.46, 258.46, 258.46, 258.46, 0,0,0,0]
    }, 
    {
        name: 'Křivoklad',
        data: [2134.72, 0, 0, 0, 869.70, 0, 0, 0, 0, 0, 158.13, 158.13, 79.06, 79.06]
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