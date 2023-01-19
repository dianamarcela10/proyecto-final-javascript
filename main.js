 
 const botonFavorito = document.getElementsByTagName("button")
 console.log(botonFavorito);
 
 



function mostrarPoductos(arrayProductos) {

    const cards = document.getElementById("cards");

    for (let iterator of arrayProductos) {
        
        let cardsElements = document.createElement("div")
        cardsElements.className = "cardsElements";
        cardsElements.innerHTML = `<img src=${iterator.image}>
                                    <h1>${iterator.title}</h1>                            
                                    <p>${iterator.description}</p>
                                    <h2>${iterator.price}</h2>
                                    <button> favoritos </button>`

        cards.appendChild(cardsElements)
    }

  localStorage.setItem("productos", arrayProductos)
}

async function fetchData() {

    const respons = await fetch('https://fakestoreapi.com/products')
    const data = await respons.json();

    mostrarPoductos(data);

}

fetchData()






