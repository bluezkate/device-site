const searchBar = document.getElementById('mainSearch'),
      searchButton = document.getElementById('searchButton'),
      catalogDropDown = document.querySelector('.nav__catalog-plus'),
      catalogList = document.querySelector('.header__catalog');



catalogDropDown.addEventListener('click', showDropDown);
searchBar.addEventListener('focus', activateSearchButton);
searchBar.addEventListener('blur', deactivateSearchButton);

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
