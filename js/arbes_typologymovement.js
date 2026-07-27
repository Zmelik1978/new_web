function showTypologyMovementGraph() {
  const cluster = document.getElementById("typology-cluster").value;

  switch (cluster) {
    case "dabel":
      Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Ďábel na skřipci'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [          
          96.71,
          0.00,
          96.71,
          0.00,
          0.00,
          0.00,
          0.00,
          96.71,
          290.14,
          0.00,
          290.14,
          676.98,
          193.42,
          0.00,
          0.00,
          0.00,
          0.00,
          0.00,
          0.00,
          ]}]});
      break;
      case "elegie":
         Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Elegie o černých očích'}, xAxis: {
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
          264.55,
          264.55,
          0.00,
          0.00,
          0.00,
          0.00,
          0.00,
          0.00,
          0.00,
          ]}]});
      break;
      case "xaverius":
        Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Svatý Xaverius'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [
          0.00,
          0.00,
          43.15,
          0.00,
          0.00,
          43.15,
          0.00,
          0.00,
          43.15,
          0.00,
          388.32,
          604.05,
          302.02,
          0.00,
          0.00,
          0.00,
          0.00,
          0.00,
          0.00,
          ]}]});
      break;
      case "demon":
        Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Sivooký démon'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [
          89.68,
          0.00,
          119.57,
          0.00,
          0.00,
          0.00,
          0.00,
          59.79,
          119.57,
          0.00,
          448.40,
          777.23,
          149.47,
          0.00,
          0.00,
          0.00,
          0.00,
          0.00,
          0.00,
          ]}]});
      break;
      case "madona":
        Highcharts.chart('container-typologymovement', {
        chart: { type: 'bar' },title: { text: 'Zázračná madona'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [
          0.00,
          0.00,
          92.28,
          30.76,
          0.00,
          30.76,
          0.00,
          0.00,
          92.28,
          30.76,
          92.28,
          307.61,
          215.33,
          0.00,
          0.00,
          0.00,
          0.00,
          0.00,
          0.00,

          ]}]});
      break;

  }
}