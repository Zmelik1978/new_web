// Funkce pro odstranění přípony .txt z názvu
function removeTxtExtension(name) {
    return name.replace('.txt', '');
}

// Flesh Reading Easy
Highcharts.chart('flesh_reding_easy', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Flesh Reading Easy vs Text Size'
    },
    xAxis: {
        title: {
            text: 'Text Size'
        },
        gridLineWidth: 1 // Width of the vertical grid lines
    },
    yAxis: {
        title: {
            text: 'Flesh Reading Easy'
        },
        gridLineWidth: 1 // Width of the horizontal grid lines
    },
    series: [{
        name: 'Sample Data',
        color: 'rgb(0,191,255)',
        data: [
            // x, y, name values
            {x: 35198, y: 41.0984, name: removeTxtExtension('Jakub Arbes - Lampičky.txt')}, {x: 4259, y: 36.3052, name: removeTxtExtension('Jakub Arbes - Zbožný Tomáš.txt')}, {x: 4594, y: 34.5169, name: removeTxtExtension('Jakub Arbes - Kamarádi.txt')}, {x: 39177, y: 33.2826, name: removeTxtExtension('Jakub Arbes - Sivooký démon.txt')}, {x: 42310, y: 32.8344, name: removeTxtExtension('Jakub Arbes - Anděl míru II.txt')}, {x: 41562, y: 32.7196, name: removeTxtExtension('Jakub Arbes - Anděl míru I.txt')}, {x: 46076, y: 31.6367, name: removeTxtExtension('Jakub Arbes - Anděl míru III.txt')}, {x: 19439, y: 31.1333, name: removeTxtExtension('Jakub Arbes - Moderní Magdaléna.txt')}, {x: 2579, y: 31.1057, name: removeTxtExtension('Jakub Arbes - Duhový bod nad hlavou.txt')}, {x: 38159, y: 30.7792, name: removeTxtExtension('Jakub Arbes - Akrobati.txt')}, {x: 40768, y: 30.7616, name: removeTxtExtension('Jakub Arbes - Šílený Job.txt')}, {x: 57130, y: 30.1847, name: removeTxtExtension('Jakub Arbes - Anděl míru IV.txt')}, {x: 45739, y: 29.5097, name: removeTxtExtension('Jakub Arbes - Ukřižovaná.txt')}, {x: 15099, y: 29.4215, name: removeTxtExtension('Jakub Arbes - Připij si, břatříčku!.txt')}, {x: 76060, y: 29.3901, name: removeTxtExtension('Jakub Arbes - Etiopská lilie.txt')}, {x: 27264, y: 29.198, name: removeTxtExtension('Jakub Arbes - Advokát chuďasů.txt')}, {x: 37962, y: 29.0522, name: removeTxtExtension('Jakub Arbes - Zázračná madona.txt')}, {x: 26864, y: 28.9605, name: removeTxtExtension('Jakub Arbes - Svatý Xaverius.txt')}, {x: 4471, y: 28.8698, name: removeTxtExtension('Jakub Arbes - Zpuchřelá nitka.txt')}, {x: 33893, y: 28.7622, name: removeTxtExtension('Jakub Arbes - Aspoň se pousměj.txt')}, {x: 89672, y: 28.7324, name: removeTxtExtension('Jakub Arbes - Moderní upíři.txt')}, {x: 78398, y: 28.5091, name: removeTxtExtension('Jakub Arbes - Kandidáti existence.txt')}, {x: 14170, y: 28.2676, name: removeTxtExtension('Jakub Arbes - Zbožňovatel slečny Esterházy.txt')}, {x: 6464, y: 27.9161, name: removeTxtExtension('Jakub Arbes - Dobrodružství ve výsadní hospodě.txt')}, {x: 42626, y: 27.6333, name: removeTxtExtension('Jakub Arbes - Můj přítel vrah.txt')}, {x: 12141, y: 26.944, name: removeTxtExtension('Jakub Arbes - Ďábel na skřipci.txt')}, {x: 15444, y: 26.4647, name: removeTxtExtension('Jakub Arbes - Před domem smutku.txt')}, {x: 18278, y: 26.3954, name: removeTxtExtension('Jakub Arbes - Poslední škamna.txt')}, {x: 125412, y: 26.3488, name: removeTxtExtension('Jakub Arbes - Štrajchpudlíci.txt')}, {x: 39487, y: 26.1366, name: removeTxtExtension('Jakub Arbes - Duhokřídlá Psyché.txt')}, {x: 4434, y: 25.7921, name: removeTxtExtension('Jakub Arbes - Elegie o černých očích.txt')}, {x: 65650, y: 25.7002, name: removeTxtExtension('Jakub Arbes - Agitátor.txt')}, {x: 25298, y: 25.14, name: removeTxtExtension('Jakub Arbes - Newtonův mozek.txt')}, {x: 6951, y: 25.058, name: removeTxtExtension('Jakub Arbes - Sladký hřích.txt')}, {x: 2899, y: 25.0207, name: removeTxtExtension('Jakub Arbes - Bílé svatební šaty.txt')}, {x: 7414, y: 24.9515, name: removeTxtExtension('Jakub Arbes - Lilie v úpalu slunečním.txt')}, {x: 76084, y: 24.7352, name: removeTxtExtension('Jakub Arbes - Zborcené harfy tón.txt')}, {x: 132291, y: 23.6706, name: removeTxtExtension('Jakub Arbes - Mesiáš II.txt')}, {x: 3293, y: 23.5986, name: removeTxtExtension('Jakub Arbes - Sběhlé švícko.txt')}, {x: 6008, y: 22.4859, name: removeTxtExtension('Jakub Arbes - Odumírající drahokam.txt')}, {x: 2766, y: 22.3529, name: removeTxtExtension('Jakub Arbes - Penězokaz.txt')}, {x: 28229, y: 22.2198, name: removeTxtExtension('Jakub Arbes - Démantová garnitura.txt')}, {x: 25657, y: 22.0164, name: removeTxtExtension('Jakub Arbes - V staré pražské krčmě.txt')}, {x: 18299, y: 21.1395, name: removeTxtExtension('Jakub Arbes - Noc na hřbitově.txt')}, {x: 32599, y: 20.9584, name: removeTxtExtension('Jakub Arbes - Lotr Gólo.txt')}, {x: 122055, y: 20.871, name: removeTxtExtension('Jakub Arbes - Mesiáš I.txt')}, {x: 6139, y: 20.4548, name: removeTxtExtension('Jakub Arbes - Jedna z těch, které mě zajímaly.txt')}, {x: 2797, y: 20.36, name: removeTxtExtension('Jakub Arbes - Blíženci.txt')}, {x: 8861, y: 19.3231, name: removeTxtExtension('Jakub Arbes - První noc u mrtvoly.txt')}, {x: 59565, y: 18.8192, name: removeTxtExtension('Jakub Arbes - Adamité.txt')}, {x: 11968, y: 18.6493, name: removeTxtExtension('Jakub Arbes - Svatý Václav.txt')}, {x: 14010, y: 18.4348, name: removeTxtExtension('Jakub Arbes - Il divino Boemo.txt')}, {x: 11174, y: 18.2909, name: removeTxtExtension('Jakub Arbes - Nalezenec.txt')}, {x: 33777, y: 18.1445, name: removeTxtExtension('Jakub Arbes - Dva barikádníci.txt')}, {x: 4879, y: 17.5407, name: removeTxtExtension('Jakub Arbes - Samovrah.txt')}, {x: 46555, y: 16.507, name: removeTxtExtension('Jakub Arbes - Anna a Marie.txt')}, {x: 85778, y: 14.6869, name: removeTxtExtension('Jakub Arbes - Poslední dnové lidstva.txt')}, {x: 24625, y: 12.7714, name: removeTxtExtension('Jakub Arbes - Vymírající hřbitov.txt')}, {x: 4990, y: 12.174, name: removeTxtExtension('Jakub Arbes - Trilobit.txt')},

        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});

// Flesch-Kincaid Grade Level
Highcharts.chart('flesh_kincaid_grade_level', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Flesch-Kincaid Grade Level vs Text Size'
    },
    xAxis: {
        title: {
            text: 'Text Size'
        },
        gridLineWidth: 1 // Width of the vertical grid lines
    },
    yAxis: {
        title: {
            text: 'Flesch-Kincaid Grade Level'
        },
        gridLineWidth: 1 // Width of the horizontal grid lines
    },
    series: [{
        name: 'Sample Data',
        color: 'rgb(250,128,114)',
        data: [
            {x: 35198, y: 11.0873, name: removeTxtExtension('Jakub Arbes - Lampičky.txt')}, {x: 4259, y: 12.8771, name: removeTxtExtension('Jakub Arbes - Zbožný Tomáš.txt')}, {x: 4594, y: 14.2382, name: removeTxtExtension('Jakub Arbes - Kamarádi.txt')}, {x: 39177, y: 13.0898, name: removeTxtExtension('Jakub Arbes - Sivooký démon.txt')}, {x: 42310, y: 14.2557, name: removeTxtExtension('Jakub Arbes - Anděl míru II.txt')}, {x: 41562, y: 14.4159, name: removeTxtExtension('Jakub Arbes - Anděl míru I.txt')}, {x: 46076, y: 14.3737, name: removeTxtExtension('Jakub Arbes - Anděl míru III.txt')}, {x: 19439, y: 15.5231, name: removeTxtExtension('Jakub Arbes - Moderní Magdaléna.txt')}, {x: 2579, y: 14.3967, name: removeTxtExtension('Jakub Arbes - Duhový bod nad hlavou.txt')}, {x: 38159, y: 13.8252, name: removeTxtExtension('Jakub Arbes - Akrobati.txt')}, {x: 40768, y: 15.1292, name: removeTxtExtension('Jakub Arbes - Šílený Job.txt')}, {x: 57130, y: 14.1307, name: removeTxtExtension('Jakub Arbes - Anděl míru IV.txt')}, {x: 45739, y: 14.5853, name: removeTxtExtension('Jakub Arbes - Ukřižovaná.txt')}, {x: 15099, y: 14.8824, name: removeTxtExtension('Jakub Arbes - Připij si, břatříčku!.txt')}, {x: 76060, y: 14.4484, name: removeTxtExtension('Jakub Arbes - Etiopská lilie.txt')}, {x: 27264, y: 15.9803, name: removeTxtExtension('Jakub Arbes - Advokát chuďasů.txt')}, {x: 37962, y: 13.932, name: removeTxtExtension('Jakub Arbes - Zázračná madona.txt')}, {x: 26864, y: 14.6282, name: removeTxtExtension('Jakub Arbes - Svatý Xaverius.txt')}, {x: 4471, y: 14.6244, name: removeTxtExtension('Jakub Arbes - Zpuchřelá nitka.txt')}, {x: 33893, y: 15.5547, name: removeTxtExtension('Jakub Arbes - Aspoň se pousměj.txt')}, {x: 89672, y: 15.5093, name: removeTxtExtension('Jakub Arbes - Moderní upíři.txt')}, {x: 78398, y: 15.4756, name: removeTxtExtension('Jakub Arbes - Kandidáti existence.txt')}, {x: 14170, y: 15.3443, name: removeTxtExtension('Jakub Arbes - Zbožňovatel slečny Esterházy.txt')}, {x: 6464, y: 15.614, name: removeTxtExtension('Jakub Arbes - Dobrodružství ve výsadní hospodě.txt')}, {x: 42626, y: 16.2502, name: removeTxtExtension('Jakub Arbes - Můj přítel vrah.txt')}, {x: 12141, y: 13.2111, name: removeTxtExtension('Jakub Arbes - Ďábel na skřipci.txt')}, {x: 15444, y: 15.8993, name: removeTxtExtension('Jakub Arbes - Před domem smutku.txt')}, {x: 18278, y: 16.2948, name: removeTxtExtension('Jakub Arbes - Poslední škamna.txt')}, {x: 125412, y: 16.4939, name: removeTxtExtension('Jakub Arbes - Štrajchpudlíci.txt')}, {x: 39487, y: 15.866, name: removeTxtExtension('Jakub Arbes - Duhokřídlá Psyché.txt')}, {x: 4434, y: 14.2136, name: removeTxtExtension('Jakub Arbes - Elegie o černých očích.txt')}, {x: 65650, y: 15.5625, name: removeTxtExtension('Jakub Arbes - Agitátor.txt')}, {x: 25298, y: 15.5882, name: removeTxtExtension('Jakub Arbes - Newtonův mozek.txt')}, {x: 6951, y: 17.3049, name: removeTxtExtension('Jakub Arbes - Sladký hřích.txt')}, {x: 2899, y: 15.771, name: removeTxtExtension('Jakub Arbes - Bílé svatební šaty.txt')}, {x: 7414, y: 15.1178, name: removeTxtExtension('Jakub Arbes - Lilie v úpalu slunečním.txt')}, {x: 76084, y: 16.4741, name: removeTxtExtension('Jakub Arbes - Zborcené harfy tón.txt')}, {x: 132291, y: 16.4915, name: removeTxtExtension('Jakub Arbes - Mesiáš II.txt')}, {x: 3293, y: 15.2457, name: removeTxtExtension('Jakub Arbes - Sběhlé švícko.txt')}, {x: 6008, y: 16.4743, name: removeTxtExtension('Jakub Arbes - Odumírající drahokam.txt')}, {x: 2766, y: 15.0498, name: removeTxtExtension('Jakub Arbes - Penězokaz.txt')}, {x: 28229, y: 16.8774, name: removeTxtExtension('Jakub Arbes - Démantová garnitura.txt')}, {x: 25657, y: 17.2943, name: removeTxtExtension('Jakub Arbes - V staré pražské krčmě.txt')}, {x: 18299, y: 17.0356, name: removeTxtExtension('Jakub Arbes - Noc na hřbitově.txt')}, {x: 32599, y: 16.9471, name: removeTxtExtension('Jakub Arbes - Lotr Gólo.txt')}, {x: 122055, y: 18.0657, name: removeTxtExtension('Jakub Arbes - Mesiáš I.txt')}, {x: 6139, y: 17.4344, name: removeTxtExtension('Jakub Arbes - Jedna z těch, které mě zajímaly.txt')}, {x: 2797, y: 16.4096, name: removeTxtExtension('Jakub Arbes - Blíženci.txt')}, {x: 8861, y: 17.8292, name: removeTxtExtension('Jakub Arbes - První noc u mrtvoly.txt')}, {x: 59565, y: 16.9772, name: removeTxtExtension('Jakub Arbes - Adamité.txt')}, {x: 11968, y: 17.1926, name: removeTxtExtension('Jakub Arbes - Svatý Václav.txt')}, {x: 14010, y: 17.2674, name: removeTxtExtension('Jakub Arbes - Il divino Boemo.txt')}, {x: 11174, y: 17.381, name: removeTxtExtension('Jakub Arbes - Nalezenec.txt')}, {x: 33777, y: 17.6691, name: removeTxtExtension('Jakub Arbes - Dva barikádníci.txt')}, {x: 4879, y: 17.819, name: removeTxtExtension('Jakub Arbes - Samovrah.txt')}, {x: 46555, y: 18.0393, name: removeTxtExtension('Jakub Arbes - Anna a Marie.txt')}, {x: 85778, y: 18.6669, name: removeTxtExtension('Jakub Arbes - Poslední dnové lidstva.txt')}, {x: 24625, y: 18.9022, name: removeTxtExtension('Jakub Arbes - Vymírající hřbitov.txt')}, {x: 4990, y: 19.1665, name: removeTxtExtension('Jakub Arbes - Trilobit.txt')},
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});

// Gunning Fog Index
Highcharts.chart('gunning_fox_index', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Gunning Fog Index'
    },
    xAxis: {
        title: {
            text: 'Text Size'
        },
        gridLineWidth: 1 // Width of the vertical grid lines
    },
    yAxis: {
        title: {
            text: 'Gunning Fog Index'
        },
        gridLineWidth: 1 // Width of the horizontal grid lines
    },
    series: [{
        name: 'Sample Data',
        color: 'rgb(124,252,0)',
        data: [
           {x: 35198, y: 14.641, name: removeTxtExtension('Jakub Arbes - Lampičky.txt')}, {x: 4259, y: 16.0095, name: removeTxtExtension('Jakub Arbes - Zbožný Tomáš.txt')}, {x: 4594, y: 17.9479, name: removeTxtExtension('Jakub Arbes - Kamarádi.txt')}, {x: 39177, y: 16.4877, name: removeTxtExtension('Jakub Arbes - Sivooký démon.txt')}, {x: 42310, y: 17.762, name: removeTxtExtension('Jakub Arbes - Anděl míru II.txt')}, {x: 41562, y: 17.9136, name: removeTxtExtension('Jakub Arbes - Anděl míru I.txt')}, {x: 46076, y: 17.9113, name: removeTxtExtension('Jakub Arbes - Anděl míru III.txt')}, {x: 19439, y: 19.1847, name: removeTxtExtension('Jakub Arbes - Moderní Magdaléna.txt')}, {x: 2579, y: 17.8283, name: removeTxtExtension('Jakub Arbes - Duhový bod nad hlavou.txt')}, {x: 38159, y: 17.3908, name: removeTxtExtension('Jakub Arbes - Akrobati.txt')}, {x: 40768, y: 18.6584, name: removeTxtExtension('Jakub Arbes - Šílený Job.txt')}, {x: 57130, y: 17.7509, name: removeTxtExtension('Jakub Arbes - Anděl míru IV.txt')}, {x: 45739, y: 18.0725, name: removeTxtExtension('Jakub Arbes - Ukřižovaná.txt')}, {x: 15099, y: 18.4955, name: removeTxtExtension('Jakub Arbes - Připij si, břatříčku!.txt')}, {x: 76060, y: 17.7324, name: removeTxtExtension('Jakub Arbes - Etiopská lilie.txt')}, {x: 27264, y: 19.2512, name: removeTxtExtension('Jakub Arbes - Advokát chuďasů.txt')}, {x: 37962, y: 17.5744, name: removeTxtExtension('Jakub Arbes - Zázračná madona.txt')}, {x: 26864, y: 18.163, name: removeTxtExtension('Jakub Arbes - Svatý Xaverius.txt')}, {x: 4471, y: 18.2812, name: removeTxtExtension('Jakub Arbes - Zpuchřelá nitka.txt')}, {x: 33893, y: 18.9783, name: removeTxtExtension('Jakub Arbes - Aspoň se pousměj.txt')}, {x: 89672, y: 19.1646, name: removeTxtExtension('Jakub Arbes - Moderní upíři.txt')}, {x: 78398, y: 19.0907, name: removeTxtExtension('Jakub Arbes - Kandidáti existence.txt')}, {x: 14170, y: 18.7358, name: removeTxtExtension('Jakub Arbes - Zbožňovatel slečny Esterházy.txt')}, {x: 6464, y: 19.3057, name: removeTxtExtension('Jakub Arbes - Dobrodružství ve výsadní hospodě.txt')}, {x: 42626, y: 19.8228, name: removeTxtExtension('Jakub Arbes - Můj přítel vrah.txt')}, {x: 12141, y: 17.0434, name: removeTxtExtension('Jakub Arbes - Ďábel na skřipci.txt')}, {x: 15444, y: 19.2539, name: removeTxtExtension('Jakub Arbes - Před domem smutku.txt')}, {x: 18278, y: 19.8164, name: removeTxtExtension('Jakub Arbes - Poslední škamna.txt')}, {x: 125412, y: 19.9275, name: removeTxtExtension('Jakub Arbes - Štrajchpudlíci.txt')}, {x: 39487, y: 19.361, name: removeTxtExtension('Jakub Arbes - Duhokřídlá Psyché.txt')}, {x: 4434, y: 17.8386, name: removeTxtExtension('Jakub Arbes - Elegie o černých očích.txt')}, {x: 65650, y: 19.2526, name: removeTxtExtension('Jakub Arbes - Agitátor.txt')}, {x: 25298, y: 19.0534, name: removeTxtExtension('Jakub Arbes - Newtonův mozek.txt')}, {x: 6951, y: 20.7964, name: removeTxtExtension('Jakub Arbes - Sladký hřích.txt')}, {x: 2899, y: 19.8048, name: removeTxtExtension('Jakub Arbes - Bílé svatební šaty.txt')}, {x: 7414, y: 18.5015, name: removeTxtExtension('Jakub Arbes - Lilie v úpalu slunečním.txt')}, {x: 76084, y: 20.0262, name: removeTxtExtension('Jakub Arbes - Zborcené harfy tón.txt')}, {x: 132291, y: 20.0368, name: removeTxtExtension('Jakub Arbes - Mesiáš II.txt')}, {x: 3293, y: 18.9323, name: removeTxtExtension('Jakub Arbes - Sběhlé švícko.txt')}, {x: 6008, y: 20.4061, name: removeTxtExtension('Jakub Arbes - Odumírající drahokam.txt')}, {x: 2766, y: 18.6765, name: removeTxtExtension('Jakub Arbes - Penězokaz.txt')}, {x: 28229, y: 20.7573, name: removeTxtExtension('Jakub Arbes - Démantová garnitura.txt')}, {x: 25657, y: 20.7144, name: removeTxtExtension('Jakub Arbes - V staré pražské krčmě.txt')}, {x: 18299, y: 20.5595, name: removeTxtExtension('Jakub Arbes - Noc na hřbitově.txt')}, {x: 32599, y: 20.694, name: removeTxtExtension('Jakub Arbes - Lotr Gólo.txt')}, {x: 122055, y: 21.5816, name: removeTxtExtension('Jakub Arbes - Mesiáš I.txt')}, {x: 6139, y: 20.816, name: removeTxtExtension('Jakub Arbes - Jedna z těch, které mě zajímaly.txt')}, {x: 2797, y: 19.7271, name: removeTxtExtension('Jakub Arbes - Blíženci.txt')}, {x: 8861, y: 21.6469, name: removeTxtExtension('Jakub Arbes - První noc u mrtvoly.txt')}, {x: 59565, y: 20.7752, name: removeTxtExtension('Jakub Arbes - Adamité.txt')}, {x: 11968, y: 20.8321, name: removeTxtExtension('Jakub Arbes - Svatý Václav.txt')}, {x: 14010, y: 21.2688, name: removeTxtExtension('Jakub Arbes - Il divino Boemo.txt')}, {x: 11174, y: 21.0646, name: removeTxtExtension('Jakub Arbes - Nalezenec.txt')}, {x: 33777, y: 21.4236, name: removeTxtExtension('Jakub Arbes - Dva barikádníci.txt')}, {x: 4879, y: 21.7995, name: removeTxtExtension('Jakub Arbes - Samovrah.txt')}, {x: 46555, y: 21.6693, name: removeTxtExtension('Jakub Arbes - Anna a Marie.txt')}, {x: 85778, y: 22.4495, name: removeTxtExtension('Jakub Arbes - Poslední dnové lidstva.txt')}, {x: 24625, y: 22.6877, name: removeTxtExtension('Jakub Arbes - Vymírající hřbitov.txt')}, {x: 4990, y: 23.043, name: removeTxtExtension('Jakub Arbes - Trilobit.txt')},
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});