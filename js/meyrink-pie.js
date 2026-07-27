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
    'golem': [21.65, 8.4, 16.1, 0.94, 22.53, 10.33, 9.13, 8.72, 1.65, 0.09],
    "neviditelnapraha": [25.61, 10.78, 12.97, 1.22, 19.85, 9.89, 10.21, 8.1, 0.97, 0],
    "valpurzinanoc": [22.82, 9.99, 13.36, 0.82, 17.81, 9.22, 9.08, 7.96, 1.6, 0.16],
    "bilydominikan": [21.73, 8.45, 16.97, 0.87, 22.11, 9.02, 9.05, 9.69, 1.44, 0.09],
    'prazskavizitka': [24.52, 11.57, 12.68, 1.27, 16.26, 9.89, 8.48, 7.31, 2.25, 0.63],
    "zelenatvar": [23.4, 9.8, 14.61, 0.9, 18.99, 8.93, 9.58, 9.17, 1.11, 0.06],
    "andelzapadnihookna": [24.31, 10.51,  15.46, 0.72, 20.23, 8.94, 9.16, 8.84, 1.36, 0.07]    
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