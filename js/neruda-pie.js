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
    'povidkymalostranske': [22.69, 8.69, 14.14, 1.54, 21.66, 11.31, 8.61, 8.82, 1.89, 0.18 ],
    "tydenvtichemdome": [22.52, 8.67, 14.8, 1.49, 21.01, 9.97, 8.18, 9.4, 1.86, 0.17], 
    "panrysanekapanschlegl": [24.36, 10.26, 12.26, 2.1, 17.72, 12.23, 10.0, 8.62, 1.55, 0.1],
    "omekkemsrdcipanirusky": [26.14, 10.31, 12.19, 1.39, 19.04, 9.76, 10.07, 8.55, 1.46, 0.06],
    "vecernisplechty": [21.0, 8.96, 14.54, 1.55, 20.76, 11.43, 8.56, 7.25, 1.89, 0.34],
    "doktorkazisvet": [25.1, 9.97, 12.3, 1.82, 19.08, 10.83, 8.65, 8.91, 1.87, 0.05],
    "hastrman": [24.49, 10.67, 12.56, 1.48, 18.95, 10.67, 9.82, 7.88, 1.77, 0.29],
    "jaksinakouril": [25.7, 8.81, 12.45, 2.78, 17.55, 12.05, 9.07, 9.01, 1.72, 0],
    "utrililii": [21.88, 21.88, 12.33, 0.92, 22.34, 12.17, 10.17, 6.47, 1.23, 0],
    "svatovaclavskamse": [21.14, 10.72, 12.27, 1.12, 20.79, 12.56, 9.33, 8.69, 1.5, 0.03],
    "jaktoprislo": [23.65, 8.19, 12.25, 2.43, 22.38, 11.04, 9.66, 7.54, 1.07, 0.06],
    "psanooletosnichdusickach": [20.93, 9.38, 14.14, 1.4, 20.78, 12.49, 7.1, 10.63, 1.55, 0.03],
    "figurky": [20.41, 6.83, 14.44, 1.21, 23.02, 11.67, 7.62, 8.69, 2.23, 0.24]
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