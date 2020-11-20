 // verze
var version_text = document.getElementById("version_text");
version_text.innerHTML = "Verze:" + " " + version.Version;



// tymy + hraci ---> pridej nekam classu hrac nebo tym aby ti spocitalo kolik je na strance hracu a tymu
var hraci = document.querySelector('.nop');  
var hracclassa = document.getElementsByClassName("hrac");
var tymy = document.querySelector('.not');  
var tymclassa = document.getElementsByClassName("tym");

hraci.innerHTML= "Počet hráčů:" + " " +  "<span class='hraci_tymy'>"+ hracclassa.length+"</span>"
tymy.innerHTML= "Počet týmů:" + " " +  "<span class='hraci_tymy'>"+ tymclassa.length+"</span>"
