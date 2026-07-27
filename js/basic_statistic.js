Highcharts.chart('container-basic-statistic', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Basic Statistics Owerview'
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
            'Karel Matěj Čapek-Chod',
            'Antonín Sova',
            'Jaroslav Hašek',
            'Gustav Meyrink',
            'Franz Kafka',
            'Michal Ajvaz',
            'Daniela Hodrová',
            'Miloš Urban'
        ]
    },
    yAxis: {
        title: {
            text: 'Values'
        }
    },
    series: [{
        // TATO DATA NAHRÁT DO SOUBORU basic_statistic.js
        name: 'lemmas',
        data: [
            15303, // Mácha
            18116, // Neruda
            219277, // Arbes
            7437, // Kolár
            13931, // Zeyer
            35630, // Světlá
            13830, // Čech
            14891, // Winter
            70608, // Jirásek
            10050, // Mrštík
            68686, // Herrmann
            8507, // Čapek-Chod
            8701, // Sova
            16096, // Hašek(švejk1+švejk2)
            36109, // Meyrink
            7764, // Kafka
            20063, // Ajvaz
            44264, // Hodrová
            122242, // Urban
        ]
    }, {
        // TATO DATA NAHRÁT DO SOUBORU basic_statistic.js
        name: 'sentences',
        data: [
            3125, // Mácha
            5211, // Neruda
            71383, // Arbes
            1878, // Kolár
            7443, // Zeyer
            9799, // Světlá
            3419, // Čech
            7704, // Winter
            49336, // Jirásek
            4657, // Mrštík
            26746, // Herrmann
            2224, // Čapek-Chod
            5055, // Sova
            6686, // Hašek (švejk1+švejk2)
            14655, // Meyrink
            2771, // Kafka
            4366, // Ajvaz
            20564, // Hodrová
            60083, // Urban
        ]
    },{
        name: 'average sentence lenght',
        data: [
            19.71, // Mácha
            13.53, // Neruda
            20.40, // Arbes
            24.26, // Kolár
            15.15, // Zeyer
            24.76, // Světlá
            20.80, // Čech
            18.47, // Winter
            15.51, // Jirásek
            19.21, // Mrštík
            16.51, // Herrmann
            21.20, // Čapek-Chod
            12.97, // Sova
            17.20, // Hašek (švejk1+švejk2)
            18.26, // Meyrink
            21.49, // Kafka
            20.04, // Ajvaz
            19.25, // Hodrová
            13.32, // Urban
        ]
    },{
        name: 'median sentence lenght',
        data: [
            15, // Mácha
            11, // Neruda
            16, // Arbes
            19, // Kolár
            12, // Zeyer
            21, // Světlá
            16, // Čech
            13, // Winter
            12, // Jirásek
            14, // Mrštík
            13, // Herrmann
            18, // Čapek-Chod
            11, // Sova
            13, // Hašek (švejk1+švejk2)
            14, // Meyrink
            17, // Kafka
            20, // Ajvaz
            14, // Hodrová
            11, // Urban
        ]
    }]
});