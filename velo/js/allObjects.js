//-------------------------------------------------------------------------------------------
//------------------OBJECT SLIDER------------------------------------------------------------
//-------------------------------------------------------------------------------------------
var SliderObject = {
    imgAnim : function (e) {
        
        if (e.keyCode === 39 && document.getElementById("container").style.transform === "translateX(0%)") {
            document.getElementById("container").style.transform = "translate(-25%)";
            document.getElementById("container").style.transitionDuration = " 1s";
            document.getElementById("pause").style.backgroundColor = "#07A0C3";
            document.getElementById("play").style.backgroundColor = "#D1D1D1";


        } else if (e.keyCode === 39 && document.getElementById("container").style.transform === "translateX(-25%)") {
            document.getElementById("container").style.transform = "translate(-50%)";
            document.getElementById("pause").style.backgroundColor = "#07A0C3";
            document.getElementById("play").style.backgroundColor = "#D1D1D1";


        } else if (e.keyCode === 39 && document.getElementById("container").style.transform === "translateX(-50%)") {
            document.getElementById("container").style.transform = "translate(-75%)";
            document.getElementById("pause").style.backgroundColor = "#07A0C3";
            document.getElementById("play").style.backgroundColor = "#D1D1D1";


        } else if (e.keyCode === 37 && document.getElementById("container").style.transform === "translateX(-75%)") {
            document.getElementById("container").style.transform = "translate(-50%)";
            document.getElementById("pause").style.backgroundColor = "#07A0C3";
            document.getElementById("play").style.backgroundColor = "#D1D1D1";


        } else if (e.keyCode === 37 && document.getElementById("container").style.transform === "translateX(-50%)") {
            document.getElementById("container").style.transform = "translate(-25%)";
            document.getElementById("pause").style.backgroundColor = "#07A0C3";
            document.getElementById("play").style.backgroundColor = "#D1D1D1";


        } else if (e.keyCode === 37 && document.getElementById("container").style.transform === "translateX(-25%)") {
            document.getElementById("container").style.transform = "translate(0%)";
            document.getElementById("pause").style.backgroundColor = "#07A0C3";
            document.getElementById("play").style.backgroundColor = "#D1D1D1";


        } else if (e.keyCode === 39 && document.getElementById("container").style.transform === "translate(0%)") {
            document.getElementById("container").style.transform = "translate(-25%)";
            document.getElementById("container").style.transitionDuration = " 1s";
            document.getElementById("pause").style.backgroundColor = "#07A0C3";
            document.getElementById("play").style.backgroundColor = "#D1D1D1";


        } else if (e.keyCode === 39 && document.getElementById("container").style.transform === "translate(-25%)") {
            document.getElementById("container").style.transform = "translate(-50%)";
            document.getElementById("pause").style.backgroundColor = "#07A0C3";
            document.getElementById("play").style.backgroundColor = "#D1D1D1";


        } else if (e.keyCode === 39 && document.getElementById("container").style.transform === "translate(-50%)") {
            document.getElementById("container").style.transform = "translate(-75%)";
            document.getElementById("pause").style.backgroundColor = "#07A0C3";
            document.getElementById("play").style.backgroundColor = "#D1D1D1";


        } else if (e.keyCode === 37 && document.getElementById("container").style.transform === "translate(-75%)") {
            document.getElementById("container").style.transform = "translate(-50%)";
            document.getElementById("pause").style.backgroundColor = "#07A0C3";
            document.getElementById("play").style.backgroundColor = "#D1D1D1";


        } else if (e.keyCode === 37 && document.getElementById("container").style.transform === "translate(-50%)") {
            document.getElementById("container").style.transform = "translate(-25%)";
            document.getElementById("pause").style.backgroundColor = "#07A0C3";
            document.getElementById("play").style.backgroundColor = "#D1D1D1";


        } else if (e.keyCode === 37 && document.getElementById("container").style.transform === "translate(-25%)") {
            document.getElementById("container").style.transform = "translate(0%)";
            document.getElementById("pause").style.backgroundColor = "#07A0C3";
            document.getElementById("play").style.backgroundColor = "#D1D1D1";


        } else {
            console.log("Fin du slider");
        }
    },
    buttonAnim : function () {
        if (document.getElementById("container").style.transform === "translateX(-25%)") {
            document.getElementById("bouton1").style.backgroundColor = "white ";
            document.getElementById("bouton1").style.color = "black";
            document.getElementById("bouton2").style.backgroundColor = "#709888";
            document.getElementById("bouton2").style.color = "white";
            document.getElementById("bouton3").style.backgroundColor = "white ";
            document.getElementById("bouton3").style.color = "black";
            document.getElementById("bouton4").style.backgroundColor = "white ";
            document.getElementById("bouton4").style.color = "black";

        } else if (document.getElementById("container").style.transform === "translateX(-50%)") {
            document.getElementById("bouton1").style.backgroundColor = "white ";
            document.getElementById("bouton1").style.color = "black";
            document.getElementById("bouton2").style.backgroundColor = "white ";
            document.getElementById("bouton2").style.color = "black";
            document.getElementById("bouton3").style.backgroundColor = "#A7A7A7";
            document.getElementById("bouton3").style.color = "white";
            document.getElementById("bouton4").style.backgroundColor = "white ";
            document.getElementById("bouton4").style.color = "black";

        } else if (document.getElementById("container").style.transform === "translateX(-75%)") {
            document.getElementById("bouton1").style.backgroundColor = "white ";
            document.getElementById("bouton1").style.color = "black";
            document.getElementById("bouton2").style.backgroundColor = "white ";
            document.getElementById("bouton2").style.color = "black";
            document.getElementById("bouton3").style.backgroundColor = "white ";
            document.getElementById("bouton3").style.color = "black";
            document.getElementById("bouton4").style.backgroundColor = "#2275A5";
            document.getElementById("bouton4").style.color = "white";

        } else if (document.getElementById("container").style.transform === "translateX(0%)") {
            document.getElementById("bouton1").style.backgroundColor = "#81A6BD";
            document.getElementById("bouton1").style.color = "white";
            document.getElementById("bouton2").style.backgroundColor = "white ";
            document.getElementById("bouton2").style.color = "black";
            document.getElementById("bouton3").style.backgroundColor = "white ";
            document.getElementById("bouton3").style.color = "black";
            document.getElementById("bouton4").style.backgroundColor = "white ";
            document.getElementById("bouton4").style.color = "black";

        } else {
            console.log("Fin du slider");
        }
    },
    clicBouton1: function () {
        document.getElementById("pause").style.backgroundColor = "#07A0C3";
        document.getElementById("play").style.backgroundColor = "#D1D1D1";
        document.getElementById("bouton1").style.backgroundColor = "#81A6BD";
        document.getElementById("bouton1").style.color = "white";
        document.getElementById("bouton2").style.backgroundColor = "white ";
        document.getElementById("bouton2").style.color = "black";
        document.getElementById("bouton3").style.backgroundColor = "white ";
        document.getElementById("bouton3").style.color = "black";
        document.getElementById("bouton4").style.backgroundColor = "white ";
        document.getElementById("bouton4").style.color = "black";
        document.getElementById("container").style.transform = "translate(0%)";
        document.getElementById("container").style.transitionDuration = " 1s"
    },
    clicBouton2: function () {
        document.getElementById("pause").style.backgroundColor = "#07A0C3";
        document.getElementById("play").style.backgroundColor = "#D1D1D1";
        document.getElementById("bouton1").style.backgroundColor = "white ";
        document.getElementById("bouton1").style.color = "black";
        document.getElementById("bouton2").style.backgroundColor = "#709888";
        document.getElementById("bouton2").style.color = "white";
        document.getElementById("bouton3").style.backgroundColor = "white ";
        document.getElementById("bouton3").style.color = "black";
        document.getElementById("bouton4").style.backgroundColor = "white ";
        document.getElementById("bouton4").style.color = "black";
        document.getElementById("container").style.transform = "translate(-25%)";
        document.getElementById("container").style.transitionDuration = " 1s"
    },
    clicBouton3: function () {
        document.getElementById("pause").style.backgroundColor = "#07A0C3";
        document.getElementById("play").style.backgroundColor = "#D1D1D1";
        document.getElementById("bouton1").style.backgroundColor = "white ";
        document.getElementById("bouton1").style.color = "black";
        document.getElementById("bouton2").style.backgroundColor = "white ";
        document.getElementById("bouton2").style.color = "black";
        document.getElementById("bouton3").style.backgroundColor = "#A7A7A7";
        document.getElementById("bouton3").style.color = "white";
        document.getElementById("bouton4").style.backgroundColor = "white ";
        document.getElementById("bouton4").style.color = "black";
        document.getElementById("container").style.transform = "translate(-50%)";
        document.getElementById("container").style.transitionDuration = " 1s"
    },
    clicBouton4: function () {
        document.getElementById("pause").style.backgroundColor = "#07A0C3";
        document.getElementById("play").style.backgroundColor = "#D1D1D1";
        document.getElementById("bouton1").style.backgroundColor = "white ";
        document.getElementById("bouton1").style.color = "black";
        document.getElementById("bouton2").style.backgroundColor = "white ";
        document.getElementById("bouton2").style.color = "black";
        document.getElementById("bouton3").style.backgroundColor = "white ";
        document.getElementById("bouton3").style.color = "black";
        document.getElementById("bouton4").style.backgroundColor = "#2275A5";
        document.getElementById("bouton4").style.color = "white";
        document.getElementById("container").style.transform = "translate(-75%)";
        document.getElementById("container").style.transitionDuration = " 1s";
    },
    sliderAuto: function () {
        if (document.getElementById('container').style.transform === "translateX(0%)") {
            document.getElementById('container').style.transform = "translateX(-25%)";
            document.getElementById('container').style.transitionDuration = "2s";
            setTimeout(function () {}, 5000);
        } else if (document.getElementById('container').style.transform === "translateX(-25%)") {
            document.getElementById('container').style.transform = "translateX(-50%)";
            document.getElementById('container').style.transitionDuration = "2s";
            setTimeout(function () {}, 5000);
        } else if (document.getElementById('container').style.transform === "translateX(-50%)") {
            document.getElementById('container').style.transform = "translateX(-75%)";
            document.getElementById('container').style.transitionDuration = "2s";
            setTimeout(function () {}, 5000);
        } else if (document.getElementById('container').style.transform === "translateX(-75%)") {
            document.getElementById('container').style.transform = "translateX(-25%)";
            document.getElementById('container').style.transitionDuration = "2s";
            setTimeout(function () {}, 5000);
        } else {
            console.log("Probleme Slider auto");
        }
    },
    play: function () {
        document.getElementById("play").style.backgroundColor = "#07A0C3";
        document.getElementById("pause").style.backgroundColor = "#D1D1D1";
        if (document.getElementById("container").style.transform === "translate(0%)") {
            document.getElementById("container").style.transform = "translateX(0%)";
            document.getElementById("container").style.transitionDuration = " 1s";

        } else if (document.getElementById("container").style.transform === "translate(-25%)") {
            document.getElementById("container").style.transform = "translateX(-25%)";

        } else if (document.getElementById("container").style.transform === "translate(-50%)") {
            document.getElementById("container").style.transform = "translateX(-50%)";

        } else if (document.getElementById("container").style.transform === "translate(-75%)") {
            document.getElementById("container").style.transform = "translateX(-75%)";

        } else {
            console.log("Control Pause");
        }

    },
    pause: function () {
        document.getElementById("pause").style.backgroundColor = "#07A0C3";
        document.getElementById("play").style.backgroundColor = "#D1D1D1";
        if (document.getElementById("container").style.transform === "translateX(0%)") {
            document.getElementById("container").style.transform = "translate(0%)";
            document.getElementById("container").style.transitionDuration = " 1s";

        } else if (document.getElementById("container").style.transform === "translateX(-25%)") {
            document.getElementById("container").style.transform = "translate(-25%)";

        } else if (document.getElementById("container").style.transform === "translateX(-50%)") {
            document.getElementById("container").style.transform = "translate(-50%)";

        } else if (document.getElementById("container").style.transform === "translateX(-75%)") {
            document.getElementById("container").style.transform = "translate(-75%)";

        } else {
            console.log("Control Pause");
        }
    }
};
//-------------------------------------------------------------------------------------------
//------------------OBJECT MAP---------------------------------------------------------------
//-------------------------------------------------------------------------------------------
var MapObject = {
    location : {
        center: {
            lat: 45.732218010659686,
            lng: 4.865141536736715
        },
        zoom: 15
    },
    clusterOption: {
        gridSize: 50,
        maxZoom: 15,
        imagePath: "https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m"
    },
    arrayMarker : [],
    infoStation : function (station) {
        //Changement d'icone sous condition
        if (station.properties.status === "OPEN"){
            if (station.properties.available_bikes === 0){
                var url = "images/velogris.png";
            }else {
                var url = "images/velovert.png";
            }
        }else if (station.properties.status === "CLOSED"){
            var url = "images/closed1.png";
        }
        //Propriétés de tout les marqueurs
        var markerPropriete = {
            position: {
                lat: station.properties.lat,
                lng: station.properties.lng
            },
            icon: {
                url: url,
                size: new google.maps.Size(80, 50),
                anchor: new google.maps.Point(28, 120)
            }
        };
        //Ajout des marqueurs sur la map
        var marker = new google.maps.Marker(markerPropriete);
        //Insertion de tout les marqueurs dans un tableau
        MapObject.arrayMarker.push(marker);
///////////////////////////////////////////////////////////////////////////////////////////////
        //Evenement au clic d'un marqueur
        var mapClic = function () {
            document.getElementById('map').style.height = "200px";
            document.getElementById('map').style.transitionDuration = "1s";
            document.getElementById('resizeMap').style.display = "block";
            document.getElementById('allInfos').style.display = "block";
            document.getElementById('choice').style.display = "none";
            //On set tous les Storages d'un coup
            sessionStorage.setItem("name", station.properties.name);
            sessionStorage.setItem("status", station.properties.status);
            sessionStorage.setItem("address", station.properties.address);
            sessionStorage.setItem("bikeA", station.properties.available_bikes);
            sessionStorage.setItem("bikeT", station.properties.bike_stands);
            sessionStorage.setItem("commune", station.properties.commune);
            //On utilise les getStorages ici
            document.getElementById('stationCommune').textContent = "Commune: " + sessionStorage.getItem('commune');
            document.getElementById('stationName').textContent = "Station : " + sessionStorage.getItem('name');
            if (sessionStorage.getItem("status") === "OPEN") {
                document.getElementById('stationStatus').textContent = "Status : OUVERT";
                document.getElementById('stationStatus').style.color = "#32936f";
            } else if (sessionStorage.getItem("status") === "CLOSED") {
                document.getElementById('stationStatus').textContent = "Status : FERMEE"
                document.getElementById('stationStatus').style.color = "#e83f6f";
            } else {
                console.log("erreur fields status")
            }
            document.getElementById('stationAddress').textContent = "Addresse : " + sessionStorage.getItem('address');
            document.getElementById('stationT').textContent = "Capacité total en vélo : " + sessionStorage.getItem('bikeT');
            document.getElementById('stationA').textContent = "Vélo actuellement diponible : " + sessionStorage.getItem('bikeA');
            //Apparition du bouton "Reverser"
            MapObject.apparitionBtnReserv(station);
            Signature.clear();
        };
        google.maps.event.addListener(marker, "click", mapClic);
    },
    resize : function () {
        document.getElementById('resizeMap').style.display = "none";
        document.getElementById('map').style.height = "590px";
        document.getElementById('map').style.transitionDuration = "1s";
    },
    apparitionBtnReserv : function (station) {
        document.getElementById("canvasDiv").style.display = "none";
        document.getElementById("reserverChoice").style.display = "block";
        if (station.properties.available_bikes === 0){
            document.getElementById("reserverChoice").disabled = true;
        }else {
            document.getElementById("reserverChoice").disabled = false;
        }
    }
};
//-------------------------------------------------------------------------------------------
//------------------OBJECT SIGNATURE---------------------------------------------------------
//-------------------------------------------------------------------------------------------
var Signature = {
    showCanvas : function () {
        //Apparition du CANVAS
        document.getElementById('canvasDiv').style.display = "initial";
    },
    canvas: document.getElementById("canvas"),
    context: this.canvas.getContext("2d"),
    lastPos: null,
    position: function(pos) {
        var rect = Signature.canvas.getBoundingClientRect(); //va chercher la position relative et la taille de l'élément par rapport à sa zone d'affichage
        pos.x = (pos.x - rect.left) / (rect.right - rect.left) * Signature.canvas.width; //récupère la position exacte de la souris en X
        pos.y = (pos.y - rect.top) / (rect.bottom - rect.top) * Signature.canvas.height; //idem en Y
        return pos;
    },
    positionSouris: function(e) {
        return Signature.position({
            x: e.clientX,
            y: e.clientY
        }); //récupère la position du clic dans le navigateur
    },
    positionToucher: function(e) {
        return Signature.position({
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        }); //récupère la position du premier toucher dans le navigateur
    },
    dessiner: function(pos1, pos2) {
        Signature.context.moveTo(pos1.x, pos1.y); //point de départ
        Signature.context.lineTo(pos2.x, pos2.y); //point d'arrivée
        Signature.context.stroke();
    },
    start: function(pos) {
        Signature.lastPos = pos; //prend la dernière pos connue
    },
    stop: function(pos) {
        if(Signature.lastPos) { //si lastpos n'est pas null, on dessine et on arrête pour finir le dessin
            Signature.dessiner(Signature.lastPos, pos);
            Signature.lastPos = null; //on a fini de dessiner, évite de lier le dernier tracé à un nouveau tracé
        }
    },
    move: function(pos) {
        if(Signature.lastPos) {
            var newPos = pos;
            Signature.dessiner(Signature.lastPos, newPos);
            Signature.lastPos = newPos; //relie la dernière pos avec la nouvelle pour signifier le mouvement
        }
    },
    clear: function() {
        Signature.canvas.width = Signature.canvas.width;
    },
    checkData : function () {
        if (Signature.storageCanvas(canvas) === false) {
            document.getElementById("reserver").disabled = false;
        } else if (Signature.storageCanvas(canvas) === true) {
            document.getElementById("reserver").disabled = true;
        }else {
            console.log("Check du Canvas")
        }
    },
    storageCanvas : function (canvas) {
        var blank = document.createElement('canvas');
        blank.width = canvas.width;
        blank.height = canvas.height;

        return canvas.toDataURL() == blank.toDataURL();
    },
    ///////////////////////////////////////////////////////////////////
    //Les Listeners//////////////////////////////////////
    ///////////////////////////////////////////////////////////
    mousedown : function(e) {
        if(e.buttons === 1) signature.start(signature.positionSouris(e));
    },
    mouseup : function(e) {
        signature.stop(signature.positionSouris(e));
    },
    mousemove : function(e) {
        signature.move(signature.positionSouris(e));
    },
    mouseleave : function(e) {
        signature.stop(signature.positionSouris(e));
    },
    mouseenter : function(e) {
        if(e.buttons === 1) signature.start(signature.positionSouris(e));
    },
    touchstart : function(e) {
        e.preventDefault();
        if(e.touches.length > 0) signature.start(signature.positionToucher(e));
    },
    touchend : function(e) {
        e.preventDefault();
        if(e.touches.length > 0) signature.stop(signature.positionToucher(e));
    },
    touchmove : function(e) {
        e.preventDefault();
        if(e.touches.length > 0) signature.move(signature.positionToucher(e));
    }
};
//-------------------------------------------------------------------------------------------
//------------------OBJECT ALERT-------------------------------------------------------------
//-------------------------------------------------------------------------------------------
var Alert = {
    render: function (dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "Bicycle in Paris";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button id="boutonOk">OK</button>';
    },
    renderCancel: function (dialog) {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById('dialogoverlay');
    var dialogbox = document.getElementById('dialogbox');
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    document.getElementById('dialogboxhead').innerHTML = "Bicycle in Paris";
    document.getElementById('dialogboxbody').innerHTML = dialog;
    document.getElementById('dialogboxfoot').innerHTML = '<button id="boutonOkC">OK</button>';
    },
    ok: function () {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
        Signature.clear();
        document.getElementById('canvasDiv').style.display = "none";
        document.getElementById("count").style.display = "block";
    },
    resultat: function () {
        document.getElementById("reserver").disabled = true;
    },
    validSignature : function () {
        Alert.render("Votre avez réservé un vélo à la station " + sessionStorage.getItem("name"));
        Alert.resultat();
        document.getElementById("boutonOk").addEventListener("click", Alert.ok);
        document.getElementById("count").style.display = "block";
        document.getElementById("count").setAttribute("count", true);
        document.getElementById('map').style.height = "0px";
        document.getElementById("resizeMap").style.display = "none";
        document.getElementById('nouvelleRes').style.display = "block";
        document.getElementById('allInfos').style.display = "none";
        document.getElementById('choice').style.display = "none";
        document.getElementById('annuler').style.display = "block";
        document.getElementById('infosRes0').style.display = "block";
        document.getElementById('station').textContent = sessionStorage.getItem("name");
        document.getElementById('address').textContent = sessionStorage.getItem("address").toUpperCase();
        document.getElementById('address0').textContent = sessionStorage.getItem("address").toUpperCase();
        if (document.getElementById('countStop')){
            document.getElementById('countStop').id = "count";
        }
        if (document.getElementById('count0Stop')){
            document.getElementById('count0Stop').id = "count0";
        }
    },
    confirmAnnulation : function () {
        Alert.renderCancel("Annulation de votre réservation");
    },
    reloading : function() {
    location.reload();
    },
    tempsEcouler : function () {
        Alert.renderCancel("Votre réservation a expiré");
    }
};

