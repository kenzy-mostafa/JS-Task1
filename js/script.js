
var allProducts = document.querySelectorAll(".body-container  section  .product-list  li")
var div = document.querySelector("#show-product")
var btn = document.querySelector("#price-btn")
var checkout = document.querySelector("#checkout")
var showPrice = document.querySelector("#checkout #total-price")

var amount1 = document.querySelector("#product1-amount")
var amount2 = document.querySelector("#product2-amount")
var amount3 = document.querySelector("#product3-amount")
var amount4 = document.querySelector("#product4-amount")
var amount5 = document.querySelector("#product5-amount")
var amount6 = document.querySelector("#product6-amount")
var amount7 = document.querySelector("#product7-amount")
var amount8 = document.querySelector("#product8-amount")

var showProd1 = document.querySelector("#show-product  #num1")
var showProd2 = document.querySelector("#show-product  #num2")
var showProd3 = document.querySelector("#show-product  #num3")
var showProd4 = document.querySelector("#show-product  #num4")
var showProd5 = document.querySelector("#show-product  #num5")
var showProd6 = document.querySelector("#show-product  #num6")
var showProd7 = document.querySelector("#show-product  #num7")
var showProd8 = document.querySelector("#show-product  #num8")

var totalPrice = 0
var number = 0  //product number
var a1 = 0  //amount of 1st
var a2 = 0
var a3 = 0
var a4 = 0
var a5 = 0
var a6 = 0
var a7 = 0
var a8 = 0

console.log("The total price is:")

allProducts.forEach(function (item) {

    item.onclick = function () {

        div.style.visibility = "visible"
        div.style.opacity = "1"

        number = item.getAttribute("num")
        switch (number) {
            case "1":
                showProd1.style.display = "block"
                a1 += 1
                amount1.innerHTML = parseInt(a1)
                break;
            case "2":
                showProd2.style.display = "block"
                a2 += 1
                amount2.innerHTML = parseInt(a2)
                break;
            case "3":
                showProd3.style.display = "block"
                a3 += 1
                amount3.innerHTML = parseInt(a3)
                break;
            case "4":
                showProd4.style.display = "block"
                a4 += 1
                amount4.innerHTML = parseInt(a4)
                break;
            case "5":
                showProd5.style.display = "block"
                a5 += 1
                amount5.innerHTML = parseInt(a5)
                break;
            case "6":
                showProd6.style.display = "block"
                a6 += 1
                amount6.innerHTML = parseInt(a6)
                break;
            case "7":
                showProd7.style.display = "block"
                a7 += 1
                amount7.innerHTML = parseInt(a7)
                break;
            case "8":
                showProd8.style.display = "block"
                a8 += 1
                amount8.innerHTML = parseInt(a8)
                break;
        }


        totalPrice += +(item.getAttribute("price"))

        if (div.innerHTML != "") {
            btn.style.display = "block"
        }

    }

})


btn.onclick = function () {

    console.log(totalPrice)
    checkout.style.visibility = "visible"
    checkout.style.opacity = "1"
    showPrice.innerHTML = totalPrice + " EGP"
}