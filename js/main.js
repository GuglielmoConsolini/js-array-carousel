let imageActive;
let imageNext;
let imagePrev


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




document.getElementById("prev").addEventListener("click" , function(){


    for (let x = 0; x < listaImmagini.length; x++){

        const previous = listaImmagini[x];
        console.log(x , previous)
    
        if(previous.classList.contains("active")){
    
            previous.classList.remove("active")
            imageActive = x
        }
    
    }
    
    imagePrev = imageActive - 1;
    
    if (imagePrev < 0){
        imagePrev = listaImmagini.length - 1;
    }
    
    
    listaImmagini[imagePrev].classList.add("active");

})

