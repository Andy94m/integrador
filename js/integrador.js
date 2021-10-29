$(document).ready(function() {
    $('h1').show(2000);
})

/*function enviarPedidoApi() {
    var entradaUsuario = document.getElementById("input").value;
    console.log(userInput)

    var giphyApiKey = "fXiS4OcG445ehgz683OhO4alDdc6Jrk6"
    var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${entradaUsuario}&rating=g&api_key=${giphyApyKey}`

    fetch(giphyApiURL).then(function(data){
        return data.json()
    })
    .then(function(json){
        console.log(json.data[0].images.fixed_height.url)
        var imgPath = json.data[0].images.fxed_height.url
        var img = document.createElement("img")
        img.setAttribute("src",imgPath)
        document.body.appendChild(img)
    })
}

const mostrarGif = () => {
    $.get(`https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=fXiS4OcG445ehgz683OhO4alDdc6Jrk6&limit=5`, (respuesta) => {
        console.log(respuesta);
        console.log(respuesta.data);
    });
}*/



/*function mostrarGif () {
    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=fXiS4OcG445ehgz683OhO4alDdc6Jrk6&limit=5',
        success: function (respuesta) {
            console.log (respuesta);
            console.log (respuesta.data);
        },
        error: function () {
            console.log ("no se ah podido obtener la iinformacion");
        }

    });
}*/

/*
function mostrarGif () {
    let data = {
        type: "GET",
        url: "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=fXiS4OcG445ehgz683OhO4alDdc6Jrk6&limit=5",
        
        success: (respuesta) => {
            console.log(respuesta)
            console.log(respuesta.data)
        },

        error: () => {
            console.log ("Error al llamar a la API");
        }
    };

    $.ajax(data);
} 
*/

function mostrarGif () {
    var userInput = document.getElementById("input").value
    console.log(userInput);
    console.log(mostrarGif)

    var giphyApiKey = "fXiS4OcG445ehgz683OhO4alDdc6Jrk6"
    var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`

    fetch (giphyApiURL).then(function (data) {
        return data.json()
    })
    
    .then(function(data.json ) {
        for (var i = 0; i < json.lenght; i++){
            console.log(json.data[0].images.fixed_height.url)
            var imgPath =json.data[0].images.fixed_height.url//URL gif
            var img = document.createElement("img") //crea el html
            img.setAttribute("src", imgPath) //asigna el URL al html
            document.body.appendChild(img)
        }

    })
}

/*function gotData(giphy) {
    for (var i = 0; i < giphy.data.lenght; i++){
        createImageBitmap(giphy.data[i].images.fixed_height.url);
    }
}*/