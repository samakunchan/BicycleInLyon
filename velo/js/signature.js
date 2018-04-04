var signature = Object.create(Signature);
var alert = Object.create(Alert);
signature.context.strokeStyle = "#000000";
signature.context.lineWidth = 1.5;
signature.context.lineCap = "round";
// Apparition du CANVAS
document.getElementById("reserverChoice").addEventListener("click", signature.showCanvas);
// Effacer CANVAS
document.getElementById("clear").addEventListener("click", signature.clear);
// Mouse events
signature.canvas.addEventListener("mousedown", signature.mousedown);
signature.canvas.addEventListener("mouseup", signature.mouseup);
signature.canvas.addEventListener("mousemove", signature.mousemove);
signature.canvas.addEventListener("mouseleave", signature.mouseleave);
signature.canvas.addEventListener("mouseenter", signature.mouseenter);
// Touchs events
signature.canvas.addEventListener("touchstart", signature.touchstart);
signature.canvas.addEventListener("touchend", signature.touchend);
signature.canvas.addEventListener("touchmove", signature.touchmove);
//Check de la signature
window.addEventListener("click", signature.checkData);
//Pop up d'un alert pour signaler la réservation
document.getElementById("reserver").addEventListener("click", alert.validSignature);


