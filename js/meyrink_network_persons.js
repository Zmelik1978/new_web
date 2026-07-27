function showNetworkGraph() {
  var option = document.getElementById("cluster").value;
  
  const vypravec = '#c4688c',
  postava = '#78a8d1', // postava, se kterou vypravěč nebo jiná postava explicitně komunikuje
  postava2 = '#aeb6bf', // postava, se kterou vypravěč nebo jiná postava explicitně nekomunikuje, ale komunikace je vyprávěna (např. "promluvil jsem si s X")
  postava3 = '#f1c40f'; // snová postava
  
  const line = '#000000';
  const linewidth = 2.0;

  switch(option){
case "golem":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Golem'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break; case postava3: console.log(postava3); info = " - character (ve snu)"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["Charousek", "narrator"],
                    ["narrator", "Charousek"],
                    ["Charousek", "narrator"],
                    ["Charousek", "narrator"],
                    ["narrator", "Charousek"],
                    ["Charousek", "narrator"],
                    ["Cvach", "Prokop"],
                    ["Prokop", "Cvach"],
                    ["Vrieslander", "Prokop"],
                    ["Prokop", "Vrieslander"],
                    ["Cvach", "narrator"],
                    ["narrator", "Cvach"],
                    ["Vrieslander", "Cvach"],
                    ["Cvach", "Vrieslander"],
                    ["Prokop", "narrator"],
                    ["narrator", "Prokop"],
                    ["Cvach", "Prokop"],
                    ["Prokop", "Cvach"],
                    ["Cvach", "narrator"],
                    ["narrator", "Cvach"],
                    ["hostinský", "narrator"],
                    ["narrator", "hostinský"],
                    ["hostinský", "komisař"],
                    ["komisař", "hostinský"],
                    ["Athenstadt", "komisař"],
                    ["komisař", "Athenstadt"],
                    ["Vrieslander", "narrator"],
                    ["narrator", "Vrieslander"],
                    ["Hillel", "narrator"],
                    ["narrator", "Hillel"],
                    ["Hillel", "narrator"],
                    ["narrator", "Hillel"],
                    ["Hillel", "narrator"],
                    ["Angelina", "narrator"],
                    ["narrator", "Angelina"],
                    ["Angelina", "narrator"],
                    ["narrator", "Angelina"],
                    ["Angelina", "narrator"],
                    ["Charousek", "narrator"],
                    ["narrator", "Charousek"],
                    ["Charousek", "narrator"],
                    ["narrator", "Charousek"],
                    ["Mirjam", "narrator"],
                    ["narrator", "Mirjam"],
                    ["Mirjam", "narrator"],
                    ["narrator", "Mirjam"],
                    ["Mirjam", "narrator"],
                    ["narrator", "Mirjam"],
                    ["Hillel", "narrator"],
                    ["narrator", "Hillel"],
                    ["Hillel", "narrator"],
                    ["narrator", "Charousek"],
                    ["Charousek", "narrator"],
                    ["Wassertrum", "narrator"],
                    ["narrator", "Wassertrum"],
                    ["Wassertrum", "narrator"],
                    ["narrator", "Wassertrum"],
                    ["Wassertrum", "narrator"],
                    ["narrator", "Wassertrum"],
                    ["Hillel", "Wassertrum"],
                    ["Wassertrum", "Hillel"],
                    ["Hillel", "Wassertrum"],
                    ["Angelina", "narrator"],
                    ["narrator", "Angelina"],
                    ["Angelina", "narrator"],
                    ["Charousek", "narrator"],
                    ["narrator", "Charousek"],
                    ["Charousek", "narrator"],
                    ["Jaromír", "Wassertrum"],
                    ["Wassertrum", "Jaromír"],
                    ["Mirjam", "narrator"],
                    ["narrator", "Mirjam"],
                    ["Mirjam", "narrator"],
                    ["narrator", "Mirjam"],
                    ["Mirjam", "narrator"],
                    ["narrator", "Mirjam"],
                    ["Angelina", "narrator"],
                    ["narrator", "Angelina"],
                    ["Vrieslander", "narrator"],
                    ["narrator", "Vrieslander"],
                    ["Cvach", "narrator"],
                    ["narrator", "Cvach"],
                    ["Prokop", "Vrieslander"],
                    ["Vrieslander", "Prokop"],
                    ["Cvach", "Prokop"],
                    ["Prokop", "Cvach"],
                    ["Cvach", "Eulálie"],
                    ["Eulálie", "Cvach"],
                    ["Vrieslander", "narrator"],
                    ["narrator", "Vrieslander"],
                    ["Rosina", "narrator"],
                    ["narrator", "Rosina"],
                    ["Wassertrum", "narrator"],
                    ["narrator", "Wassertrum"],
                    ["Charousek", "narrator"],
                    ["narrator", "Charousek"],
                    ["Charousek", "narrator"],
                    ["policejní rada", "narrator"],
                    ["narrator", "policejní rada"],
                    ["policejní rada", "narrator"],
                    ["narrator", "policejní rada"],
                    ["vyšetřující soudce", "narrator"],
                    ["narrator", "vyšetřující soudce"],
                    ["Lojza", "narrator"],
                    ["narrator", "Lojza"],
                    ["Lojza", "narrator"],
                    ["Vosátka", "narrator"],
                    ["narrator", "Vosátka"],
                    ["Véna", "narrator"],
                    ["narrator", "Véna"],
                    ["Véna", "narrator"],
                    ["narrator", "Véna"],
                    ["Laponder", "narrator"],
                    ["narrator", "Laponder"],
                    ["Laponder", "narrator"],
                    ["narrator", "Laponder"],
                    ["Laponder", "narrator"],
                    ["Mirjam (ve snu)", "narrator"], // (ve snu - hlasem spiciho Lapondera)
                    ["narrator", "Mirjam (ve snu)"], // (ve snu)
                    ["Mirjam (ve snu)", "narrator"], // (ve snu)
                    ["Hillel (ve snu)", "narrator"], // (ve snu - hlasem spiciho Lapondera)
                    ["narrator", "Hillel (ve snu)"], // (ve snu)
                    ["Hillel (ve snu)", "narrator"], // (ve snu)
                    ["Charousek (ve snu)", "narrator"], // (ve snu - zaverecna veta)
                    ["narrator", "Charousek (ve snu)"], // (ve snu)
                    ["dozorce", "narrator"],
                    ["narrator", "dozorce"],
                    ["písař", "narrator"],
                    ["narrator", "písař"],
                    ["Jaromír", "narrator"],
                    ["narrator", "Jaromír"],
                    ["číšnice", "narrator"],
                    ["narrator", "číšnice"],
                    ["Šafránek", "narrator"],
                    ["narrator", "Šafránek"],
                    ["Athenstadt", "narrator"],
                    ["narrator", "Athenstadt"],
                    ["Čamrda", "narrator"],
                    ["narrator", "Čamrda"],
                    ["sluha", "narrator"],
                    ["narrator", "sluha"],

                    
                ], nodes: 

                    [

                    // vypravec

                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavni postavy

                    {id: 'Charousek',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Hillel',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Mirjam',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Cvach',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Prokop',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Vrieslander',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Wassertrum',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Angelina',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Laponder',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejsi postavy

                    {id: 'hostinský',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'komisař',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Athenstadt',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Jaromír',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Eulálie',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Rosina',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'policejní rada',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vyšetřující soudce',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Lojza',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Vosátka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Véna',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'dozorce',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'písař',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'číšnice',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Šafránek',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Čamrda',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'sluha',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    // snove postavy (promluvy ve snu, skrze spiciho Lapondera)

                    {id: 'Mirjam (ve snu)',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava3},
                    {id: 'Hillel (ve snu)',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava3},
                    {id: 'Charousek (ve snu)',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava3},

                    ]

                }

              ]

          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters, <span style="color:' + postava3 + '">&#9679;</span> characters in dream (ve snu)';
      break;
    case "neviditelnapraha":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Neviditelná Praha'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["průvodce", "narrator"],
                    ["průvodce", "narrator"],
                    ["průvodce", "narrator"],
                    ["narrator", "průvodce"],
                    ["průvodce", "narrator"],
                    ["služka", "narrator"],
                    ["Zahrádka", "narrator"],
                    ["Zahrádka", "narrator"],
                    ["narrator", "Zahrádka"],
                    ["Zahrádka", "narrator"],
                    ["narrator", "Zahrádka"],
                    ["Zahrádka", "narrator"],
                    ["Zahrádka", "narrator"],

                ], nodes:

                    [

                    // vypravěč

                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},


                    // hlavní postavy

                    {id: 'Zahrádka',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'průvodce',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},


                    // vedlejší postavy

                    {id: 'služka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]

          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
    case "valpurzinanoc":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Valpuržina noc'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break; case postava3: console.log(postava3); info = " - character (ve snu)"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    // I. Whist u Elsenwangerů
                    ["Elsenwanger", "hraběnka Zahrádková"],
                    ["hraběnka Zahrádková", "Elsenwanger"],
                    ["Pingvín", "Elsenwanger"],
                    ["Elsenwanger", "Pingvín"],
                    ["hraběnka Zahrádková", "Pingvín"],
                    ["Pingvín", "hraběnka Zahrádková"],
                    ["Pingvín", "Elsenwanger"],
                    ["Elsenwanger", "Pingvín"],
                    ["hraběnka Zahrádková", "Elsenwanger"],
                    ["Elsenwanger", "hraběnka Zahrádková"],

                    // příchod dvorního rady ze Schirndingu
                    ["Schirnding", "hraběnka Zahrádková"],
                    ["hraběnka Zahrádková", "Schirnding"],
                    ["Pingvín", "Schirnding"],
                    ["Schirnding", "Pingvín"],
                    ["hraběnka Zahrádková", "Schirnding"],
                    ["Schirnding", "hraběnka Zahrádková"],
                    ["Elsenwanger", "Schirnding"],
                    ["Schirnding", "Elsenwanger"],

                    // náměsíčník Zrcadlo v obrazárně
                    ["Božena", "hraběnka Zahrádková"],
                    ["hraběnka Zahrádková", "Loukota"],
                    ["Loukota", "hraběnka Zahrádková"],
                    ["hraběnka Zahrádková", "Loukota"],
                    ["hraběnka Zahrádková", "Božena"],
                    ["Božena", "hraběnka Zahrádková"],
                    ["Pingvín", "hraběnka Zahrádková"],
                    ["hraběnka Zahrádková", "Pingvín"],
                    ["hraběnka Zahrádková", "Božena"],
                    ["Božena", "hraběnka Zahrádková"],
                    ["Pingvín", "Zrcadlo"],
                    ["Elsenwanger", "Schirnding"],
                    ["Schirnding", "Elsenwanger"],
                    ["Elsenwanger", "hraběnka Zahrádková"],
                    ["hraběnka Zahrádková", "Elsenwanger"],

                    // příchod české Lízy
                    ["česká Líza", "hraběnka Zahrádková"],
                    ["hraběnka Zahrádková", "česká Líza"],
                    ["Pingvín", "česká Líza"],
                    ["česká Líza", "Pingvín"],
                    ["Elsenwanger", "česká Líza"],
                    ["česká Líza", "Elsenwanger"],
                    ["česká Líza", "Zrcadlo"],
                    ["Zrcadlo", "česká Líza"],
                    ["Pingvín", "česká Líza"],
                    ["česká Líza", "Pingvín"],

                    // II. Pingvín navštíví Lízu na Novém Světě
                    ["česká Líza", "Pingvín"],
                    ["Pingvín", "česká Líza"],
                    ["česká Líza", "Pingvín"],
                    ["Pingvín", "česká Líza"],
                    ["česká Líza", "Pingvín"],
                    ["Pingvín", "česká Líza"],
                    ["Pingvín", "česká Líza"],
                    ["česká Líza", "Pingvín"],
                    ["Pingvín", "česká Líza"],
                    ["česká Líza", "Pingvín"],
                    ["Pingvín", "česká Líza"],
                    ["česká Líza", "Pingvín"],

                    // III. Otokar u Lízy (punktování) a špicl Brabec
                    ["Otokar", "česká Líza"],
                    ["česká Líza", "Otokar"],
                    ["Otokar", "česká Líza"],
                    ["česká Líza", "Otokar"],
                    ["Otokar", "česká Líza"],
                    ["česká Líza", "Otokar"],
                    ["česká Líza", "Otokar"],
                    ["Otokar", "česká Líza"],
                    ["Brabec", "česká Líza"],
                    ["česká Líza", "Brabec"],
                    ["česká Líza", "Otokar"],
                    ["Otokar", "česká Líza"],

                    // IV. Otokar u hraběnky Zahrádkové, komtesa Polyxena
                    ["hraběnka Zahrádková", "Otokar"],
                    ["Otokar", "hraběnka Zahrádková"],
                    ["hraběnka Zahrádková", "Otokar"],
                    ["Polyxena", "Otokar"],
                    ["Otokar", "Polyxena"],
                    ["Polyxena", "Otokar"],
                    ["Otokar", "Polyxena"],
                    ["hraběnka Zahrádková", "Otokar"],
                    ["Otokar", "hraběnka Zahrádková"],

                    // V. Otokar a nevlastní matka (dvůr s lipami)
                    ["matka", "Otokar"],
                    ["Otokar", "matka"],
                    ["matka", "Otokar"],
                    ["Otokar", "matka"],
                    ["matka", "Otokar"],
                    ["Otokar", "matka"],
                    ["matka", "Otokar"],
                    ["Otokar", "matka"],
                    ["matka", "Otokar"],
                    ["Otokar", "matka"],

                    // VI. Otokar a Polyxena ve věži Daliborce
                    ["Polyxena", "Otokar"],
                    ["Otokar", "Polyxena"],

                    // VII. Zelená žába - hostinský a hosté
                    ["Pingvín", "notář"],
                    ["notář", "Pingvín"],
                    ["pán s monoklem", "notář"],
                    ["notář", "pán s monoklem"],
                    ["centrální ředitel", "notář"],
                    ["notář", "centrální ředitel"],

                    // Zrcadlo / Mandžu promlouvá k Pingvínovi
                    ["Pingvín", "Zrcadlo"],
                    ["Zrcadlo", "Pingvín"],
                    ["Zrcadlo", "Pingvín"],
                    ["Pingvín", "Zrcadlo"],
                    ["Zrcadlo", "Pingvín"],
                    ["Pingvín", "Zrcadlo"],
                    ["Zrcadlo", "Pingvín"],
                    ["Pingvín", "Zrcadlo"],
                    ["Zrcadlo", "Pingvín"],

                    // VIII. Večeře čeledě na svátek Jana z Nepomuku
                    ["kuchařka", "Polyxena"],
                    ["Polyxena", "kuchařka"],
                    ["Polyxena", "Božena"],
                    ["Božena", "Polyxena"],
                    ["Loukota", "Božena"],
                    ["Božena", "Loukota"],
                    ["Rus", "Polyxena"],
                    ["Polyxena", "Rus"],
                    ["Molla Osman", "Polyxena"],
                    ["Polyxena", "Molla Osman"],
                    ["Polyxena", "Molla Osman"],
                    ["Molla Osman", "Polyxena"],
                    ["Polyxena", "Molla Osman"],
                    ["Molla Osman", "Polyxena"],
                    ["Rus", "Molla Osman"],
                    ["Molla Osman", "Rus"],

                    // IX. Schůzka spiklenců v Daliborce
                    ["lokaj", "Rus"],
                    ["Rus", "lokaj"],
                    ["Rus", "Otokar"],
                    ["Otokar", "Rus"],
                    ["Havlík", "Rus"],
                    ["Rus", "Havlík"],
                    ["Havlík", "Rus"],
                    ["Rus", "Havlík"],
                    ["lokaj", "Rus"],
                    ["Rus", "lokaj"],
                    ["dělníci", "Zrcadlo"],
                    ["Zrcadlo", "dělníci"],

                    // XI. Pingvínův sen před cestou do Karlových Varů (ve snu)
                    ["Pingvín", "Lucifer (ve snu)"],
                    ["Lucifer (ve snu)", "Pingvín"],
                    ["Lucifer (ve snu)", "Pingvín"],
                    ["Pingvín", "Lucifer (ve snu)"],

                    // XII. Špicl Brabec u Pingvína
                    ["Ladislav", "Pingvín"],
                    ["Pingvín", "Ladislav"],
                    ["Brabec", "Pingvín"],
                    ["Pingvín", "Brabec"],
                    ["Brabec", "Pingvín"],
                    ["Pingvín", "Brabec"],
                    ["Brabec", "Pingvín"],
                    ["Pingvín", "Brabec"],
                    ["Pingvín", "Ladislav"],
                    ["Ladislav", "Pingvín"],

                    // XIII. Šílený Elsenwanger u Pingvína
                    ["Elsenwanger", "Pingvín"],
                    ["Pingvín", "Elsenwanger"],
                    ["Elsenwanger", "Pingvín"],
                    ["Pingvín", "Elsenwanger"],
                    ["Elsenwanger", "Pingvín"],
                    ["Pingvín", "Elsenwanger"],

                    // XIV. Hraběnka Zahrádková u Pingvína
                    ["hraběnka Zahrádková", "Pingvín"],
                    ["Pingvín", "hraběnka Zahrádková"],
                    ["hraběnka Zahrádková", "Pingvín"],
                    ["Pingvín", "hraběnka Zahrádková"],
                    ["hraběnka Zahrádková", "Pingvín"],
                    ["Pingvín", "hraběnka Zahrádková"],

                    // XV. Líza varuje Pingvína; Ladislav ho zadrží
                    ["česká Líza", "Pingvín"],
                    ["Pingvín", "česká Líza"],
                    ["česká Líza", "Pingvín"],
                    ["Pingvín", "česká Líza"],
                    ["česká Líza", "Pingvín"],
                    ["Pingvín", "česká Líza"],
                    ["Ladislav", "Pingvín"],
                    ["Pingvín", "Ladislav"],

                    // XVI. Poslední jízda a smrt Pingvína
                    ["kočí", "Pingvín"],
                    ["Pingvín", "kočí"],

                    // XVII. Korunovace a zkáza
                    ["Otokar", "hraběnka Zahrádková"],
                    ["hraběnka Zahrádková", "Otokar"],
                    ["dělníci", "hraběnka Zahrádková"],
                    ["hraběnka Zahrádková", "dělníci"],
                    ["hraběnka Zahrádková", "Molla Osman"],
                    ["Molla Osman", "hraběnka Zahrádková"],
                    ["Havlík", "dělníci"],
                    ["dělníci", "Havlík"],

                ], nodes:

                    [

                    // vypravěč (er-forma, bez homodiegetického vypravěče)
                    //{id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},

                    // hlavní postavy
                    {id: 'Pingvín',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Polyxena',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Otokar',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'česká Líza',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'hraběnka Zahrádková',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Zrcadlo',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Elsenwanger',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy
                    {id: 'Schirnding',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Božena',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Loukota',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'notář',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'pán s monoklem',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'centrální ředitel',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Rus',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Molla Osman',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'lokaj',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Havlík',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'dělníci',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Brabec',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Ladislav',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'matka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'kuchařka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'kočí',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    // snové postavy (promluvy ve snu)
                    {id: 'Lucifer (ve snu)',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava3},

                    ]
                }
              ]
          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters, <span style="color:' + postava3 + '">&#9679;</span> characters in dream (ve snu)';
      break;
    case "prazskavizitka":

      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Pražská vizitka'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    // --- promenáda po Příkopech ---
                    ["Feldeck", "narrator"],
                    // ["dcera", "Kostertschová"], (bez odezvy — nevkládat do grafu)

                    // --- aféra s Makintoshem ---
                    ["starý známý", "Makintosh"],
                    ["Makintosh", "starý známý"],
                    ["vrchní kontrolor", "pánové"],
                    ["pánové", "vrchní kontrolor"],
                    ["stavební rada", "pánové"],
                    ["pánové", "stavební rada"],
                    ["Vyskočil", "pánové"],
                    ["pánové", "Vyskočil"],
                    ["Löwenstein", "pánové"],
                    ["pánové", "Löwenstein"],
                    ["úředník", "pánové"],
                    ["pánové", "úředník"],
                    ["advokát", "pánové"],
                    ["pánové", "advokát"],
                    ["Makintosh", "pánové"],
                    ["pánové", "Makintosh"],

                    // --- kupé vlaku do Trutnova ---
                    ["von Vacca", "stavební rada"],
                    ["stavební rada", "von Vacca"],
                    ["vrchní inspektor", "von Vacca"],
                    ["von Vacca", "vrchní inspektor"],
                    ["vrchní inspektor", "stavební rada"],
                    ["stavební rada", "vrchní inspektor"],
                    ["von Vacca", "stavební rada"],
                    ["stavební rada", "von Vacca"],
                    ["von Vacca", "stavební rada"],
                    ["stavební rada", "von Vacca"],
                    ["von Vacca", "stavební rada"],
                    ["stavební rada", "von Vacca"],
                    ["stavební rada", "von Vacca"],
                    ["von Vacca", "stavební rada"],
                    ["stavební rada", "von Vacca"],
                    ["stavební rada", "von Vacca"],
                    ["von Vacca", "stavební rada"],
                    ["stavební rada", "vrchní inspektor"],
                    ["vrchní inspektor", "stavební rada"],
                    ["stavební rada", "von Vacca"],
                    ["von Vacca", "stavební rada"],
                    ["von Vacca", "vrchní inspektor"],
                    ["vrchní inspektor", "von Vacca"],
                    ["von Vacca", "vrchní inspektor"],
                    ["stavební rada", "von Vacca"],
                    ["vrchní inspektor", "von Vacca"],
                    ["von Vacca", "vrchní inspektor"],
                    ["stavební rada", "von Vacca"],
                    ["von Vacca", "stavební rada"],

                ], nodes:

                    [

                    // vypravěč

                    {id: 'narrator', marker: {radius: 30, lineWidth: linewidth, lineColor: line}, color: vypravec},


                    // hlavní postavy

                    {id: 'Makintosh',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'stavební rada',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'von Vacca',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'vrchní inspektor',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},


                    // vedlejší postavy

                    {id: 'Feldeck',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'starý známý',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'pánové',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'vrchní kontrolor',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Vyskočil',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Löwenstein',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'úředník',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'advokát',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]

          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
    case "zelenatvar":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Zelená tvář'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["prodavačka", "Hauberrisser"],
                    ["Hauberrisser", "prodavačka"],
                    ["prodavačka", "Hauberrisser"],
                    ["Hauberrisser", "prodavačka"],
                    ["prodavačka", "Hauberrisser"],
                    ["Hauberrisser", "prodavačka"],
                    ["Rukstinatová", "číšník"],
                    ["číšník", "Rukstinatová"],
                    ["Rukstinatová", "číšník"],
                    ["číšník", "Rukstinatová"],
                    ["Rukstinatová", "Pfeill"],
                    ["Pfeill", "Rukstinatová"],
                    ["Rukstinatová", "Pfeill"],
                    ["Pfeill", "Rukstinatová"],
                    ["Katje", "Pfeill"],
                    ["Pfeill", "Katje"],
                    ["Katje", "Pfeill"],
                    ["Pfeill", "Katje"],
                    ["Pfeill", "Hauberrisser"],
                    ["Hauberrisser", "Pfeill"],
                    ["Pfeill", "Hauberrisser"],
                    ["Hauberrisser", "Pfeill"],
                    ["Zitter", "Hauberrisser"],
                    ["Hauberrisser", "Zitter"],
                    ["Zitter", "Hauberrisser"],
                    ["Hauberrisser", "Zitter"],
                    ["Zitter", "Hauberrisser"],
                    ["Hauberrisser", "Zitter"],
                    ["Zitter", "Hauberrisser"],
                    ["Hauberrisser", "Zitter"],
                    ["Sephardi", "Pfeill"],
                    ["Pfeill", "Sephardi"],
                    ["Sephardi", "Eva"],
                    ["Eva", "Sephardi"],
                    ["Eva", "Pfeill"],
                    ["Pfeill", "Eva"],
                    ["Sephardi", "Eva"],
                    ["Eva", "Sephardi"],
                    ["de Bourignon", "Eva"],
                    ["Eva", "de Bourignon"],
                    ["de Bourignon", "Sephardi"],
                    ["Sephardi", "de Bourignon"],
                    ["Swammerdam", "Eidotter"],
                    ["Eidotter", "Swammerdam"],
                    ["Swammerdam", "Sephardi"],
                    ["Sephardi", "Swammerdam"],
                    ["Swammerdam", "Eva"],
                    ["Eva", "Swammerdam"],
                    ["Swammerdam", "Eva"],
                    ["Eva", "Swammerdam"],
                    ["Swammerdam", "Eva"],
                    ["Eva", "Swammerdam"],
                    ["de Bourignon", "Eva"],
                    ["Eva", "de Bourignon"],
                    ["Klinkherbogk", "Katje"],
                    ["Katje", "Klinkherbogk"],
                    ["Klinkherbogk", "Katje"],
                    ["Katje", "Klinkherbogk"],
                    ["hostinský", "Zitter"],
                    ["Zitter", "hostinský"],
                    ["Zitter", "Usibepu"],
                    ["Usibepu", "Zitter"],
                    ["Zitter", "Usibepu"],
                    ["Usibepu", "Zitter"],
                    ["Antje", "Mary"],
                    ["Mary", "Antje"],
                    ["Mary", "Usibepu"],
                    ["Usibepu", "Mary"],
                    ["Zitter", "Rukstinatová"],
                    ["Rukstinatová", "Zitter"],
                    ["Pfeill", "Hauberrisser"],
                    ["Hauberrisser", "Pfeill"],
                    ["Pfeill", "Hauberrisser"],
                    ["Hauberrisser", "Pfeill"],
                    ["Sephardi", "Hauberrisser"],
                    ["Hauberrisser", "Sephardi"],
                    ["Sephardi", "Hauberrisser"],
                    ["Hauberrisser", "Sephardi"],
                    ["Sephardi", "Pfeill"],
                    ["Pfeill", "Sephardi"],
                    ["Sephardi", "Eva"],
                    ["Eva", "Sephardi"],
                    ["Eva", "Hauberrisser"],
                    ["Hauberrisser", "Eva"],
                    ["Eva", "Hauberrisser"],
                    ["Hauberrisser", "Eva"],
                    ["Eva", "Hauberrisser"],
                    ["Hauberrisser", "Eva"],
                    ["Swammerdam", "Hauberrisser"],
                    ["Hauberrisser", "Swammerdam"],
                    ["Swammerdam", "Hauberrisser"],
                    ["Hauberrisser", "Swammerdam"],
                    ["Swammerdam", "Hauberrisser"],
                    ["Hauberrisser", "Swammerdam"],
                    ["hostinský", "Hauberrisser"],
                    ["Hauberrisser", "hostinský"],
                    ["Antje", "Hauberrisser"],
                    ["Hauberrisser", "Antje"],
                    ["Debrouwer", "Sephardi"],
                    ["Sephardi", "Debrouwer"],
                    ["Debrouwer", "Sephardi"],
                    ["Sephardi", "Debrouwer"],
                    ["Sephardi", "Eidotter"],
                    ["Eidotter", "Sephardi"],
                    ["Sephardi", "Eidotter"],
                    ["Eidotter", "Sephardi"],
                    ["Sephardi", "Eidotter"],
                    ["Eidotter", "Sephardi"],
                    ["Swammerdam", "Pfeill"],
                    ["Pfeill", "Swammerdam"],
                    ["Swammerdam", "Sephardi"],
                    ["Sephardi", "Swammerdam"],
                    ["Pfeill", "Hauberrisser"],
                    ["Hauberrisser", "Pfeill"],
                    ["Chidher Grün", "Hauberrisser"],
                    ["Hauberrisser", "Chidher Grün"],
                    ["Chidher Grün", "Hauberrisser"],
                    ["Hauberrisser", "Chidher Grün"],
                    ["Eva", "Hauberrisser"],
                    ["Hauberrisser", "Eva"],
                    ["Eva", "Hauberrisser"],
                    ["Hauberrisser", "Eva"],

                    
                ], nodes: 

                    [

                    // hlavni postavy

                    {id: 'Hauberrisser',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Pfeill',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Sephardi',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Eva',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Swammerdam',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Chidher Grün',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejsi postavy

                    {id: 'prodavačka',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Rukstinatová',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'číšník',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Katje',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Zitter',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'de Bourignon',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Eidotter',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Klinkherbogk',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'hostinský',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Usibepu',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Antje',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Mary',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Debrouwer',marker: {radius: 10, lineWidth: linewidth, lineColor: line}, color: postava2},

                    ]

                }

              ]

          });

      document.getElementById("legend").innerHTML = '<b>Legend:</b> <span style="color:' + vypravec + '">&#9679;</span> narrator, <span style="color:' + postava + '">&#9679;</span> main characters, <span style="color:' + postava2 + '">&#9679;</span> minor characters';
      break;
    case "andelzapadnihookna":
      Highcharts.chart('container-person', {chart: {type: 'networkgraph',marginTop: 80},title: {text: 'Anděl západního okna'}, tooltip: {formatter: function () {let info; switch (this.color) { case vypravec: console.log(vypravec); info = " - homodiegetic"; break; case postava: console.log(postava); info = " - character"; break; case postava2: console.log(postava2); info = " - character"; break;} return '<b>' + this.key + '</b> ' + info; }}, plotOptions: {networkgraph: {keys: ['from', 'to'], layoutAlgorithm: {gravitationalConstant: 0.0625, enableSimulation: true, integration: 'verlet', linkLength: 200}}},  series: [{link: {width: 1.5, dashStyle: 'solid'}, marker: {radius: 13 }, dataLabels: {enabled: true, linkFormat: '', allowOverlap: true, style: {textOutline: false}}, data: [

                    ["narrator", "Lipotin"],
                    ["Lipotin", "narrator"],
                    ["Lipotin", "Stroganov"],
                    ["Stroganov", "Lipotin"],
                    ["narrator", "Lipotin"],
                    ["Lipotin", "narrator"],
                    ["kněžna Assja", "narrator"],
                    ["narrator", "kněžna Assja"],
                    ["kněžna Assja", "narrator"],
                    ["narrator", "kněžna Assja"],
                    ["kněžna Assja", "narrator"],
                    ["narrator", "Lipotin"],
                    ["Lipotin", "narrator"],
                    ["narrator", "Lipotin"],
                    ["Lipotin", "narrator"],
                    ["narrator", "Gärtner"],
                    ["Gärtner", "narrator"],
                    ["narrator", "Jana"],
                    ["Jana", "narrator"],
                    ["Mascee", "John Dee"],
                    ["John Dee", "Mascee"],
                    ["John Dee", "Mascee"],
                    ["Mascee", "John Dee"],
                    ["John Dee", "Alžběta"],
                    ["Alžběta", "John Dee"],
                    ["John Dee", "kastelán"],
                    ["kastelán", "John Dee"],
                    ["Bartlett Green", "John Dee"],
                    ["John Dee", "Bartlett Green"],
                    ["Bartlett Green", "John Dee"],
                    ["John Dee", "Bartlett Green"],
                    ["Bartlett Green", "John Dee"],
                    ["John Dee", "Bartlett Green"],
                    ["David", "Bartlett Green"],
                    ["Bartlett Green", "David"],
                    ["David", "Bartlett Green"],
                    ["Bartlett Green", "David"],
                    ["biskup Bonner", "Bartlett Green"],
                    ["Bartlett Green", "biskup Bonner"],
                    ["biskup Bonner", "Bartlett Green"],
                    ["Bartlett Green", "biskup Bonner"],
                    ["biskup Bonner", "Bartlett Green"],
                    ["Bartlett Green", "biskup Bonner"],
                    ["biskup Bonner", "John Dee"],
                    ["John Dee", "biskup Bonner"],
                    ["pastýř", "Bartlett Green"],
                    ["Bartlett Green", "pastýř"],
                    ["pastýř", "Bartlett Green"],
                    ["Bartlett Green", "pastýř"],
                    ["Bartlett Green", "John Dee"],
                    ["John Dee", "Bartlett Green"],
                    ["Kelley", "John Dee"],
                    ["John Dee", "Kelley"],
                    ["John Dee", "Kelley"],
                    ["Kelley", "John Dee"],
                    ["John Dee", "anděl Il"],
                    ["anděl Il", "John Dee"],
                    ["John Dee", "anděl Il"],
                    ["anděl Il", "John Dee"],
                    ["Madini", "John Dee"],
                    ["John Dee", "Madini"],
                    ["Talbot", "John Dee"],
                    ["John Dee", "Talbot"],
                    ["Price", "John Dee"],
                    ["John Dee", "Price"],
                    ["anděl Il", "Kelley"],
                    ["Kelley", "anděl Il"],
                    ["Jana", "John Dee"],
                    ["John Dee", "Jana"],
                    ["Laski", "Kelley"],
                    ["Kelley", "Laski"],
                    ["Laski", "John Dee"],
                    ["John Dee", "Laski"],
                    ["Alžběta", "John Dee"],
                    ["John Dee", "Alžběta"],
                    ["John Dee", "Rudolf"],
                    ["Rudolf", "John Dee"],
                    ["Rudolf", "John Dee"],
                    ["John Dee", "Rudolf"],
                    ["John Dee", "Kelley"],
                    ["Kelley", "John Dee"],
                    ["John Dee", "Gärtner"],
                    ["Gärtner", "John Dee"],
                    ["narrator", "Gärtner"],
                    ["Gärtner", "narrator"],
                    ["narrator", "Gärtner"],
                    ["Gärtner", "narrator"],
                    ["kněžna Assja", "narrator"],
                    ["narrator", "kněžna Assja"],
                    ["narrator", "Alžběta"],
                    ["Alžběta", "narrator"],
                    ["narrator", "Jana"],
                    ["Jana", "narrator"],
                    ["Gärtner", "narrator"],
                    ["narrator", "Gärtner"],

                    

                ], nodes: 

                    [

                    // vypravěč

                    {id: 'narrator',marker: {radius: 30,lineWidth: linewidth, lineColor: line}, color: vypravec},


                    // hlavní postavy

                    {id: 'John Dee',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Kelley',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Bartlett Green',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Alžběta',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Jana',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Lipotin',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Gärtner',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'kněžna Assja',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'anděl Il',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Mascee',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},
                    {id: 'Rudolf',marker: {radius: 20,lineWidth: linewidth, lineColor: line}, color: postava},

                    // vedlejší postavy

                    {id: 'Stroganov',marker: {radius: 10,lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'kastelán',marker: {radius: 10,lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'David',marker: {radius: 10,lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'biskup Bonner',marker: {radius: 10,lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'pastýř',marker: {radius: 10,lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Madini',marker: {radius: 10,lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Talbot',marker: {radius: 10,lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Price',marker: {radius: 10,lineWidth: linewidth, lineColor: line}, color: postava2},
                    {id: 'Laski',marker: {radius: 10,lineWidth: linewidth, lineColor: line}, color: postava2},

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




