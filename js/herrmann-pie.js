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
    'usnedenehokramu1': [25.67, 7.94, 13.09, 1.71, 19.7, 9.24, 10.19, 10.17, 1.12, 0.11],
    'usnedenehokramu2': [24.78, 7.33, 13.3, 1.09, 20.84, 9.77, 9.43, 10.06, 1.17, 0.15],
    'usnedenehokramu3': [23.63, 7.1, 14.78, 1.09, 21.08, 9.55, 9.43, 10.19, 1.26, 0.14],
    'usnedenehokramu4': [23.17, 7.15, 15.07, 1.06, 21.76, 9.46, 9.89, 9.63, 1.09, 0.09],
    'oteckondelik': [24.58, 6.35, 14.67, 1.14, 21.71, 9.75, 8.84, 9.18, 1.55, 0.18],
    "tchankondelik": [23.4, 5.85, 15.21, 1.02, 21.9, 10.55, 8.55, 10.11, 1.74, 0.23],
    "zamrza": [23.92, 7.1, 11.35, 1.57, 20.07, 12.47, 10.51, 10.73, 1.17, 0.28],
    "spiritista": [24.15, 5.36, 12.35, 2.24, 22.46, 11.86, 9.4, 9.67, 1.8, 0.16],
    "klokoc": [27.08, 7.69, 12.0, 1.91, 19.59, 10.44, 9.83, 9.57, 1.33, 0.1],
    "tosetaknebere": [23.2, 10.26, 12.55, 1.12, 20.07, 10.97, 10.86, 9.21, 0.81, 0.07],
    "tetrev": [25.55, 6.93, 14.49, 1.49, 20.36, 9.05, 10.44, 9.48, 0.82, 0.24],
    "maliramlir": [25.85, 8.19, 14.8, 1.61, 18.51, 8.83, 9.48, 9.6, 1.65, 0.12],
    "bezinka": [24.95, 8.54, 13.85, 1.07, 19.48, 9.32, 10.21, 10.4, 1.1, 0.21],
    "panalojs": [24.56, 7.07, 14.33, 1.8, 20.32, 10.67, 8.38, 10.82, 0.83, 0.05],
    "konura": [22.87, 9.88, 13.71, 1.95, 21.64, 9.5, 10.06, 8.96, 1.13, 0.1],
    "vonasek": [25.63, 7.48, 13.2, 2.09, 20.8, 10.25, 9.23, 9.1, 1.28, 0.17],
    "poslednisazka": [26.97, 7.7, 11.39, 1.87, 21.37, 9.11, 10.95, 9.08, 0.82, 0.07],
    "kobrc": [25.2, 7.86, 14.08, 1.76, 20.46, 9.08, 9.66, 9.21, 1.35, 0.04],
    "rys": [26.69, 11.34, 12.12, 1.4, 17.62, 9.64, 8.98, 10.34, 0.96, 0.04],
    "nasmikolas": [21.88, 7.27, 14.61, 1.43, 24.94, 8.64, 9.28, 9.4, 1.37, 0.22],
    "prvnivydelek": [25.9, 9.36, 11.63, 1.91, 19.96, 8.41, 11.75, 8.92, 1.04, 0.32],
    "hvezdari": [29.76, 13.39, 11.21, 1.81, 15.57, 7.39, 11.58, 7.97, 1.01, 0.0],
    "historieodoktorufaustovi": [23.22, 8.51, 14.97, 1.20, 19.57, 8.85, 9.52, 12.36, 1.22, 0.18],
    "pribehdusickovy": [24.44, 6.89, 15.14, 1.07, 21.42, 10.17, 9.50, 9.25, 1.56, 0.10]
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