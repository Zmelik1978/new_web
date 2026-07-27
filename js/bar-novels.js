Highcharts.chart('container-novels', {
    chart: {
        type: 'bar' // 'bar' type for horizontal bars
    },
    title: {
        text: 'Number of Novels'
    },
    xAxis: {
        categories: [
            'Karel Hynek Mácha', 
            'Jan Neruda', 
            'Jakub Arbes', 
            'Josef Jiří Kolár',
            'Julius Zeyer',
            'Karolina Světlá',
            'Svatopluk Čech',
            'Zikmund Winter',
            'Alois Jirásek',
            'Vilém Mrštík',
            'Ignát Herrmann',
            'Karel M. Čapek-Chod',
            'Antonín Sova',
            'Jaroslav Hašek',
            'Gustav Meyrink',
            'Franz Kafka',
            'Michal Ajvaz',
            'Daniela Hodrová',
            'Miloš Urban',
            'Petr Stančík'
        ],
    },    
    yAxis: {
        title: {
            text: null
        }
    },
    series: [{
        name: 'Number of Novels',
        color: "#20c997",
        data: [
            15, // Mácha
            13, // Neruda
            59, // Arbes
            1, // Kolár
            4, // Zeyer
            6, // Světlá
            2, // Čech
            1, // Winter
            7, // Jirásek
            1, // Mrštík
            24, // Herrmann
            1, // Čapek-Chod
            1, // Sova
            2, //Hašek
            6, // Meyrink
            1, // Kafka
            4, // Ajvaz
            6, // Hodrová
            13, // Urban
            2, // Stančík
        ] // Example data values
    }]
});