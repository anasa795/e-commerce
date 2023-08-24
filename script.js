// let links = document.getElementsByTagName('a')
// console.log(links)

// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', (e) => {
//     links[i].classList.remove('active')
//     console.log(links[i])
//     links[i].classList.add('active')
//   })
// }

/****************slider*****************/
/************************** */
let slide = document.querySelectorAll('.slide')
let increaseBtn = document.querySelector('.incr')
let decreaseBtn = document.querySelector('.desc')

let slideCounter = 0
function display() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = 'none'
  }

  slide[slideCounter].style.display = 'flex'
}

function goRight() {
  slideCounter++
  if (slideCounter > slide.length - 1) {
    slideCounter = 0
  }
  display()
}

function goLeft() {
  slideCounter--
  if (slideCounter < 0) {
    slideCounter = 2
  }
  display()
}

let intr = setInterval(goRight, 1000)

function set() {
  intr = setInterval(goRight, 1000)
}

function get() {
  clearInterval(intr)
}

/***********left**********/
decreaseBtn.addEventListener('click', function (e) {
  goLeft()
})
decreaseBtn.addEventListener('mouseenter', (e) => {
  get()
})
decreaseBtn.addEventListener('mouseleave', (e) => {
  set()
})

/***********right**********/
increaseBtn.addEventListener('click', function (e) {
  goRight()
})
increaseBtn.addEventListener('mouseenter', (e) => {
  get()
})
increaseBtn.addEventListener('mouseleave', (e) => {
  set()
})

///////////////////////////////////////////////////////////////////

/*****************************************products*****************/
let products = document.querySelector('.products')
let cate1 = document.querySelector('.cate1')
let cate2 = document.querySelector('.cate2')
let cate3 = document.querySelector('.cate3')
let cate4 = document.querySelector('.cate4')
let search = document.querySelector('.search')
let countCard = document.querySelector('.countCard')
let cartNav = document.querySelector('.cartNav')
let cart = document.querySelector('.cart')

let add
let arrayOfProductLocalStorge = []
let arrayOfIdLocalStorge = []
let numPro

console.log(localStorage)

/*****************restore localStorage********************* */
if (localStorage.length > 0) {
  arrayOfProductLocalStorge = JSON.parse(
    localStorage.getItem('arrayOfProductLocalStorge'),
  )
} else {
  arrayOfProductLocalStorge = []
}
//////////////////////
if (localStorage.length > 0) {
  arrayOfIdLocalStorge = JSON.parse(
    localStorage.getItem('arrayOfIdLocalStorge'),
  )
} else {
  arrayOfIdLocalStorge = []
}
console.log(arrayOfIdLocalStorge)
console.log(arrayOfProductLocalStorge)
///////////////////////////////////////
if (localStorage.length > 0) {
  numPro = JSON.parse(localStorage.getItem('arrayOfProductLocalStorge')).length
} else {
  numPro = ''
}
console.log(localStorage.length)
countCard.innerHTML = numPro
//https://fakestoreapi.com/

async function getdata() {
  let res = await fetch('https://fakestoreapi.com/products')
  console.log(res)
  let data = await res.json()
  let product = data
  let countCard0 = numPro
  // let cardIdArray = []
  /////////////////////////////////////
  function com(i) {
    return `<div class="card">
            <img src="${product[i].image}" alt="">
            <p>${product[i].title.slice(0, 50)}...</p>
            <div class="price">
                <h3>${product[i].price} $</h3>
                <p class="add">Add To Cart</p>
            </div>
        </div>`
  }

  /////////////////////////////////////////////////////
  products.innerText = ''
  for (let i = 0; i < product.length; i++) {
    products.innerHTML += com(i)
  }
  add = document.querySelectorAll('.add')
  addBtn(add)
  // console.log(product)
  ////////////////////////////////////////
  search.addEventListener('input', (e) => {
    product = data.filter((c) =>
      c.title.toLocaleLowerCase().includes(search.value.toLocaleLowerCase()),
    )
    products.innerText = ''
    for (let i = 0; i < product.length; i++) {
      products.innerHTML += com(i)
    }
    add = document.querySelectorAll('.add')
    addBtn(add)
  })

  //////////////////////////////////////
  cate1.addEventListener('click', (e) => {
    product = data.filter((c) => c.category == "men's clothing")
    products.innerText = ''
    for (let i = 0; i < product.length; i++) {
      products.innerHTML += com(i)
    }
    add = document.querySelectorAll('.add')
    addBtn(add)
  })
  cate2.addEventListener('click', (e) => {
    product = data.filter((c) => c.category == "women's clothing")
    products.innerText = ''
    for (let i = 0; i < product.length; i++) {
      products.innerHTML += com(i)
    }
    add = document.querySelectorAll('.add')
    addBtn(add)
  })
  cate3.addEventListener('click', (e) => {
    product = data.filter((c) => c.category == 'jewelery')
    products.innerText = ''
    for (let i = 0; i < product.length; i++) {
      products.innerHTML += com(i)
    }
    add = document.querySelectorAll('.add')
    addBtn(add)
  })
  cate4.addEventListener('click', (e) => {
    product = data.filter((c) => c.category == 'electronics')
    products.innerText = ''
    for (let i = 0; i < product.length; i++) {
      products.innerHTML += com(i)
    }
    add = document.querySelectorAll('.add')
    addBtn(add)
  })

  /////////////////////////////////////

  // console.log(add[0])
  /////////////////////////////////////////////////////
  // window.localStorage.clear()
  function addBtn(add) {
    for (let i = 0; i < add.length; i++) {
      add[i].addEventListener('click', (e) => {
        // console.log(arrayOfIdLocalStorge.includes(product[i].id))
        if (!arrayOfIdLocalStorge.includes(product[i].id)) {
          arrayOfIdLocalStorge.push(product[i].id)
          countCard.innerText = ++countCard0

          // arrayOfIdLocalStorge = cardIdArray
          localStorage.setItem(
            'arrayOfIdLocalStorge',
            JSON.stringify(arrayOfIdLocalStorge),
          )

          console.log(arrayOfProductLocalStorge)

          arrayOfProductLocalStorge.push(product[i])
          localStorage.setItem(
            'arrayOfProductLocalStorge',
            JSON.stringify(arrayOfProductLocalStorge),
          )
        } else {
          console.log('object')
        }
        console.log()
      })
    }
  }
}

getdata()

/***************************************page cart****************************************************** */
cart.addEventListener('click', (e) => {
  cart.style.display = 'none'
})

/************************to top************************** */
let scrollToTopBtn = document.getElementById('scrollToTop')

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function handleScroll() {
  if (window.scrollY >= 100) {
    scrollToTopBtn.style.display = 'block'
  } else {
    scrollToTopBtn.style.display = 'none'
  }
}

// Add a scroll event listener to the window
window.addEventListener('scroll', handleScroll)

scrollToTopBtn.addEventListener('click', scrollToTop)
