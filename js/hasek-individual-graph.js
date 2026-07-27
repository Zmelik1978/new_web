function renderchart2(chartTitle, vals){
    /*
    Funkce, která vykreslí graf
    */
    chart2 = Highcharts.chart('container-individual-graph', {
        chart: { type: 'column' },
        title: { align: 'center', text: chartTitle},
        accessibility: { announceNewData: { enabled: true } },
        xAxis: { type: 'category' },
        yAxis: { title: { text: 'i.p.m.' } },
        legend: { enabled: false },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: { enabled: true, format: '{point.y:.2f}' }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
        },
        series: [
            {
                name: 'Browsers',
                colorByPoint: true,
                data: [
                    {
                        name: 'direct speach',
                        y: vals[0],
                        color: '#808B96'     
                    },
                    {
                        name: 'direct speech as an inner monologue',
                        y: vals[1],
                       
                    },
                    {
                        name: 'personal narrator',
                        y: vals[2],
                        color: "#800000"
                    },
                    {
                        name: 'narrator-character',
                        y: vals[3],
                        color: '#5DADE2'
                    },
                    {
                        name: 'heterodiegetic narrator',
                        y: vals[4],
                        
                    },
                    {
                        name: 'rhetorical narrator',
                        y: vals[5],
                        color: "#A52A2A"
                    },
                    {
                        name: 'intradiegetic narrator of 1 st degree',
                        y: vals[6],
                        color: "#FF1493"
                    },
                    {
                        name: 'direct speech in intradiegetic narrator of 1 st degree',
                        y: vals[7],
                        color: "#FF1493"
                    },
                    {
                        name: 'intradiegetic narrator of 2 st degree',
                        y: vals[8],
                        color: "#FF69B4"
                    },
                    {
                        name: 'direct speech in intradiegetic narrator of 2 st degree',
                        y: vals[9],
                        color: "#FF69B4"
                    },
                    {
                        name: 'text-in-text',
                        y: vals[10],
                        color: '#FFFF00'
                    },
                    {
                        name: 'direct speech in text-in-text',
                        y: vals[11],
                        
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
    'hasek1': [
        297259.48,
        0,
        0,
        0,
        0,
        502562.43,
        0,
        0,
        0,
        0,
        0,
        0        
]
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