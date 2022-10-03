let menuItems = document.getElementById('menuItems')

menuItems.style.maxHeight = "0px"

function menutoggle(){
    if(menuItems.style.maxHeight == "0px")
    {
        menuItems.style.maxHeight = "200px" 
    }
    else{
        menuItems.style.maxHeight = "0px" 
    }
}

var mainImage = document.getElementById('productImage')    
var smallImages = document.getElementsByClassName('small-image')


smallImages[0].onclick = function(){
mainImage.src = smallImages[0].src;
}

smallImages[1].onclick = function(){
mainImage.src = smallImages[1].src;
}

smallImages[2].onclick = function(){
mainImage.src = smallImages[2].src;
}

smallImages[3].onclick = function(){
mainImage.src = smallImages[3].src;
}