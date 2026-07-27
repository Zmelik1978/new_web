// tokeny
var Arbes = 1969559;
var Neruda = 87601;
var Svetla = 289575;
var Winter = 170147;
var Meyrink = 324487;
var Hasek = 140777;
var Ajvaz = 134021;
var Urban = 981030;
var Macha = 75264;
var Jirasek = 949433;
var Mrstik = 109023;
var Zeyer = 141364;
var Capek_Chod = 57609;
var Hodrova = 472212;
var Sova = 81682;
var Herrmann = 551190;
var Cech = 85833;
var Kafka = 76660;
var Kolar = 54039;
var Stancik = 107660;

var corpus_size = Arbes+Neruda+Svetla+Winter+Meyrink+Hasek+Ajvaz+Urban+Macha+Jirasek+Mrstik+Zeyer+Capek_Chod+Hodrova+Sova+Herrmann+Cech+Kafka+Kolar+Stancik;

document.getElementById("total_num_tokens").innerHTML = String(corpus_size).replace(/(.)(?=(\d{3})+$)/g,'$1,');

var lemmas = [
    15303, // Mácha
    18116, // Neruda
    232873, // Arbes
    7437, // Kolár
    13931, // Zeyer
    35630, // Světlá
    13830, // Čech
    14891, // Winter
    70608, // Jirásek
    10050, // Mrštík
    68686, // Herrmann
    8507, // Čapek-Chod
    8701, // Sova
    16096, // Hašek(švejk1+švejk2)
    36109, // Meyrink
    7764, // Kafka
    20063, // Ajvaz
    44264, // Hodrová
    122242, // Urban
    19048, // Stancik
];
var sentences = [
    3125, // Mácha
    5211, // Neruda
    77621, // Arbes
    1878, // Kolár
    7443, // Zeyer
    9799, // Světlá
    3419, // Čech
    7704, // Winter
    49336, // Jirásek
    4657, // Mrštík
    26746, // Herrmann
    2224, // Čapek-Chod
    5055, // Sova
    6686, // Hašek (švejk1+švejk2)
    14655, // Meyrink
    2771, // Kafka
    4366, // Ajvaz
    20564, // Hodrová
    60083, // Urban
    5667, // Stancik
];

let sum_lemmas = lemmas.reduce((accumulator, current) => accumulator + current);
document.getElementById("total_num_lemmas").innerHTML = String(sum_lemmas).replace(/(.)(?=(\d{3})+$)/g,'$1,');

let sum_sentences = sentences.reduce((accumulator, current) => accumulator + current);
document.getElementById("total_num_sentences").innerHTML = String(sum_sentences).replace(/(.)(?=(\d{3})+$)/g,'$1,');