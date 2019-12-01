let leeg = [];
 
let menukaart = [
    "Snij de hamblokjes Rasp de kaas Meng de hamblokjes en de gemalen kaas",
    "Snij de spinazie in stukjes, dan mix je het met de room in een bol Dan meng je de spinazie met room",
    "Snij het gehakt in stukjes en maak je tot een klein gehaktballetje, en mix gehaktballetjes met de tomatensaus. Rasp de kaas en meng de tomatensaus met gehaktballetjes met de kaas."];
 
let gerecht1 = menukaart[0];
let gerecht2 = menukaart[1];
let gerecht3 = menukaart[2];
 
console.log(menukaart.length);
 
menukaart.push("Snij de spek in blokjes en snij de spinazie in stukjes.Meng de spek blokjes en spinazie met de room.");
menukaart.unshift("Snij de courgette in plakjes,Meng de courgette met de tomatensaus");
menukaart.push("Mix de room met doperwten en tomatensaus.");
 
for (let count = 0; count  < menukaart.length; count++) {
    console.log(menukaart[count]);
}