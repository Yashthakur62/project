$(document).ready(function() {
    var productList = window.localStorage.getItem('product-list');
    productList = productList === null || productList === '' ? [] : productList;
    productList = productList.length > 0 ? JSON.parse(productList) : [];

    var totalCount = 0;
    for(var i=0; i<productList.length; i++) {
        totalCount = totalCount + productList[i].count;
    }

    $('#cart-count').html(totalCount);
})



var menuToggle = document.getElementById("btn-menu-toggle");
var navigationDrawer = document.getElementById("drawer");
var btnCloseDrawer = document.getElementById("btn-close-drawer");
var overlay = document.getElementById("overlay");

menuToggle.onclick = function() {
    overlay.style.display = "block";
    navigationDrawer.style.transform = "translateY(0%)";
}

function hideNavDrawer() {
    overlay.style.display = "none";
    navigationDrawer.style.transform = "translateX(100%)";
}

btnCloseDrawer.onclick = hideNavDrawer

overlay.onclick = hideNavDrawer