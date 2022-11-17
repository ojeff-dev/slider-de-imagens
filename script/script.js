let contador = 1;

setInterval(function() {
    document.getElementById('img'+contador).checked = true;
    contador++;

    if(contador > 10) {
        contador = 1;
    }
}, 3000)