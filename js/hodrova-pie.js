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
    'podoboji': [27.62, 6.6, 14.48, 1.05, 18.74, 9.78, 9.42, 10.5, 1.62, 0.07],
    "kukly": [29.51, 6.71, 13.41, 1.1, 17.07, 10.17, 10.37, 9.58, 1.53, 0.02],
    "theta": [29.26, 8.15, 13.43, 1.39, 18.12, 8.97, 12.02, 6.83, 1.17, 0.05],
    "mestovidim": [29.29, 9.80, 11.78, 1.71, 17.53, 8.58, 12.41, 6.40, 1.19, 0.02],
    "tocitevety": [24.80, 7.58, 14.74, 1.56, 19.16, 9.57, 12.01, 8.80, 1.42, 0.05],
    "perunuvden": [23.6, 5.84, 16.4, 1.04, 21.0, 10.83, 10.68, 8.44, 1.87, 0.02]
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
