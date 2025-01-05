const nextEl=document.querySelector(".next");
const prevEl=document.querySelector(".prev");

const imageContainerEl=document.querySelector(".img-container");

const imgEl=document.querySelectorAll("img");



let currentImage=1;

var timeout;


nextEl.addEventListener("click",()=>{

    currentImage++;
    clearTimeout(timeout);
    updateImage();

})

prevEl.addEventListener("click",()=>{

    currentImage--;
    clearTimeout(timeout);
    updateImage();

    
})

updateImage();

function updateImage()
{

    if(currentImage > imgEl.length)
    {
        currentImage=1;
    }else  if(currentImage < 1)
    [
        currentImage=imgEl.length
    ]
 imageContainerEl.style.transform=`translateX(-${(currentImage - 1) * 500}px)`;  
 
 timeout=setTimeout(()=>{
    currentImage++;
    updateImage();
 },3000)


}

