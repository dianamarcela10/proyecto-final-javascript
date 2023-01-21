
const botonFavorito = document.getElementsByClassName("cardsElements")


function addProduct (){
forEach(item => {

});


}

function mostrarPoductos(arrayProductos) {

  const cards = document.getElementById("cards");

  for (let iterator of arrayProductos) {

    let cardsElements = document.createElement("div")
    cardsElements.className = "cardsElements";
    cardsElements.innerHTML = `<img src=${iterator.image}>
                                    <h1>${iterator.title}</h1>                            
                                    <p>${iterator.description}</p>
                                    <h2>${iterator.price}</h2>
                                    <button class="botonFavorito">favoritos</button>`

    cards.appendChild(cardsElements)
  }
  const botonFavorito = document.getElementsByClassName("botonFavorito");
  //console.log(botonFavorito);

  for (let i = 0; i < botonFavorito.length; i++) {
   // console.log(botonFavorito[i]);
   
  
  }
}



async function fetchData() {

  const respons = await fetch('https://fakestoreapi.com/products')
  const data = await respons.json();

  mostrarPoductos(data);

}

fetchData()

Swal.fire({
  icon: 'info',
  title: 'agregado favoritos',
  text: 'se agrego correctamente!',

})








