var dateConfig = new Date();

dateConfig.setSeconds(0);
var after = dateConfig;
var alert = Object.create(Alert);

var countdown = function (){
    var count = document.getElementById("count");
    var today = new Date();
    var calcul = today.getSeconds() - 60;
    console.log(today);
    console.log(calcul);
    var total_secondes = (today - after) / 1000;
    var prefixe;
    if (total_secondes < 0){
        prefixe = "Temps restant : "; // On modifie le préfixe si la différence est négatif
        total_secondes = Math.abs(total_secondes); // On ne garde que la valeur absolue
    }
    if (total_secondes > 0){
        var jours = Math.floor(total_secondes / (60 * 60 * 24));
        var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
        var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
        if (secondes <= 9){
            secondes = '0'+secondes;
        }
        count.innerHTML = prefixe + minutes + ":" + secondes + ' ' + "s";
        document.getElementById("count0").innerHTML = "<p style='margin-left: 50px'>Temps: "+minutes+":"+secondes+"s</p>";
        sessionStorage.setItem("minute", minutes);
        if (minutes === 0 && secondes === "00"){
            var zero = true;
            count.innerHTML = 'Votre réservation a éxpiré';
            document.getElementById("count0").innerHTML = "<p style='margin-left: 50px; color: red'>Expiré</p>";
            document.getElementById('count0').id = "count0Stop";
            document.getElementById('count').id = "countStop";
        }
    }

    //if seccond = 0 lance un pop up le meme que la pause
    var timer = setTimeout(countdown, 1000);
    if (zero){
        alert.tempsEcouler();
        after = new Date();
        window.clearInterval(timer);
        sessionStorage.clear();
        document.getElementById("boutonOkC").addEventListener("click", function () {
            alert.reloading();
        });
    }
    document.getElementById("annuler").addEventListener("click", function () {
        alert.confirmAnnulation();
        after = new Date();
        window.clearInterval(timer);
        sessionStorage.clear();
        document.getElementById("boutonOkC").addEventListener("click", function () {
        alert.reloading();
        });
    });
    document.getElementById("nouvelleRes").addEventListener("click", function () {
        alert.confirmAnnulation();
        after = new Date();
        window.clearInterval(timer);
        sessionStorage.clear();
        alert.reloading();
    })
};

if (sessionStorage.getItem("minute")){
    var boo = dateConfig.getMinutes();
    var ya = sessionStorage.getItem("minute");
    var test = Math.floor((1 * boo) + (1 * ya +1));
    dateConfig.setMinutes(Math.ceil(test));
    document.getElementById('choice').style.display = "none";
    document.getElementById('annuler').style.display = "block";
    document.getElementById('station').textContent = sessionStorage.getItem("name");
    document.getElementById('address').textContent = sessionStorage.getItem("address").toUpperCase();
    document.getElementById('address0').textContent = sessionStorage.getItem("address").toUpperCase();
    document.getElementById('infosRes0').style.display = "block";
    countdown();
}else {
    dateConfig.setMinutes(dateConfig.getMinutes() + 20);
    document.getElementById("reserver").addEventListener("click", function () {
        countdown();
    });
}