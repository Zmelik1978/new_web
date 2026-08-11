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
    'filozofskahistorie': [148549.57, 1558.46, 0, 0, 0, 825594.16, 10165.41, 672.97, 0, 0, 13601.11, 850.07, 0],
    'psohlavci': [195911.14, 3927.72, 0, 0, 0, 782148.3, 9884.04, 1136.59, 0, 0, 6905.88, 0, 143.87],
    'flvek1': [135279.61, 5448.19, 0, 0, 0, 842589.87, 954.53, 279.02, 0, 0, 13583.76, 337.76, 220.28],
    'flvek2': [180037.74, 3383.43, 0, 0, 0, 797263.51, 4127.05, 1245.55, 0, 0, 8123.96, 0, 37.18],
    'flvek3': [213750.32, 2070.33, 0, 0, 0, 748092.12, 15633.26, 2191.23, 0, 0, 17250.24, 460.91, 128.45],
    'flvek4': [186218.78, 1181.87, 0, 0, 0, 783701.9, 6650.08, 174.78, 0, 0, 13225.25, 158.14, 24.97],
    'flvek5': [229132.69, 1056.21, 0, 0, 0, 748442.63, 5554.08, 1523.24, 0, 0, 12811.02, 43.11, 0],
    'temno': [228851.27, 574.11, 0, 0, 0, 729359.35, 275.57, 45.93, 0, 0, 10908.07, 28.71, 126.3]
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
          <option value="filozofskahistorie">Filozofská historie</option>
          <option value="psohlavci">Psohlavci</option>
          <option value="flveki">F. L. Věk I</option>
          <option value="flvekii">F. L. Věk II</option>
          <option value="flvekiii">F. L. Věk III</option>
          <option value="flvekiv">F. L. Věk IV</option>
          <option value="flvekv">F. L. Věk V</option>
          <option value="temno">Temno</option>
</select>
--- */

