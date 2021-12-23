
/* EKA POHJA
Lääkeliuoksen pitoisuus on 100 mg/ml. Ritulle on annettava vuorokaudessa 0,03 g painokiloa kohti ja Ritu painaa 65 kg. Kuinka paljon liuosta annat kerrallaan, kun vuorokausiannos jaetaan kolmeen annostelukertaan? Ilmoita määrä millilitroina. Lääkkeen pitoisuus on 100 mg/ml Lääkemääräys: annettava vuorokaudessa 0,03 g painokiloa kohti ja Ritu painaa 65 kg Lääkettä menee 65 x 0,03g = 1,95, tämä on vuorokaudessa annettava lääkkeen määrä. Lääkettä menee kolme kertaa 1,95g/3 = 0,65 g 100 mg 1 ml 650 mg X x X x 100 mg = 1 ml x 650 mg X = 6,5 ml Vastaus: Keralla annetaan 6.5 ml
*/

/* TOKA POHJA
Lääkeliuoksen pitoisuus on 40 mg/ml. Maija tarvitsema vaikuttavan aineen määrä on 0,002 g/kg kerralla. Kuinka paljon mittaat liuosta, jos potilaan paino on 85 kg? Tiedetään: 40mg/ml Maija tarvitsee 0,002 g/kg x 85kg = 0,17g = 170mg 40mg – 1 ml 170 mg -X X x 40 mg = 1ml x 170 mg X = 1ml x 170 mg/40 mg X = 4,25 ml Vastaus: Maija saa yhdellä kertaa 4,25 ml
*/

/* KOLMAS POHJA
Potilaalle annettavan lääkeliuoksen pitoisuus on 20 mg/ml. Liinu tarvitsee vaikuttavaa ainetta 6 mg/kg/vrk. Kuinka monta millilitraa mittaat potilaalle liuosta, jos hän painaa 70 kg ja lääkettä annetaan kaksi kertaa vuorokaudessa? Ilmoita määrä millilitroina. Lääkkeen pitoisuus on 20mg/ml Liinun lääkemääräys on 6mg/kg/ml, Liinu paina 70 kg ja lääkettä annetaan kaksi (2) kertaa vuorokaudessa ’ Liinun saa 70 kg x 6mg = 420 mg Sitten pitää laskea kuinka paljon 420 mg on millilitroina 20 mg -1 ml 420 mg – X X x 20 mg = 1 ml x 420mg X = 21 ml Kysyttiin kerta-annoksen määrää millilitorissa se on 10.5 ml
*/

/* NELJÄS POHJA
Oraalinesteessä on penisilliiniä 100 000 IU/ml. Kuinka paljon 4-vuotiaalle 16-kiloiselle Sebationille annetaan liuosta, kun penisilliiniä on määrätty 50 000 IU painokiloa kohti vuorokaudessa (50 000 IU/kg/vrk) ja lääkettä annetaan kahdesti vuorokaudessa? Ilmoita määrä millilitroina. Lääkkeen pitoisuus: 100 000 IU/ml Lääkemääräys: 50 000 IU painokiloa kohtia ja lääkettä annetaan kaksi (2) kertaa vuorokaudesa Sebastian painaa: 16 kg 100 000 IU - 1 ml 50 000 IU on ½ ml Lasketaan ensiksi koko vuorokauden annos. Painoa Sebatinilla on 16 kg. 16 kg x 0,5 ml = 8ml Sitten vielä jaetaan 8 ml/2 = 4ml Vastaus: Sebastian saa 4ml lääkettä yhdellä kertaa
*/

/* VIIDES POHJA
Markulle on määrätty korvatippoja. Korvatippojen vahvuus on 5 mg/ml. a) Kuinka monta millilitraa on annos, jos potilaalle on määrätty 2 mg? b) Kuinka monta tippaa (guttaa, gtt) on annos? (1ml = 20 gtt) a) Lääke 5mg - 1ml Kysytään kuinka paljon on 2 mg milliliroina? Verranto: 5 mg/ml= 2mg/X X x 5mg = 2mg x 1 ml X= 2mgx 1ml /5 mg X = 0,4 ml Vastaus: Lääkemääräys on 0,4 ml b) Kuinka monta tippaa 0,4 ml on? Tiedetään, että: 1 ml = 20 gtt 1ml/20gtt = 0.4 ml/ X X x 1 ml = 20 gtt x 0,4 ml X = 20 gtt x 0,4 ml/1 ml X = 8 gtt Vastaus: Lääkemääräys on 8 gtt
*/

const EKA_POHJA = ["Lääkeliuoksen pitoisuus on ", "pitoisuus"," mg/ml. ", "nimi", " saa vuorokaudessa ", "määrä", " g painokiloa kohti ja ", " painaa ", "paino", " kg. Kuinka paljon liuosta annat kerrallaan, kun vuorokausiannos annetaan ", "vuorokausiannosmäärä", " kertaa päivässä? Ilmoita määrä millilitroina.", 0];

const TOKA_POHJA = ["Lääkeliuoksen pitoisuus on ", "pitoisuus", " mg/ml. ", "nimi", " tarvitsee vaikuttavaa ainetta ", "määrä", " g/kg kerralla. Kuinka paljon mittaat liuosta, jos potilaan paino on ", "paino", " kg? Ilmoita määrä millilitroina.", 1];

const KOLMAS_POHJA = ["Potilaalle annettavan lääkeliuoksen pitoisuus on ", "pitoisuus", " mg/ml. ", "nimi", " tarvitsee vaikuttavaa ainetta ", "määrä", " mg/kg/vrk. Kuinka monta millilitraa mittaat potilaalle liuosta, jos hän painaa ", "paino", " kg ja lääkettä annetaan ", "vuorokausiannosmäärä", " kertaa vuorokaudessa? Ilmoita määrä millilitroina.", 2];

const NELJ_POHJA = ["Oraalinesteessä on penisilliiniä", "pitoisuus", "IU/ml. Kuinka paljon ", "ikä", "-vuotiaalle ", "paino", "-kiloiselle Sebationille annetaan liuosta, kun penisilliiniä on määrätty ", "määrä", " IU painokiloa kohti vuorokaudessa ja lääkettä annetaan ", "vuorokausiannosmäärä", " kertaa vuorokaudessa?", 3];

let POHJAT = [EKA_POHJA, TOKA_POHJA, KOLMAS_POHJA];

let NIMET = ["Matias", "Elli", "Mikael", "Jussi", "Aleksi", "Julia", "Jesper", "Otso", "Vladimir", "Siri", "Leo", "Tuukka", "Justus", "Lucia", "Anda", "Kuura", "Antti", "Henna", "Tuomas", "Esko", "Kalevi", "Aada", "Lahja", "Anselmi", "Enni", "Maria", "Heimo", "Jutta", "Sanna", "Pekka", "Kasper", "Kyllikki", "Meri", "Linnea", "Kerttu", "Eerika", "Tahvo", "Mikke", "Elias", "Siiri", "Samu", "Sasu", "Iivo", "Moonika", "Mimmi", "Jesse", "Joonas", "Tuuli", "Miira", "Raija", "Martti", "Matti", "Ilmari", "Heikki", "Sirpa", "Timo", "Minna", "Riitta", "Yrjö", "Leena", "Akseli", "Aatami", "Eeva", "Mohammed", "Abdulasis", "Kasper", "Tiina", "Nea", "Oona", "John"]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


function teeLaskut() {
    document.getElementById("content").textContent = "";

    laskuM = document.querySelector("input#laskuM").value;
    let kaikkiLaskut = document.createElement("div");
    for(i = 0; i < laskuM; i++) {
        let div = document.createElement("div");
        let input = document.createElement("input");
        let randomLiuosPitoisuus = document.createElement("span");
        randomLiuosPitoisuus.textContent = getRndInteger(10, 200);
        let randomPaino = document.createElement("span");
        randomPaino.textContent = getRndInteger(2, 135);
        let randomAnnos = document.createElement("span");
        randomAnnos.textContent = Number(getRndInteger(1,100)/getRndInteger(100,500)).toFixed(3);
        let randomPohja = getRndInteger(0, POHJAT.length);
        let randomNimi = getRndInteger(0, NIMET.length);
        let randomAge = document.createElement("span");
        randomAge.textContent = getRndInteger(0, 120);
        let uusiLasku = document.createElement("p");
        let vkAnnosMr = document.createElement("span");
        vkAnnosMr.textContent = getRndInteger(2, 5);
        let vkamrCheck = 0;

        input.classList.add("vastaus");
        randomLiuosPitoisuus.classList.add("liuos")
        randomPaino.classList.add("paino");
        randomAnnos.classList.add("annos");
        vkAnnosMr.classList.add("vkamr");
        randomAge.classList.add("age")

        if(POHJAT[randomPohja][POHJAT[randomPohja].length - 1] == 2) {
            randomAnnos.textContent *= 1000;
        }

        for(j = 0; j < POHJAT[randomPohja].length; j++) {
            if(j == POHJAT[randomPohja].length-1) {
                let kaavaNr = document.createElement("span");
                kaavaNr.classList.add("kaava")
                kaavaNr.textContent = POHJAT[randomPohja][j];
                uusiLasku.append(kaavaNr);
            }else {
                switch(POHJAT[randomPohja][j]) {
                    case "pitoisuus":
                        uusiLasku.append(randomLiuosPitoisuus);
                        break;
                    case "määrä":
                        uusiLasku.append(randomAnnos);
                        break;
                    case "paino":
                        uusiLasku.append(randomPaino);
                        break;
                    case "nimi":
                        let uusiNimi = document.createElement("span");
                        uusiNimi.textContent = NIMET[randomNimi];
                        uusiLasku.append(uusiNimi);
                        break;
                    case "vuorokausiannosmäärä":
                        uusiLasku.append(vkAnnosMr);
                        vkamrCheck = 1;
                        break;
                    case "ikä":
                        uusiLasku.append(randomAge);
                        break;
                    default:
                        let pohjPal = document.createElement("span");
                        pohjPal.textContent = POHJAT[randomPohja][j];
                        uusiLasku.append(pohjPal)
                        break;
                }
            }

        }
        if(vkamrCheck == 0) {
            vkAnnosMr.textContent = "";
            uusiLasku.append(vkAnnosMr);
        }
        div.append(uusiLasku, input);
        kaikkiLaskut.append(div);
    }
    document.getElementById("content").append(kaikkiLaskut);
}


function tarkista() {
    let vastaukset = document.querySelectorAll(".vastaus");
    let painot = document.querySelectorAll(".paino");
    let liuokset = document.querySelectorAll(".liuos");
    let annokset = document.querySelectorAll(".annos");
    let kaavat = document.querySelectorAll(".kaava");
    let vkAnnosMr = document.querySelectorAll(".vkamr");

    for(i = 0; i < vastaukset.length; i++){
        let vastaus = 0;
        switch(Number(kaavat[i].textContent)) {
            case 0:
                vastaus = Number((((annokset[i].textContent * painot[i].textContent) / vkAnnosMr[i].textContent) * 1000) * (1 / liuokset[i].textContent)).toFixed(1);
                break;
            case 1:
                vastaus = Number((annokset[i].textContent * painot[i].textContent * 1000) * (1 / liuokset[i].textContent)).toFixed(1);
                break;
            case 2:
                vastaus = Number((((annokset[i].textContent * painot[i].textContent)) / vkAnnosMr[i].textContent) * (1 / liuokset[i].textContent)).toFixed(1);
                break;
        }
        if(Number(vastaukset[i].value) == Number(vastaus)) {
            kaavat[i].classList.add("oikein");
            kaavat[i].textContent = "Oikein!";
        } else {
            kaavat[i].classList.add("väärin");
            kaavat[i].textContent = "Väärin! Oikea vastaus on " + vastaus;
        }
        kaavat[i].classList.remove("kaava");

    }

}

// Rangenumero muuttuu täl
document.getElementById("laskuM").onchange = function() {document.getElementById("laskuMK").textContent = document.getElementById("laskuM").value};

document.querySelector("#teeLaskut").addEventListener("click", teeLaskut);

document.querySelector("#tarkistaLaskut").addEventListener("click", tarkista);

teeLaskut();