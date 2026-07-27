document.addEventListener('DOMContentLoaded', function () {
    const xValues = [15851, 8485, 17373, 10864, 12068, 12376, 13213, 15659, 13319, 10141, 1408, 1394, 2757, 12068, 1221, 10317, 8095, 2175, 18016, 5275, 2752, 1951, 19386, 7751, 3229, 10251, 29132, 6097, 19637, 10939, 4273, 8588, 6772, 2611, 1500, 21324, 6323, 3456, 5801, 5451, 2133, 1695, 11547, 2828, 4353, 8206, 2323, 13208, 8165, 8653, 18828, 1973, 5407, 2048, 11570, 5462, 27123, 11176, 30144]; // Zadejte hodnoty osy x
    const yValues = [49307, 22697, 54277, 32932, 34059, 35125, 37979, 47492, 40017, 28273, 2377, 2393, 5290, 33281, 2263, 28254, 23412, 3780, 65498, 11807, 5371, 3733, 65302, 35198, 6315, 27472, 99711, 15151, 72352, 35233, 9531, 21158, 15759, 5094, 2390, 73566, 15341, 7627, 12546, 12567, 4152, 2763, 33452, 5868, 10159, 23177, 4344, 38829, 21445, 21355, 64687, 3555, 11854, 3718, 32509, 10340, 102270, 33457, 107573]; // Zadejte hodnoty osy y
    const pointNames = ['Jakub Arbes - Adamité.txt', 'Jakub Arbes - Advokát chuďasů.txt', 'Jakub Arbes - Agitátor.txt', 'Jakub Arbes - Akrobati.txt', 'Jakub Arbes - Anděl míru I.txt', 'Jakub Arbes - Anděl míru II.txt', 'Jakub Arbes - Anděl míru III.txt', 'Jakub Arbes - Anděl míru IV.txt', 'Jakub Arbes - Anna a Marie.txt', 'Jakub Arbes - Aspoň se pousměj.txt', 'Jakub Arbes - Blíženci.txt', 'Jakub Arbes - Bílé svatební šaty.txt', 'Jakub Arbes - Dobrodružství ve výsadní hospodě.txt', 'Jakub Arbes - Duhokřídlá Psyché.txt', 'Jakub Arbes - Duhový bod nad hlavou.txt', 'Jakub Arbes - Dva barikádníci.txt', 'Jakub Arbes - Démantová garnitura.txt', 'Jakub Arbes - Elegie o černých očích.txt', 'Jakub Arbes - Etiopská lilie.txt', 'Jakub Arbes - Il divino Boemo.txt', 'Jakub Arbes - Jedna z těch, které mě zajímaly.txt', 'Jakub Arbes - Kamarádi.txt', 'Jakub Arbes - Kandidáti existence.txt', 'Jakub Arbes - Lampičky.txt', 'Jakub Arbes - Lilie v úpalu slunečním.txt', 'Jakub Arbes - Lotr Gólo.txt', 'Jakub Arbes - Mesiáš I.txt', 'Jakub Arbes - Moderní Magdaléna.txt', 'Jakub Arbes - Moderní upíři.txt', 'Jakub Arbes - Můj přítel vrah.txt', 'Jakub Arbes - Nalezenec.txt', 'Jakub Arbes - Newtonův mozek.txt', 'Jakub Arbes - Noc na hřbitově.txt', 'Jakub Arbes - Odumírající drahokam.txt', 'Jakub Arbes - Penězokaz.txt', 'Jakub Arbes - Poslední dnové lidstva.txt', 'Jakub Arbes - Poslední škamna.txt', 'Jakub Arbes - První noc u mrtvoly.txt', 'Jakub Arbes - Před domem smutku.txt', 'Jakub Arbes - Připij si, břatříčku!.txt', 'Jakub Arbes - Samovrah.txt', 'Jakub Arbes - Sběhlé švícko.txt', 'Jakub Arbes - Sivooký démon.txt', 'Jakub Arbes - Sladký hřích.txt', 'Jakub Arbes - Svatý Václav.txt', 'Jakub Arbes - Svatý Xaverius.txt', 'Jakub Arbes - Trilobit.txt', 'Jakub Arbes - Ukřižovaná.txt', 'Jakub Arbes - V staré pražské krčmě.txt', 'Jakub Arbes - Vymírající hřbitov.txt', 'Jakub Arbes - Zborcené harfy tón.txt', 'Jakub Arbes - Zbožný Tomáš.txt', 'Jakub Arbes - Zbožňovatel slečny Esterházy.txt', 'Jakub Arbes - Zpuchřelá nitka.txt', 'Jakub Arbes - Zázračná madona.txt', 'Jakub Arbes - Ďábel na skřipci.txt', 'Jakub Arbes - Štrajchpudlíci.txt', 'Jakub Arbes - Šílený Job.txt', 'Jakub Arbes - Mesiáš II.txt'];
    const regression = linearRegression(xValues, yValues);
    const regressionLine = xValues.map(x => [x, regression.slope * x + regression.intercept]);

    Highcharts.chart('container-lexical_diversity', {
        title: {
            text: 'Linear Regresion'
        },
        xAxis: {
            title: {
                text: 'unique words'
            }
        },
        yAxis: {
            title: {
                text: 'number of words'
            }
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 'Název: <b>{point.name}</b><br>X: {point.x}<br>Y: {point.y}'
        },
        series: [{
            type: 'scatter',
            name: 'Data',
            data: xValues.map((x, i) => ({ x: x, y: yValues[i], name: pointNames[i] })),
            marker: {
                radius: 4
            },
            dataLabels: {
                enabled: false
            }
        }, {
            type: 'line',
            name: 'Regresion Line',
            data: regressionLine,
            color: '#FF0000',
            marker: {
                enabled: false
            },
            states: {
                hover: {
                    lineWidth: 0,
                    
                }
            },
            enableMouseTracking: false
        }]
    });

    function linearRegression(x, y) {
        const n = x.length;
        const sumX = x.reduce((a, b) => a + b, 0);
        const sumY = y.reduce((a, b) => a + b, 0);
        const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
        const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);

        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        return { slope, intercept };
    }
});