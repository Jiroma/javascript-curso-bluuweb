var contenido = document.querySelector('#contenido');

function traer(){
    // contenido.innerHTML = `<p>adasfs</p>`


    fetch("texto.txt")
    .then(data => data.text())
    .then(data =>{
        console.log(data);
        contenido.innerHTML = `${data}`
    })
    //transforma el archivo txt a texto
    
}