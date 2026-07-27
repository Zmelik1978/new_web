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
    'cernypetricek': [20.12, 8.08, 18.6, 0.94, 19.44, 11.23, 10.49, 9.39, 1.75, 0.17],
    "zvoneckovakralovna": [21.04, 9.82, 19.02, 0.93, 18.0, 9.91, 10.26, 9.35, 1.25, 0.1],
    "prvniceska": [22.21, 9.6, 18.4, 0.81, 19.6, 9.19, 9.63, 8.95, 1.04, 0.1],
    "mladapanizapletalova": [22.08, 10.02, 18.46, 0.85, 17.47, 9.26, 10.93, 9.17, 1.45, 0.1],
    "skapulir": [19.96, 10.27, 19.19, 0.71, 18.49, 10.34, 10.43, 8.98, 1.64, 0.12],
    "nakosatkach": [18.77, 8.41, 19.7, 0.8, 19.63, 10.6, 10.39, 9.66, 2.04, 0.15]
    
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
