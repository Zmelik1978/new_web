 // topography
 var files_topography = [
    // Tady můžeš doplňovat další vrstvy - pořadí určuje pořadí checkboxů
    // {'path':'adresa obrázku', 'name': 'název jak se zobrazí u checkboxu'} 
    {'path': 'maps/topografie/podkladova_mapa.png', 'name': '<strong style="color:#696969;  font-size: 14px; margin-left: 4px;">basic map</strong>'},
	{'path': 'maps/topografie/I.png', 'name': '<span style=" font-size: 14px; margin-left: 4px;">1. Zasáhnutí dobrého vojáka Švejka do světové války</span>'},
    {'path': 'maps/topografie/II.png', 'name': '<span style=" font-size: 14px; margin-left: 4px;">2. Dobrý voják Švejk na policejním ředitelství</span>'},
    {'path': 'maps/topografie/III.png', 'name': '<span style=" font-size: 14px; margin-left: 4px;">3. Švejk před soudními lékaři</span>'},
    {'path': 'maps/topografie/IV.png', 'name': '<span style=" font-size: 14px; margin-left: 4px;">4. Švejka vyhodili z blázince</span>'},
	{'path': 'maps/topografie/V.png', 'name': '<span style=" font-size: 14px; margin-left: 4px;">5. Švejk na policejním komisařství v Salmové</span>'},
    {'path': 'maps/topografie/VI.png', 'name': '<span style=" font-size: 14px; margin-left: 4px;">6. Švejk opět doma, proraziv začarovaný kruh</span>'},
    {'path': 'maps/topografie/VII.png', 'name': '<span style=" font-size: 14px; margin-left: 4px;">7. Švejk jde na vojnu</span>'},
    {'path': '', 'name': '<span style=" font-size: 14px; margin-left: 4px;"><s>8. Švejk simulantem</s></span>'},
    {'path': 'maps/topografie/IX.png', 'name': '<span style=" font-size: 14px; margin-left: 4px;">9. Švejk v garnizóně</span>'},
    {'path': 'maps/topografie/X.png', 'name': '<span style=" font-size: 14px; margin-left: 4px;">10. Švejk vojenským sluhou u polního kuráta</span>'},
    {'path': 'maps/topografie/XI.png', 'name': '<span style=" font-size: 14px; margin-left: 4px;">11. Švejk jede s polním kurátem sloužit polní mši</span>'},
    {'path': 'maps/topografie/XII.png', 'name': '<span style=" font-size: 14px; margin-left: 4px;">12. Náboženská debata</span>'},
    {'path': 'maps/topografie/XIII.png', 'name': '<span style=" font-size: 14px; margin-left: 4px;">13. Švejk jde zaopatřovat</span>'},
    {'path': 'maps/topografie/XIV.png', 'name': '<span style=" font-size: 14px; margin-left: 4px;">14. Švejk vojenským sluhou u nadporučíka Lukáše</span>'},
    {'path': 'maps/topografie/XV.png', 'name': '<span style=" font-size: 14px; margin-left: 4px;">15. Katastrofa</span>'},
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
	{'path': 'maps/density/zaklad_density.svg', 'name': '<span style="margin-left: 10px;">Osudy dobrého vojáka Švejka... I</span>'},
];

for ( var i in files_density ){
    $('#container-density').append('<img id="img-density-'+i+'" class="upper layer" src="'+files_density[i]['path']+'">');
    $('#checkboxes-density').append('<div class="checkbox-outter-density"><input type="checkbox" class="check" id="density-'+i+'">' + files_density[i]['name'] + '</div>');
}

// movement
var files_movement = [
    // Tady můžeš doplňovat další vrstvy - pořadí určuje pořadí checkboxů
    // {'path':'adresa obrázku', 'name': 'název jak se zobrazí u checkboxu'} 
    {'path': 'maps/topografie/podkladova_mapa.png', 'name': '<strong style="color:#696969; margin-left: 4px;">basic maps</strong>'},
	{'path': 'maps/movement/I-sit.png', 'name': '<span style="margin-left: 4px;">1. Zasáhnutí dobrého vojáka Švejka do světové války</span>'},
    {'path': 'maps/movement/II-sit.png', 'name': '<span style="margin-left: 4px;">2. Dobrý voják Švejk na policejním ředitelství</span>'},
    {'path': 'maps/movement/III-sit.png', 'name': '<span style="margin-left: 4px;">3. Švejk před soudními lékaři</span>'},
    {'path': 'maps/movement/IV-sit.png', 'name': '<span style="margin-left: 4px;">4. Švejka vyhodili z blázince</span>'},
    {'path': 'maps/movement/V-sit.png', 'name': '<span style="margin-left: 4px;">5. Švejk na policejním komisařství v Salmově ulici</span>'},
    {'path': 'maps/movement/VI-sit.png', 'name': '<span style="margin-left: 4px;">6. Švejk opět doma, proraziv začarovaný kruh</span>'},
    {'path': 'maps/movement/VII-sit.png', 'name': '<span style="margin-left: 4px;">7. Švejk jde na vojnu</span>'},
    {'path': '', 'name': '<span style="margin-left: 4px;"><s>8. Švejk simulatntem</s></span>'},
    {'path': 'maps/movement/IX-sit.png', 'name': '<span style="margin-left: 4px;">9. Švejk na garnizóně</span>'},
    {'path': 'maps/movement/X-sit.png', 'name': '<span style="margin-left: 4px;">10. Švejk vojenským sluhou u polního kuráta</span>'},
	{'path': 'maps/movement/XI-sit.png', 'name': '<span style="margin-left: 4px;">11. Švejk jede s polním kurátem sloužit polní mši</span>'},
    {'path': '', 'name': '<span style="margin-left: 4px;"><s>12. Náboženská debata</s></span>'},
    {'path': 'maps/movement/XIII-sit.png', 'name': '<span style="margin-left: 4px;">13. Švejk jde zaopatřovat</span>'},
    {'path': 'maps/movement/XIV-sit.png', 'name': '<span style="margin-left: 4px;">14. Švejk vojenským sluhou u nadporučíka Lukáše</span>'},
    {'path': '', 'name': '<span style="margin-left: 4px;"><s>15. Katastrofa</s></span>'},
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