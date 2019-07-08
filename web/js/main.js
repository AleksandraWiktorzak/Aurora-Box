// focus na input
var searchBox = document.getElementById('search-box');
searchBox.onclick = function(){
    console.log('hello');
    searchBox.style.borderBottom ="1px solid #191919";
}
// otwieranie koszyka
var basket = document.getElementById('basket');
var content = document.getElementById('basket-content');
basket.ondblclick = function(){
    if(content.classList.contains('closed')){
        content.classList.remove('closed');
    }else{
        content.classList.add('closed');
    }
}