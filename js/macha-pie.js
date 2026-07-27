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
    'karluvtejn': [28.72, 12.59, 12.85, 1.18, 17.04, 6.97, 10.41, 7.3, 0.5, 0.34],
    "krivoklad":[27.15, 12.22, 12.91, 1.64, 17.12, 7.9, 11.16, 7.0, 0.89, 0.2],
    "vecernabezdezu": [26.29, 14.53, 11.41, 0.71, 16.84, 9.45, 12.03, 6.42, 0.53, 0.09],
    "marinka": [24.48, 15.53, 14.16, 1.11, 16.44, 7.62, 11.76, 6.05, 0.98, 0.08],
    "klastersazavsky": [26.76, 16.77, 11.02, 1.04, 15.18, 7.75, 12.38, 6.07, 1.2, 0],
    "valdice": [28.89, 18.04, 9.36, 1.78, 13.27, 6.66, 13.04, 7.12, 0.92, 0],
    "poutkrkonosska": [25.47, 15.14, 13.23, 0.77, 17.05, 7.98, 10.92, 8.05, 0.51, 0.07],
    "svetsmyslny": [22.85, 14.25, 12.44, 0.45, 16.52, 12.44, 8.82, 8.14, 0.68, 0],
    "svetzasly": [22.16, 10.35, 17.21, 0.9, 17.1, 10.24, 7.09, 9.34, 1.57, 0.11],
    "navrat": [26.57, 13.0, 16.93, 0.56, 15.72, 6.27, 9.82, 7.76, 1.4, 0.37],
    "poutnik": [28.91, 24.22, 10.16, 0, 14.06, 5.47, 10.16, 5.47, 0, 0],
    "viasilviasilovic": [23.11, 8.55, 15.27, 1.12, 21.22, 10.57, 9.63, 9.32, 1.0, 0.1],
    "sen": [22.56, 13.46, 14.48, 1.39, 21.26, 5.66, 10.58, 9.29, 0.84, 0],
    "prisaha": [26.1, 14.1, 16.38, 0.95, 16.19, 5.71, 10.29, 7.24, 0.95, 0],
    "cikani": [23.14, 10.91, 14.02, 1.1, 18.44, 8.21, 10.02, 7.4, 1.84, 0.26]
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