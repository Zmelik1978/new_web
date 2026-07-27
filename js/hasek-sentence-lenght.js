$(function () {
    Highcharts.chart('container-sentence-lenght', {
        chart: { type: 'scatter' },
        title: { text: '' },

        xAxis: { title: { text: 'average sentence length per word count' }, min: 0, max: 30,
					gridLineWidth: 0,
					plotLines: [					
					{ color: "#A9A9A9", value: 5, width: 0.7, },
					{ color: "#A9A9A9", value: 10, width: 0.7, },
					{ color: "#A9A9A9", value: 15, width: 0.7, },
					{ color: "#A9A9A9", value: 20, width: 0.7, },				
					],
			   },		
		
        yAxis: { title: { text: 'segments of text' }, min: 0, max: 13, categories: 
        ['AVERAGE SENTENCE LENGTH THROUGHOUT THE TEXT',         // 0
		'Švejk direct speach',						  //1
        'direct speach',                                  // 2
        'direct speech as an inner monologue',             // 3
        'personal narrator',                        // 4
        'narrator - character',                           // 5
        'heterodiegetic narrator',            // 6
        'rhetorical narrator',                         // 7
        'intradiegetic narrator of 1st degree',                     // 8
        'direct speach in intradiegetic narrator of 1st degree',             // 9
        'intradiegetic narrator of 2st degree',                     // 10
        'direct speach in intradiegetic narrator of 2st degree',             // 11
        'text-in-text',                               // 12
        'direct speach in text-in-text'                 // 13
        ], 
					gridLineWidth: 0,
					plotLines: [
						{ color: "#000000", value: 0.5, width: 1 }, 
						{ color: "#000000", value: 1.5, width: 1 }, 
						{ color: "#000000", value: 2.5, width: 1 },
						{ color: "#000000", value: 3.5, width: 1 },
						{ color: "#000000", value: 4.5, width: 1 },
						{ color: "#000000", value: 5.5, width: 1 },
						{ color: "#000000", value: 6.5, width: 1 },
						{ color: "#000000", value: 7.5, width: 1 },
						{ color: "#000000", value: 8.5, width: 1 },
						{ color: "#000000", value: 9.5, width: 1 },
						{ color: "#000000", value: 10.5, width: 1 },
						{ color: "#000000", value: 11.5, width: 1 },
						{ color: "#000000", value: 12.5, width: 1 }, 
						{ color: "#000000", value: 13.5, width: 1 },
						{ color: "#000000", value: 14.5, width: 1 },
					],				
				},
        legend: { enabled: true },
        credits: { enabled: false },
	      series: [

					{
					name: 'Osudy dobrého vojáka Švejka za světové války - 1. díl', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 }, 
					data: [[16.38, 0], [12.44, 1], [10.99, 2], [14.25, 7]] //vkládá se podle typu segmentu; číslo za čárkou značí typ segmentu: 0=průměrná délka věty v celém textu...
					},
									
				]
 		}); 
});