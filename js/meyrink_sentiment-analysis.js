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
            "Golem", 
            "Neviditelná Praha", 
            "Valpuržina noc",
            "Bílý dominikán",
            "Pražská vizitka",
            'Zelená tvář',
            'Anděl západního okna'
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
            [-805, 594],
            [-38, 46],
            [-696, 535],
            [-617, 540],
            [-147, 168], // Pražská vizitka
            [-831, 657], // Zelená tvář
            [-1018, 803], // Anděl západního oknma
    
        ]
    }]

});