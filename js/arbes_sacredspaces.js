function showGraphSacredSpaces() {
    var option = document.getElementById("clusterSacredSpaces").value;
    switch(option) {
        case "dabel":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Ďábel na skřipci', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [
                81.75,
0.00,
0.00,
163.51,
0.00,
0.00,
0.00,
0.00,
0.00,

                ]},],});
            break;
        case "xaverius":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Svatý Xaverius', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [
                518.69,
0.00,
0.00,
37.05,
111.15,
37.05,
2889.85,
0.00,
185.25,

                ]},],});
            break;
        case "demon":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Sivooký démon', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [
                152.61,
0.00,
0.00,
0.00,
0.00,
101.74,
25.43,
0.00,
152.61,

                ]},],});
            break;
        case "madona":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Zázračná madona', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [
                78.84,
0.00,
0.00,
0.00,
105.12,
78.84,
604.45,
0.00,
26.28,

                ]},],});
            break;
        default:
        document.getElementById("graf").src = "";
    }
}