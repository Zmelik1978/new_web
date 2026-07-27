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
                        color: '#FFFF00'
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
    'povidkymalostranske': [
        239145.19,
		10165.33,
		0,
		337390.8,
		0,
		346487.62,
		9833.23,
		490.94,
		0,
		0,
		70348.71,
		5862.39
	],
	"tydenvtichemdome": [
		283462.03,
		31991.17,
		0,
		0,
		0,
		476098.55,
		0,
		0,
		0,
		0,
		188407.8,
		18661.52
	],
	"panrysanekapanschlegl": [
		61310.1,
		0,
		0,
		0,
		0,
		930945.47,
		0,
		0,
		0,
		0,
		0,
		0
	],
	"privedlazebrakanamizinu": [
		164658.63,
		0,
		0,
		0,
		0,
		826416.78,
		0,
		0,
		0,
		0,
		0,
		0
	],
	"omekkemsrdcipanirusky":[
		272286.23,
		0,
		0,
		0,
		0,
		719223.77,
		0,
		0,
		0,
		0,
		0,
		0
	],
	"vecernisplechty": [
		431575.74,
		0,
		0,
		0,
		0,
		321243.52,
		207558.67,
		10362.69,
		0,
		0,
		0,
		0
	],
	"doktorkazisvet":[
		116902.83,
		0,
		0,
		0,
		0,
		870445.34,
		0,
		0,
		0,
		0,
		0
	],
	"hastrman": [
		167237.44,
		0,
		0,
		0,
		0,
		820776.26,
		0,
		0,
		0,
		0,
		0
	],
	"jaksinakourilpanvorelpenovku": [
		78807.95,
		0,
		0,
		0,
		0,
		911920.53,
		0,
		0,
		0,
		0,
		0
	],
	"utrililii": [
		49306.63,
		0,
		0,
		947611.71,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	"svatovaclavskamse": [
		5077.5,
		0,
		0,
		989577.77,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	"jaktoprislo": [
		123509.2,
		0,
		0,
		859510.81,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	"psanooletosnichdusickach": [
		308653.26,
		0,
		0,
		0,
		0,
		647775.75,
		0,
		0,
		0,
		0,
		150213.28,
		0
	],
	"figurky": [
		274124.72,
		387.94,
		0,
		717486.18,
		0,
		0,
		0,
		0,
		0,
		0,
		13577.73,
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