$(function () {
    Highcharts.chart('container-sentence-lenght', {
        chart: { type: 'scatter' },
        title: { text: '' },

        xAxis: { title: { text: 'average sentence length per word count' }, min: 0, max: 25,
					gridLineWidth: 0,
					plotLines: [					
					{ color: "#A9A9A9", value: 5, width: 0.7, },
					{ color: "#A9A9A9", value: 10, width: 0.7, },
					{ color: "#A9A9A9", value: 15, width: 0.7, },
					{ color: "#A9A9A9", value: 20, width: 0.7, },					
					],
			   },		
		
        yAxis: { title: { text: 'segments of text' }, min: 0, max: 12, categories: 
        ['AVERAGE SENTENCE LENGTH THROUGHOUT THE TEXT',         // 0
        'direct speach',                                  // 1
        'direct speech as an inner monologue',             // 2
        'personal narrator',                        // 3
        'narrator - character',                           // 4
        'heterodiegetic narrator',            // 5
        'rhetorical narrator',                         // 6
        'intradiegetic narrator of 1st degree',                     // 7
        'direct speach in intradiegetic narrator of 1st degree',             // 8
        'intradiegetic narrator of 2st degree',                     // 9
        'direct speach in intradiegetic narrator of 2st degree',             // 10
        'text-in-text',                               // 11
        'direct speach in text-in-text'                 // 12
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
						],				
				},
        legend: { enabled: true },
        credits: { enabled: false },
	      series: [

					{
					name: 'Týden v tichém domě', showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2 }, 
					data: [[12.75, 0], [9.56, 1], [11.23, 2], [13.49, 6], [17.44, 11], [12.3, 12]] //vkládá se podle typu segmentu; číslo za čárkou značí typ segmentu: 0=průměrná délka věty v celém textu...
					},

					{
					name: 'Pan Ryšánek a pan Schlegl',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[14.15, 0], [10.0, 1], [14.5, 6]] 
					},
					{
					name: 'Přivedla žebráka na mizinu',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[11.79, 0], [8.58, 1], [12.6, 6]]
					},

					{
					name: 'O měkkém srdci paní Rusky',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[13.09, 0], [10.69,1], [14.29, 6]] 
					},

					{
					name: 'Večerní šplechty',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[10.06, 0], [9.5, 1], [9.76, 6], [10.48, 7], [5.67, 8]] 
					},

					{
					name: 'Doktor Kazisvět',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[11.9, 0], [5.13, 1], [14.21, 6]] 
					},

					{
					name: 'Hastrman',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[11.3, 0], [7.71, 1], [12.19, 6]] 
					},

					{
					name: 'Jak si nakouřil pan Vorel pěnovku',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[11.39, 0], [6.4, 1], [12.06, 4]] 
					},

					{
					name: 'U Tří lilií',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[11.39, 0], [6.4, 1], [12.06, 4]] 
					},

					{
					name: 'Svatováclavská mše',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[15.99, 0], [2.71, 1], [15.89, 4]] 
					},

					{
					name: 'Jak to přišlo...',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[11.4, 0], [6.23, 1], [12.65, 4]] 
					},

					{
					name: 'Psáno o letošních dušičkách',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[12.29, 0], [9.93, 1], [13.29, 6], [13.32, 11]] 
					},

					{
					name: 'Figurky',showInLegend: false,
					marker: { 'symbol': 'circle', fillColor: "rgba(255,0,0,0)", lineColor: "#0000FF", lineWidth: 2  }, 
					data: [[8.69, 0], [7.6, 1], [4.0, 2], [8.79, 4], [9.66, 11]] 
					}

				]
 		}); 
});