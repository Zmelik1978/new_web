function showTypologyMovementGraph() {
  const cluster = document.getElementById("typology-cluster").value;

  switch (cluster) {
    case "svejk1":
      Highcharts.chart('typology-movement', {
        chart: { type: 'bar' },title: { text: 'Osudy dobrého vojáka Švejka... I'}, xAxis: {
          categories: ["Running", "Travel", "Walk", "Circular movement", "Swaying movement", "Continuous movement", "Creep", "March", "Forward movement", "Backward movement", "Movement from place to place", "Move", "Move slowly", "Drive", "Wandering", "Push", "Struggle", "Pull", "Stride"]},yAxis: {min: 0,title: {text: '(i.p.m.)'}},
        series: [{name: 'Rf', data: [          
          109.04,
36.35,
36.35,
0.00,
0.00,
0.00,
72.69,
109.04,
127.21,
90.87,
254.43,
1108.57,
36.35,
0.00,
0.00,
36.35,
0.00,
90.87,
18.17,

          ]}]});
      break;   

  }
}