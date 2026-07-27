// tokens
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

var corpus_size = Arbes+Neruda+Svetla+Winter+Meyrink+Hasek+Ajvaz+Urban+Macha+Jirasek+Mrstik+Zeyer+Capek_Chod+Hodrova+Sova+Herrmann+Cech+Kafka+Kolar+Stancik;

// formated size of corupus
var corpus_size_format = corpus_size.toLocaleString('en-CZ')

var Arbes_percent = (Arbes/corpus_size)*100;
var Neruda_percent = (Neruda/corpus_size)*100;
var Svetla_percent = (Svetla/corpus_size)*100;
var Winter_percent = (Winter/corpus_size)*100;
var Meyrink_percent = (Meyrink/corpus_size)*100;
var Hasek_percent = (Hasek/corpus_size)*100;
var Ajvaz_percent = (Ajvaz/corpus_size)*100;
var Urban_percent = (Urban/corpus_size)*100;
var Macha_percent = (Macha/corpus_size)*100;
var Jirasek_percent = (Jirasek/corpus_size)*100;
var Mrstik_percent = (Mrstik/corpus_size)*100;
var Zeyer_percent = (Zeyer/corpus_size)*100;
var Capek_Chod_percent = (Capek_Chod/corpus_size)*100;
var Hodrova_percent = (Hodrova/corpus_size)*100;
var Sova_percent = (Sova/corpus_size)*100;
var Herrmann_percent = (Herrmann/corpus_size)*100;
var Cech_percent = (Cech/corpus_size)*100;
var Kafka_percent = (Kafka/corpus_size)*100;
var Kolar_percent = (Kolar/corpus_size)*100;
var Stancik_percent = (Stancik/corpus_size)*100;


Highcharts.chart('container-pie', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Percentage Ratio of Author\'s Corpora'
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: false,
                distance: -40,
                format: '{point.percentage:.2f}%',
                style: {
                    fontSize: '0.8em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Percentage',
            colorByPoint: true,
            data: [
                {
                    name: 'Karel Hynek Mácha, '+Macha_percent.toFixed(2)+' %',
                    y: Macha_percent
                },
                {
                    name: 'Jakub Arbes, '+Arbes_percent.toFixed(2)+' %',
                    y: Arbes_percent
                },
                {
                    name: 'Jan Neruda, '+Neruda_percent.toFixed(2)+' %',
                    y: Neruda_percent
                },
                {
                    name: 'Karolina Světlá, '+Svetla_percent.toFixed(2)+' %',
                    y: Svetla_percent
                },
                {
                    name: 'Zikmund Winter, '+Winter_percent.toFixed(2)+' %',
                    y: Winter_percent
                },
                {
                    name: 'Gustav Meyrink, '+Meyrink_percent.toFixed(2)+' %',
                    y: Meyrink_percent
                },
                {
                    name: 'Jaroslav Hašek, '+Hasek_percent.toFixed(2)+' %',
                    y: Hasek_percent
                },
                {
                    name: 'Michal Ajvaz, '+Ajvaz_percent.toFixed(2)+' %',
                    y: Ajvaz_percent
                },
                {
                    name: 'Miloš Urban, '+Urban_percent.toFixed(2)+' %',
                    y: Urban_percent
                },
                {
                    name: 'Karel Hynek Mácha, '+Macha_percent.toFixed(2)+' %',
                    y: Macha_percent
                },
                {
                    name: 'Alois Jirásek, '+Jirasek_percent.toFixed(2)+' %',
                    y: Jirasek_percent
                },
                {
                    name: 'Vilém Mrštík, '+Mrstik_percent.toFixed(2)+' %',
                    y: Mrstik_percent
                },
                {
                    name: 'Julius Zeyer, '+Zeyer_percent.toFixed(2)+' %',
                    y: Zeyer_percent
                },
                {
                    name: 'Karel M. Čapek-Chod, '+Capek_Chod_percent.toFixed(2)+' %',
                    y: Capek_Chod_percent
                },
                {
                    name: 'Daniela Hodrová, '+Hodrova_percent.toFixed(2)+' %',
                    y: Hodrova_percent
                },
                {
                    name: 'Antonín Sova, '+Sova_percent.toFixed(2)+' %',
                    y: Sova_percent
                },
                {
                    name: 'Ignát Herrmann, '+Herrmann_percent.toFixed(2)+' %',
                    y: Herrmann_percent
                },
                {
                    name: 'Svatopluk Čech, '+Cech_percent.toFixed(2)+' %',
                    y: Cech_percent
                },
                { 
                    name: 'Franz Kafka, '+Kafka_percent.toFixed(2)+' %',
                    y: Kafka_percent
                },
                {
                    name: 'Josef Jiří Kolár, '+Kolar_percent.toFixed(2)+' %',
                    y: Kolar_percent
                },
                {
                    name: 'Petr Stančík, '+Stancik_percent.toFixed(2)+' %',
                    y: Stancik_percent
                }
            ]
        }
    ]
});
