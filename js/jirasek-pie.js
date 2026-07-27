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
    'flvek1': [21.14, 7.48, 16.01, 0.91, 20.19, 11.7, 9.4, 11.2, 1.3, 0.15],
    "flvek2": [22.3, 8.11, 14.64, 0.76, 19.51, 11.37, 9.92, 11.43, 1.14, 0.16],
    "flvek3": [22.79, 7.31, 14.2, 0.95, 19.88, 11.14, 10.28, 11.11, 1.4, 0.2],
    "flvek4": [24.23, 7.84, 13.59, 0.99, 19.17, 9.98, 10.81, 10.77, 1.47, 0.2],
    "flvek5": [23.51, 7.41, 13.9, 0.89, 19.38, 10.57, 10.25, 10.46, 1.55, 0.22],
    "filozofskahistorie": [25.39, 9.23, 13.89, 0.94, 20.52, 9.37, 8.82, 9.36, 1.05, 0.19],
    "temno": [24.09, 7.97, 14.13, 0.96, 18.84, 10.23, 10.65, 10.76, 1.24, 0.11],
    'psohlavci': [24.50, 8.34, 14.84, 1.00, 19.33, 10.24, 9.87, 9.32, 1.17, 0.42]
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