 // topography
 var files_topography = [
    // Tady můžeš doplňovat další vrstvy - pořadí určuje pořadí checkboxů
    // {'path':'adresa obrázku', 'name': 'název jak se zobrazí u checkboxu'} 
    {'path': 'maps/topografie/podkladova_mapa.png', 'name': '<strong style="color:#696969; font-size: 14px; margin-left: 4px;">basic map</strong>'},
	{'path': 'maps/topografie/dabel-na-skripci.svg', 'name': '<span style="font-size: 14px; margin-left: 4px;">Ďábel na skřipci (1865)</span>'},
	{'path': 'maps/topografie/svaty-xaverius.svg', 'name': '<span style="font-size: 14px; margin-left: 4px;">Svatý Xaverius (1873)</span>'},
	{'path': 'maps/topografie/sivooky-demon.svg', 'name': '<span style="font-size: 14px; margin-left: 4px;">Sivooký démon (1873)</span>'},
	{'path': 'maps/topografie/zazracna-madona.svg', 'name': '<span style="font-size: 14px; margin-left: 4px;">Zázračná madona (1875)</span>'},
    {'path': 'maps/',     'name': '<span style="font-size: 14px; margin-left: 4px;">Ukřižovaná (1876)</span>'},
    {'path': 'maps/',     'name': '<span style="font-size: 14px; margin-left: 4px;">Newtonův mozek (1877)</span>'},
    {'path': 'maps/',     'name': '<span style="font-size: 14px; margin-left: 4px;">Akrobati (1878)</span>'},
];

for ( var i in files_topography ){
    $('#container-topography').append('<img id="img-'+i+'" class="upper layer" src="'+files_topography[i]['path']+'">');
    $('#checkboxes-topography').append('<div class="checkbox-outter-topography"><input type="checkbox" class="check" id="'+i+'">' + files_topography[i]['name'] + '</div>');
}

// density
var files_density = [
    // Tady můžeš doplňovat další vrstvy - pořadí určuje pořadí checkboxů
    // {'path':'adresa obrázku', 'name': 'název jak se zobrazí u checkboxu'} 
    {'path': 'maps/topografie/podkladova_mapa.png', 'name': '<strong style="color:#696969; margin-left: 4px;">basic map</strong>'},
	{'path': 'maps/density/dabel-denzity.svg', 'name': '<span style="margin-left: 4px;">Ďábel na skřipci (1865)</span>'},
	{'path': 'maps/density/xaverius-denzity.svg', 'name': '<span style="margin-left: 4px;">Svatý Xaverius (1873)</span>'},
	{'path': 'maps/density/demon-denzity.svg', 'name': '<span style="margin-left: 4px;">Sivooký démon (1873)</span>'},
	{'path': 'maps/density/madona-denzity.svg', 'name': '<span style="margin-left: 4px;">Zázračná madona (1875)</span>'},
    {'path': 'maps/',     'name': '<span style="margin-left: 4px;">Ukřižovaná (1876)</span>'},
    {'path': 'maps/',     'name': '<span style="margin-left: 4px;">Newtonův mozek (1877)</span>'},
    {'path': 'maps/',     'name': '<span style="margin-left: 4px;">Akrobati (1878)</span>'},
];

for ( var i in files_density ){
    $('#container-density').append('<img id="img-density-'+i+'" class="upper layer" src="'+files_density[i]['path']+'">');
    $('#checkboxes-density').append('<div class="checkbox-outter-density"><input type="checkbox" class="check" id="density-'+i+'">' + files_density[i]['name'] + '</div>');
}

// movement
var files_movement = [
    // Tady můžeš doplňovat další vrstvy - pořadí určuje pořadí checkboxů
    // {'path':'adresa obrázku', 'name': 'název jak se zobrazí u checkboxu'} 
    {'path': 'maps/topografie/podkladova_mapa.png', 'name': '<strong style="color:#696969; margin-left: 4px;">basic map</strong>'},
	{'path': 'maps/movement/dabel-sit.svg', 'name': '<span style="margin-left: 4px;">Ďábel na skřipci (1865)</span>'},
	{'path': 'maps/movement/xaverius-sit.svg', 'name': '<span style="margin-left: 4px;">Svatý Xaverius (1873)</span>'},
	{'path': 'maps/movement/demon-sit.svg', 'name': '<span style="margin-left: 4px;">Sivooký démon (1873)</span>'},
	{'path': 'maps/movement/madona-sit.svg', 'name': '<span style="margin-left: 4px;">Zázračná madona (1875)</span>'},
    {'path': 'maps/',     'name': '<span style="margin-left: 4px;">Ukřižovaná (1876)</span>'},
    {'path': 'maps/',     'name': '<span style="margin-left: 4px;">Newtonův mozek (1877)</span>'},
    {'path': 'maps/',     'name': '<span style="margin-left: 4px;">Akrobati (1878)</span>'},
];

for ( var i in files_movement ){
    $('#container-movement').append('<img id="img-movement-'+i+'" class="upper layer" src="'+files_movement[i]['path']+'">');
    $('#checkboxes-movement').append('<div class="checkbox-outter-movement"><input type="checkbox" class="check" id="movement-'+i+'">' + files_movement[i]['name'] + '</div>');
}

// switcher
$(document).ready(function() {
    // Funkce pro zobrazení/skrývání vrstev
    function toggleLayerVisibility(section) {
        $(section + ' .check').change(function() {
            var id = '#img-' + $(this).attr('id');
            if (this.checked) {
                $(id).css('display', 'block');
            } else {
                $(id).css('display', 'none');
            }
        });
    }

    // Volání funkce pro každou sekci
    toggleLayerVisibility('#topography');  
    toggleLayerVisibility('#density');     
    toggleLayerVisibility('#movement');     
})