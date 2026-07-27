function showGraphSacredSpaces() {
    var option = document.getElementById("clusterSacredSpaces").value;
    switch(option) {
        case "svejk1":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Osudy dobrého vojáka Švejka... I ', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [166.28,
                0.00,
                0.00,
                15.12,
                136.04,
                136.04,
                725.57,
                15.12,
                30.23,
                ]},],});
            break;
        case "svejk2":
            Highcharts.chart('graf', {chart: {type: 'column'},title: {text: 'Osudy dobrého vojáka Švejka... II ', align: 'center'},xAxis: {categories: ["TEMPLE", "ANCIENT TEMPLE", "CATHEDRAL", "MONASTERY", "CHURCH", "PARTS OF THE CHURCH", "INTERIOR OF THE CHURCH", "RECTORY", "CEMETERY"], crosshair: true, accessibility: {description: ''}}, yAxis: {min: 0, title: {text: 'i.p.m.'}}, tooltip: {valueSuffix: ''}, colors: ["BLUE"], plotOptions: {column: {pointPadding: 0.2, borderWidth: 0, colorByPoint: true}}, series: [{name: "clusters of sacred spaces", data: [
                13.4,
                0,
                0,
                53.61,
                26.81,
                0,
                308.26,
                0,
                53.61
                ]},],});
            break;
        default:
        document.getElementById("graf").src = "";
    }
}