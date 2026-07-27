Highcharts.chart('container-PCA', {
    chart: {
        height: 1200,
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'MDS Distant Matrix'
    },
    xAxis: {
        title: {
            text: 'MDS 1'
        },
        gridLineWidth: 0, // Removes grid lines on the X-axis
        plotLines: [{
            color: 'black', // Vertical axis color
            width: 1,       // Vertical axis width
            value: 0        // Position of the vertical axis
        }]
    },
    yAxis: {
        title: {
            text: 'MDS 2'
        },
        gridLineWidth: 0, // Removes grid lines on the Y-axis
        plotLines: [{
            color: 'black', // Horizontal axis color
            width: 1,       // Horizontal axis width
            value: 0        // Position of the horizontal axis
        }]
    },
    series: [{
        name: 'Jakub Arbes',
        data: [
            { x: -4359.809244, y: 12968.38366, name: 'Elegie o černých očích' },
            { x: 4779.982707, y: -4618.53951, name: 'Svatý Xaverius'},
            { x:  -1123.692552, y: 1646.203923, name: 'Sivooký démon'},
            { x: -3455.658289, y: 6251.041295, name: 'Ďábel na skřipci'},
            { x: -8669.84929, y: 2836.474985, name: 'Zázračná madona'},
            { x: 2225.372105, y: 1491.547174, name: 'Ukřižovaná'},
            { x: 4506.952459, y: -1819.272187, name: 'Newtonův mozek'},
            { x: 14180.01478, y: -4182.11337, name: 'Akrobati'},
            { x: -611.3749699, y: -427.780864, name: 'Etiopská lilie'},
            { x: 4943.178747, y: 1463.627101, name: 'Šílený Job'},
            { x: -869.6830421, y: -1113.842679, name: 'Můj přítel vrah'},
            { x: 3837.785278, y: 1358.269209, name: 'Advokát chuďasů'},
            { x: -391.3080729, y: 800.9291764, name: 'Aspoň se pousměj'},
            { x: -5345.280907, y: 916.2369636, name: 'Dva barikádníci'},
            { x: 123.9712193, y: 192.5952126, name: 'Zborcené harfy tón'},
            { x: -9817.879594, y: 114.3076294, name: 'První noc u mrtvoly'},
            { x: -3210.936225, y: -10035.47123, name: 'Il divino Boemo'},
            { x: -3701.649428, y: -1188.96741, name: 'Lotr Gólo'},
            { x: -8063.384568, y: 3642.018016, name: 'Anna a Marie'},
            { x: 6556.043286, y: -7132.078087, name: 'Duhový bod nad hlavou'},
            { x: -3791.384599,  y: 2721.055168, name: 'Lilie v úpalu slunečním'},
            { x: 2737.680865, y: -227.8141449, name: 'Duhokřídlá Psyché'},
            { x: -290.9406564, y: -1804.3422, name: 'Poslední dnové lidstva'},
            { x: -895.4148249, y: -3067.026342, name: 'Vymírající hřbitov'},
            { x: 2250.407011, y: -554.6746191, name: 'Kandidáti existence'},
            { x: -1531.785025, y: 5279.219673, name: 'Adamité'},
            { x: 3008.972183, y: -1975.381698, name: 'Moderní upíři'},
            { x: 3536.400916, y: -577.6184646, name: 'Štrajchpudlíci'},
            { x: 1749.401435, y: -1477.373426, name: 'Mesiáš I'},
            { x: 1111.227901, y: -1714.779274, name: 'Mesiáš II'},
            { x: 6288.961804, y: -1653.280012, name: 'Anděl míru I'},
            { x: -134.4983572, y: 1470.158986, name: 'Anděl míru II'},
            { x: 4147.04403, y: 389.2698252, name: 'Anděl míru III'},
            { x: 5274.371689, y: 107.9532604, name: 'Anděl míru IV'},
            { x: -3802.275294, y: -2250.140221, name: 'Moderní Magdaléna'},
            { x: 2652.762538, y: 4243.716415, name: 'Před domem smutku'},
            { x: 3500.588021, y: 2727.260623, name: 'Připij si, bratříčku!'},
            { x: 1516.646539, y: -7530.961127, name: 'Svatý Václav'},
            { x: -598.3324338, y: -7098.006927, name: 'Trilobit'},
            { x: 2511.089976, y: 626.8772265,  name: 'Zbožňovatel slečny Esterházy'},
            { x: 4128.98123, y: -2552.563554, name: 'Démantová garnitura'},
            { x: 9110.533222, y: 91.17539729, name: 'Kamarádi'},
            { x: -6269.62287, y: -268.7440902, name: 'Nalezenec'},
            { x: 930.8621452, y: 2399.231768, name: 'Noc na hřbitově'},
            { x: -21832.1733, y: 2947.798342, name: 'Odumírající drahokam'},
            { x: -12270.10871, y: 5428.604829, name: 'Sladký hřích'},
            { x: -15110.9474, y: 11387.58642, name: 'Bílé svatební šaty'},
            { x: -15679.60572, y: -11520.97015, name: 'Blíženci'},
            { x: 2104.154197, y: 5705.898665, name: 'Jedna z těch, které mě zajímaly'},
            { x: 2237.581547, y: -2927.343852, name: 'Poslední škamna'},
            { x: -2577.547094, y: 1003.404362, name: 'Rodinné drama'},
            { x: 4851.405993, y: 4112.402265, name: 'Zpuchřelá nitka'},
            { x: 612.0340419, y: 5804.382687, name: 'Dobrodružství ve výsadní hospodě'},
            { x: 6374.138167, y: -720.1354206, name: 'Lampičky'},
            { x: 4341.921383, y: -5836.862656, name: 'Penězokaz'},
            { x: 3705.459048, y: -7490.890358, name: 'Sběhlé švícko'},
            { x: 5900.073817, y: -2283.389729, name: 'V staré pražské krčmě'},
            { x: 8669.142188, y: 3922.733341, name: 'Zbožný Tomáš'}

            
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}', // Displays the name of the point
            style: {
                fontSize: '10px',
                color: '#000000'
            }
        }
    }]
});