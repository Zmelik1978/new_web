function showNetworkGraph() {
  var option = document.getElementById("cluster").value;
  
  const vypravec = '#c4688c',
  postava = '#78a8d1', // postava, se kterou vypravěč nebo jiná postava explicitně komunikuje
  postava2 = '#aeb6bf'; // postava, se kterou vypravěč nebo jiná postava explicitně nekomunikuje, ale komunikace je vyprávěna (např. "promluvil jsem si s X")
  
  const line = '#000000';
  const linewidth = 2.0;

  switch(option){
    case "tydenvtichemdome":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Týden v tichém domě'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - heterodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["starý Bavor", "Bavorová"],
                    ["starý Bavor", "Bavorová"],
                    ["Bavorová", "starý Bavor"],
                    ["starý Bavor", "Bavorová"],
                    ["Bavorová", "starý Bavor"],
                    ["starý Bavor", "Bavorová"],
                    ["Bavorová", "starý Bavor"],
                    ["starý Bavor", "Bavorová"],
                    ["Bavorová", "starý Bavor"],
                    ["starý Bavor", "Bavorová"],
                    ["Bavorová", "starý Bavor"],
                    ["starý Bavor", "Bavorová"],
                    ["Václav", "starý Bavor"],
                    ["starý Bavor", "Václav"],
                    ["Václav", "starý Bavor"],
                    ["starý Bavor", "Václav"],
                    ["Václav", "starý Bavor"],
                    ["starý Bavor", "Václav"],
                    ["Bavorová", "starý Bavor"],
                    ["starý Bavor", "Bavorová"],
                    ["Václav", "starý Bavor"],
                    ["starý Bavor", "Václav"],
                    ["Bavorová", "starý Bavor"],
                    ["Bavorová", "starý Bavor"],
                    ["starý Bavor", "Václav"],
                    ["Bavorová", "Václav"],
                    ["starý Bavor", "Bavorová"],
                    ["Bavorová", "starý Bavor"],
                    ["Václav", "Bavorová"],
                    ["Václav", "Bavorová"],
                    ["starý Bavor", "Bavorová"],
                    ["Bavorová", "starý Bavor"],
                    ["starý Bavor", "Bavorová"],
                    ["Bavorová", "starý Bavor"],
                    ["Loukota", "Josefinka"],
                    ["Josefinka", "Loukota"],
                    ["Loukota", "Josefinka"],
                    ["Josefinka", "Loukota"],
                    ["Loukota", "Josefinka"],
                    ["Josefinka", "Loukota"],
                    ["Loukota", "Josefinka"],
                    ["Josefinka", "Loukota"],
                    ["Loukota", "Josefinka"],
                    ["Václav", "Josefinka"],
                    ["Josefinka", "Václav"],
                    ["Václav", "Josefinka"],
                    ["Loukota", "Václav"],
                    ["Josefinka", "Václav"],
                    ["hospodská", "Václav"],
                    ["Václav", "hospodská"],
                    ["Loukota", "Václav"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Václav", "Bavorová"],
                    ["Bavorová", "Loukota"],
                    ["hospodská", "Josefinka"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Eber", "Loukota"],
                    ["Loukota", "Eber"],
                    ["Eber", "Loukota"],
                    ["Loukota", "Eber"],
                    ["Bavorová", "Loukota"],
                    ["hospodská", "Loukota"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Eber", "Václav"],
                    ["Eber", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Loukota", "hospodská"],
                    ["Loukota", "hospodská"],
                    ["Loukota", "hospodská"],
                    ["Eber", "Loukota"],
                    ["hospodská", "Bavorová"],
                    ["Bavorová", "hospodská"],
                    ["hospodská", "Bavorová"],
                    ["Bavorová", "hospodská"],
                    ["hospodská", "Bavorová"],
                    ["Bavorová", "hospodská"],
                    ["hospodská", "Bavorová"],
                    ["Bavorová", "hospodská"],
                    ["hospodská", "Bavorová"],
                    ["Bavorová", "hospodská"],
                    ["hospodská", "Bavorová"],
                    ["Ebrová", "Matylda"],
                    ["Matylda", "Ebrová"],
                    ["Ebrová", "Matylda"],
                    ["Matylda", "Ebrová"],
                    ["Ebrová", "Matylda"],
                    ["Matylda", "Ebrová"],
                    ["Ebrová", "Matylda"],
                    ["Matylda", "Ebrová"],
                    ["Ebrová", "Matylda"],
                    ["Matylda", "Ebrová"],
                    ["Ebrová", "Matylda"],
                    ["Ebrová", "Matylda"],
                    ["Matylda", "Ebrová"],
                    ["Ebrová", "Valinka"],
                    ["Ebrová", "Matylda"],
                    ["Matylda", "Ebrová"],
                    ["Ebrová", "Matylda"],
                    ["Matylda", "Marie"],
                    ["Baurová", "Ebrová"],
                    ["Ebrová", "Baurová"],
                    ["Baurová", "Matylda"],
                    ["Matylda", "Baurová"],
                    ["Marie", "Matylda"],
                    ["Baurová", "Ebrová"],
                    ["Baurová", "Ebrová"],
                    ["Ebrová", "Baurová"],
                    ["Marie", "Matylda"],
                    ["Matylda", "Marie"],
                    ["Marie", "Matylda"],
                    ["Matylda", "Marie"],
                    ["Marie", "Matylda"],
                    ["Matylda", "Marie"],
                    ["Marie", "Matylda"],
                    ["Matylda", "Marie"],
                    ["Marie", "Matylda"],
                    ["Matylda", "Marie"],
                    ["Marie", "Matylda"],
                    ["Matylda", "Marie"],
                    ["Marie", "Matylda"],
                    ["Matylda", "Marie"],
                    ["Marie", "Baurová"],
                    ["Baurová", "Ebrová"],
                    ["Ebrová", "Baurová"],
                    ["Baurová", "Ebrová"],
                    ["Ebrová", "Baurová"],
                    ["Baurová", "Ebrová"],
                    ["Valinka", "Baurová"],
                    ["Ebrová", "Valinka"],
                    ["Ebrová", "Baurová"],
                    ["Baurová", "Ebrová"],
                    ["Marie", "Matylda"],
                    ["Matylda", "Marie"],
                    ["Marie", "Matylda"],
                    ["Matylda", "Marie"],
                    ["Marie", "Matylda"],
                    ["Matylda", "Marie"],
                    ["Baurová", "Marie"],
                    ["Ebrová", "Matylda"],
                    ["Matylda", "Ebrová"],
                    ["Ebrová", "Matylda"],
                    ["Marie", "Baurová"],
                    ["Baurová", "Marie"],
                    ["Baurová", "Marie"],
                    ["Marie", "Baurová"],
                    ["Lakmus", "Klára"],
                    ["Lakmusová", "Klára"],
                    ["Lakmusová", "Lakmus"],
                    ["Lakmusová", "Lakmus"],
                    ["Lakmus", "Lakmusová"],
                    ["Lakmusová", "Lakmus"],
                    ["Lakmus", "Lakmusová"],
                    ["Lakmusová", "Lakmus"],
                    ["Lakmus", "Lakmusová"],
                    ["Lakmusová", "Lakmus"],
                    ["Lakmusová", "Lakmus"],
                    ["Lakmus", "Lakmusová"],
                    ["Lakmusová", "Lakmus"],
                    ["Lakmusová", "Klára"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Loukota", "Lakmusová"],
                    ["Lakmusová", "Loukota"],
                    ["Lakmusová", "Loukota"],
                    ["Lakmusová", "Loukota"],
                    ["Ebrová", "Eber"],
                    ["Eber", "Ebrová"],
                    ["Ebrová", "Eber"],
                    ["Matylda", "Eber"],
                    ["Ebrová", "Eber"],
                    ["Eber", "Bavorová"],
                    ["Bavorová", "Eber"],
                    ["Eber", "Bavorová"],
                    ["hospodská", "Bavorová"],
                    ["Bavorová", "hospodská"],
                    ["Bavorová", "hospodská"],
                    ["Lakmusová", "hospodská"],
                    ["Lakmusová", "Bavorová"],
                    ["hospodská", "Bavorová"],
                    ["Václav", "Bavorová"],
                    ["Bavorová", "Václav"],
                    ["Václav", "Bavorová"],
                    ["Bavorová", "Václav"],
                    ["Václav", "Bavorová"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Václav", "Loukota"],
                    ["Václav", "Lakmusová"],
                    ["Václav", "Lakmusová"],
                    ["Loukota", "Václav"],
                    ["Lakmusová", "Klára"],
                    ["Václav", "Loukota"],
                    ["Václav", "Lakmusová"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Lakmusová", "Loukota"],
                    ["Lakmusová", "Loukota"],
                    ["Lakmusová", "Klára"],
                    ["Lakmusová", "Loukota"],
                    ["Lakmusová", "Klára"],
                    ["Josefinka", "Karel"],
                    ["Karel", "Josefinka"],
                    ["Josefinka", "Karel"],
                    ["Karel", "Josefinka"],
                    ["Josefinka", "Karel"],
                    ["Josefinka", "Karel"],
                    ["Karel", "Josefinka"],
                    ["Josefinka", "Karel"],
                    ["Karel", "Josefinka"],
                    ["Josefinka", "Karel"],
                    ["Karel", "Josefinka"],
                    ["Josefinka", "Karel"],
                    ["Karel", "Josefinka"],
                    ["Josefinka", "Karel"],
                    ["Karel", "Josefinka"],
                    ["Karel", "Josefinka"],
                    ["Josefinka", "Karel"],
                    ["Karel", "Josefinka"],
                    ["Josefinka", "Katuška"],
                    ["Baurová", "Eber"],
                    ["Valinka", "Ebrová"],
                    ["Eber", "Baurová"],
                    ["Baurová", "Valinka"],
                    ["Valinka", "Baurová"],
                    ["Eber", "Baurová"],
                    ["Baurová", "Eber"],
                    ["Marie", "Kořínek"],
                    ["Kořínek", "Marie"],
                    ["Marie", "Kořínek"],
                    ["Kořínek", "Marie"],
                    ["Marie", "Kořínek"],
                    ["Kořínek", "Marie"],
                    ["Marie", "Kořínek"],
                    ["Kořínek", "Marie"],
                    ["Marie", "Kořínek"],
                    ["Kořínek", "Marie"],
                    ["Marie", "Kořínek"],
                    ["Kořínek", "Marie"],
                    ["Baurová", "Marie"],
                    ["Marie", "Baurová"],
                    ["Baurová", "Marie"],
                    ["Marie", "Baurová"],
                    ["Marie", "Kořínek"],
                    ["Marie", "Kořínek"],
                    ["Kořínek", "Marie"],
                    ["Marie", "Baurová"],
                    ["Baurová", "Kořínek"],
                    ["Matylda", "Kořínek"],
                    ["Kořínek", "Matylda"],
                    ["Marie", "Matylda"],
                    ["Ebrová", "Matylda"],
                    ["Marie", "Matylda"],
                    ["hospodská", "Bavorová"],
                    ["Bavorová", "hospodská"],
                    ["hospodská", "Bavorová"],
                    ["Bavorová", "hospodská"],
                    ["hospodská", "Bavorová"],
                    ["Bavorová", "hospodská"],
                    ["hospodská", "Bavorová"],
                    ["Bavorová", "hospodská"],
                    ["hospodská", "Bavorová"],
                    ["Bavorová", "hospodská"],
                    ["hospodská", "Bavorová"],
                    ["Bavorová", "hospodská"],
                    ["hospodská", "Bavorová"],
                    ["Bavorová", "hospodská"],
                    ["hospodská", "Bavorová"],
                    ["Bavorová", "hospodská"],
                    ["Bavorová", "Václav"],
                    ["Václav", "Bavorová"],
                    ["Bavorová", "Václav"],
                    ["Václav", "Bavorová"],
                    ["Bavorová", "Václav"],
                    ["Václav", "Bavorová"],
                    ["Bavorová", "Václav"],
                    ["Václav", "Bavorová"],
                    ["Bavorová", "Václav"],
                    ["Bavorová", "Václav"],
                    ["Václav", "Bavorová"],
                    ["Bavorová", "Václav"],
                    ["Václav", "Bavorová"],
                    ["Menk", "Ebrová"],
                    ["Ebrová", "Menk"],
                    ["Menk", "Ebrová"],
                    ["Ebrová", "Menk"],
                    ["Menk", "Ebrová"],
                    ["Ebrová", "Menk"],
                    ["Menk", "Ebrová"],
                    ["Matylda", "Ebrová"],
                    ["Eber", "Matylda"],
                    ["Matylda", "Eber"],
                    ["Eber", "Ebrová"],
                    ["Ebrová", "Eber"],
                    ["Eber", "Ebrová"],
                    ["Ebrová", "Eber"],
                    ["Eber", "Ebrová"],
                    ["Ebrová", "Eber"],
                    ["Eber", "Ebrová"],
                    ["Ebrová", "Eber"],
                    ["Eber", "Ebrová"],
                    ["Ebrová", "Eber"],
                    ["Matylda", "Eber"],
                    ["Eber", "Matylda"],
                    ["Matylda", "Ebrová"],
                    ["Ebrová", "Bavorová"],
                    ["Ebrová", "Eber"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],
                    ["Václav", "Loukota"],
                    ["Loukota", "Václav"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Loukota', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Václav', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Bavorová', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Lakmusová', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'hospodská', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Ebrová', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Eber', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Josefinka', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Matylda', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'starý Bavor', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Valinka', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Marie', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Baurová', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Lakmus', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Klára', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Karel', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Katuška', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Kořínek', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Menk', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "panrysanekapanschlegl":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Pan Ryšánek a pan Schlegl'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["štábní lékař", "narrator"],
                    ["hostinský", "Schlegl"],
                    ["hostinský", "Schlegl"],
                    ["známý", "Schlegl"],
                    ["Schlegl", "známý"],
                    ["známý", "Schlegl"],
                    ["Schlegl", "známý"],
                    ["Schlegl", "Kohler"],
                    ["Kohler", "Schlegl"],
                    ["štábní lékař", "Schlegl"],
                    ["Schlegl", "štábní lékař"],
                    ["sousedé", "Ryšánek"],
                    ["hostinský", "Ryšánek"],
                    ["hostinský", "Ryšánek"],
                    ["Ryšánek", "hostinský"],
                    ["hostinský", "Ryšánek"],
                    ["Ryšánek", "hostinský"],
                    ["hostinský", "Ryšánek"],
                    ["hostinský", "Schlegl"],
                    ["Ryšánek", "sklepník"],
                    ["Schlegl", "Ryšánek"],
                    ["Ryšánek", "Schlegl"],
                    ["Ryšánek", "Schlegl"],
                    ["Schlegl", "Ryšánek"],
                    ["Ryšánek", "Schlegl"],
                    ["Schlegl", "Ryšánek"],
                    ["Schlegl", "Ryšánek"],

                ], nodes:

                    [

                    // vypravěč
                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Ryšánek', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Schlegl', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'hostinský', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'štábní lékař', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'známý', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Kohler', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'sousedé', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'sklepník', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "privedlazebrakanamizinu":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Přivedla žebráka na mizinu'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Vojtíšek", "Šimr"],
                    ["Šimr", "Vojtíšek"],
                    ["Vojtíšek", "Šimr"],
                    ["Herzl", "Vojtíšek"],
                    ["Vojtíšek", "Herzl"],
                    ["Miliónová", "Vojtíšek"],
                    ["Miliónová", "Vojtíšek"],
                    ["Miliónová", "Vojtíšek"],
                    ["Miliónová", "Vojtíšek"],
                    ["Miliónová", "Vojtíšek"],
                    ["Vojtíšek", "Miliónová"],
                    ["Miliónová", "Vojtíšek"],
                    ["Miliónová", "Vojtíšek"],
                    ["Miliónová", "Vojtíšek"],
                    ["Vojtíšek", "Miliónová"],
                    ["sousedé", "Vojtíšek"],
                    ["sousedé", "Vojtíšek"],
                    ["uličníci", "Vojtíšek"],
                    ["Vojtíšek", "Herzl"],
                    ["Herzl", "Vojtíšek"],
                    ["Vojtíšek", "Herzl"],
                    ["matka", "narrator"],
                    ["Vojtíšek", "matka"],
                    ["matka", "narrator"],
                    ["mlíkařka", "Kedlický"],
                    ["Kedlický", "mlíkařka"],

                ], nodes:

                    [

                    // vypravěč
                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Vojtíšek', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Miliónová', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Herzl', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'Šimr', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'sousedé', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'uličníci', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'matka', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'mlíkařka', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Kedlický', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "omekkemsrdcipanirusky":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'O měkkém srdci paní Rusky'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["pozůstalí", "soused"],
                    ["soused", "pozůstalí"],
                    ["paní Ruska", "neznámá"],
                    ["paní Ruska", "neznámá"],
                    ["paní Ruska", "neznámá"],
                    ["neznámá", "paní Ruska"],
                    ["paní Ruska", "neznámá"],
                    ["neznámá", "Uhmuhl"],
                    ["paní Ruska", "Hirtová"],
                    ["Uhmuhl", "paní Ruska"],
                    ["Uhmuhl", "paní Ruska"],
                    ["komisař", "Uhmuhl"],
                    ["Uhmuhl", "komisař"],
                    ["komisař", "Uhmuhl"],
                    ["hosté", "komisař"],
                    ["hosté", "komisař"],
                    ["komisař", "paní Ruska"],
                    ["hosté", "paní Ruska"],
                    ["komisař", "paní Ruska"],
                    ["komisař", "strážník"],
                    ["hosté", "paní Ruska"],
                    ["Josef", "narrator"],
                    ["komisař", "paní Ruska"],
                    ["komisař", "ouředník"],
                    ["ouředník", "komisař"],

                ], nodes:

                    [

                    // vypravěč
                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'paní Ruska', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'komisař', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'pozůstalí', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'soused', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'neznámá', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Uhmuhl', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Hirtová', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'hosté', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'strážník', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Josef', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'ouředník', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "vecernisplechty":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Večerní šplechty'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Kupka", "Hovora"],
                    ["Hovora", "Kupka"],
                    ["Kupka", "Hovora"],
                    ["Hovora", "Kupka"],
                    ["Kupka", "Hovora"],
                    ["Hovora", "Kupka"],
                    ["Kupka", "Hovora"],
                    ["Hovora", "Kupka"],
                    ["Kupka", "Hovora"],
                    ["Hovora", "Kupka"],
                    ["Hovora", "Kupka"],
                    ["Kupka", "Hovora"],
                    ["Hovora", "Kupka"],
                    ["Kupka", "Hovora"],
                    ["Hovora", "Kupka"],
                    ["Kupka", "Hovora"],
                    ["Kupka", "Hovora"],
                    ["Hovora", "Kupka"],
                    ["Kupka", "Hovora"],
                    ["Novomlýnský", "Hovora"],
                    ["Kupka", "Novomlýnský"],
                    ["Hovora", "Novomlýnský"],
                    ["Novomlýnský", "Hovora"],
                    ["Novomlýnský", "Hovora"],
                    ["Hovora", "Novomlýnský"],
                    ["Kupka", "Novomlýnský"],
                    ["Novomlýnský", "Kupka"],
                    ["Novomlýnský", "Hovora"],
                    ["Hovora", "Novomlýnský"],
                    ["Novomlýnský", "Hovora"],
                    ["Hovora", "Novomlýnský"],
                    ["Novomlýnský", "Hovora"],
                    ["Novomlýnský", "Kupka"],
                    ["Kupka", "Novomlýnský"],
                    ["Novomlýnský", "Kupka"],
                    ["Novomlýnský", "Kupka"],
                    ["Hovora", "Novomlýnský"],
                    ["Novomlýnský", "Hovora"],
                    ["Novomlýnský", "Hovora"],
                    ["Novomlýnský", "Hovora"],
                    ["Hovora", "Novomlýnský"],
                    ["Novomlýnský", "Hovora"],
                    ["Novomlýnský", "Hovora"],
                    ["Kupka", "Jakl"],
                    ["Hovora", "Jakl"],
                    ["Novomlýnský", "Jakl"],
                    ["Jakl", "Novomlýnský"],
                    ["Novomlýnský", "Jakl"],
                    ["Jakl", "Novomlýnský"],
                    ["Jakl", "Novomlýnský"],
                    ["Novomlýnský", "Jakl"],
                    ["Hovora", "Jakl"],
                    ["Jakl", "Hovora"],
                    ["Novomlýnský", "Jakl"],
                    ["Hovora", "Novomlýnský"],
                    ["Novomlýnský", "Hovora"],
                    ["Novomlýnský", "Kupka"],
                    ["Kupka", "Novomlýnský"],
                    ["Jakl", "Novomlýnský"],
                    ["Novomlýnský", "Jakl"],
                    ["Jakl", "Novomlýnský"],
                    ["Novomlýnský", "Jakl"],
                    ["Jakl", "Novomlýnský"],
                    ["Novomlýnský", "Jakl"],
                    ["Hovora", "Kupka"],
                    ["Kupka", "Hovora"],
                    ["Jakl", "Kupka"],
                    ["Kupka", "Jakl"],
                    ["Hovora", "Kupka"],
                    ["Novomlýnský", "Jakl"],
                    ["Kupka", "Jakl"],
                    ["Jakl", "Kupka"],
                    ["Novomlýnský", "Jakl"],
                    ["Kupka", "Jakl"],
                    ["Hovora", "Jakl"],
                    ["Jakl", "Hovora"],
                    ["Hovora", "Jakl"],
                    ["Kupka", "Novomlýnský"],
                    ["Novomlýnský", "Kupka"],
                    ["Jakl", "Novomlýnský"],
                    ["Kupka", "Jakl"],
                    ["Jakl", "Kupka"],
                    ["Kupka", "Jakl"],
                    ["Jakl", "Kupka"],
                    ["Jakl", "Lizinka"],
                    ["Lizinka", "Jakl"],
                    ["Jakl", "Lizinka"],
                    ["Lizinka", "Jakl"],
                    ["soused", "Perálek"],
                    ["soused", "Perálek"],
                    ["Vítek", "Jakl"],
                    ["Lizinka", "Jakl"],
                    ["Bureš", "Jakl"],
                    ["Jakl", "Bureš"],
                    ["Bureš", "Jakl"],
                    ["Jakl", "Kupka"],
                    ["Novomlýnský", "Jakl"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Hovora', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Kupka', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Novomlýnský', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Jakl', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'Lizinka', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'soused', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Perálek', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Vítek', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Bureš', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "doktorkazisvet":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Doktor Kazisvět'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["sousedé", "Heribert"],
                    ["Ostrohradský", "Kejřík"],
                    ["Kejřík", "Ostrohradský"],
                    ["Ostrohradský", "mládenci"],
                    ["Heribert", "dav"],
                    ["Link", "Heribert"],
                    ["Ostrohradský", "dav"],
                    ["Kejřík", "Heribert"],
                    ["Heribert", "Kejřík"],
                    ["Link", "Heribert"],
                    ["Ostrohradský", "dav"],
                    ["dav", "Ostrohradský"],
                    ["Ostrohradský", "dav"],
                    ["radové", "dav"],
                    ["Kdojek", "dav"],
                    ["Ostrohradský", "komisař"],
                    ["Ostrohradský", "komisař"],
                    ["komisař", "dav"],
                    ["Kejřík", "paničky"],
                    ["Kejřík", "dav"],
                    ["Kejřík", "dav"],
                    ["Kejřík", "dav"],
                    ["lidé", "hlas"],
                    ["hlas", "lidé"],
                    ["lidé", "hlas"],
                    ["hlas", "lidé"],
                    ["lidé", "hlas"],
                    ["hlas", "lidé"],
                    ["lidé", "hlas"],
                    ["Schepeler", "dav"],
                    ["Schepeler", "dav"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Heribert', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Kejřík', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Ostrohradský', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'sousedé', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'mládenci', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'dav', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Link', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'radové', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Kdojek', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'komisař', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'paničky', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'lidé', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'hlas', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Schepeler', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "hastrman":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Hastrman'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["narrator", "Rybář"],
                    ["narrator", "Rybář"],
                    // ["Rybář", "cizinci"], (bez odezvy — nevkládat do grafu)
                    // ["studující", "narrator"], (bez odezvy — nevkládat do grafu)
                    ["Rybář", "kanovník"],
                    ["kanovník", "Rybář"],
                    ["kanovník", "kanovník2"],
                    ["kanovník2", "kanovník"],
                    // ["Herzl", "sousedé"], (bez odezvy — nevkládat do grafu)
                    // ["Vitouš", "sousedé"], (bez odezvy — nevkládat do grafu)
                    ["narrator", "Rybář"],
                    ["Muhlwenzel", "Rybář"],
                    ["Rybář", "Muhlwenzel"],
                    ["Muhlwenzel", "Rybář"],
                    ["Rybář", "Muhlwenzel"],
                    ["Muhlwenzel", "Rybář"],
                    ["Rybář", "Muhlwenzel"],
                    ["Muhlwenzel", "Rybář"],
                    ["Rybář", "Muhlwenzel"],
                    ["Muhlwenzel", "Rybář"],
                    ["Rybář", "Muhlwenzel"],
                    ["Rybář", "Muhlwenzel"],
                    ["Muhlwenzel", "Rybář"],
                    ["narrator", "Rybář"],
                    ["Šajvl", "Rybář"],
                    ["Šajvl", "Rybář"],
                    ["Rybář", "Šajvl"],
                    ["Šajvl", "Rybář"],
                    ["Rybář", "Šajvl"],
                    ["Šajvl", "Rybář"],

                ], nodes:

                    [

                    // vypravěč

                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},


                    // hlavní postavy

                    {id: 'Rybář',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Šajvl',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Muhlwenzel',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},


                    // vedlejší postavy

                    {id: 'kanovník',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'kanovník2',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]

          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "jaksinakourilpanvorelpenovku":

      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Jak si nakouřil pan Vorel pěnovku'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    // ["paní setníková", "Poldýnka"], (pokyn matky, ať koupí u nového krupaře — bez odezvy, nevkládat do grafu)

                    ["Vorel", "Poldýnka"],
                    ["Poldýnka", "Vorel"],
                    ["Vorel", "Poldýnka"],
                    ["Poldýnka", "Vorel"],
                    ["Vorel", "Poldýnka"],
                    ["Vorel", "Vojtíšek"],
                    ["Vojtíšek", "Vorel"],

                    // ["Poldýnka", "Kdojeková"], (drb o kouři v krámě — bez odezvy, nevkládat do grafu)
                    // ["sousedé", "Vorel"], (sousedé mluví o "uzeném krupaři" — bez odezvy, nevkládat do grafu)
                    // ["komisař", "komise"], (závěrečná replika nad pěnovkou — bez odezvy, nevkládat do grafu)

                ], nodes:

                    [

                    // vypravěč

                    // {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},


                    // hlavní postavy

                    {id: 'Vorel',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Poldýnka',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},


                    // vedlejší postavy

                    {id: 'Vojtíšek',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]

          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "utrililii":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'U tří lilií'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    // ["sestra", "krásnooká"], // (šeptá; krásnooká jen mlčky kývne — bez verbální odezvy, nevkládat do grafu)
                    ["družka", "krásnooká"],
                    ["krásnooká", "družka"],
                    ["družka", "krásnooká"],
                    ["krásnooká", "družka"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'krásnooká',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'družka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]
                }
              ]
          });
      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "svatovaclavskamse":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Svatováclavská mše'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Havel", "matka"],
                    ["matka", "Havel"],
                    ["Havel", "narrator"],
                    ["narrator", "matka"],
                    ["Fricek", "narrator"],
                    ["Kubíček", "narrator"],
                    ["narrator", "Fricek"],
                    ["narrator", "Kubíček"],
                    // ["Pěšina", "zvoník"], (bez odezvy — nevkládat do grafu)
                    // (ve snu — svatý Václav: „Hodné dítě!“) ["Václav", "narrator"], (nevkládat — promluva ve snu)

                ], nodes:

                    [

                    // vypravěč
                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'matka', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'Havel', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Fricek', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Kubíček', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "jaktoprislo":

      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Jak to přišlo'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Prokop Holý","narrator"],
                    ["Mikuláš z Husi","narrator"],
                    ["narrator","Prokop Holý"], // (výklad o granátníkovi ke spolku)
                    ["narrator","Prokop Holý"],
                    ["Prokop Holý","narrator"],
                    ["matka","narrator"],
                    ["matka","otec"],
                    ["otec","matka"],
                    ["matka","otec"],
                    ["voják","narrator"],
                    ["narrator","voják"],
                    ["voják","narrator"],
                    ["narrator","Prokop Holý"],
                    ["Prokop Holý","narrator"],
                    ["narrator","Prokop Holý"],
                    ["Prokop Holý","narrator"],
                    ["narrator","Mikuláš z Husi"],
                    ["Mikuláš z Husi","narrator"],
                    ["narrator","Mikuláš z Husi"],
                    ["Mikuláš z Husi","narrator"],
                    ["narrator","Prokůpek"],
                    ["Prokůpek","narrator"],
                    ["narrator","Prokůpek"],
                    ["Prokůpek","narrator"],
                    ["narrator","Prokůpek"],
                    ["narrator","Prokop Holý"],
                    ["narrator","Prokop Holý"],
                    ["Prokop Holý","narrator"],
                    ["Prokop Holý","narrator"],
                    ["narrator","Prokop Holý"],
                    ["Prokůpek","narrator"],
                    ["pecnář","Pohorák"],
                    ["Pohorák","pecnář"],
                    ["Pohorák","pecnář"],
                    ["pecnář","Pohorák"],
                    ["Pohorák","pecnář"],
                    ["pan starý","Pohorák"],
                    ["Pohorák","pan starý"],
                    ["pan starý","Pohorák"],
                    ["panenka","Pohorák"],
                    ["Pohorák","panenka"],
                    ["paní","Pohorák"],
                    ["Pohorák","paní"],
                    ["paní","Pohorák"],
                    ["Pohorák","paní"],
                    // ["služka","paní"], // (mluví jen k paní; bez odezvy — nevkládat do grafu)
                    // ["Pohorák","služka"], // (jen okřiknutí; bez odezvy — nevkládat do grafu)
                    ["Pohorák","uzenář"],
                    ["uzenář","Pohorák"],
                    ["Pohorák","uzenář"],
                    ["panenka","Pohorák"],
                    ["Pohorák","uzenář"],
                    ["policajt","Pohorák"],
                    ["Pohorák","policajt"],
                    ["policajt","Pohorák"],
                    ["Pohorák","policajt"],
                    ["policajt","Pohorák"],
                    ["Pohorák","policajt"],
                    ["policajt","Pohorák"],
                    ["Pohorák","policajt"],
                    ["narrator","Prokop Holý"], // (referát na schůzi)
                    ["Prokop Holý","Pohorák"],
                    ["Pohorák","Prokop Holý"],
                    ["Prokop Holý","Pohorák"],
                    ["Pohorák","Prokop Holý"],

                ], nodes:

                    [

                    // vypravěč

                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},


                    // hlavní postavy

                    {id: 'Prokop Holý',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Mikuláš z Husi',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Prokůpek',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Pohorák',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},


                    // vedlejší postavy

                    {id: 'matka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'otec',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'pan starý',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'panenka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'paní',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'pecnář',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'policajt',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'uzenář',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'voják',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]

          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "psanooletosnichdusickach":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Psáno o letošních dušičkách'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Máry", "děťátko"],
                    ["Máry", "děťátko"],
                    ["Máry", "děťátko"],
                    ["Máry", "děťátko"],
                    ["Máry", "děťátko"],
                    ["Nocarová", "Máry"],
                    ["Máry", "Nocarová"],
                    ["Cibulka", "Máry"],
                    ["Nocarová", "Máry"],
                    ["Máry", "Nocarová"],
                    ["Nocarová", "Máry"],
                    ["Nocarová", "Máry"],
                    ["Rechner", "Máry"],
                    ["Rechner", "Cibulka"],
                    ["Cibulka", "Rechner"],
                    ["Nocarová", "Máry"],
                    ["Máry", "Nocarová"],
                    ["Nocarová", "Máry"],
                    ["Máry", "Nocarová"],
                    ["Máry", "Rechner"],
                    ["Rechner", "Máry"],
                    ["Nocarová", "Máry"],
                    ["Cibulka", "Máry"],
                    ["Nocarová", "Máry"],
                    ["Nocarová", "Máry"],
                    ["Nocarová", "Máry"],
                    ["Nocarová", "Máry"],
                    ["Nocarová", "Máry"],
                    ["ženská", "Máry"],
                    ["Máry", "ženská"],
                    ["někdo", "Nocarová"],
                    ["Nocarová", "někdo"],

                ], nodes:

                    [

                    // vypravěč
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Máry', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Nocarová', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Cibulka', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Rechner', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'děťátko', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'ženská', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'někdo', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]
          });
      break;
      case "figurky":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Figurky'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["narrator", "konduktorka"],
                    ["konduktorka", "narrator"],
                    ["narrator", "konduktorka"],
                    ["konduktorka", "narrator"],
                    ["konduktorka", "Augusta"],
                    ["Augusta", "narrator"],
                    ["narrator", "Augusta"],
                    ["Augusta", "narrator"],
                    ["narrator", "Augusta"],
                    ["Augusta", "konduktorka"],
                    ["konduktorka", "narrator"],
                    ["narrator", "Augusta"],
                    ["Augusta", "narrator"],
                    ["Pepík", "Augusta"],
                    ["Augusta", "Pepík"],
                    ["Pepík", "Augusta"],
                    ["narrator", "Pepík"],
                    ["narrator", "konduktorka"],
                    ["konduktorka", "narrator"],
                    ["narrator", "konduktorka"],
                    ["konduktorka", "narrator"],
                    ["narrator", "konduktorka"],
                    ["konduktorka", "narrator"],
                    ["Augusta", "narrator"],
                    ["narrator", "Augusta"],
                    ["Augusta", "narrator"],
                    ["narrator", "Augusta"],
                    ["Augusta", "narrator"],
                    ["narrator", "Augusta"],
                    ["narrator", "Augustka"],
                    ["Augustka", "Augusta"],
                    ["Augusta", "Augustka"],
                    ["Augustka", "narrator"],
                    ["Augusta", "narrator"],
                    ["narrator", "Augusta"],
                    ["narrator", "Augusta"],
                    ["Augusta", "Augustka"],
                    ["narrator", "Pepík"],
                    ["Pepík", "narrator"],
                    ["Augusta", "Pepík"],
                    ["Pepík", "Augustka"],
                    ["Augustka", "Pepík"],
                    ["narrator", "Pepík"],
                    ["Pepík", "narrator"],
                    ["narrator", "Augusta"],
                    ["Augusta", "narrator"],
                    ["Augustka", "Augusta"],
                    ["narrator", "konduktorka"],
                    ["konduktorka", "narrator"],
                    ["domácí", "narrator"],
                    ["narrator", "domácí"],
                    ["domácí", "narrator"],
                    ["narrator", "domácí"],
                    ["domácí", "narrator"],
                    ["narrator", "domácí"],
                    ["domácí", "narrator"],
                    ["narrator", "domácí"],
                    ["domácí", "narrator"],
                    ["narrator", "konduktorka"],
                    ["konduktorka", "narrator"],
                    ["narrator", "konduktorka"],
                    ["konduktorka", "narrator"],
                    ["Augusta", "narrator"],
                    ["narrator", "Augusta"],
                    ["hostinský", "narrator"],
                    ["narrator", "hostinský"],
                    ["hostinský", "narrator"],
                    ["narrator", "Sempr"],
                    ["Sempr", "narrator"],
                    ["narrator", "Sempr"],
                    ["Sempr", "narrator"],
                    ["narrator", "Sempr"],
                    ["Sempr", "narrator"],
                    ["narrator", "Sempr"],
                    ["Sempr", "narrator"],
                    ["narrator", "hostinský"],
                    ["hostinský", "narrator"],
                    ["narrator", "hostinský"],
                    ["hostinský", "narrator"],
                    ["narrator", "hostinský"],
                    ["hostinský", "narrator"],
                    ["hostinský", "Klikeš"],
                    ["Klikeš", "narrator"],
                    ["hostinský", "Klikeš"],
                    ["Klikeš", "hostinský"],
                    ["hostinský", "Klikeš"],
                    ["Klikeš", "narrator"],
                    ["narrator", "Klikeš"],
                    ["Klikeš", "hostinský"],
                    ["hostinský", "Klikeš"],
                    ["Klikeš", "hostinský"],
                    ["hostinský", "Klikeš"],
                    ["Klikeš", "narrator"],
                    ["narrator", "Klikeš"],
                    ["Klikeš", "Ignác"],
                    ["Ignác", "Klikeš"],
                    ["Klikeš", "narrator"],
                    ["Klikeš", "cizinec"],
                    ["cizinec", "Klikeš"],
                    ["Klikeš", "cizinec"],
                    ["Klikeš", "narrator"],
                    ["narrator", "Klikeš"],
                    ["Klikeš", "hostinský"],
                    ["narrator", "Pepík"],
                    ["Pepík", "narrator"],
                    ["narrator", "Pepík"],
                    ["Augusta", "narrator"],
                    ["narrator", "Augusta"],
                    ["Augusta", "narrator"],
                    ["narrator", "hostinský"],
                    ["hostinský", "narrator"],
                    ["narrator", "hostinský"],
                    ["hostinský", "narrator"],
                    ["narrator", "hostinský"],
                    ["hostinský", "narrator"],
                    ["Otylie", "domácí"],
                    ["domácí", "narrator"],
                    ["narrator", "domácí"],
                    ["narrator", "Pepík"],
                    ["Pepík", "narrator"],
                    ["Augusta", "narrator"],
                    ["Augusta", "narrator"],
                    ["narrator", "Pepík"],
                    ["Pepík", "narrator"],
                    ["Otylie", "narrator"],
                    ["narrator", "Otylie"],
                    ["Otylie", "narrator"],
                    ["domácí", "Otylie"],
                    ["Provazník", "narrator"],
                    ["narrator", "Provazník"],
                    ["Provazník", "narrator"],
                    ["Provazník", "Augusta"],
                    ["Augusta", "Provazník"],
                    ["Provazník", "Augusta"],
                    ["Augusta", "Provazník"],
                    ["Provazník", "Augusta"],
                    ["narrator", "Provazník"],
                    ["Provazník", "narrator"],
                    ["narrator", "Provazník"],
                    ["Provazník", "narrator"],
                    ["narrator", "Provazník"],
                    ["Provazník", "narrator"],
                    ["Augustka", "Augusta"],
                    ["Augusta", "Augustka"],
                    ["Augustka", "narrator"],
                    ["narrator", "Augustka"],
                    ["Augustka", "narrator"],
                    ["narrator", "Otylie"],
                    ["Otylie", "narrator"],
                    ["narrator", "Otylie"],
                    ["narrator", "domácí"],
                    ["domácí", "narrator"],
                    ["Augusta", "narrator"],
                    ["Provazník", "narrator"],
                    ["narrator", "Provazník"],
                    ["Provazník", "narrator"],
                    ["domácí", "narrator"],
                    ["narrator", "domácí"],
                    ["domácí", "narrator"],
                    ["narrator", "Provazník"],
                    ["Provazník", "domácí"],
                    ["domácí", "Provazník"],
                    ["Provazník", "narrator"],
                    ["narrator", "Provazník"],
                    ["Provazník", "narrator"],
                    ["narrator", "Otylie"],
                    ["Otylie", "narrator"],
                    ["Otylie", "domácí"],
                    ["domácí", "Otylie"],
                    ["narrator", "Provazník"],
                    ["Provazník", "narrator"],
                    ["Provazník", "narrator"],
                    ["narrator", "Provazník"],
                    ["Provazník", "narrator"],
                    ["narrator", "Provazník"],
                    ["Klikeš", "hostinský"],
                    ["hostinský", "Klikeš"],
                    ["Karlíček", "Lofler"],
                    ["Lofler", "Karlíček"],
                    ["narrator", "Pepík"],
                    ["Pepík", "narrator"],
                    ["narrator", "Pepík"],
                    ["Pepík", "narrator"],
                    ["Otylie", "narrator"],
                    ["narrator", "Otylie"],
                    ["Otylie", "narrator"],
                    ["Provazník", "narrator"],
                    ["domácí", "narrator"],
                    ["Otylie", "narrator"],
                    ["domácí", "narrator"],
                    ["narrator", "domácí"],
                    ["Provazník", "narrator"],
                    ["Provazník", "Augusta"],
                    ["Augusta", "Provazník"],
                    ["Klikeš", "Sempr"],
                    ["Sempr", "Klikeš"],
                    ["Jensen", "narrator"],
                    ["narrator", "Jensen"],
                    ["Jensen", "narrator"],
                    ["narrator", "Jensen"],
                    ["Jensen", "narrator"],
                    ["narrator", "Jensen"],
                    ["Jensen", "narrator"],
                    ["drožkář", "narrator"],
                    ["narrator", "drožkář"],
                    ["poručík", "narrator"],
                    ["narrator", "poručík"],
                    ["poručík", "narrator"],
                    ["narrator", "poručík"],
                    ["poručík", "narrator"],
                    ["narrator", "poručík"],
                    ["poručík", "narrator"],
                    ["narrator", "poručík"],
                    ["poručík", "narrator"],
                    ["konduktorka", "narrator"],
                    ["Provazník", "narrator"],
                    ["poručík", "narrator"],
                    ["narrator", "poručík"],
                    ["poručík", "narrator"],
                    ["narrator", "poručík"],
                    ["poručík", "narrator"],
                    ["narrator", "poručík"],
                    ["poručík", "narrator"],
                    ["narrator", "poručík"],
                    ["poručík", "narrator"],
                    ["Provazník", "narrator"],
                    ["narrator", "Provazník"],
                    ["Provazník", "narrator"],
                    ["narrator", "Provazník"],
                    ["Provazník", "narrator"],
                    ["narrator", "Provazník"],
                    ["Otylie", "narrator"],
                    ["narrator", "Otylie"],
                    ["Otylie", "narrator"],
                    ["narrator", "Morousek"],
                    ["Morousek", "narrator"],
                    ["Morousek", "narrator"],
                    ["narrator", "Morousek"],
                    ["Morousek", "narrator"],
                    ["narrator", "Morousek"],
                    ["Morousek", "narrator"],
                    ["Morousek", "narrator"],
                    ["narrator", "Morousek"],
                    ["Otylie", "narrator"],
                    ["Augusta", "narrator"],
                    ["narrator", "Augusta"],
                    ["Augusta", "narrator"],
                    ["poručík", "narrator"],
                    ["narrator", "poručík"],
                    ["narrator", "nadporučík"],
                    ["nadporučík", "narrator"],
                    ["Morousek", "narrator"],
                    ["narrator", "Morousek"],
                    ["Morousek", "narrator"],
                    ["narrator", "hostinský"],
                    ["hostinský", "narrator"],
                    ["hostinský", "Sempr"],
                    ["Sempr", "hostinský"],
                    ["narrator", "hostinský"],
                    ["hostinský", "narrator"],
                    ["narrator", "hostinský"],
                    ["hostinský", "narrator"],
                    ["Jensen", "narrator"],

                ], nodes:

                    [

                    // vypravěč
                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'konduktorka', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Augusta', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Augustka', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Pepík', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Provazník', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'domácí', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Otylie', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'hostinský', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Klikeš', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Morousek', marker: {radius: 20, lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'Sempr', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Ignác', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'cizinec', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Karlíček', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Lofler', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Jensen', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'drožkář', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'poručík', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'nadporučík', marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

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