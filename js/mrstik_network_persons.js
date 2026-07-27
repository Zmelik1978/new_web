function showNetworkGraph() {
  var option = document.getElementById("cluster").value;
  
  const vypravec = '#c4688c',
  postava = '#78a8d1', // postava, se kterou vypravěč nebo jiná postava explicitně komunikuje
  postava2 = '#aeb6bf'; // postava, se kterou vypravěč nebo jiná postava explicitně nekomunikuje, ale komunikace je vyprávěna (např. "promluvil jsem si s X")
  
  const line = '#000000';
  const linewidth = 2.0;

  switch(option){
    case "santalucia":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Santa Lucia'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Bábi", "Jordán"],
                    ["Jordán", "Bábi"],
                    ["Bábi", "Jordán"],
                    ["Jordán", "Bábi"],
                    ["Bábi", "Jordán"],
                    ["Jordán", "Bábi"],
                    ["Milka", "Jordán"],
                    ["Jordán", "Milka"],
                    ["Milka", "Jordán"],
                    ["Jordán", "Milka"],
                    ["Milka", "Jordán"],
                    ["Jordán", "Milka"],
                    ["Milka", "Jordán"],
                    ["Jordán", "Milka"],
                    ["otec", "Jordán"],
                    ["Jordán", "otec"],
                    ["otec", "Jordán"],
                    ["Jordán", "otec"],
                    ["otec", "Jordán"],
                    ["Jordán", "otec"],
                    ["matka", "Jordán"],
                    ["Jordán", "matka"],
                    ["matka", "Jordán"],
                    ["Jordán", "matka"],
                    ["Kočvara", "Jordán"],
                    ["Jordán", "Kočvara"],
                    ["Kočvara", "Jordán"],
                    ["Jordán", "Kočvara"],
                    ["inspektor", "Jordán"],
                    ["Jordán", "inspektor"],
                    ["inspektor", "Jordán"],
                    ["Jordán", "inspektor"],
                    ["Matoušek", "Jordán"],
                    ["Jordán", "Matoušek"],
                    ["Matoušek", "Jordán"],
                    ["Jordán", "Matoušek"],
                    ["Slezák", "Jordán"],
                    ["Jordán", "Slezák"],
                    ["Slezák", "Jordán"],
                    ["Jordán", "Slezák"],
                    ["Slezák", "Matoušek"],
                    ["Matoušek", "Slezák"],
                    ["Slezák", "Matoušek"],
                    ["Matoušek", "Slezák"],
                    ["Michejda", "Slezák"],
                    ["Slezák", "Michejda"],
                    ["Jordán", "Vlaška"],
                    ["Vlaška", "Jordán"],
                    ["Jordán", "Vlaška"],
                    ["Vlaška", "Jordán"],
                    ["Hégr", "Jordán"],
                    ["Jordán", "Hégr"],
                    ["Hégr", "Jordán"],
                    ["Jordán", "Hégr"],
                    ["Hégr", "Jordán"],
                    ["Jordán", "Hégr"],
                    ["Hégr", "Jordán"],
                    ["Jordán", "Hégr"],
                    ["Hégr", "Jordán"],
                    ["Jordán", "Hégr"],
                    ["drK", "Jordán"],
                    ["Jordán", "drK"],
                    ["drK", "Jordán"],
                    ["Jordán", "drK"],
                    ["Jordán", "Klára"],
                    ["Klára", "Jordán"],
                    ["Jordán", "Klára"],
                    ["Klára", "Jordán"],
                    ["Jordán", "Klára"],
                    ["Klára", "Jordán"],
                    ["Jordán", "Klára"],
                    ["Klára", "Jordán"],
                    ["Jordán", "Klára"],
                    ["Klára", "Jordán"],
                    ["Hégr", "Jordán"],
                    ["Jordán", "Hégr"],
                    ["Hégr", "Jordán"],
                    ["Jordán", "Hégr"],
                    ["Plachetka", "Jordán"],
                    ["Jordán", "Plachetka"],
                    ["Plachetka", "Jordán"],
                    ["Jordán", "Plachetka"],
                    ["pán s náramkem", "Jordán"],
                    ["Jordán", "pán s náramkem"],
                    ["pán s náramkem", "Jordán"],
                    ["Jordán", "pán s náramkem"],
                    ["tlustá paní", "Jordán"],
                    ["Jordán", "tlustá paní"],
                    ["tlustá paní", "Jordán"],
                    ["Jordán", "tlustá paní"],
                    ["pán s náramkem", "tlustá paní"],
                    ["tlustá paní", "pán s náramkem"],
                    ["Klára", "Jordán"],
                    ["Jordán", "Klára"],
                    ["Klára", "Jordán"],
                    ["Jordán", "Klára"],
                    ["Klára", "Jordán"],
                    ["Jordán", "Klára"],
                    ["Klára", "Jordán"],
                    ["Jordán", "Klára"],
                    ["zámečník", "Jordán"],
                    ["Jordán", "zámečník"],
                    ["zámečník", "Jordán"],
                    ["Jordán", "zámečník"],
                    ["zámečník", "Jordán"],
                    ["Jordán", "zámečník"],
                    ["zámečník", "Milada"],
                    ["Milada", "zámečník"],
                    ["zámečník", "Milada"],
                    ["Milada", "zámečník"],
                    ["Jordán", "Berta"],
                    ["Berta", "Jordán"],
                    ["Jordán", "Berta"],
                    ["Berta", "Jordán"],
                    ["Jordán", "Berta"],
                    ["Berta", "Jordán"],
                    ["Jordán", "Berta"],
                    ["Berta", "Jordán"],
                    ["Jordán", "Berta"],
                    ["Berta", "Jordán"],
                    ["Jordán", "drK"],
                    ["drK", "Jordán"],
                    ["Jordán", "drK"],
                    ["drK", "Jordán"],
                    ["Jordán", "Klára"],
                    ["Klára", "Jordán"],
                    ["Jordán", "Klára"],
                    ["Klára", "Jordán"],
                    ["Jordán", "Klára"],
                    ["Klára", "Jordán"],
                    ["Hégr", "Jordán"],
                    ["Jordán", "Hégr"],
                    ["Hégr", "Jordán"],
                    ["Jordán", "Hégr"],
                    ["Hégr", "Jordán"],
                    ["Jordán", "Hégr"],
                    ["Hégr", "domovnice"],
                    ["domovnice", "Hégr"],
                    ["Robek", "Jordán"],
                    ["Jordán", "Robek"],
                    ["Robek", "Jordán"],
                    ["Jordán", "Robek"],
                    ["Robek", "Jordán"],
                    ["Jordán", "Robek"],
                    ["Jordán", "Berta"],
                    ["Berta", "Jordán"],
                    ["Jordán", "Berta"],
                    ["Berta", "Jordán"],
                    ["neznámý pán", "Jordán"],
                    ["Jordán", "neznámý pán"],
                    ["neznámý pán", "Jordán"],
                    ["Jordán", "neznámý pán"],
                    ["Bábi", "Jordán"],
                    ["Jordán", "Bábi"],

                ], nodes: 

                    [

                    // vypravěč

                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy

                    {id: 'Jordán',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Hégr',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Klára',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Berta',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy

                    {id: 'Bábi',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Milka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'otec',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'matka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Kočvara',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'inspektor',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Matoušek',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Slezák',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Michejda',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Vlaška',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'drK',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Plachetka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'pán s náramkem',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'tlustá paní',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'zámečník',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Milada',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'domovnice',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Robek',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'neznámý pán',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]

          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
    default:
    document.getElementById("container-person").src = "";   
  }
}




