var searchBox = document.getElementById('search-box');
searchBox.onclick = function () {
    console.log('hello');
    searchBox.style.borderBottom = "1px solid #191919";
}
// Otwieranie koszyka podwójnym kliknięciem dedykowane dla urządzeń dotykowych
var basket = document.getElementById('basket');
var content = document.getElementById('basket-content');
basket.ondblclick = function () {
    if (content.classList.contains('closed')) {
        content.classList.remove('closed');
    } else {
        content.classList.add('closed');
    }
}
var navListEl = document.getElementsByClassName('nav-list-el');

// Rozwinięcie listy wybranej pozycji w menu. Po kliknięciu w inną pozycję niż "kategorie", w konsoli pojawia się błąd związany z faktem, że możliwość rozwinięcia listy dodałam tylko dla wyżej wymienionej pozycji w menu, gwoli zaprezentowania :)
for(el of navListEl){
    el.onclick=function(){
        let wrap = this.getElementsByClassName('wrapper');
        let arrow =this.getElementsByClassName('arrow')
        if(wrap[0].classList.contains('closed-mobile', 'closed')){
            wrap[0].classList.remove('closed-mobile', 'closed');
            arrow[0].classList.add('arrow-active')
        }else{
            wrap[0].classList.add('closed-mobile', 'closed');
            arrow[0].classList.remove('arrow-active')
        }

    }
}

// otwieranie menu przyciskiem hamburger
var hamburger = document.getElementById('hamburger')
var nav = document.getElementById('nav')
hamburger.onclick=function(){
    if(nav.classList.contains('closed-mobile', 'closed')){
        nav.classList.remove('closed-mobile', 'closed')
        hamburger.classList.add('hamburger-open')
    }else{
        nav.classList.add('closed-mobile', 'closed')
        hamburger.classList.remove('hamburger-open')
    }
}


