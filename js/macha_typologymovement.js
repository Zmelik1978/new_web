function showTypologyMovementGraph() {
  const cluster = document.getElementById("typology-cluster").value;

  switch (cluster) {
    case "karluvtejn":
      Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Karlův Tejn'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [          
          0.00,
            0.00,
            839.63,
            0.00,
            0.00,
            0.00,
            0.00,
            0.00,
            839.63,
            0.00,
            0.00,
            0.00,
            2518.89,
            0.00,
            0.00,
            0.00,
            0.00,
            0.00,
            0.00,
          ]}]});
      break;
      case "krivoklad":
      Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Krivoklad'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [          
          0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
158.13,
711.58,
869.70,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,

          ]}]});
      break;
      case "vecernabezdezu":
      Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Večer na Bezdězu'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [          
          0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
891.27,
0.00,
891.27,
891.27,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,

          ]}]});
      break;
      case "marinka":
      Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Marinka'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [          
          0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
258.47,
258.47,
516.93,
258.47,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,

          ]}]});
      break;
      case "klastersazavsky":
      Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Klášter Sázavský'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [          
          0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
797.45,
797.45,
0.00,
1594.90,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,

          ]}]});
      break;
      case "valdice":
      Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Valdice'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [          
          0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
573.39,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,


          ]}]});
      break;
      case "poutkrkonosska":
      Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Pouť krkonošská'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [          
          0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
1102.54,
0.00,
0.00,
367.51,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,

        ]}]});
      break;
       case "svetsmyslny":
      Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Svět smyslný'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [          
          0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
6772.01,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,

        ]}]});
      break;
       case "viasilviasilovic":
      Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Viasil Viasilovič'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [          
          0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
510.73,
255.36,
255.36,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,

        ]}]});
      break;
       case "sen":
      Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Sen'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [          
          0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
928.51,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,

        ]}]});
      break;
       case "prisaha":
      Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Přísaha'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [          
          0.00,
0.00,
0.00,
0.00,
0.00,
1901.14,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,
0.00,

        ]}]});
      break;
      case "cikani":
      Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Cikáni'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [          
          34.49,
34.49,
68.97,
0.00,
0.00,
0.00,
0.00,
0.00,
68.97,
551.76,
344.85,
1069.04,
275.88,
0.00,
103.46,
0.00,
0.00,
0.00,
0.00,

        ]}]});
      break;
     

  }
}