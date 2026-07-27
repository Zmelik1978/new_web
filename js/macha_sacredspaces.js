function showGraphSacredSpaces() {
    var option = document.getElementById("clusterSacredSpaces").value;
    switch(option) {
        case "karluvtejn":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Karlův Tejn', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [2049.18,
                0.00,
                0.00,
                683.06,
                683.06,
                0.00,
                0.00,
                0.00,
                0.00,
                ]},],});
            break;
        case "krivoklad":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Křivoklad', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [62.75,
                0.00,
                0.00,
                0.00,
                690.22,
                62.75,
                188.24,
                62.75,
                62.75,
                ]},],});
            break;
        case "vecernabezdezu":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Večer na Bezdězu', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [0.00,
                0.00,
                0.00,
                0.00,
                761.04,
                0.00,
                0.00,
                0.00,
                761.04,
                ]},],});
            break;
        case "marinka":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Marinka', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [0.00,
                0.00,
                0.00,
                0.00,
                212.36,
                0.00,
                637.08,
                0.00,
                212.36,
                ]},],});
            break;
        case "klastersazavsky":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Klášter sázavský', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [4219.41,
                0.00,
                0.00,
                4219.41,
                1406.47,
                703.23,
                703.23,
                0.00,
                0.00,
                ]},],});
            break;
        case "valdice":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Valdice', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [2014.10,
                0.00,
                0.00,
                3524.67,
                0.00,
                0.00,
                0.00,
                0.00,
                1510.57,
                ]},],});
            break;
        case "poutkrkonosska":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Pouť krkonošská', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [2829.30,
                0.00,
                0.00,
                1257.47,
                0.00,
                0.00,
                314.37,
                0.00,
                1257.47,
                ]},],});
            break;
        case "navrat":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Návrat', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [0.00,
                0.00,
                0.00,
                0.00,
                789.89,
                789.89,
                789.89,
                0.00,
                0.00,
                ]},],});
            break;
        case "viasilviasilovic":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Viasil Viasilovič', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [1043.41,
                0.00,
                0.00,
                1043.41,
                208.68,
                0.00,
                417.36,
                0.00,
                417.36,
                ]},],});
            break;
        case "sen":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Sen', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [2375.30,
                0.00,
                0.00,
                2375.30,
                0.00,
                0.00,
                0.00,
                0.00,
                1583.53,
                ]},],});
            break;
        case "prisaha":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Přísaha', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                0.00,
                1647.45,
                0.00,
                0.00,
                ]},],});
            break;
        case "cikani":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Cikáni', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [56.24,
                0.00,
                0.00,
                0.00,
                506.12,
                56.24,
                196.82,
                0.00,
                28.12,
                ]},],});
            break;
        default:
        document.getElementById("graf").src = "";
    }
}