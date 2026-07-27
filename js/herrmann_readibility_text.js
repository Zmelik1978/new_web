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
            {x: 2173, y: 41.6623, name: removeTxtExtension ('Ignát Herrmann - Zamrzá!.txt')}, {x: 47935, y: 39.8233, name: removeTxtExtension ('Ignát Herrmann - Příběh dušičkový.txt')}, {x: 136086, y: 38.3003, name: removeTxtExtension ('Ignát Herrmann - Tchán Kondelík a zeť Vejvara.txt')}, {x: 121033, y: 37.0936, name: removeTxtExtension ('Ignát Herrmann - Otec Kondelík a ženich Vejvara.txt')}, {x: 3030, y: 35.9268, name: removeTxtExtension ('Ignát Herrmann - Tajný společník páně Kobrčův.txt')}, {x: 45340, y: 35.6324, name: removeTxtExtension ('Ignát Herrmann - U snědeného krámu IV.txt')}, {x: 37581, y: 35.6233, name: removeTxtExtension ('Ignát Herrmann - U snědeného krámu II.txt')}, {x: 49462, y: 34.9704, name: removeTxtExtension ('Ignát Herrmann - U snědeného krámu III.txt')}, {x: 38543, y: 34.9526, name: removeTxtExtension ('Ignát Herrmann - U snědeného krámu I.txt')}, {x: 4435, y: 34.5081, name: removeTxtExtension ('Ignát Herrmann - Náš Mikoláš.txt')}, {x: 2929, y: 32.4516, name: removeTxtExtension ('Ignát Herrmann - Kterak pan Vilibald Vonásek dobyl svobody.txt')}, {x: 3373, y: 32.1932, name: removeTxtExtension ('Ignát Herrmann - Poslední sázka.txt')}, {x: 3045, y: 31.7403, name: removeTxtExtension ('Ignát Herrmann - Malíř a malíř!.txt')}, {x: 4627, y: 31.4725, name: removeTxtExtension ('Ignát Herrmann - Proč pan Tadeáš Bezinka chodí oholen a ostříhán.txt')}, {x: 3064, y: 31.4623, name: removeTxtExtension ('Ignát Herrmann - První výdělek.txt')}, {x: 2513, y: 31.4197, name: removeTxtExtension ('Ignát Herrmann - Pan Alojs.txt')}, {x: 4761, y: 30.6539, name: removeTxtExtension ('Ignát Herrmann - Dobrý muž Koňura.txt')}, {x: 3472, y: 30.1255, name: removeTxtExtension ('Ignát Herrmann - To se tak nebere!.txt')}, {x: 3740, y: 27.1637, name: removeTxtExtension ('Ignát Herrmann - Dvě těžké chvíle ze života páně Klokočova.txt')}, {x: 18695, y: 26.1433, name: removeTxtExtension ('Ignát Herrmann - Historie o doktoru Faustovi.txt')}, {x: 2735, y: 25.2332, name: removeTxtExtension ('Ignát Herrmann - Smlouva pánů Škabrouta a Rysa a její zánik.txt')}, {x: 2547, y: 22.4942, name: removeTxtExtension ('Ignát Herrmann - Ztracený ráj páně Tetřevův.txt')}, {x: 2280, y: 14.0739, name: removeTxtExtension ('Ignát Herrmann - Hvězdáři.txt')},
            
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
            {x: 2173, y: 12.4467, name: removeTxtExtension ('Ignát Herrmann - Zamrzá!.txt')}, {x: 47935, y: 12.0163, name: removeTxtExtension ('Ignát Herrmann - Příběh dušičkový.txt')}, {x: 136086, y: 12.7222, name: removeTxtExtension ('Ignát Herrmann - Tchán Kondelík a zeť Vejvara.txt')}, {x: 121033, y: 12.8948, name: removeTxtExtension ('Ignát Herrmann - Otec Kondelík a ženich Vejvara.txt')}, {x: 3030, y: 13.7029, name: removeTxtExtension ('Ignát Herrmann - Tajný společník páně Kobrčův.txt')}, {x: 45340, y: 13.5113, name: removeTxtExtension ('Ignát Herrmann - U snědeného krámu IV.txt')}, {x: 37581, y: 13.5683, name: removeTxtExtension ('Ignát Herrmann - U snědeného krámu II.txt')}, {x: 49462, y: 13.9951, name: removeTxtExtension ('Ignát Herrmann - U snědeného krámu III.txt')}, {x: 38543, y: 13.7634, name: removeTxtExtension ('Ignát Herrmann - U snědeného krámu I.txt')}, {x: 4435, y: 13.955, name: removeTxtExtension ('Ignát Herrmann - Náš Mikoláš.txt')}, {x: 2929, y: 14.4625, name: removeTxtExtension ('Ignát Herrmann - Kterak pan Vilibald Vonásek dobyl svobody.txt')}, {x: 3373, y: 14.3183, name: removeTxtExtension ('Ignát Herrmann - Poslední sázka.txt')}, {x: 3045, y: 14.4774, name: removeTxtExtension ('Ignát Herrmann - Malíř a malíř!.txt')}, {x: 4627, y: 14.9514, name: removeTxtExtension ('Ignát Herrmann - Proč pan Tadeáš Bezinka chodí oholen a ostříhán.txt')}, {x: 3064, y: 14.5514, name: removeTxtExtension ('Ignát Herrmann - První výdělek.txt')}, {x: 2513, y: 14.3532, name: removeTxtExtension ('Ignát Herrmann - Pan Alojs.txt')}, {x: 4761, y: 14.5892, name: removeTxtExtension ('Ignát Herrmann - Dobrý muž Koňura.txt')}, {x: 3472, y: 14.8077, name: removeTxtExtension ('Ignát Herrmann - To se tak nebere!.txt')}, {x: 3740, y: 16.673, name: removeTxtExtension ('Ignát Herrmann - Dvě těžké chvíle ze života páně Klokočova.txt')}, {x: 18695, y: 16.7252, name: removeTxtExtension ('Ignát Herrmann - Historie o doktoru Faustovi.txt')}, {x: 2735, y: 16.273, name: removeTxtExtension ('Ignát Herrmann - Smlouva pánů Škabrouta a Rysa a její zánik.txt')}, {x: 2547, y: 18.234, name: removeTxtExtension ('Ignát Herrmann - Ztracený ráj páně Tetřevův.txt')}, {x: 2280, y: 18.6524, name: removeTxtExtension ('Ignát Herrmann - Hvězdáři.txt')},
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
            {x: 2173, y: 15.356, name: removeTxtExtension ('Ignát Herrmann - Zamrzá!.txt')}, {x: 47935, y: 15.6363, name: removeTxtExtension ('Ignát Herrmann - Příběh dušičkový.txt')}, {x: 136086, y: 16.5428, name: removeTxtExtension ('Ignát Herrmann - Tchán Kondelík a zeť Vejvara.txt')}, {x: 121033, y: 16.8155, name: removeTxtExtension ('Ignát Herrmann - Otec Kondelík a ženich Vejvara.txt')}, {x: 3030, y: 16.9674, name: removeTxtExtension ('Ignát Herrmann - Tajný společník páně Kobrčův.txt')}, {x: 45340, y: 17.0414, name: removeTxtExtension ('Ignát Herrmann - U snědeného krámu IV.txt')}, {x: 37581, y: 16.9935, name: removeTxtExtension ('Ignát Herrmann - U snědeného krámu II.txt')}, {x: 49462, y: 17.3291, name: removeTxtExtension ('Ignát Herrmann - U snědeného krámu III.txt')}, {x: 38543, y: 17.2824, name: removeTxtExtension ('Ignát Herrmann - U snědeného krámu I.txt')}, {x: 4435, y: 17.6006, name: removeTxtExtension ('Ignát Herrmann - Náš Mikoláš.txt')}, {x: 2929, y: 18.1702, name: removeTxtExtension ('Ignát Herrmann - Kterak pan Vilibald Vonásek dobyl svobody.txt')}, {x: 3373, y: 17.8055, name: removeTxtExtension ('Ignát Herrmann - Poslední sázka.txt')}, {x: 3045, y: 17.7201, name: removeTxtExtension ('Ignát Herrmann - Malíř a malíř!.txt')}, {x: 4627, y: 18.645, name: removeTxtExtension ('Ignát Herrmann - Proč pan Tadeáš Bezinka chodí oholen a ostříhán.txt')}, {x: 3064, y: 18.1149, name: removeTxtExtension ('Ignát Herrmann - První výdělek.txt')}, {x: 2513, y: 18.2883, name: removeTxtExtension ('Ignát Herrmann - Pan Alojs.txt')}, {x: 4761, y: 18.3262, name: removeTxtExtension ('Ignát Herrmann - Dobrý muž Koňura.txt')}, {x: 3472, y: 18.5559, name: removeTxtExtension ('Ignát Herrmann - To se tak nebere!.txt')}, {x: 3740, y: 20.2279, name: removeTxtExtension ('Ignát Herrmann - Dvě těžké chvíle ze života páně Klokočova.txt')}, {x: 18695, y: 20.3354, name: removeTxtExtension ('Ignát Herrmann - Historie o doktoru Faustovi.txt')}, {x: 2735, y: 19.2066, name: removeTxtExtension ('Ignát Herrmann - Smlouva pánů Škabrouta a Rysa a její zánik.txt')}, {x: 2547, y: 22.0604, name: removeTxtExtension ('Ignát Herrmann - Ztracený ráj páně Tetřevův.txt')}, {x: 2280, y: 23.0196, name: removeTxtExtension ('Ignát Herrmann - Hvězdáři.txt')},
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});