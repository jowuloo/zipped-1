var products;


$.getJSON( "products.json", function(data) {
    products = data.products;
    show(products);
});    


function show(products) {
    for(let i = 0; i < products.length; i++) {
        console.log(products[i]);
        const elem = document.createElement("div");
        elem.innerHTML = "<h3>" + products[i].Name + products[i].Genre + products[i].Price + products[i].Description + "</h3>";
        document.getElementById("products").appendChild(elem);
    }
    
    
}


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*var registration = document.getElementById('registration-link');
var visible = document.getElementById('registration-visible');
registration.addEventListener('click', function () {
   visible.classList.add("visible");
});
*/





(function(){
 
  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
  });
  
})();
