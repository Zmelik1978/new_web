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
    'peklazplozenci': [28.61, 12.34, 12.68, 1.12, 16.13, 6.51, 11.07, 8.53, 0.71, 0.25]
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
