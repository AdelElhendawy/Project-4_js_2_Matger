document.addEventListener("contextmenu" , (e) => {
    e.preventDefault()
})                                                // جزء قفل الانسبكت
document.addEventListener("keydown" , (e) => {
    if(e.key == "f12" || e.key == "I"){
        e.preventDefault()
    }
})
// /////////////////////////////////////////////////////////////////////////////////////////////////

confirm(" Because you're registered, enjoy an exclusive discount! 🎁")
var allproduct = document.querySelectorAll(".checked")
var content = document.querySelector("#content")
var btn1 = document.querySelector("#btn1")
var del = document.querySelector("#del")
var totalprice = 0
var home = document.getElementById("out")
//? 3 متغيرات بتوع السرش
var inputSearch = document.getElementById("search")
var ProductList = document.querySelectorAll(".card")
var notFound = document.getElementById("notFound")



allproduct.forEach(function(item){
    item.onclick = function(){
        totalprice += +(item.getAttribute("price"))
        // content.innerHTML += item.textContent + "<br>"
        content.innerHTML += item.getAttribute("product") + "<br>"
        


        if(content.innerHTML != ""){

            btn1.style.display = "block"
            btn1.style.backgroundColor = "blue"
            btn1.style.color = "white"
            btn1.style.width = "100%"
            btn1.style.height = "40px"
            btn1.style.marginTop = "10px"
            btn1.style.borderRadius = "10px"
            




            del.style.display = "block"
            del.style.backgroundColor = "red"
            del.style.color = "white"
            del.style.width = "15%"
            del.style.height = "40px"
            del.style.marginTop = "10px"
            del.style.borderRadius = "10px"




            content.style.backgroundColor = "green"
            content.style.color = "white"
            content.style.width = "100%"
            content.style.textAlign = "center"
            content.style.marginTop = "10px"
            content.style.borderRadius = "10px"
            content.style.display = "block"

        }
    }
})






btn1.onclick = function(){
    if(totalprice > 200000){
        alert("You Got Discount 20%")
        totalprice -= 20000
    }
    document.getElementById("mony").innerHTML = totalprice
    mony.style.display = "block"
    mony.style.marginTop = "10px"
    mony.style.width = "fit-content"
    mony.style.textAlign = "center"
}




del.onclick = function(){
    content.innerHTML = " "
    document.getElementById("mony").innerHTML = totalprice = 0
    del.style.display = "none"
    btn1.style.display = "none"

}

// ? ///////////////////////////////////............out...........///////////////////

window.addEventListener("scroll" , () =>{
    if(window.scrollY > 800){
        home.style.display = "block"
    }else{
        home.style.display = "none"
    }
})

// ? //////////////////////////////.....................inputSearch................./////////////////

inputSearch.addEventListener("input" , () =>{
var inputValue = inputSearch.value.toLowerCase()
var anyVisible = false

    ProductList.forEach((item) =>{
        if(item.textContent.toLowerCase().includes(inputValue)){
            item.style.display = "list-item"
            anyVisible = true
        }else {
            item.style.display = "none"
        }
    })
    
    notFound.style.display = anyVisible ? "none" : "block"
})