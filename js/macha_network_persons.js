function showNetworkGraph() {
  var option = document.getElementById("cluster").value;
  
  const vypravec = '#c4688c',
  postava = '#78a8d1', // postava, se kterou vypravěč nebo jiná postava explicitně komunikuje
  postava2 = '#aeb6bf'; // postava, se kterou vypravěč nebo jiná postava explicitně nekomunikuje, ale komunikace je vyprávěna (např. "promluvil jsem si s X")
  
  const line = '#000000';
  const linewidth = 2.0;

  switch(option){
    case "karluvtejn":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Karlův Tejn'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - heterodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["stařec", "Viasilij"],
                    ["stařec", "Viasilij"],
                    ["Viasilij", "stařec"],
                    ["stařec", "Viasilij"],
                    ["vrah", "stařec"],
                    ["stařec", "vrah"],
                    ["vrah", "stařec"],
                    ["stařec", "Viasilij"],
                    ["Viasilij", "stařec"],
                    ["stařec", "Viasilij"],
                    ["Viasilij", "stařec"],
                    ["stařec", "Viasilij"],
                    ["Viasilij", "stařec"],
                    ["stařec", "Viasilij"],
                    ["Viasilij", "stařec"],
                    ["stařec", "Viasilij"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Viasilij', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'stařec', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'vrah', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });
      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
    break;
    case "krivoklad":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Křivoklad'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - heterodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Jaroš", "Stivín"],
                    ["Stivín", "Jaroš"],
                    ["Jaroš", "Stivín"],
                    ["Duchoň", "Stivín"],
                    ["Jaroš", "Duchoň"],
                    ["Duchoň", "Stivín"],
                    ["Stivín", "Duchoň"],
                    ["Jaroš", "Duchoň"],
                    ["Stivín", "Jaroš"],
                    ["Duchoň", "Stivín"],
                    ["Jaroš", "Duchoň"],
                    ["hradní", "jezdec"],
                    ["jezdec", "hradní"],
                    ["hradní", "Vintýř"],
                    ["hradní", "Stivín"],
                    ["Stivín", "hradní"],
                    ["hradní", "Stivín"],
                    ["Stivín", "hradní"],
                    ["hradní", "Stivín"],
                    ["Stivín", "hradní"],
                    ["hradní", "Stivín"],
                    ["Stivín", "hradní"],
                    ["hradní", "Stivín"],
                    ["Stivín", "hradní"],
                    ["hradní", "Stivín"],
                    ["hradní", "Honza"],
                    ["Václav", "hradní"],
                    ["hradní", "Václav"],
                    ["Václav", "hradní"],
                    ["hradní", "Honza"],
                    ["Honza", "hradní"],
                    ["kat", "Václav"],
                    ["Stivín", "Václav"],
                    ["Stivín", "hradní"],
                    ["hradní", "Stivín"],
                    ["Stivín", "hradní"],
                    ["vrátný", "hradní"],
                    ["hradní", "vrátný"],
                    ["vrátný", "hradní"],
                    ["vůdce zbrojnošů", "hradní"],
                    ["hradní", "vůdce zbrojnošů"],
                    ["Václav", "hradní"],
                    ["hradní", "Václav"],
                    ["Václav", "hradní"],
                    ["hradní", "Václav"],
                    ["Václav", "panoš"],
                    ["panoš", "Václav"],
                    ["Václav", "panoš"],
                    ["panoš", "Václav"],
                    ["Václav", "panoš"],
                    ["panoš", "Václav"],
                    ["Václav", "panoš"],
                    ["panoš", "Václav"],
                    ["Milada", "Václav"],
                    ["kat", "Václav"],
                    ["kat", "Milada"],
                    ["Václav", "panoš"],
                    ["Václav", "panoš"],
                    ["panoš", "kat"],
                    ["kat", "panoš"],
                    ["panoš", "kat"],
                    ["kat", "panoš"],
                    ["panoš", "kat"],
                    ["kat", "panoš"],
                    ["Milada", "panoš"],
                    ["panoš", "Milada"],
                    ["Milada", "panoš"],
                    ["panoš", "Milada"],
                    ["Milada", "panoš"],
                    ["panoš", "Milada"],
                    ["Milada", "panoš"],
                    ["panoš", "Milada"],
                    ["Václav", "kat"],
                    ["Václav", "kat"],
                    ["kat", "Václav"],
                    ["Václav", "kat"],
                    ["kat", "Václav"],
                    ["Václav", "kat"],
                    ["kat", "Václav"],
                    ["Václav", "kat"],
                    ["kat", "Václav"],
                    ["Václav", "kat"],
                    ["kat", "Václav"],
                    ["Václav", "kat"],
                    ["kat", "Václav"],
                    ["Milada", "Václav"],
                    ["kat", "Milada"],
                    ["kat", "Milada"],
                    ["Milada", "kat"],
                    ["Milada", "Václav"],
                    ["kat", "Milada"],
                    ["Milada", "kat"],
                    ["kat", "Václav"],
                    ["kat", "Václav"],
                    ["Milada", "Václav"],
                    ["Václav", "kat"],
                    ["kat", "Václav"],
                    ["Václav", "kat"],
                    ["kat", "Václav"],
                    ["Václav", "kat"],
                    ["kat", "Václav"],
                    ["Milada", "kat"],
                    ["Milada", "kat"],
                    ["Oldřich", "chalupník"],
                    ["chalupník", "Oldřich"],
                    ["Oldřich", "chalupník"],
                    ["chalupník", "Oldřich"],
                    ["Oldřich", "chalupník"],
                    ["Stivín", "Honza"],
                    ["Honza", "Stivín"],
                    ["Honza", "Václav"],
                    ["Václav", "Honza"],
                    ["Honza", "Václav"],
                    ["Václav", "Honza"],
                    ["Honza", "Václav"],
                    ["Václav", "Honza"],
                    ["Oldřich", "Václav"],
                    ["Oldřich", "Jiřík"],
                    ["Oldřich", "kat"],
                    ["kat", "Oldřich"],
                    ["Václav", "Jiřík"],
                    ["Václav", "Jiřík"],
                    ["Jiřík", "Václav"],
                    ["Václav", "Jiřík"],
                    ["Oldřich", "Jiřík"],
                    ["Jiřík", "Oldřich"],
                    ["Oldřich", "Jiřík"],
                    ["Jiřík", "Oldřich"],
                    ["Oldřich", "Jiřík"],
                    ["Jiřík", "Oldřich"],
                    ["Oldřich", "Jiřík"],
                    ["Václav", "Oldřich"],
                    ["kat", "Václav"],
                    ["Václav", "Oldřich"],
                    ["Jiřík", "Oldřich"],
                    ["kat", "Jiřík"],
                    ["Oldřich", "kat"],
                    ["stráž", "Václav"],
                    ["Štípek", "měšťanosta"],
                    ["měšťanosta", "Štípek"],
                    ["Štípek", "měšťanosta"],
                    ["měšťanosta", "Štípek"],
                    ["Štípek", "měšťanosta"],
                    ["měšťanosta", "Štípek"],
                    ["Beneš", "Jetřich"],
                    ["Jetřich", "Beneš"],
                    ["Beneš", "Jetřich"],
                    ["Jetřich", "Beneš"],
                    ["Beneš", "Jetřich"],
                    ["Jetřich", "Beneš"],
                    ["Jetřich", "Beneš"],
                    ["Beneš", "Jetřich"],
                    ["Václav", "zbrojnoš"],
                    ["zbrojnoš", "Václav"],
                    ["Václav", "zbrojnoš"],
                    ["zbrojnoš", "Václav"],
                    ["kat", "Milada"],
                    ["kat", "kněz"],
                    ["kněz", "kat"],
                    ["kat", "kněz"],
                    ["kněz", "kat"],
                    ["kat", "kněz"],
                    ["kněz", "kat"],
                    ["kat", "kněz"],
                    ["kněz", "kat"],
                    ["kat", "kněz"],
                    ["kněz", "kat"],
                    ["kat", "kněz"],
                    ["kněz", "kat"],
                    ["kat", "kněz"],
                    ["kněz", "kat"],
                    ["kat", "kněz"],
                    ["kat", "kněz"],
                    ["kněz", "kat"],
                    ["kat", "kněz"],
                    ["kněz", "kat"],
                    ["kat", "kněz"],
                    ["kněz", "kat"],
                    ["kat", "Václav"],
                    ["kněz", "kat"],
                    ["Václav", "kat"],
                    ["Věnceslav", "Svatopluk"],
                    ["Svatopluk", "Věnceslav"],
                    ["Věnceslav", "Svatopluk"],
                    ["Svatopluk", "Věnceslav"],
                    ["Věnceslav", "Svatopluk"],
                    ["Svatopluk", "Věnceslav"],
                    ["Věnceslav", "Svatopluk"],
                    ["Baba", "Věnceslav"],
                    ["Svatopluk", "Věnceslav"],
                    ["Věnceslav", "Svatopluk"],
                    ["Svatopluk", "Věnceslav"],
                    ["Věnceslav", "Svatopluk"],
                    ["Svatopluk", "Věnceslav"],
                    ["mladý žid", "Věnceslav"],
                    ["Věnceslav", "mladý žid"],
                    ["mladý žid", "Věnceslav"],
                    ["Svatopluk", "Věnceslav"],
                    ["Věnceslav", "Svatopluk"],
                    ["narrator", "Věnceslav"],
                    ["Věnceslav", "narrator"],
                    ["narrator", "Věnceslav"],
                    ["mladý žid", "narrator"],
                    ["narrator", "Věnceslav"],
                    ["mladý žid", "narrator"],
                    ["narrator", "mladý žid"],
                    ["mladý žid", "narrator"],
                    ["Baba", "narrator"],
                    ["mladý žid", "narrator"],
                    ["narrator", "Věnceslav"],
                    ["Baba", "narrator"],
                    ["narrator", "Věnceslav"],
                    ["Baba", "narrator"],
                    ["narrator", "Věnceslav"],
                    ["Baba", "narrator"],
                    ["narrator", "Věnceslav"],
                    ["Baba", "narrator"],
                    ["narrator", "Věnceslav"],
                    ["vozka", "narrator"],
                    ["Baba", "narrator"],

                ], nodes:

                    [

                    // vypravěč
                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Václav', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'kat', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Milada', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'kněz', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Stivín', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'hradní', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'panoš', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Věnceslav', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Svatopluk', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'Jaroš', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Duchoň', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'jezdec', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Vintýř', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Honza', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vrátný', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vůdce zbrojnošů', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Oldřich', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'chalupník', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Jiřík', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'stráž', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Štípek', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'měšťanosta', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Beneš', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Jetřich', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'zbrojnoš', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Baba', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'mladý žid', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vozka', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });
        document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "vecernabezdezu":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Večer na Bezdězu'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["narrator", "poutnice"],
                    ["poutnice", "narrator"],

                ], nodes:

                    [

                    // vypravěč
                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'poutnice', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy

                    ]

                }

              ]
          });
          document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
        break;
          case "marinka":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Marinka'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["otec", "narrator"],
                    ["študenti", "narrator"],
                    ["študenti", "narrator"],
                    ["narrator", "študenti"],
                    ["narrator", "macecha"],
                    ["macecha", "narrator"],
                    ["Marinka", "narrator"],
                    ["Marinka", "narrator"],
                    ["Marinka", "narrator"],
                    ["Marinka", "narrator"],
                    ["baba", "baby"],
                    ["macecha", "baby"],
                    ["baba", "baby"],
                    ["baby", "baba"],
                    ["Marinka", "narrator"],
                    ["narrator", "Marinka"],
                    ["Marinka", "narrator"],
                    ["narrator", "Marinka"],
                    ["Marinka", "narrator"],
                    ["narrator", "Marinka"],
                    ["Marinka", "narrator"],
                    ["narrator", "Marinka"],
                    ["Marinka", "narrator"],
                    ["narrator", "Marinka"],
                    ["narrator", "Marinka"],
                    ["narrator", "Marinka"],
                    ["Marinka", "narrator"],
                    ["uličníci", "narrator"],

                ], nodes:

                    [

                    // vypravěč
                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Marinka', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'otec', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'študenti', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'macecha', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'baba', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'baby', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'uličníci', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
          
    case "klastersazavsky":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Klášter Sázavský'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["stařec", "Bůh"],
                    ["stařec", "vlast"],
                    ["stařec", "Bůh"],

                ], nodes:

                    [

                    // vypravěč

                    
                    // hlavní postavy

                    {id: 'stařec',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy

                    {id: 'Bůh',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vlast',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "valdice":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Valdice'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["setník", "podplukovník"],
                    ["podplukovník", "setník"],
                    ["podplukovník", "setník"],
                    ["setník", "Kroati"],
                    ["setník", "hrobník"],
                    ["hrobník", "setník"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'setník', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'podplukovník', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Kroati', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'hrobník', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "poutkrkonosska":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Pouť krkonošská'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["pocestný", "čeládka"],
                    ["jinoch", "motýl"],
                    ["jinoch", "vichřice"],
                    ["narrator", "dívka"],
                    ["narrator", "dívka"],
                    ["jinoch", "dívka"],
                    ["ohlas", "jinoch"],

                ], nodes:

                    [

                    // vypravěč
                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'jinoch', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'pocestný', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'čeládka', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'motýl', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vichřice', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'dívka', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'ohlas', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "svetsmyslny":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Svět smyslný'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - heterodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["hosté", "Lutobor"],
                    ["druh", "Lutobor"],
                    ["druh", "Lutobor"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Lutobor', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'druh', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'hosté', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "svetzasly":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Svět zašlý'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - heterodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Hynek", "Bohdán"],
                    ["Bohdán", "Hynek"],
                    ["Hynek", "Bohdán"],
                    ["Václav", "Hynek"],
                    ["Hynek", "Václav"],
                    ["Václav", "Hynek"],
                    ["Hynek", "Václav"],
                    ["Václav", "Hynek"],
                    ["Hynek", "Václav"],
                    ["Bohdán", "Hynek"],
                    ["Hynek", "Bohdán"],
                    ["Václav", "Hynek"],
                    ["Bohdán", "Hynek"],
                    ["Hynek", "Václav"],
                    ["Václav", "Hynek"],
                    ["Hynek", "Václav"],
                    ["Václav", "Hynek"],
                    ["Hynek", "Václav"],
                    ["Václav", "Hynek"],
                    ["Hynek", "Bohdán"],
                    ["Bohdán", "Hynek"],
                    ["Hynek", "Bohdán"],
                    ["Bohdán", "Hynek"],
                    ["Hynek", "Bohdán"],
                    ["Bohdán", "Hynek"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Hynek', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Václav', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Bohdán', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "poutnik":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Poutník'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["poutník", "postava"],
                    ["postava", "poutník"],
                    ["vichr", "poutník"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'poutník', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'postava', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vichr', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "viasilviasilovic":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Viasil Viasilovič'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Hora", "Hedvik"],
                    ["Hedvik", "Hora"],
                    ["Hora", "Hedvik"],
                    ["Hedvik", "Hora"],
                    ["Hora", "Hedvik"],
                    ["Hedvik", "Hora"],
                    ["Hora", "Hedvik"],
                    ["Hedvik", "Hora"],
                    ["Hedvik", "Otík"],
                    ["Otík", "Hedvik"],
                    ["Hedvik", "Otík"],
                    ["Otík", "Hedvik"],
                    ["Hedvik", "Otík"],
                    ["Otík", "Hedvik"],
                    ["Hedvik", "Otík"],
                    ["Otík", "Hora"],
                    ["Hora", "Otík"],
                    ["Otík", "Hora"],
                    ["Johana", "Viasil"],
                    ["Viasil", "Johana"],
                    ["Johana", "Viasil"],
                    ["Viasil", "Johana"],
                    ["Johana", "Viasil"],
                    ["Viasil", "Johana"],
                    ["Johana", "Viasil"],
                    ["Viasil", "Johana"],
                    ["Johana", "Bůh"],
                    ["Bohdána", "Viasil"],
                    ["Bohdána", "Bůh"],
                    ["Viasil", "Bohdána"],
                    ["Bohdána", "Viasil"],
                    ["Hedvik", "Hora"],
                    ["Hedvik", "Johana"],
                    ["Hedvik", "obležení"],
                    ["Johana", "Hedvik"],
                    ["Johana", "obležení"],
                    ["Hedvik", "vojsko"],
                    ["Johana", "Hedvik"],
                    ["Hedvik", "Johana"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Hedvik', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Hora', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Viasil', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Johana', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Bohdána', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'Otík', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Bůh', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'obležení', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vojsko', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
    case "sen":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Sen'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["mnich", "narrator"],
                    ["narrator", "mnich"],
                    ["mnich", "narrator"],
                    ["mnich", "narrator"],
                    ["narrator", "mniši"],
                    ["mniši", "narrator"],
                    ["hory", "mniši"],
                    ["mniši", "hory"],
                    ["mniši", "narrator"],

                ], nodes:

                    [

                    // vypravěč
                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'mnich', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'mniši', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'hory', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "prisaha":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Přísaha'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Marie", "Vel"],
                    ["Marie", "Vel"],
                    ["Marie", "Vel"],
                    ["Marie", "Vel"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Marie', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Vel', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "cikani":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Cikáni'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Bárta", "Judita"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["Bárta", "Judita"],
                    ["starý žid", "mladý cikán"],
                    ["mladý cikán", "starý žid"],
                    ["Bárta", "mladý cikán"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["Judita", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["Bárta", "Judita"],
                    ["mladý cikán", "Angelina"],
                    ["Angelina", "mladý cikán"],
                    ["mladý cikán", "starý cikán"],
                    ["Angelina", "mladý cikán"],
                    ["mladý cikán", "Angelina"],
                    ["Angelina", "mladý cikán"],
                    ["mladý cikán", "Angelina"],
                    ["Angelina", "mladý cikán"],
                    ["mladý cikán", "Angelina"],
                    ["Angelina", "mladý cikán"],
                    ["mladý cikán", "starý cikán"],
                    ["hrabě z Borku", "Angelina"],
                    ["hrabě z Borku", "Emma"],
                    ["Bárta", "děti"],
                    ["děti", "Bárta"],
                    ["děti", "Bárta"],
                    ["Bárta", "děti"],
                    ["děti", "Bárta"],
                    ["Bárta", "děti"],
                    ["děti", "Bárta"],
                    ["Bárta", "děti"],
                    ["děti", "Bárta"],
                    ["děti", "Bárta"],
                    ["Bárta", "děti"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["Bárta", "mladý cikán"],
                    ["Bárta", "starý cikán"],
                    ["Lea", "mladý cikán"],
                    ["starý žid", "mladý cikán"],
                    ["Lea", "mladý cikán"],
                    ["Lea", "mladý cikán"],
                    ["mladý cikán", "Lea"],
                    ["Lea", "mladý cikán"],
                    ["starý žid", "mladý cikán"],
                    ["Lea", "mladý cikán"],
                    ["mladý cikán", "Lea"],
                    ["Lea", "mladý cikán"],
                    ["mladý cikán", "Lea"],
                    ["Lea", "mladý cikán"],
                    ["starý žid", "mladý cikán"],
                    ["mladý cikán", "Lea"],
                    ["Lea", "mladý cikán"],
                    ["starý žid", "mladý cikán"],
                    ["Lea", "mladý cikán"],
                    ["mladý cikán", "Lea"],
                    ["starý cikán", "mladý cikán"],
                    ["mladý cikán", "starý cikán"],
                    ["starý cikán", "mladý cikán"],
                    ["mladý cikán", "starý cikán"],
                    ["starý cikán", "mladý cikán"],
                    ["mladý cikán", "starý cikán"],
                    ["starý cikán", "mladý cikán"],
                    ["mladý cikán", "starý cikán"],
                    ["mladý cikán", "starý cikán"],
                    ["mladý cikán", "starý cikán"],
                    ["starý cikán", "mladý cikán"],
                    ["mladý cikán", "Lea"],
                    ["mladý cikán", "Lea"],
                    ["Lea", "mladý cikán"],
                    ["mladý cikán", "Lea"],
                    ["Lea", "mladý cikán"],
                    ["mladý cikán", "Lea"],
                    ["Lea", "mladý cikán"],
                    ["mladý cikán", "Lea"],
                    ["Lea", "mladý cikán"],
                    ["mladý cikán", "Lea"],
                    ["Lea", "mladý cikán"],
                    ["mladý cikán", "Lea"],
                    ["Lea", "mladý cikán"],
                    ["mladý cikán", "Lea"],
                    ["Lea", "mladý cikán"],
                    ["mladý cikán", "Lea"],
                    ["Angelina", "mladý cikán"],
                    ["mladý cikán", "Lea"],
                    ["mladý cikán", "Lea"],
                    ["mladý cikán", "Lea"],
                    ["mladý cikán", "Judita"],
                    ["Judita", "mladý cikán"],
                    ["mladý cikán", "Judita"],
                    ["Judita", "mladý cikán"],
                    ["mladý cikán", "Judita"],
                    ["Judita", "mladý cikán"],
                    ["Judita", "mladý cikán"],
                    ["mladý cikán", "Judita"],
                    ["Bárta", "mladý cikán"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["mladý cikán", "Bárta"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["mladý cikán", "Bárta"],
                    ["Bárta", "mladý cikán"],
                    ["Bárta", "mladý cikán"],
                    ["mladý cikán", "Bárta"],
                    ["Angelina", "mladý cikán"],
                    ["starý cikán", "mladý cikán"],
                    ["Angelina", "mladý cikán"],
                    ["Angelina", "mladý cikán"],
                    ["mladý cikán", "Angelina"],
                    ["Angelina", "mladý cikán"],
                    ["Angelina", "mladý cikán"],
                    ["mladý cikán", "starý cikán"],
                    ["Bárta", "Lea"],
                    ["starý žid", "Lea"],
                    ["Bárta", "úředníci"],
                    ["úředníci", "Bárta"],
                    ["Bárta", "úředníci"],
                    ["úředníci", "Bárta"],
                    ["Bárta", "úředníci"],
                    ["Judita", "úředníci"],
                    ["Bárta", "Judita"],
                    ["Judita", "Bárta"],
                    ["úředníci", "Bárta"],
                    ["Bárta", "úředníci"],
                    ["úředníci", "Bárta"],
                    ["Bárta", "úředníci"],
                    ["vrchní", "Bárta"],
                    ["Bárta", "vrchní"],
                    ["úředníci", "Bárta"],
                    ["Bárta", "úředníci"],
                    ["mladý cikán", "hrabě z Borku"],
                    ["Angelina", "mladý cikán"],
                    ["starší písař", "Bárta"],
                    ["Bárta", "starší písař"],
                    ["starší písař", "Bárta"],
                    ["Bárta", "starší písař"],
                    ["mladší písař", "Bárta"],
                    ["Bárta", "mladší písař"],
                    ["starší písař", "Bárta"],
                    ["Bárta", "starší písař"],
                    ["mladší písař", "starší písař"],
                    ["starší písař", "mladší písař"],
                    ["mladší písař", "starší písař"],
                    ["Bárta", "mladší písař"],
                    ["mladší písař", "mladý cikán"],
                    ["Bárta", "vrchní"],
                    ["vrchní", "úředníci"],
                    ["Emma", "hrabě z Borku"],
                    ["Emma", "hrabě z Borku"],
                    ["Emma", "hrabě z Borku"],
                    ["Emma", "hrabě z Borku"],
                    ["hrabě z Borku", "Emma"],
                    ["vrchní", "mladý cikán"],
                    ["vrchní", "mladý cikán"],
                    ["vrchní", "mladý cikán"],
                    ["vrchní", "mladý cikán"],
                    ["rychtář", "sedláci"],
                    ["sedláci", "rychtář"],
                    ["sedláci", "rychtář"],
                    ["sedláci", "rychtář"],
                    ["sedláci", "rychtář"],
                    ["rychtář", "sedláci"],
                    ["sedláci", "rychtář"],
                    ["rychtář", "Jakub"],
                    ["rychtář", "Jakub"],
                    ["Jakub", "rychtář"],
                    ["rychtář", "Jakub"],
                    ["Jakub", "rychtář"],
                    ["rychtář", "Jakub"],
                    ["Jakub", "rychtář"],
                    ["rychtář", "Jakub"],
                    ["sedláci", "Jakub"],
                    ["Jakub", "rychtář"],
                    ["sedláci", "Jakub"],
                    ["Jakub", "sedláci"],
                    ["rychtář", "Jakub"],
                    ["Jakub", "rychtář"],
                    ["sedláci", "rychtář"],
                    ["sedláci", "rychtář"],
                    ["Angelina", "sedláci"],
                    ["rychtář", "Tobiáš"],
                    ["Tobiáš", "sedláci"],
                    ["posel", "Jakub"],
                    ["přednosta", "Angelina"],
                    ["přednosta", "Angelina"],
                    ["přednosta", "Angelina"],
                    ["přednosta", "drábové"],
                    ["Angelina", "přednosta"],
                    ["přednosta", "Angelina"],
                    ["Angelina", "přednosta"],
                    ["přednosta", "Angelina"],
                    ["Angelina", "přednosta"],
                    ["přednosta", "Angelina"],
                    ["přednosta", "Angelina"],
                    ["Angelina", "starý cikán"],
                    ["přednosta", "mladý cikán"],
                    ["vrchní", "přednosta"],
                    ["přednosta", "mladý cikán"],
                    ["přednosta", "drábové"],
                    ["úředníci", "mladý cikán"],
                    ["Angelina", "mladý cikán"],
                    ["Angelina", "starý cikán"],
                    ["mladý cikán", "přednosta"],
                    ["vrchní", "mladý cikán"],
                    ["mladý cikán", "přednosta"],
                    ["Angelina", "mladý cikán"],
                    ["přednosta", "mladý cikán"],
                    ["přednosta", "mladý cikán"],
                    ["mladý cikán", "přednosta"],
                    ["Angelina", "starý cikán"],
                    ["starý cikán", "přednosta"],
                    ["starý cikán", "přednosta"],
                    ["přednosta", "starý cikán"],
                    ["starý cikán", "přednosta"],
                    ["přednosta", "starý cikán"],
                    ["Bárta", "lid"],
                    ["lid", "Bárta"],
                    ["starý cikán", "mladý cikán"],
                    ["starý cikán", "mladý cikán"],
                    ["starý cikán", "mladý cikán"],
                    ["Angelina", "starý cikán"],
                    ["starý cikán", "mladý cikán"],
                    ["starý cikán", "mladý cikán"],
                    ["starý cikán", "mladý cikán"],
                    ["starý cikán", "mladý cikán"],
                    ["starý cikán", "soudce"],
                    ["soudce", "starý cikán"],
                    ["starý cikán", "soudce"],
                    ["soudce", "starý cikán"],
                    ["starý cikán", "soudce"],
                    ["soudce", "starý cikán"],
                    ["milenka", "starý cikán"],
                    ["cizinec", "milenka"],
                    ["milenka", "cizinec"],
                    ["Bárta", "Judita"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'mladý cikán', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'starý cikán', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Bárta', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Lea', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Angelina', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'Judita', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'starý žid', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'hrabě z Borku', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Emma', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'děti', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'úředníci', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vrchní', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'starší písař', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'mladší písař', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'rychtář', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'sedláci', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Jakub', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Tobiáš', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'posel', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'přednosta', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'drábové', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'lid', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'soudce', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'milenka', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'cizinec', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';

      break;
    default:
    document.getElementById("container-person").src = "";
    document.getElementById("legend").innerHTML = "";
  }
}






// ŠABLONA:

/*
    case "NÁZEV CASE-TEXTU":
      Highcharts.chart('container', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'NÁZEV TEXTU'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [
        
                    ["narrator", "JMÉNO POSTAVY"],
                    ...
                    
                ], nodes: 
                    [
                    // vypravěč
                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'NÁZEV POSTAVY 1',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    ...

                    // vedlejší postavy
                    {id: 'NÁZEV POSTAVY 2',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    ...

                    ]
                }
              ]
          });
      break;
*/