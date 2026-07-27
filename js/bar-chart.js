// Tokens
var Arbes = 1969559;
var Neruda = 87601;
var Svetla = 289575;
var Winter = 170147;
var Meyrink = 324487;
var Hasek = 140777;
var Ajvaz = 134021;
var Urban = 981030;
var Macha = 75264;
var Jirasek = 949433;
var Mrstik = 109023;
var Zeyer = 141364;
var Capek_Chod = 57609;
var Hodrova = 472212;
var Sova = 81682;
var Herrmann = 551190;
var Cech = 85833;
var Kafka = 76660;
var Kolar = 54039;
var Stancik = 107660;

// Lemmas
var Arbes_lemma = 232873;
var Neruda_lemma = 18116;
var Svetla_lemma = 35630;
var Winter_lemma = 14891;
var Meyrink_lemma = 36109;
var Hasek_lemma = 16096;
var Ajvaz_lemma = 20063;
var Urban_lemma = 122242;
var Macha_lemma = 15303;
var Jirasek_lemma = 70608;
var Mrstik_lemma = 10050;
var Zeyer_lemma = 13931;
var Capek_Chod_lemma = 8507;
var Hodrova_lemma = 44264;
var Sova_lemma = 8701;
var Herrmann_lemma = 68686;
var Cech_lemma = 13830;
var Kafka_lemma = 7764;
var Kolar_lemma = 7437;
var Stancik_lemma = 19048;

Highcharts.chart('container-bar', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Tokens & Lemmas in Author\'s Corpora',
        align: 'center',
    },
    xAxis: {
        categories: ['Karel Hynek Mácha', 'Jan Neruda', 'Jakub Arbes', 'Josef J. Kolár', 'Julius Zeyer', 'Karolina Světlá', 'Svatopluk Čech', 'Zikmund Winter', 'Alois Jirásek', 'Vilém Mrštík', 'Ignát Herrmann', 'Karel M. Čapek-Chod', 'Antonín Sova', 'Jaroslav Hašek', 'Gustav Meyrink', 'Franz Kafka', 'Michal Ajvaz', 'Daniela Hodrová', 'Miloš Urban', 'Petr Stančík'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Absolute Frequency'
        }
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Tokens',
            data: [Macha, Neruda, Arbes, Kolar, Zeyer, Svetla, Cech, Winter, Jirasek, Mrstik, Herrmann, Capek_Chod, Sova, Hasek, Meyrink, Kafka, Ajvaz, Hodrova, Urban, Stancik]
        },
        {
            name: 'Lemmas',
            data: [Macha_lemma, Neruda_lemma, Arbes_lemma, Kolar_lemma, Zeyer_lemma, Svetla_lemma, Cech_lemma, Winter_lemma, Jirasek_lemma, Mrstik_lemma, Herrmann_lemma, Capek_Chod_lemma, Sova_lemma, Hasek_lemma, Meyrink_lemma, Kafka_lemma, Ajvaz_lemma, Hodrova_lemma, Urban_lemma, Stancik_lemma]
        }
    ]
});
