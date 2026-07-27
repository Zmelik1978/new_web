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
    'pravyvyletpanabroucka': [329389.94, 47980.21, 0, 39571.31, 0, 573866.45, 0, 0, 0, 0, 9192.09, 0, 0],
    'novyepochalnivyletpanabroucka': [301201.68, 32421.39, 0, 0, 0, 666376.93, 0, 0, 0, 0, 0, 0, 0]
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
          <option value="pravyvyletpanabroucka">Pravý výlet pana Broučka</option>
          <option value="novyepochalnivyletpanabroucka">Nový epochální výlet pana Broučka</option>
</select>
--- */

