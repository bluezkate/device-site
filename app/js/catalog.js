const searchBar = document.getElementById('mainSearch'),
      searchButton = document.getElementById('searchButton'),
      catalogDropDown = document.querySelector('.navigation__catalog-plus'),
      catalogList = document.querySelector('.header__catalog');

let productsAll = document.getElementById('productsAll');



catalogDropDown.addEventListener('click', showDropDown);
searchBar.addEventListener('focus', activateSearchButton);
searchBar.addEventListener('blur', deactivateSearchButton);
productsAll.addEventListener('mouseover', showHover);
productsAll.addEventListener('mouseout', hideHover);

// Show DropDown Catalog 
function showDropDown () {
    
    if (catalogList.classList.contains("visually-hidden")) {
        catalogList.classList.remove("visually-hidden");
    } else catalogList.classList.add("visually-hidden");

}

// Activate Search Button
function activateSearchButton () {
    searchButton.classList.remove("visually-hidden");
}

function deactivateSearchButton () {
    searchButton.classList.add("visually-hidden");
}


function showHover (event) {
    let target = event.target;

    while (target != productsAll) {
      if (target.tagName == 'IMG') {

        target.parentNode.childNodes[3].classList.remove('visually-hidden');
        return;

      } 
      target = target.parentNode;
    }

}

function hideHover (event) {
    let target = event.target;

    while (target != productsAll) {
      if (target.className == 'sort__item-hover') {

        target.parentNode.childNodes[3].classList.add('visually-hidden');
        return;
      } 

      target = target.parentNode;
    }

}