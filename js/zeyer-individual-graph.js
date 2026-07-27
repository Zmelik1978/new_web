/* Model: individualni graf segmentu (i.p.m.) -- container 'container-individual-graph'. */
function renderchart2(chartTitle, vals){
    /*
    Funkce, ktera vykresli graf
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
                        y: vals[1]
                    },
                    {
                        name: 'personal narrator',
                        y: vals[2],
                        color: '#800000'
                    },
                    {
                        name: 'narrator-character',
                        y: vals[3],
                        color: '#5DADE2'
                    },
                    {
                        name: 'heterodiegetic narrator',
                        y: vals[4]
                    },
                    {
                        name: 'rhetorical narrator',
                        y: vals[5],
                        color: '#A52A2A'
                    },
                    {
                        name: 'intradiegetic narrator of 1st degree',
                        y: vals[6],
                        color: '#FF1493'
                    },
                    {
                        name: 'direct speech in intradiegetic narrator of 1st degree',
                        y: vals[7],
                        color: '#FF1493'
                    },
                    {
                        name: 'intradiegetic narrator of 2nd degree',
                        y: vals[8],
                        color: '#FF69B4'
                    },
                    {
                        name: 'direct speech in intradiegetic narrator of 2nd degree',
                        y: vals[9],
                        color: '#FF69B4'
                    },
                    {
                        name: 'text-in-text',
                        y: vals[10],
                        color: '#FFFF00'
                    },
                    {
                        name: 'direct speech in text-in-text',
                        y: vals[11],
                        color: '#55ff00'
                    },
                    {
                        name: 'unrealized direct speech',
                        y: vals[12],
                        color: '#ff0088'
                    }
                ]
            }
        ],
    });
}

/*
Hodnoty pro jednotlive texty
*/
var values2 = {
    'janmariaplojhar': [237556.29, 45249.85, 0, 0, 0, 659161.2, 217.03, 781.29, 0, 0, 53410.02, 6423.96, 368.94],
    'legendaprazska': [254612.55, 1006.37, 0, 0, 0, 721905.4, 11573.3, 10902.38, 0, 0, 0, 0, 0],
    'legendaslovenska': [38970.7, 1338.69, 0, 0, 0, 961178.05, 0, 0, 0, 0, 0, 0, 0],
    'legendatoledska': [222207.43, 266.28, 772999.6, 0, 0, 0, 0, 0, 0, 0, 3861, 0, 532.55]
};

$('#select2').on('change', function() {
    const selectedVal = $(this).val();
    const selectedText = $("#select2 option:selected").text();

    if (selectedVal === 'default') {
        chart2.destroy();
        $('#notice').html('');
        return;
    }

    renderchart2(selectedText, values2[selectedVal]);

    const notes = {};

    if (notes[selectedVal]) {
        $('#notice').html(
            `<p style="text-align: justify; width: 100%; color: blue; border: 0px; padding: 10px; border-radius: 5px; background-color: #f7f9f9;">
                <span style="color: red;">Note:</span><br>${notes[selectedVal]}
            </p>`
        );
    } else {
        $('#notice').html('');
    }
});

/* --- Odpovidajici <select> pro HTML stranku: ---
<select id="select2">
          <option value="default">— vyber dílo —</option>
          <option value="janmariaplojhar">Jan Maria Plojhar</option>
          <option value="legendaprazska">Legenda pražská</option>
          <option value="legendaslovenska">Legenda slovenská</option>
          <option value="legendatoledska">Legenda toledská</option>
</select>
--- */

