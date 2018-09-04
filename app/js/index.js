const searchBar = document.getElementById('mainSearch'),
      searchButton = document.getElementById('searchButton'),
      catalogDropDown = document.querySelector('.navigation__catalog-plus'),
      catalogList = document.querySelector('.header__catalog'),
      slideListProduct = document.querySelector('.top-product__slide-list'),
      productSlide1 = document.querySelector('.top-product__1'),
      productSlide2 = document.querySelector('.top-product__2'),
      productSlide3 = document.querySelector('.top-product__3'),
      productSliderButton1 = document.getElementById('slider__slide_1'),
      productSliderButton2 = document.getElementById('slider__slide_2'),
      productSliderButton3 = document.getElementById('slider__slide_3'),
      slideListServices = document.querySelector('.description__slide-list'),
      serviceSlide1 = document.querySelector('.description__slide-1'),
      serviceSlide2 = document.querySelector('.description__slide-2'),
      serviceSlide3 = document.querySelector('.description__slide-3'),
      serviceSliderButton1 = document.getElementById('servicesDelivery'),
      serviceSliderButton2 = document.getElementById('servicesGuarantee'),
      serviceSliderButton3 = document.getElementById('servicesCredit');


catalogDropDown.addEventListener('click', showDropDown);
productSliderButton1.addEventListener('click', changeTo1Product);
productSliderButton2.addEventListener('click', changeTo2Product);
productSliderButton3.addEventListener('click', changeTo3Product);
searchBar.addEventListener('focus', activateSearchButton);
searchBar.addEventListener('blur', deactivateSearchButton);
serviceSliderButton1.addEventListener('click', changeToDelivery);
serviceSliderButton2.addEventListener('click', changeToGuarantee);
serviceSliderButton3.addEventListener('click', changeToCredit);

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


// Top Product Slider
function changeTo1Product () {
    slideListProduct.style.transform = "translateX(0px)";
}

function changeTo2Product () {
    slideListProduct.style.transform = "translateX(-1166px)";
}

function changeTo3Product () {
    slideListProduct.style.transform = "translateX(-2340px)";
}


// Services Slider

function changeToDelivery () {
    slideListServices.style.transform = "translateX(0px)";
}

function changeToGuarantee () {
    slideListServices.style.transform = "translateX(-760px)";
}

function changeToCredit () {
    slideListServices.style.transform = "translateX(-1530px)";
}