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
    'janmariaplojhar': [22.48, 8.15, 18.03, 0.7, 20.96, 9.55, 8.81, 9.28, 1.24, 0.26],
    'legendaprazska': [25.27, 10.55, 16.33, 0.64, 20.74, 7.65, 9.37, 8.33, 0.84, 0.1],
    'legendatoledska': [27.35, 10.28, 15.67, 0.65, 19.85, 6.73, 9.22, 9.15, 0.68, 0.2],
    'legendaslovenska': [27.27, 11.18, 14.71, 0.65, 17.55, 8.07, 10.42, 9.62, 0.52, 0.04]
    
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
