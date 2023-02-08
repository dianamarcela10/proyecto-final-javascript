
const botonFavorito = document.getElementsByClassName("cardsElements");
const buttonCatalogo = document.getElementById("catalogo");
const buttonFavoritos = document.getElementById("favoritos");


buttonCatalogo.addEventListener("click", handleCatalogoClick);
buttonFavoritos.addEventListener("click", handleFavoritosClick);

function handleCatalogoClick(e) {
  const idElement = e.target.id;
  const elementCatalogo = document.getElementById(`${idElement}-element`);
  const elementFavoritos = document.getElementById("catalogo-element");

  if (elementCatalogo.style.display === "none") {
    elementCatalogo.style.display = "block";
  } else {
    elementFavoritos.style.display = "none";
  }
}

function handleFavoritosClick(e) {
  const idElement = e.target.id;
  const elementCatalogo = document.getElementById(`${idElement}-element`);
  const elementFavoritos = document.getElementById("favoritos-element");

  if (elementCatalogo.style.display === "none") {
    elementCatalogo.style.display = "block";
  } else {
    elementFavoritos.style.display = "none";
  }
}

function crearCards(elementMain, arrayProductos) {

  for (let iterator of arrayProductos) {

    let cardsElements = document.createElement("div")
    cardsElements.className = "cardsElements";
    cardsElements.id = `${iterator.id}-elements`;
    cardsElements.innerHTML = `<img src=${iterator.image}>
                                    <h1>${iterator.title}</h1>                            
                                    <p>${iterator.description}</p>
                                    <h2>${iterator.price}</h2>
                                    <button id="${iterator.id}" class="botonFavorito">favoritos</button>`


    elementMain.appendChild(cardsElements)
  }
  const botonFavorito = document.getElementsByClassName("botonFavorito");
  //console.log(botonFavorito);

  for (let i = 0; i < botonFavorito.length; i++) {
    botonFavorito[i].addEventListener("click", addProduct)

  }

}
function mostrarPoductos(arrayProductos) {
  const cards = document.getElementById("catalogo-element");

  crearCards(cards, arrayProductos);

  const botonFavorito = document.getElementsByClassName("botonFavorito");
  //console.log(botonFavorito);

  for (let i = 0; i < botonFavorito.length; i++) {
    botonFavorito[i].addEventListener("click", addProduct);
  }
}

function addProduct(e) {
  const idProducto = e.target.id;
  fetchProduct(idProducto);
}

function mostrarFavoritos(favoritos) {
  const arrayFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  arrayFavoritos.push(favoritos);
 // console.log(arrayFavoritos);
  localStorage.setItem('favoritos', JSON.stringify(arrayFavoritos))

  const $mainFavoritos = document.getElementById("favoritos-element");
  
  crearCards($mainFavoritos, arrayFavoritos);
 
  console.log("arrayFavoritos");



}

async function fetchData() {

  const respons = await fetch('https://fakestoreapi.com/products')
  const data = await respons.json();
  mostrarPoductos(data);

}

async function fetchProduct(id) {

  const respons = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await respons.json();
  mostrarFavoritos(data);
}




fetchData()

Swal.fire({
  icon: 'info',
  title: 'agregado favoritos',
  text: 'se agrego correctamente!',

})









