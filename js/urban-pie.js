function renderchart2(chartTitle, vals){
    /*
    Funkce, která vykreslí graf
    */
    chart2 = Highcharts.chart('container2', {
        chart: { plotBackgroundColor: null, plotBorderWidth: null, plotShadow: false,      type: 'pie'},
        title: { align: 'center', text: chartTitle},
        tooltip: {pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'},
        accessibility: { point: { valueSuffix: '%' } },
        plotOptions: { pie: {allowPointSelect: true, cursor: 'pointer', dataLabels: {      enabled: true, format: '<b>{point.name}</b>: {point.percentage:.2f} %'}}},
        
        series: [
            {
                name: 'Browsers',
                colorByPoint: true,
                data: [
                    {
                        name: 'Nouns',
                        y: vals[0],   
                    },
                    {
                        name: 'Adjectives',
                        y: vals[1],
                       
                    },
                    {
                        name: 'Pronouns',
                        y: vals[2],
                    },
                    {
                        name: 'Numerous',
                        y: vals[3],
                    },
                    {
                        name: 'Verbs',
                        y: vals[4],                        
                    },
                    {
                        name: 'Adverbs',
                        y: vals[5],
                    },
                    {
                        name: 'Prepositions',
                        y: vals[6],
                    },
                    {
                        name: 'Conjunctions',
                        y: vals[7],
                    },
                    {
                        name: 'Particules',
                        y: vals[8],
                    },
                    {
                        name: 'Interjections',
                        y: vals[9],
                    }
                ]
            }
        ], 
    });
}

/*
Hodnoty pro jednotlivý texty
*/
var values2 = {
    'posledniteckazarukopisy': [24.51, 10.07, 14.65, 1.92, 19.36, 7.33, 10.06, 9.52, 1.33, 0.06],
    "sedmikosteli": [23.36, 10.02, 15.22, 1.31, 21.73, 7.67, 10.57, 8.53, 1.05, 0.03],
    "hastrman1": [24.08, 9.42, 14.7, 1.21, 21.92, 7.06, 11.65, 8.98, 0.83, 0.02],
    "hastrman2": [25.57, 9.66, 14.9, 1.35, 21.49, 7.16, 11.37, 7.39, 0.86, 0.04],
    "stinkatedraly": [23.44, 8.3, 15.46, 1.39, 21.06, 8.12, 10.59, 9.12, 1.56, 0.14],
    "michaela": [24.67, 8.28, 14.8, 1.31, 21.92, 7.22, 11.75, 8.5, 0.89, 0.02],
    "santinihojazyk": [21.82, 7.43, 16.0, 1.57, 23.34, 8.27, 10.35, 9.33, 1.4, 0.1],
    "lordmord":  [22.11, 7.65, 16.02, 1.33, 23.04, 7.99, 10.26, 9.65, 1.29, 0.07],
    "boletusarcanus": [21.08, 7.54, 16.13, 1.88, 24.42, 8.39, 9.7, 8.95, 1.36, 0.1],
    "pragapiccola": [21.48, 7.22, 15.57, 1.4, 22.96, 8.4, 10.59, 10.75, 1.3, 0.05],
    "poleapalisada": [25.76, 9.15, 14.79, 1.29, 20.33, 7.22, 10.54, 9.54, 0.85, 0.03],
    "tovarnanamaso": [21.05, 6.90, 16.88, 1.09, 23.21, 9.05, 9.39, 10.19, 1.70, 0.08],
    "zaverka": [20.9, 7.22, 17.21, 1.49, 21.87, 9.17, 9.91, 10.13, 1.48, 0.07]
}

/*
Když se změní select, vykresli graf podle hodnoty v selectu
*/
$('#select2').on('change', function() {
    if ( $(this).val() == 'default') {
        chart2.destroy();
    } else {
        renderchart2(
            $("#select2 option:selected").text(), 
            values2[$(this).val()])
        }
});