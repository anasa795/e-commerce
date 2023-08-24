let cart = document.querySelector('.cartpage')
let tp = document.querySelector('.tp')
let clearBtn = document.querySelector('.clear')

let cardIdArray = []
if (localStorage.getItem('arrayOfProductLocalStorge')) {
  cardIdArray = JSON.parse(localStorage.getItem('arrayOfProductLocalStorge'))
} else {
  cardIdArray = []
}
/////////////////////////////////////////
let add
let remove
let cards
let totalPriceParagraph
let totalPriceForAllProduct = 0

for (let i = 0; i < cardIdArray.length; i++) {
  totalPriceForAllProduct += cardIdArray[i].price
}

function render(i, totalPrice, quantity) {
  return ` <div class="card">
            <img src="${cardIdArray[i].image}" alt="">
            <div class="descripion">
                <p>${cardIdArray[i].description}</p>
                <h4>${cardIdArray[i].title}</h4>
                <div class="total">

                    <h3><span>price for one piece :</span>${cardIdArray[i].price} $</h3>
                    <h3><span>quantity :</span> <span  class='quantity' >${quantity}</span> </h3>
                    <h3><span>total price : </span><p class='totalPrice'>${totalPrice}$</p></h3>
                </div>
            </div>
            <div class="price">
                <p class="add">Add one </p>
                <p class="remove">remove one</p>
            </div>
        </div>`
}
//  let totalPrice = 0
// let quantity = 1

if (cardIdArray.length > 0) {
  for (let i = 0; i < cardIdArray.length; i++) {
    cart.innerHTML += render(i, cardIdArray[i].price, 1)
    add = document.querySelectorAll('.add')
    remove = document.querySelectorAll('.remove')
    totalPriceParagraph = document.querySelectorAll('.totalPrice')
    quantityParagraph = document.querySelectorAll('.quantity')
    console.log(quantityParagraph)
    tp.innerHTML = totalPriceForAllProduct.toFixed(2)
    // quantityParagraph[i].innerHTML = quantity
  }
}

for (let i = 0; i < cardIdArray.length; i++) {
  let totalPrice = 0
  let quantity = 1
  add[i].addEventListener('click', (e) => {
    quantity++
    totalPrice = cardIdArray[i].price * quantity
    totalPriceForAllProduct += cardIdArray[i].price
    totalPriceParagraph[i].innerHTML = totalPrice
    tp.innerHTML = totalPriceForAllProduct.toFixed(2)
    quantityParagraph[i].innerHTML = quantity
  })

  remove[i].addEventListener('click', (e) => {
    quantity--
    if (quantity >= 0) {
      totalPrice = cardIdArray[i].price * quantity
      totalPriceForAllProduct -= cardIdArray[i].price
      totalPriceParagraph[i].innerHTML = totalPrice
      tp.innerHTML = totalPriceForAllProduct.toFixed(2)
      quantityParagraph[i].innerHTML = quantity
    } else {
      quantity = 0
      totalPrice = 0
    }
  })
}

clearBtn.addEventListener('click', (e) => {
  localStorage.clear()
  tp.innerHTML = ''
  for (let i = 0; i < cardIdArray.length; i++) {
    cart.innerHTML = ''
  }
})
