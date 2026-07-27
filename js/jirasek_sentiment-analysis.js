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
        categories: ["F. L. Věk I", 
                    "F. L. Věk II", 
                    "F. L. Věk III",
                    "F. L. Věk IV",
                    "F. L. Věk V", 
                    "Filozofská historie",
                    "Temno",
                    "Psohlavci"]
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
            [-573, 553],
            [-615, 581],
            [-789, 650],
            [-777, 652],
            [-787, 703],
            [-382, 421],
            [-827, 680], // Temno
            []
            
    
        ]
    }]

});