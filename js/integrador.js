$(document).ready(function() {
    $('h1').show(2000);
})


function apiURL() {
    var entradaUsuario = document.getElementById("input").value;
    console.log(entradaUsuario)

    var giphyApiKey = "fXiS4OcG445ehgz683OhO4alDdc6Jrk6"
    var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${entradaUsuario}&rating=g&api_key=${giphyApiKey}`

    return giphyApiURL;
}

function mostrarGif () {
    let link = apiURL();

    let data = {
        type: "GET",
        url: link,
        
        success: (respuesta) => {
            //console.log(respuesta)
            //console.log(respuesta.data)

            for ( let i = 0; i <= 5; i++){
                const gif = respuesta.data[i];
                agregarGif(gif.images.fixed_height.url, gif.title);
            }
        },

        error: () => {
            console.log ("Error al llamar a la API");
        }
    };

    $.ajax(data);
} 

const agregarGif = (imgURL, imgTitulo) => {
    /*console.log(imgURL);
    console.log(imgTitulo);
    
    var img = document.createElement("img");
    var titulo = document.createElement('h4');

    img.setAttribute("src",imgURL);
    titulo.innerText = `${imgTitulo}`;

    document.body.appendChild(img);
    document.body.appendChild(titulo);*/

    let divGif = $("#listarGif");

    divGif.append(`<div> <img src='${imgURL}'/> <h3>${imgTitulo} </h3> </div>`);

}

function mensaje (){
    var nombre = document.getElementById("name").value;
    console.log(nombre);


}