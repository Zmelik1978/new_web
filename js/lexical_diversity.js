document.addEventListener('DOMContentLoaded', function () {
    const xValues = [20121, 28260, 34411, 33095, 37204, 11572, 41680, 22558, 17106, 8904, 17734, 13577, 19668, 32323, 18104, 33091, 14807, 19826, 829, 16511, 21728, 2151, 1696, 6738, 1232, 1420, 1462, 2014, 27925, 1238, 1614, 2118, 1525, 13642, 1357, 1349, 28767, 1707, 12495, 11991, 14274, 13321, 1081, 1225, 15851, 8485, 17373, 10864, 12068, 12376, 13213, 15659, 13319, 10141, 1408, 1394, 2757, 12068, 1221, 10317, 8095, 2175, 18016, 5275, 2752, 1951, 19386, 7751, 3229, 10251, 29132, 6097, 19637, 10939, 4273, 8588, 6772, 2611, 1500, 21324, 6323, 3456, 5801, 5451, 2133, 1695, 11547, 2828, 4353, 8206, 2323, 13208, 8165, 8653, 18828, 1973, 5407, 2048, 11570, 5462, 27123, 11176, 760, 1069, 1190, 1210, 8273, 913, 2706, 962, 1008, 1695, 1815, 1312, 2040, 8974, 460, 1826, 18001, 19806, 16772, 26843, 3121, 3464, 3951, 10387, 831, 824, 1613, 6026, 2238, 674, 113, 1613, 394, 714, 338, 571, 1141, 755, 2083, 18080, 5932, 10277, 26350, 18640, 10450, 13207, 14787, 15249, 9264, 3324, 21170, 2161, 21451, 18659, 25865, 9096, 13900, 8558, 18357, 30911, 24287, 28547, 20089, 24575, 17440, 27469, 18098, 11264, 27056, 41647]; // Zadejte hodnoty osy x
    const yValues = [68052, 106904, 132245, 119123, 140695, 28423, 169620, 65550, 78062, 20762, 68079, 49892, 57304, 121768, 59550, 108089, 42012, 61836, 1234, 45688, 65561, 3896, 3083, 15910, 1882, 2341, 2480, 3565, 96913, 2052, 2677, 3819, 2510, 38716, 2293, 2444, 108089, 2845, 31563, 30895, 40807, 37164, 1789, 2078, 49307, 22697, 54277, 32932, 34059, 35125, 37979, 47492, 40017, 28273, 2377, 2393, 5290, 33281, 2263, 28254, 23412, 3780, 65498, 11807, 5371, 3733, 65302, 35198, 6315, 27472, 99711, 15151, 72352, 35233, 9531, 21158, 15759, 5094, 2390, 73566, 15341, 7627, 12546, 12567, 4152, 2763, 33452, 5868, 10159, 23177, 4344, 38829, 21445, 21355, 64687, 3555, 11854, 3718, 32509, 10340, 102270, 33457, 1125, 1834, 1976, 1884, 20624, 1510, 4947, 1424, 1649, 3099, 3282, 2241, 3743, 21758, 649, 3282, 55026, 59948, 45558, 92503, 5971, 6730, 7529, 28998, 1191, 1254, 2721, 12648, 3869, 1071, 128, 2721, 526, 1077, 443, 889, 1744, 1122, 3916, 47115, 13626, 27770, 82355, 54071, 28628, 36152, 40494, 46148, 21235, 5715, 60792, 3377, 59327, 44896, 78287, 21138, 33486, 18561, 44106, 105510, 75645, 81564, 52128, 76655, 48238, 66870, 46443, 24653, 89430, 142277]; // Zadejte hodnoty osy y
    const pointNames = ['Alois Jirásek - F. L. Věk I.txt', 'Alois Jirásek - F. L. Věk II.txt', 'Alois Jirásek - F. L. Věk III.txt', 'Alois Jirásek - F. L. Věk IV.txt', 'Alois Jirásek - F. L. Věk V.txt', 'Alois Jirásek - Filozofská historie.txt', 'Alois Jirásek - Temno.txt', 'Antonín Sova - Ivův román.txt', 'Daniela Hodrová - Kukly.txt', 'Daniela Hodrová - Město vidím.txt', 'Daniela Hodrová - Perunův den.txt', 'Daniela Hodrová - Podobojí.txt', 'Daniela Hodrová - Théta.txt', 'Daniela Hodrová - Točité věty.txt', 'Franz Kafka - Proces.txt', 'Gustav Meyrink - Anděl západního okna.txt', 'Gustav Meyrink - Bílý Dominikán.txt', 'Gustav Meyrink - Golem.txt', 'Gustav Meyrink - Neviditelná Praha.txt', 'Gustav Meyrink - Valpuržina noc.txt', 'Gustav Meyrink - Zelená tvář.txt', 'Ignát Herrmann - Dobrý muž Koňura.txt', 'Ignát Herrmann - Dvě těžké chvíle ze života páně Klokočova.txt', 'Ignát Herrmann - Historie o doktoru Faustovi.txt', 'Ignát Herrmann - Hvězdáři.txt', 'Ignát Herrmann - Kterak pan Vilibald Vonásek dobyl svobody.txt', 'Ignát Herrmann - Malíř a malíř!.txt', 'Ignát Herrmann - Náš Mikoláš.txt', 'Ignát Herrmann - Otec Kondelík a ženich Vejvara.txt', 'Ignát Herrmann - Pan Alojs.txt', 'Ignát Herrmann - Poslední sázka.txt', 'Ignát Herrmann - Proč pan Tadeáš Bezinka chodí oholen a ostříhán.txt', 'Ignát Herrmann - První výdělek.txt', 'Ignát Herrmann - Příběh dušičkový.txt', 'Ignát Herrmann - Smlouva pánů Škabrouta a Rysa a její zánik.txt', 'Ignát Herrmann - Tajný společník páně Kobrčův.txt', 'Ignát Herrmann - Tchán Kondelík a zeť Vejvara.txt', 'Ignát Herrmann - To se tak nebere!.txt', 'Ignát Herrmann - U snědeného krámu I.txt', 'Ignát Herrmann - U snědeného krámu II.txt', 'Ignát Herrmann - U snědeného krámu III.txt', 'Ignát Herrmann - U snědeného krámu IV.txt', 'Ignát Herrmann - Zamrzá!.txt', 'Ignát Herrmann - Ztracený ráj páně Tetřevův.txt', 'Jakub Arbes - Adamité.txt', 'Jakub Arbes - Advokát chuďasů.txt', 'Jakub Arbes - Agitátor.txt', 'Jakub Arbes - Akrobati.txt', 'Jakub Arbes - Anděl míru I.txt', 'Jakub Arbes - Anděl míru II.txt', 'Jakub Arbes - Anděl míru III.txt', 'Jakub Arbes - Anděl míru IV.txt', 'Jakub Arbes - Anna a Marie.txt', 'Jakub Arbes - Aspoň se pousměj.txt', 'Jakub Arbes - Blíženci.txt', 'Jakub Arbes - Bílé svatební šaty.txt', 'Jakub Arbes - Dobrodružství ve výsadní hospodě.txt', 'Jakub Arbes - Duhokřídlá Psyché.txt', 'Jakub Arbes - Duhový bod nad hlavou.txt', 'Jakub Arbes - Dva barikádníci.txt', 'Jakub Arbes - Démantová garnitura.txt', 'Jakub Arbes - Elegie o černých očích.txt', 'Jakub Arbes - Etiopská lilie.txt', 'Jakub Arbes - Il divino Boemo.txt', 'Jakub Arbes - Jedna z těch, které mě zajímaly.txt', 'Jakub Arbes - Kamarádi.txt', 'Jakub Arbes - Kandidáti existence.txt', 'Jakub Arbes - Lampičky.txt', 'Jakub Arbes - Lilie v úpalu slunečním.txt', 'Jakub Arbes - Lotr Gólo.txt', 'Jakub Arbes - Mesiáš I.txt', 'Jakub Arbes - Moderní Magdaléna.txt', 'Jakub Arbes - Moderní upíři.txt', 'Jakub Arbes - Můj přítel vrah.txt', 'Jakub Arbes - Nalezenec.txt', 'Jakub Arbes - Newtonův mozek.txt', 'Jakub Arbes - Noc na hřbitově.txt', 'Jakub Arbes - Odumírající drahokam.txt', 'Jakub Arbes - Penězokaz.txt', 'Jakub Arbes - Poslední dnové lidstva.txt', 'Jakub Arbes - Poslední škamna.txt', 'Jakub Arbes - První noc u mrtvoly.txt', 'Jakub Arbes - Před domem smutku.txt', 'Jakub Arbes - Připij si, břatříčku!.txt', 'Jakub Arbes - Samovrah.txt', 'Jakub Arbes - Sběhlé švícko.txt', 'Jakub Arbes - Sivooký démon.txt', 'Jakub Arbes - Sladký hřích.txt', 'Jakub Arbes - Svatý Václav.txt', 'Jakub Arbes - Svatý Xaverius.txt', 'Jakub Arbes - Trilobit.txt', 'Jakub Arbes - Ukřižovaná.txt', 'Jakub Arbes - V staré pražské krčmě.txt', 'Jakub Arbes - Vymírající hřbitov.txt', 'Jakub Arbes - Zborcené harfy tón.txt', 'Jakub Arbes - Zbožný Tomáš.txt', 'Jakub Arbes - Zbožňovatel slečny Esterházy.txt', 'Jakub Arbes - Zpuchřelá nitka.txt', 'Jakub Arbes - Zázračná madona.txt', 'Jakub Arbes - Ďábel na skřipci.txt', 'Jakub Arbes - Štrajchpudlíci.txt', 'Jakub Arbes - Šílený Job.txt', 'Jan Neruda - Blbý Jóna.txt', 'Jan Neruda - Byl darebákem.txt', 'Jan Neruda - Doktor Kazisvět.txt', 'Jan Neruda - Erotománie.txt', 'Jan Neruda - Figurky.txt', 'Jan Neruda - Jak si nakouřil pan Vorel pěnovku.txt', 'Jan Neruda - Jak to přišlo....txt', 'Jan Neruda - Josef harfenista.txt', 'Jan Neruda - O měkkém srdci paní Rusky.txt', 'Jan Neruda - Pan Ryšánek a pan Schlegl.txt', 'Jan Neruda - Psáno o letošních dušičkách.txt', 'Jan Neruda - Přivedla žebráka na mizinu.txt', 'Jan Neruda - Svatováclavská mše.txt', 'Jan Neruda - Týden v tichém domě.txt', 'Jan Neruda - U tří lilií.txt', 'Jan Neruda - Večerní šplechty.txt', 'Jaroslav Hašek - Švejk1.txt', 'Jaroslav Hašek - Švejk2.txt', 'Josef Jiří Kolár - Pekla zplozenci.txt', 'Julius Zeyer - Jan Maria Plojhar.txt', 'Julius Zeyer - Legenda pražská.txt', 'Julius Zeyer - Legenda slovenská.txt', 'Julius Zeyer - Legenda toledská.txt', 'Karel Hynek Mácha - Cikáni.txt', 'Karel Hynek Mácha - Karlův Tejn.txt', 'Karel Hynek Mácha - Klášter Sázavský.txt', 'Karel Hynek Mácha - Krkonošská pouť.txt', 'Karel Hynek Mácha - Křivoklad.txt', 'Karel Hynek Mácha - Marinka.txt', 'Karel Hynek Mácha - Návrat.txt', 'Karel Hynek Mácha - Poutník.txt', 'Karel Hynek Mácha - Pouť krkonošská.txt', 'Karel Hynek Mácha - Přísaha.txt', 'Karel Hynek Mácha - Sen.txt', 'Karel Hynek Mácha - Svět smyslný.txt', 'Karel Hynek Mácha - Svět zašlý.txt', 'Karel Hynek Mácha - Valdice.txt', 'Karel Hynek Mácha - Večer na Bezdězu.txt', 'Karel Hynek Mácha - Viasil Viasilovič.txt', 'Karel M. Čapek-Chod - Kašpar Lén mstitel.txt', 'Karolina Světlá - Mladá paní Zapletalová.txt', 'Karolina Světlá - Na košatkách.txt', 'Karolina Světlá - První Češka.txt', 'Karolina Světlá - Zvonečková královna.txt', 'Karolina Světlá - Černý Petříček.txt', 'Karolina Světlá - Škapulíř.txt', 'Michal Ajvaz - Druhé město.txt', 'Michal Ajvaz - Luxemburská zahrada.txt', 'Michal Ajvaz - Návrat starého varana.txt', 'Michal Ajvaz - Vražda v hotelu Intercontinental.txt', 'Miloš Urban - Boletus Arcanus.txt', 'Miloš Urban - Běloruska.txt', 'Miloš Urban - Hastrman1.txt', 'Miloš Urban - Hastrman2.txt', 'Miloš Urban - Lord Mord.txt', 'Miloš Urban - Michaela.txt', 'Miloš Urban - Paměti poslance parlamentu.txt', 'Miloš Urban - Pole a palisáda.txt', 'Miloš Urban - Poslední tečka za rukopisy.txt', 'Miloš Urban - Praga Piccola.txt', 'Miloš Urban - Santiniho jazyk.txt', 'Miloš Urban - Sedmikostelí.txt', 'Miloš Urban - Stín katedrály.txt', 'Miloš Urban - Továrna na maso.txt', 'Miloš Urban - Závěrka.txt', 'Petr Stančík - Mlýn na mumie.txt', 'Svatopluk Čech - Nový epochální výlet pana Broučka.txt', 'Svatopluk Čech - Pravý výlet pana Broučka.txt', 'Vilém Mrštík - Santa Lucia.txt', 'Zikmund Winter - Mistr Kampanus.txt'];
    const regression = linearRegression(xValues, yValues);
    const regressionLine = xValues.map(x => [x, regression.slope * x + regression.intercept]);

    Highcharts.chart('container_lexical_diversity', {
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