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
            {x: 33648, y: 30.5152, name: removeTxtExtension ('Karolina Světlá - Černý Petříček.txt')}, {x: 33277, y: 27.5122, name: removeTxtExtension ('Karolina Světlá - Na košatkách.txt')}, {x: 98203, y: 23.4722, name: removeTxtExtension ('Karolina Světlá - První Češka.txt')}, {x: 42636, y: 20.7397, name: removeTxtExtension ('Karolina Světlá - Škapulíř.txt')}, {x: 16048, y: 15.0588, name: removeTxtExtension ('Karolina Světlá - Mladá paní Zapletalová.txt')}, {x: 63170, y: 13.5737, name: removeTxtExtension ('Karolina Světlá - Zvonečková královna.txt')},
            
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
            {x: 33648, y: 15.118, name: removeTxtExtension ('Karolina Světlá - Černý Petříček.txt')}, {x: 33277, y: 16.4457, name: removeTxtExtension ('Karolina Světlá - Na košatkách.txt')}, {x: 98203, y: 16.7266, name: removeTxtExtension ('Karolina Světlá - První Češka.txt')}, {x: 42636, y: 17.8047, name: removeTxtExtension ('Karolina Světlá - Škapulíř.txt')}, {x: 16048, y: 19.7697, name: removeTxtExtension ('Karolina Světlá - Mladá paní Zapletalová.txt')}, {x: 63170, y: 20.3387, name: removeTxtExtension ('Karolina Světlá - Zvonečková královna.txt')},
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
            {x: 33648, y: 18.6855, name: removeTxtExtension ('Karolina Světlá - Černý Petříček.txt')}, {x: 33277, y: 20.0406, name: removeTxtExtension ('Karolina Světlá - Na košatkách.txt')}, {x: 98203, y: 20.3789, name: removeTxtExtension ('Karolina Světlá - První Češka.txt')}, {x: 42636, y: 21.7043, name: removeTxtExtension ('Karolina Světlá - Škapulíř.txt')}, {x: 16048, y: 23.7223, name: removeTxtExtension ('Karolina Světlá - Mladá paní Zapletalová.txt')}, {x: 63170, y: 24.2302, name: removeTxtExtension ('Karolina Světlá - Zvonečková královna.txt')},
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});