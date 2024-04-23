let imageActive;
let imageNext;

let listaImmagini = document.getElementsByClassName("slide");
console.log(listaImmagini);

document.getElementById("next").addEventListener("click" , function(){


    for (let i = 0; i < listaImmagini.length; i++){

        const immagine = listaImmagini[i];
        console.log(i , immagine)
    
        if(immagine.classList.contains("active")){
    
            immagine.classList.remove("active")
            imageActive = i
        }
    
    }
    
    imageNext = imageActive + 1;
    
    if (imageNext >= listaImmagini.length){
        imageNext = 0;
    }
    
    
    listaImmagini[imageNext].classList.add("active");


})

// for (let i = 0; i < listaImmagini.length; i++){

//     const immagine = listaImmagini[i];
//     console.log(i , immagine)

//     if(immagine.classList.contains("active")){

//         immagine.classList.remove("active")
//         imageActive = i
//     }

// }

// imageNext = imageActive + 1;

// if (imageNext >= listaImmagini.length){
//     imageNext = 0;
// }


// listaImmagini[imageNext].classList.add("active");