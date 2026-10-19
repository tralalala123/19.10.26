
function licznik(){
    let liczba = localStorage.getItem('iloscwejsc') || 0;
    liczba = Number(liczba) + 1;
    localStorage.setItem('iloscwejsc', liczba);
    return liczba;
}

window.onload = function(){
    const aktualnewejscia = licznik();
    document.getElementById('wynikl').innerHTML = 'Liczba wejść na stronę: ' + aktualnewejscia;
};