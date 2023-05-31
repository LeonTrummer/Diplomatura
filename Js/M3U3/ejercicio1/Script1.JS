var distancia = prompt("Ingrese la distancia en metros");

if (distancia <= 1000) {
  alert("Anda a pie, vago.");
} else if (distancia > 1000 && distancia <= 10000) {
  alert("Anda en bici, loko.");
} else if (distancia > 10000 && distancia <= 30000) {
  alert("Tomate el 133, viejo.");
} else if (distancia > 30000 && distancia <= 100000) {
  alert("Agarra el auto, amigazo.");
} else if (distancia > 100000) {
  alert("Toca desembolsar, avión será.");
}