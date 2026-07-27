function showNetworkGraph() {
  var option = document.getElementById("cluster").value;
  
  const vypravec = '#c4688c',
  postava = '#78a8d1', // postava, se kterou vypravěč nebo jiná postava explicitně komunikuje
  postava2 = '#aeb6bf'; // postava, se kterou vypravěč nebo jiná postava explicitně nekomunikuje, ale komunikace je vyprávěna (např. "promluvil jsem si s X")
  
  const line = '#000000';
  const linewidth = 2.0;

  switch(option){
    case "janmariaplojhar":

      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Jan Maria Plojhar'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Plojhar", "Giovannina"],
                    ["Giovannina", "Plojhar"],
                    ["Plojhar", "Giovannina"],
                    ["Giovannina", "Plojhar"],
                    ["Plojhar", "Giovannina"],
                    ["Giovannina", "Plojhar"],
                    ["Caterina", "Giovannina"],
                    ["Giovannina", "Caterina"],
                    ["Giovannina", "Giggi"],
                    ["Giggi", "Giovannina"],
                    ["Suntarella", "Giovannina"],
                    ["Giovannina", "Suntarella"],
                    ["Caterina", "Giggi"],
                    ["Giggi", "Caterina"],
                    ["Caterina", "Giggi"],
                    ["Suntarella", "Caterina"],
                    ["Caterina", "Suntarella"],
                    ["Caterina", "Plojhar"],
                    ["Plojhar", "Caterina"],
                    ["Suntarella", "Plojhar"],
                    ["Plojhar", "Suntarella"],
                    ["Giggi", "Plojhar"],
                    ["Plojhar", "Giggi"],
                    ["Giggi", "Plojhar"],
                    ["Plojhar", "Giggi"],
                    ["Caterina", "Plojhar"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["Plojhar", "Caterina"],
                    ["Suntarella", "Caterina"],
                    ["Caterina", "Suntarella"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["dělník", "Plojhar"],
                    ["Plojhar", "dělník"],
                    ["dělník", "Plojhar"],
                    ["Plojhar", "dělník"],
                    ["Giggi", "Plojhar"],
                    ["Plojhar", "Giggi"],
                    ["Giggi", "Plojhar"],
                    ["Plojhar", "Giggi"],
                    ["Giovannina", "Caterina"],
                    ["Caterina", "Giovannina"],
                    ["Giovannina", "Caterina"],
                    ["Caterina", "Giovannina"],
                    ["Giovannina", "Plojhar"],
                    ["Plojhar", "Giovannina"],
                    ["Giovannina", "Plojhar"],
                    ["Plojhar", "Giovannina"],
                    ["matka", "Plojhar"],
                    ["Plojhar", "matka"],
                    ["Rosa Maria", "Plojhar"],
                    ["Plojhar", "Rosa Maria"],
                    ["matka", "Plojhar"],
                    ["Plojhar", "matka"],
                    ["matka", "Plojhar"],
                    ["Rosa Maria", "matka"],
                    ["matka", "Rosa Maria"],
                    ["Leopold", "Rosa Maria"],
                    ["Rosa Maria", "Leopold"],
                    ["Rosa Maria", "jeptiška"],
                    ["jeptiška", "Rosa Maria"],
                    ["Leopold", "Plojhar"],
                    ["Plojhar", "Leopold"],
                    ["Leopold", "Plojhar"],
                    ["Plojhar", "Leopold"],
                    ["Rosa Maria", "Plojhar"],
                    ["Plojhar", "Rosa Maria"],
                    ["Rosa Maria", "Leopold"],
                    ["Leopold", "Rosa Maria"],
                    ["jeptiška", "Plojhar"],
                    ["Plojhar", "jeptiška"],
                    ["jeptiška", "Plojhar"],
                    ["Plojhar", "jeptiška"],
                    ["kapitán", "Plojhar"],
                    ["Plojhar", "kapitán"],
                    ["Pelagie", "Dragopulos"],
                    ["Dragopulos", "Pelagie"],
                    ["Pelagie", "Plojhar"],
                    ["Plojhar", "Pelagie"],
                    ["Něvarov", "Pelagie"],
                    ["Pelagie", "Něvarov"],
                    ["Něvarov", "Pelagie"],
                    ["Pelagie", "Něvarov"],
                    ["Pelagie", "Plojhar"],
                    ["Plojhar", "Pelagie"],
                    ["Něvarov", "Plojhar"],
                    ["Plojhar", "Něvarov"],
                    ["Něvarov", "Plojhar"],
                    ["Plojhar", "Něvarov"],
                    ["Pelagie", "Plojhar"],
                    ["Plojhar", "Pelagie"],
                    ["Pelagie", "Plojhar"],
                    ["Plojhar", "Pelagie"],
                    ["Muller", "poručík"],
                    ["poručík", "Muller"],
                    ["poručík", "Plojhar"],
                    ["Plojhar", "poručík"],
                    ["Muller", "Plojhar"],
                    ["Plojhar", "Muller"],
                    ["Muller", "Plojhar"],
                    ["Plojhar", "Muller"],
                    ["Rosa Maria", "lékař"],
                    ["lékař", "Rosa Maria"],
                    ["Rosa Maria", "lékař"],
                    ["lékař", "Rosa Maria"],
                    ["Leopold", "Rosa Maria"],
                    ["Rosa Maria", "Leopold"],
                    ["lékař", "Plojhar"],
                    ["Plojhar", "lékař"],
                    ["lékař", "Plojhar"],
                    ["Plojhar", "lékař"],
                    ["Leopold", "Plojhar"],
                    ["Plojhar", "Leopold"],
                    ["Viki", "Plojhar"],
                    ["Plojhar", "Viki"],
                    ["Viki", "Plojhar"],
                    ["Leopold", "Plojhar"],
                    ["Plojhar", "Leopold"],
                    ["Giggi", "Plojhar"],
                    ["Plojhar", "Giggi"],
                    ["Giggi", "Plojhar"],
                    ["Plojhar", "Giggi"],
                    ["Suntarella", "Caterina"],
                    ["Caterina", "Suntarella"],
                    ["Suntarella", "Caterina"],
                    ["Caterina", "Suntarella"],
                    ["Suntarella", "Plojhar"],
                    ["Plojhar", "Suntarella"],
                    ["Suntarella", "Plojhar"],
                    ["Plojhar", "Suntarella"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["Suntarella", "Caterina"],
                    ["Caterina", "Suntarella"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["Suntarella", "Plojhar"],
                    ["Plojhar", "Suntarella"],
                    ["Plojhar", "Francesco"],
                    ["Francesco", "Plojhar"],
                    ["Plojhar", "Francesco"],
                    ["Francesco", "Plojhar"],
                    ["Caterina", "Suntarella"],
                    ["Suntarella", "Caterina"],
                    ["Plojhar", "Giovannina"],
                    ["Giovannina", "Plojhar"],
                    ["Plojhar", "Giovannina"],
                    ["Giovannina", "Plojhar"],
                    ["Plojhar", "sklepník"],
                    ["sklepník", "Plojhar"],
                    ["Plojhar", "sklepník"],
                    ["sklepník", "Plojhar"],
                    ["Plojhar", "Dragopulos"],
                    ["Dragopulos", "Plojhar"],
                    ["Plojhar", "Dragopulos"],
                    ["Dragopulos", "Plojhar"],
                    ["Pelagie", "Plojhar"],
                    ["Plojhar", "Pelagie"],
                    ["Pelagie", "Plojhar"],
                    ["Plojhar", "Pelagie"],
                    ["Dragopulos", "Plojhar"],
                    ["Plojhar", "Dragopulos"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["Giovannina", "Plojhar"],
                    ["Plojhar", "Giovannina"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["Giovannina", "Caterina"],
                    ["Caterina", "Giovannina"],
                    ["Caterina", "Plojhar"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["Plojhar", "Caterina"],
                    ["paní Galli", "Giggi"],
                    ["Giggi", "paní Galli"],
                    ["paní Galli", "Giggi"],
                    ["Giggi", "paní Galli"],
                    ["paní Galli", "Caterina"],
                    ["Caterina", "paní Galli"],
                    ["paní Galli", "Caterina"],
                    ["Caterina", "paní Galli"],
                    ["Giggi", "Caterina"],
                    ["Caterina", "Giggi"],
                    ["Giggi", "paní Galli"],
                    ["paní Galli", "Giggi"],
                    ["Suntarella", "Giggi"],
                    ["Giggi", "Suntarella"],
                    ["Suntarella", "Plojhar"],
                    ["Plojhar", "Suntarella"],
                    ["Suntarella", "Plojhar"],
                    ["Plojhar", "Suntarella"],
                    ["Pelagie", "Plojhar"],
                    ["Plojhar", "Pelagie"],
                    ["Pelagie", "Caterina"],
                    ["Caterina", "Pelagie"],
                    ["sir George", "Caterina"],
                    ["Caterina", "sir George"],
                    ["Pelagie", "Plojhar"],
                    ["Plojhar", "Pelagie"],
                    ["sir George", "Pelagie"],
                    ["Pelagie", "sir George"],
                    ["Pelagie", "Plojhar"],
                    ["Plojhar", "Pelagie"],
                    ["Pelagie", "Plojhar"],
                    ["Plojhar", "Pelagie"],
                    ["Pelagie", "Caterina"],
                    ["Caterina", "Pelagie"],
                    ["Ersilia", "don Clemente"],
                    ["don Clemente", "Ersilia"],
                    ["Ersilia", "don Clemente"],
                    ["don Clemente", "Ersilia"],
                    ["don Clemente", "Caterina"],
                    ["Caterina", "don Clemente"],
                    ["Caterina", "don Clemente"],
                    ["don Clemente", "Caterina"],
                    ["Ersilia", "Caterina"],
                    ["Caterina", "Ersilia"],
                    ["don Clemente", "Plojhar"],
                    ["Plojhar", "don Clemente"],
                    ["don Clemente", "Gioacchino"],
                    ["Gioacchino", "don Clemente"],
                    ["don Clemente", "Caterina"],
                    ["Caterina", "don Clemente"],
                    ["Ersilia", "Caterina"],
                    ["Caterina", "Ersilia"],
                    ["Plojhar", "dívka"],
                    ["dívka", "Plojhar"],
                    ["Plojhar", "dívka"],
                    ["vesničanka", "Plojhar"],
                    ["Plojhar", "vesničanka"],
                    ["hostinský", "Plojhar"],
                    ["Plojhar", "hostinský"],
                    ["hostinský", "hostinská"],
                    ["hostinská", "hostinský"],
                    ["Plojhar", "honák"],
                    ["honák", "Plojhar"],
                    ["Plojhar", "honák"],
                    ["Caterina", "Francesco"],
                    ["Francesco", "Caterina"],
                    ["Caterina", "Nuccio"],
                    ["Nuccio", "Caterina"],
                    ["Nuccio", "Pacomo"],
                    ["Pacomo", "Nuccio"],
                    ["Francesco", "Angiolina"],
                    ["Angiolina", "Francesco"],
                    ["Caterina", "Angiolina"],
                    ["Angiolina", "Caterina"],
                    ["Caterina", "Pacomo"],
                    ["Pacomo", "Caterina"],
                    ["Caterina", "Giggi"],
                    ["Giggi", "Caterina"],
                    ["Caterina", "Giggi"],
                    ["Giggi", "Caterina"],
                    ["Caterina", "Giggi"],
                    ["Giggi", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["Plojhar", "Caterina"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["Suntarella", "Giggi"],
                    ["Giggi", "Suntarella"],
                    ["Giggi", "Caterina"],
                    ["Caterina", "Giggi"],
                    ["Giggi", "Caterina"],
                    ["Caterina", "Giggi"],
                    ["Caterina", "Plojhar"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["Plojhar", "Caterina"],
                    ["dona Paolina", "Caterina"],
                    ["Caterina", "dona Paolina"],
                    ["dona Paolina", "Caterina"],
                    ["Caterina", "dona Paolina"],
                    ["dona Paolina", "Caterina"],
                    ["Caterina", "dona Paolina"],
                    ["Plojhar", "dona Paolina"],
                    ["dona Paolina", "Plojhar"],
                    ["Caterina", "dona Paolina"],
                    ["dona Paolina", "Caterina"],
                    ["Suntarella", "dona Paolina"],
                    ["dona Paolina", "Suntarella"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],
                    ["Suntarella", "Caterina"],
                    ["Caterina", "Suntarella"],
                    ["don Clemente", "Caterina"],
                    ["Caterina", "don Clemente"],
                    ["Caterina", "Plojhar"],
                    ["Plojhar", "Caterina"],
                    ["don Clemente", "Plojhar"],
                    ["Plojhar", "don Clemente"],
                    ["Plojhar", "don Clemente"],
                    ["don Clemente", "Plojhar"],
                    ["Suntarella", "don Clemente"],
                    ["don Clemente", "Suntarella"],
                    ["Plojhar", "don Clemente"],
                    ["don Clemente", "Plojhar"],
                    ["Francesco", "Caterina"],
                    ["Caterina", "Francesco"],
                    ["Suntarella", "Caterina"],
                    ["Caterina", "Suntarella"],
                    ["Caterina", "Plojhar"],
                    ["Plojhar", "Caterina"],
                    ["Suntarella", "Caterina"],
                    ["Caterina", "Suntarella"],
                    ["Plojhar", "Caterina"],
                    ["Caterina", "Plojhar"],

                    

                ], nodes: 

                    [

                    // hlavní postavy

                    {id: 'Plojhar',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Caterina',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Giovannina',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Giggi',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Suntarella',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Pelagie',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'don Clemente',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy

                    {id: 'dělník',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'matka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Rosa Maria',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Leopold',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'jeptiška',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'kapitán',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Dragopulos',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Něvarov',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Muller',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'poručík',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'lékař',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Viki',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Francesco',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'sklepník',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'paní Galli',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'sir George',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Ersilia',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Gioacchino',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'dívka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vesničanka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'hostinský',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'hostinská',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'honák',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Nuccio',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Pacomo',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Angiolina',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'dona Paolina',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]

          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "legendaprazska":

      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Legenda pražská'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    // (Kvidón je němý – jednosměrné oslovení, do grafu nevkládat) ["Flavia", "Kvidón"]
                    ["Flavia", "Placida"],
                    ["Flavia", "Inultus"],
                    ["Flavia", "Inultus"],
                    ["Flavia", "Inultus"],
                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    ["Flavia", "Placida"],
                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    ["Flavia", "Inultus"],
                    ["Baltazar", "Flavia"],
                    ["Flavia", "Baltazar"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    ["Placida", "Flavia"],
                    ["Flavia", "Placida"],
                    ["Placida", "Flavia"],
                    ["Flavia", "Placida"],
                    ["Placida", "Flavia"],
                    ["Flavia", "Placida"],
                    ["Placida", "Flavia"],
                    // (Placida → Kvidón, němý sluha – jednosměrné, nevkládat)
                    ["Placida", "Flavia"],
                    ["Flavia", "Placida"],
                    ["Placida", "Flavia"],
                    ["Flavia", "Placida"],
                    ["Placida", "Flavia"],
                    ["Flavia", "Placida"],
                    ["Flavia", "Inultus"],
                    // (Flavia → Kvidón: "Sevři pouta těsněji" – němý, nevkládat)
                    // (Flavia → Kvidón: "Těsněji, těsněji!" – němý, nevkládat)
                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Inultus"],
                    ["Inultus", "Flavia"],
                    ["Inultus", "Flavia"],
                    ["Flavia", "Placida"],
                    ["Flavia", "Placida"],
                    ["Placida", "Flavia"],
                    ["Flavia", "Placida"],
                    ["Placida", "Flavia"],
                    ["Flavia", "Placida"],
                    ["Placida", "Flavia"],
                    ["Flavia", "Placida"],
                    ["Placida", "Flavia"],
                    ["Flavia", "Placida"],
                    ["Placida", "Flavia"],
                    ["Flavia", "Placida"],
                    ["Placida", "Flavia"],
                    ["Flavia", "Placida"],
                    ["Kardinál", "kněz"],
                    ["kněz", "Kardinál"],
                    ["Kardinál", "kněz"],
                    ["kněz", "Kardinál"],

                ], nodes: 

                    [

                    // hlavní postavy

                    {id: 'Inultus',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Flavia',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Placida',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy

                    {id: 'Baltazar',marker: {radius: 10,lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Kardinál',marker: {radius: 10,lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'kněz',marker: {radius: 10,lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }
              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "legendaslovenska":

      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Legenda slovenská'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    // scéna u dvoru
                    ["hospodář", "Samko"],
                    ["Samko", "hospodář"],
                    ["hospodář", "Samko"],
                    ["Samko", "hospodář"],
                    ["hospodář", "Samko"],
                    // ["pijani", "hospodář"], (bez odezvy — nevkládat do grafu)
                    ["pijani", "Samko"],
                    ["Samko", "pijani"],
                    ["pijani", "Samko"],

                    // vyprávění o zničení domova (vzpomínka)
                    ["jezdci", "Samko"],
                    ["Samko", "jezdci"],
                    ["prabába", "jezdci"],
                    ["jezdci", "prabába"],

                    // kostel — kázání kněze
                    ["Samko", "kněz"],
                    ["kněz", "Samko"],

                    // sakristie
                    ["kněz", "Samko"],
                    ["Samko", "kněz"],
                    ["lidé", "Samko"],
                    ["Samko", "lidé"],
                    ["kněz", "Samko"],
                    ["Samko", "kněz"],

                    // klášter — mnich
                    ["mnich", "Samko"],
                    ["Samko", "mnich"],
                    ["mnich", "Samko"],

                    // rozmluva s Kristem (krucifix)
                    ["Samko", "Kristus"],
                    ["Samko", "Kristus"],
                    ["Kristus", "Samko"],
                    ["Kristus", "Samko"],

                    // smrt — převor
                    ["převor", "Samko"],
                    ["Samko", "převor"],



                ], nodes:

                    [

                    // hlavní postavy

                    {id: 'Samko',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Kristus',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},


                    // vedlejší postavy

                    {id: 'hospodář',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'pijani',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'jezdci',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'prabába',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'kněz',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'lidé',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'mnich',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'převor',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]

          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
      case "legendatoledska":

      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Legenda toledská'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    // setkání u synagógy a cestou k domu
                    ["Abisaín", "Meribál"],
                    ["Meribál", "Abisaín"],
                    ["Abisaín", "Meribál"],

                    // hodovní síň — Rispa s kyticí, otec, Abisaín
                    ["Rispa", "Meribál"],
                    ["Meribál", "Rispa"],
                    ["Rispa", "Meribál"],
                    ["Meribál", "Rispa"],
                    ["Abisaín", "Meribál"],
                    ["Meribál", "Abisaín"],
                    ["Abisaín", "Meribál"],
                    ["Rispa", "Meribál"],
                    ["Rispa", "Meribál"],
                    ["Meribál", "Abisaín"],
                    ["Abisaín", "Meribál"],
                    ["Abisaín", "Meribál"],

                    // poustevna Kříže — první noc, šeptaná výzva soše
                    ["Abisaín", "Kristus"],
                    ["Kristus", "Abisaín"],

                    // návrat do hodovní síně — spiknutí o jedu
                    ["Abisaín", "Meribál"],
                    ["Meribál", "Abisaín"],
                    ["Abisaín", "Meribál"],
                    ["Meribál", "Abisaín"],
                    ["Abisaín", "Meribál"],
                    ["Meribál", "Abisaín"],
                    ["Abisaín", "Meribál"],
                    ["Meribál", "Abisaín"],
                    ["Abisaín", "Meribál"],
                    ["Meribál", "Abisaín"],
                    ["Abisaín", "Meribál"],
                    ["Meribál", "Abisaín"],
                    ["Abisaín", "Meribál"],
                    ["Meribál", "Abisaín"],

                    // Rispa se modlí ke Kristu — bez slovní odezvy, nevkládat do grafu
                    // ["Rispa", "Kristus"], (bez odezvy — pouze znamení svíce)
                    // ["Rispa", "Kristus"], (bez odezvy)
                    // ["Rispa", "Kristus"], (bez odezvy)

                    // kostel Krista Světlého — ráno, zázrak
                    // ["Rispa", "Kristus"], (,,Pane, slyšíš je?'' — bez odezvy)
                    ["lid", "Rispa"],
                    ["lid", "Rispa"],
                    ["abatyše", "lid"],
                    ["abatyše", "Rispa"],
                    ["Rispa", "abatyše"],
                    ["abatyše", "Rispa"],
                    ["Rispa", "abatyše"],
                    ["Abisaín", "Rispa"],
                    ["lid", "Rispa"],
                    ["Rispa", "lid"],
                    ["lid", "Rispa"],
                    ["Rispa", "abatyše"],
                    ["abatyše", "Rispa"],
                    ["Abisaín", "Rispa"],
                    ["Rispa", "Abisaín"],
                    ["Rispa", "abatyše"],
                    ["abatyše", "Rispa"],
                    ["lid", "abatyše"],
                    ["abatyše", "lid"],

                    // vidina ve sluji u Talavery
                    ["Kristus", "Abisaín"],
                    ["Abisaín", "Kristus"],

                    // kostel — druhá noc, probodnutí sochy
                    ["Kristus", "Abisaín"],
                    ["Abisaín", "Kristus"],

                    // zatčení — dav a alkalde
                    ["Abisaín", "lid"],
                    ["lid", "Abisaín"],
                    ["Abisaín", "lid"],
                    // ["alkalde", "Abisaín"], (Abisaín neodpovídá — bez odezvy, nevkládat do grafu)

                    // mučení a poslední vidina — smíření s Kristem
                    ["Abisaín", "Kristus"],
                    ["Kristus", "Abisaín"],
                    ["Abisaín", "Kristus"],
                    ["Kristus", "Abisaín"],
                    ["Abisaín", "Kristus"],
                    ["Kristus", "Abisaín"],
                    ["Abisaín", "Kristus"],

                ], nodes:

                    [

                    // hlavní postavy

                    {id: 'Abisaín',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Meribál',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Rispa',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Kristus',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'abatyše',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},


                    // vedlejší postavy

                    {id: 'lid',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

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