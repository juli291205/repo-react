fetch("data.json")
.then((response) => response.json())
.then((info) => render(info));

const productos =[
    {
        id: 1,
        nombre: "Casco 1",
        precio: 50,
        img : "https://sc04.alicdn.com/kf/HTB1fHs5XXzsK1Rjy1Xb760OaFXaC.png",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Casco 2",
        precio: 200,
        img: "https://sc04.alicdn.com/kf/H158dded8629b4bec8011cf64aa5c7933U.jpg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Casco 3",
        precio: 100,
        img: "https://sc04.alicdn.com/kf/HLB10LcTRxTpK1RjSZFKq6y2wXXau.jpg",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Casco 4",
        precio: 300,
        img: "https://ae01.alicdn.com/kf/HTB1PJkHPVXXXXcTXXXXq6xXFXXX3/Casco-de-motocicleta-Vintage-para-hombre-y-mujer-Capacete-de-cara-abierta-Retro-con-doble-visera.jpg",
        cantidad: 1,
    },
];