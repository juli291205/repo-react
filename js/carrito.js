const listaProductos = [
    {
        id: 1,
        nombre: "Guantes",
        precio: 100,
        stock: 10,
    },
    {
        id: 2,
        nombre: "Botas",
        precio: 120,
        stock: 10,
    },{
        id: 3,
        nombre: "Cascos",
        precio: 210,
        stock: 102,
    },{
        id: 4,
        nombre: "Accesorios",
        precio: 600,
        stock: 20,
    },{
        id: 5,
        nombre: "Comunicadores",
        precio: 500,
        stock: 10,
    }
]

let catalog = document.getElementById(`items`)
let cartList = document.getElementById("carrito")
let buttonEmpty = document.getElementById("boton-vaciar")
let totalValue = document.getElementById("total")
let cart = []

buttonEmpty.addEventListener("click", emptyButtoHnadler)

loadCartFromStorage()
renderCart()

listaProductos.forEach((prod) => {
    let container = document.createElement("div")
    container.classList.add("card", "col-sm-4")
    //body
    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    //title
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    cardTitle.innerText = prod.nombre
    //precio
    let cardPrecio = document.createElement("p")
    cardPrecio.classList.add("card-text")
    cardPrecio.innerText = `$${prod.precio}`
    //stock
    let cardStock = document.createElement("p")
    cardStock.classList.add("card-text")
    cardStock.innerText = `stock: ${prod.stock}`
    // button
    let cardButton = document.createElement("button")
    cardButton.classList.add("btn", "btn-primary")
    cardButton.innerText = `comprar`
    cardButton.setAttribute("mark", prod.id)
    cardButton.addEventListener("click", addProdToCart)

    cardBody.append(cardTitle)
    cardBody.append(cardPrecio)
    cardBody.append(cardStock)
    cardBody.append(cardButton)
    container.append(cardBody)
    catalog.append(container)

})

function addProdToCart(event){
    cart.push(event.target.getAttribute("mark"))
    renderCart()
}

function renderCart(){

    saveCartToStorage()

    cartList.innerHTML = ""

    let cartWithoutRepeatedElements = [...new Set(cart)]

    cartWithoutRepeatedElements.forEach((itemId) =>{
        let item = listaProductos.filter((producto) =>{
            return producto.id === parseInt(itemId)
        })
        let quantity = cart.reduce((total, id)=>{
            return id == itemId ? total += 1 : total
        }, 0)


    let linea = document.createElement("li")
    linea.classList.add("list-group-item", "text-right", "mx-2")
    linea.innerText = `${quantity} x ${item[0].nombre} - $${item[0].precio}`

    let buttonDelete = document.createElement("button")
    buttonDelete.classList.add("btn", "btn-danger", "mx-5")
    buttonDelete.innerText = "X"
    buttonDelete.dataset.item= itemId
    //buttonDelete.addEvenlistener("click", deleteProduct)

    linea.append(buttonDelete)
    cartList.append(linea)
    })

    totalValue.innerText = calculateTotalPrice()
}

function deleteProduct(event){
    let id = event.target.dataset.item
    cart = cart.filter((cartId) => {
        return cartId != id
    })

    renderCart()
}

function emptyButtoHnadler(){
    cart =[]
    cartList.innerHTML = ""
    totalValue.innerText = 0
}

function calculateTotalPrice(){
    return cart.reduce((total, itemId) => {
        let item = listaProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })
        return total + item[0].precio
    }, 0)
}   

function saveCartToStorage(){
    localStorage.setItem("cart", JSON.stringify(cart))
}

function loadCartFromStorage(){
    if(localStorage.getItem("card") !== null){
        cart = JSON.parse(localStorage.getItem("cart"))
    }
}