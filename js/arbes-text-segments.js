Highcharts.chart('container-text-segments', {
    chart: {
        type: 'column',
        height: 550 // Set desired height in pixels
    },
    title: {
        text: 'Total Distribution of Text Segments'
    },
    xAxis: {
        categories: [
            'Ďábel na skřipci (1865)',
            'Elegie o černých očích (1865–1867)',
            'Dobrodružství ve výsadní hospodě (1872)',
            'Svatý Xaverius (1873)',
            'Sivooký démon (1873)',
            'Zbožný Tomáš (1874)',
            'Zázračná madona (1875)',
            'Sběhlé švícko (1875)',
            'Penězokaz (1875)',
            'Sladký hřích (1877)',
            'Zbožňovatel kněžny Esterházy (1878)',
            'Poslední škamna (1878)',
            'Advokát chuďasů  (1881)',
            'Bílé svatební šaty (1883)',
            'Démantová garnitura (1883)',
            'Jedna z těch, které mě zajímaly (1883)',
            'Před domem smutku (1883)',
            'Dva barikádníci (1885)',

            'Il divino Boemo (1886)',
            'První noc u mrtvoly (1886)',
            'Lotr Gólo (1886)',
            'Nalezenec (1887)',
            'Blíženci (1888)',
            'Zpuchřelá nitka (1888)',
            'Kamarádi (1888)',
            'Duhový bod nad hlavou (1889)',
            'Odumírající drahokam (1889)',
            'Trilobit (1890)',
            'Lilie v úpalu slunečním (1891)',
            'Připij si, bratříčku! (1892)',
            'Noc na hřbitově (1899)',
            'Samovrah (1900)',
            'Moderní Magdaléna (1900)',
            'Vymírající hřbitov (1924)',
            'Svatý Václav (1925)',
        ],
        crosshair: true
    },
    yAxis: {
        title: {
            useHTML: true,
            text: 'i.p.m.'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'direct speech',
        data: [
            291392.65, 
            252380.95, 
            200113.59,// Dobrodružství ve výsadní hospodě
            196315.31, 
            185698.91, 
            83120.57, // Zbožný Tomáš
            108462.27, // Zázračná madona
            78880.41, // Sběhlé švícko
            7993.27, //Penězokaz
            6332.36,// Sladký hřích
            135678.39, // Zbožňovatel kněžny Esterházy
            143073.08, // Poslední škamna
            221408.15, // Advokát chuďasů
            208777.16, // Bílé svatební šaty
            192718.93, // Démantová garnitura
            20655.68, // Jedna z těch, které mě zajímaly
            435451.07, // Před domem smutku
            235568.30, // Dva barikádníci
            337072.88, // Il divino Boemo
            96981.03, // První noc u mrtvoly
            127750.54, // Lotr Gólo
            61185.47,  // Nalezenec
            70242.66, // Blíženci
            66812.71, // Zpuchřelá nitka
            331779.54, // Kamarádi
            0, // Duhový bod nad hlavou
            61876.25, // Odumírající drahokam
            20847.97, // Trilobit    
            76041.33, // Lilie v úpalu slunečním
            352628.18, // Připij si, bratříčku!
            99349.69, // Noc na hřbitově
            149492.02, // Samovrah   
            604843.04,// Moderní Magdaléna
            129107.20,// Vymírající hřbitov
            403807.81, // Svatý Václav
        ] //pořadí určuje pořadí děl

    }, {
        name: 'direct speech as an inner monologue',
        data: [
            7059.96, 
            0, 
            14767.13, // Dobrodružství ve výsadní hospodě
            0, 
            627.77, 
            0, //Zbožný Tomáš
            0, // Zázračná madona
            0, // Sběhlé švícko
            0, // Penězokaz
            0, // Sladký hřích
            0, // Zbožňovatel kněžny Esterházy
            0, // Poslední škamna
            1965.69, // Advokát chuďasů
            0, // Bílé svatební šaty
            7229.12,// Démantová garnitura
            0, // Jedna z těch, které mě zajímaly
            0, // Před domem smutku
            0, // Dva barikádníci
            0, // Il divino Boemo
            0, // První noc u mrtvoly
            221.15, // Lotr Gólo
            1062.25, // Nalezenec
            0, // Blíženci
            0, // Zpuchřelá nitka
            0, // Kamarádi
            0, // Duhový bod nad hlavou
            0, // Odumírající drahokam
            0, // Trilobit
            968.68, // Lilie v úpalu slunečním
            0, // Připij si, bratříčku!
            0, // Noc na hřbitově
            4837.93, // Samovrah
            14757.18, // Moderní Magdaléna
            806.03, // Vymírající hřbitov
            1594.90, // Svatý Václav

        ] //pořadí určuje pořadí děl

    }, {
        name: 'personal narrator',
        data: [
            0, 
            0,
            0, // Dobrodružství ve výsadní hospodě 
            0, 
            116584.96, 
            0, // Zbožný Tomáš
            199544.74, // Zázračná madona
            0, // Sběhlé švícko
            0, // Penězokaz
            0, // Sladký hřích
            0, // Zbožňovatel kněžny Esterházy
            0, // Poslední škamna
            0, // Advokát chuďasů
            0, // Bílé svatební šaty
            0, // Démantová garnitura
            0, // Jedna z těch, které mě zajímaly
            0, // Před domem smutku
            0, // Dva barikádníci
            0, // Il divino Boemo
            0, // První noc u mrtvoly
            0, // Lotr Gólo
            0, // Nalezenec
            0, // Blíženci
            0, // Zpuchřelá nitka
            0, // Kamarádi
            0, // Duhový bod nad hlavou
            0, // Odumírající drahokam
            0, // Trilobit
            0, // Lilie v úpalu slunečním
            0, // Připij si, bratříčku!
            0, // Noc na hřbitově
            0, // Samovrah
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0, // Svatý Václav
        ]

    }, {
        name: 'narrator - character',
        data: [
            618665.38, 
            744444.44, 
            0, // Dobrodružství ve výsadní hospodě
            467359.88, 
            532165.49, 
            0, // Zbožný Tomáš
            479159.62, // Zázračná madona
            0, // Sběhlé švícko
            0, // Penězokaz
            0, // Sladký hřích
            0, // Zbožňovatel kněžny Esterházy
            826629.86, // Poslední škamna
            582022.87, // Advokát chuďasů
            0, // Bílé svatební šaty
            0, // Démantová garnitura
            1002653.02, // Jedna z těch, které mě zajímaly
            0, // Před domem smutku
            0, // Dva barikádníci
            0, // Il divino Boemo
            0, // První noc u mrtvoly
            770594.52, // Lotr Gólo
            0, // Nalezenec
            0, // Blíženci
            0, // Zpuchřelá nitka
            0, // Kamarádi
            1015205.72, // Duhový bod nad hlavou
            0, // Odumírající drahokam
            0, // Trilobit   
            0, // Lilie v úpalu slunečním 
            0, // Připij si, bratříčku!    
            841413.95, // Noc na hřbitově 
            0, // Samovrah   
            0, // Moderní Magdaléna
            885638.42, // Vymírající hřbitov
            610047.85,  // Svatý Václav
        ]

    }, {
        name: 'heterodiegetic narrator',
        data: [
            0, 
            0, 
            0, // Dobrodružství ve výsadní hospodě
            0, 
            0, 
            0, // Zbožný Tomáš
            0, // Zázračná madona
            0, // Sběhlé švícko
            0, // Penězokaz
            0, // Sladký hřích
            0, // Zbožňovatel kněžny Esterházy
            0, // Poslední škamna
            0, // Advokát chuďasů
            0, // Bílé svatební šaty
            0, // Démantová garnitura
            0, // Jedna z těch, které mě zajímaly
            0, // Před domem smutku
            0, // Dva barikádníci
            0, // Il divino Boemo
            0, // První noc u mrtvoly
            0, // Lotr Gólo
            0, // Nalezenec
            0, // Blíženci
            0, // Zpuchřelá nitka
            0, // Kamarádi
            0, // Duhový bod nad hlavou
            0, // Odumírající drahokam
            0, // Trilobit     
            0, // Lilie v úpalu slunečním
            0, // Připij si, bratříčku!
            0, // Noc na hřbitově
            0, // Samovrah
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0, // Svatý Václav
        ]

    }, {
        name: 'rhetorical narrator',
        data: [
            0, 
            0,
            789284.36, // Dobrodružství ve výsadní hospodě
            0, 
            0, 
            924822.7, // Zbožný Tomáš
            0, // Zázračná madona
            817157.4, // Sběhlé švícko
            1004627.68, // Penezokaz
            262878.66, // Sladký hřích
            881781.79,// Zbožňovatel kněžny Esterházy
            0, // Poslední škamna
            0, // Advokát chuďasů
            796335.75, // Bílé svatební šaty
            811306.87, // Démantová garnitura
            0, // Jedna z těch, které mě zajímaly
            528593.51, // Před domem smutku
            723987.09, // Dva barikádníci
            669264.37, // Il divino Boemo
            896072.67, // První noc u mrtvoly
            0, // Lotr Gólo
            955491.82, // Nalezenec
            936568.75, // Blíženci
            957009.86, // Zpuchřelá nitka
            703317.8, //Kamarádi
            0, // Duhový bod nad hlavou
            962674.65, // Odumírající drahokam
            1009369.88, // Trilobit
            954310.62, // Lilie v úpalu slunečním
            665188.65, // Připij si, bratříčku!
            0, // Noc na hřbitově 
            851717.46,  // Samovrah
            416152.4, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0,  // Svatý Václav
        ]

    }, {
        name: 'intradiegetic narrator of 1st degree',
        data: [
            43423.6, 
            0, 
            0, // Dobrodružství ve výsadní hospodě
            293351.17, 
            151949.06, 
            9361.7, // Zbožný Tomáš
            139622.87, // Zázračná madona
            0, // Sběhlé švícko
            0, // Penězokaz
            0, // Sladký hřích
            0, // Zbožňovatel kněžny Esterházy
            0, // Poslední škamna
            110302.0, // Advokát chuďasů
            0, // Bílé svatební šaty
            0, // Démantová garnitura
            0, // Jedna z těch, které mě zajímaly
            60522.25, // Před domem smutku
            60702.76, // Dva barikádníci
            0, // Il divino Boemo
            0, // První noc u mrtvoly
            24363.27, // Lotr Gólo
            956.02, // Nalezenec
            0, // Blíženci
            0, // Zpuchřelá nitka
            0, // Kamarádi
            0, // Duhový bod nad hlavou
            0, // Odumírající drahokam
            0, // Trilobit       
            0, // Lilie v úpalu slunečním 
            0, // Připij si, bratříčku!
            0, // Noc na hřbitově
            0, // Samovrah  
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0, // Svatý Václav
        ]

    }, {
        name: 'direct speech in intradiegetic narration of 1st degree',
        data: [
            5222.44, 
            0, 
            0, // Dobrodružství ve výsadní hospodě
            3020.24, 
            14887.0, 
            2836.88, // Zbožný Tomáš
            1937.92, // Zázračná madona
            0, // Sběhlé švícko
            0, // Penězokaz
            0, // Sladký hřích
            0, // Zbožňovatel kněžny Esterházy
            0, // Poslední škamna
            2412.44, // Advokát chuďasů
            0, // Bílé svatební šaty
            0, // Démantová garnitura
            0, // Jedna z těch, které mě zajímaly
            9843.0, // Před domem smutku
            860.52, // Dva barikádníci
            0, // Il divino Boemo
            0, // První noc u mrtvoly
            0, // Lotr Gólo
            743.57, // Nalezenec
            0, // Blíženci
            0, // Zpuchřelá nitka
            0, // Kamarádi
            0, // Duhový bod nad hlavou
            0, // Odumírající drahokam
            0, // Trilobit        
            0, // Lilie v úpalu slunečním 
            0, // Připij si, bratříčku!
            0, // Noc na hřbitově
            0, // Samovrah  
            0, // Moderní Magdaléna   
            0, // Vymírající hřbitov  
            0, // Svatý Václav     
        ]

    }, {
        name: 'intradiegetic narrator of 2nd degree',
        data: [
            0, 
            0, 
            0, // Dobrodružství ve výsadní hospodě
            27354.71, 
            0, 
            0, // Zbožný Tomáš
            0, // Zázračná madona
            0, // Sběhlé švícko
            0, // Penězokaz
            0, // Sladký hřích
            0, // Zbožňovatel kněžny Esterházy
            0, // Poslední škamna
            0, // Advokát chuďasů
            0, // Bílé svatební šaty
            0, // Démantová garnitura
            0, // Jedna z těch, které mě zajímaly
            0, // Před domem smutku
            0, // Dva barikádníci
            0, // Il divino Boemo
            0, // První noc u mrtvoly
            0, // Lotr Gólo
            0, // Nalezenec
            0, // Blíženci
            0, // Zpuchřelá nitka
            0, // Kamarádi
            0, // Duhový bod nad hlavou
            0, // Odumírající drahokam
            0, // Trilobit  
            0, // Lilie v úpalu slunečním  
            0, // Připij si, bratříčku!
            0, // Noc na hřbitově
            0, // Samovrah    
            0, // Moderní Magdaléna    
            0, // Vymírající hřbitov
            0, // Svatý Václav
        ]

    }, {
        name: 'direct speech in intradiegetic narration of 2nd degree',
        data: [
            0, 
            0, 
            0, // Dobrodružství ve výsadní hospodě
            14583.42, 
            0, 
            0, // Zbožný Tomáš
            0, // Zázračná madona
            0, // Sběhlé švícko
            0, // Penězokaz
            0, // Sladký hřích
            0, // Zbožňovatel kněžny Esterházy
            0, // Poslední škamna
            0, // Advokát chuďasů
            0, // Bílé svatební šaty
            0, // Démantová garnitura
            0, // Jedna z těch, které mě zajímaly
            0, // Před domem smutku
            0, // Dva barikádníci
            0, // Il divino Boemo
            0, // První noc u mrtvoly
            0, // Lotr Gólo
            0, // Nalezenec
            0, // Blíženci
            0, // Zpuchřelá nitka
            0, // Kamarádi
            0, // Duhový bod nad hlavou
            0, // Odumírající drahokam
            0, // Trilobit
            0, // Lilie v úpalu slunečním
            0, // Připij si, bratříčku!
            0, // Noc na hřbitově
            0, // Samovrah
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0, // Svatý Václav
        ]

    },{
        name: 'text-in-text',
        data: [
            44100.58, 
            74603.17, 
            0, // Dobrodružství ve výsadní hospodě
            6083.62, 
            8699.03, 
            0, // Zbožný Tomáš
            18764.03, // Zázračná madona
            112322.79, // Sběhlé švícko
            0, // Penězokaz
            763991.1, // Sladký hřích
            0, // Zbožňovatel kněžny Esterházy
            43506.83, // Poslední škamna
            114278.06, // Advokát chuďasů
            31529.61, // Bílé svatební šaty
            9003.94, // Démantová garnitura
            1516.01, // Jedna z těch, které mě zajímaly
            0, // Před domem smutku
            0, // Dva barikádníci
            0, // Il divino Boemo
            39273.31, // První noc u mrtvoly
            90855.48, // Lotr Gólo
            0, // Nalezenec
            0, // Blíženci
            0, // Zpuchřelá nitka
            0, // Kamarádi
            0, // Duhový bod nad hlavou
            0, // Odumírající drahokam
            0, // Trilobit   
            0, // Lilie v úpalu slunečním 
            0, // Připij si, bratříčku!
            77136.05, // Noc na hřbitově
            0, // Samovrah  
            0, // Moderní Magdaléna    
            0, // Vymírající hřbitov
            0, // Svatý Václav
        ]

    }, {
        name: 'direct speech in text-in-text',
        data: [
            0, 
            0, 
            0, // Dobrodružství ve výsadní hospodě
            0, 
            0, 
            0, // Zbožný Tomáš
            0, // Zázračná madona
            0, // Sběhlé švícko
            0, // Penězokaz
            95156.6, // Sladký hřích
            0, // Zbožňovatel kněžny Esterházy
            0, // Poslední škamna
            3439.96, // Advokát chuďasů
            0, // Bílé svatební šaty
            476.17, // Démantová garnitura
            0, // Jedna z těch, které mě zajímaly
            0, // Před domem smutku
            0, // Dva barikádníci
            0, // Il divino Boemo
            0, // První noc u mrtvoly
            0, // Lotr Gólo
            0, // Nalezenec
            0, // Blíženci
            0, // Zpuchřelá nitka
            0, // Kamarádi
            0, // Duhový bod nad hlavou
            0, // Odumírající drahokam
            0, // Trilobit
            0, // Lilie v úpalu slunečním
            0, // Připij si, bratříčku!
            0, // Noc na hřbitově
            0, // Samovrah
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            0, // Svatý Václav
        ]

    }, {
        name: 'unrealized direct speech',
        data: [
            0, 
            0, 
            0, // Dobrodružství ve výsadní hospodě
            0, 
            0, 
            0, // Zbožný Tomáš
            0, // Zázračná madona
            0, // Sběhlé švícko
            0, // Penězokaz
            0, // Sladký hřích
            0, // Zbožňovatel kněžny Esterházy
            722.92, // Poslední škamna
            2144.39, // Advokát chuďasů
            0, // Bílé svatební šaty
            43.29, // Démantová garnitura
            0, // Jedna z těch, které mě zajímaly
            732.12, // Před domem smutku
            35.86, // Dva barikádníci
            0, // Il divino Boemo
            0, // První noc u mrtvoly
            0, // Lotr Gólo
            0, // Nalezenec
            4257.13, // Blíženci
            821.47, // Zpuchřelá nitka
            0, // Kamarádi
            0, // Duhový bod nad hlavou
            1596.81, // Odumírající drahokam
            0, // Trilobit    
            0, // Lilie v úpalu slunečním  
            0, // Připij si, bratříčku!  
            1287.75, // Noc na hřbitově
            0, // Samovrah    
            0, // Moderní Magdaléna
            0, // Vymírající hřbitov
            1295.85, // Svatý Václav
        ],
        

    }
]
});