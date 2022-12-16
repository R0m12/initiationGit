const images = document.querySelectorAll("img"); 

const image = document.createElement("img");

for(let elt of images) {
    elt.addEventListener("mouseover", (event)=>{
        image.animate([{opacity:0}],options).finished.then(()=>{
            image.src = elt.src;
            figcaption.textContent = elt.alt; 
            image.animate([{opacity:1}],options)
        })
        elt.animate(keyframes1, options);
    });
    elt.addEventListener("mouseout", ()=>{
        elt.animate(keyframes2, options);
    });
}

const keyframes1 = [
    {
        transform: "scale(1.1)",
        zIndex: 2
    }
];

const keyframes2 = [
    {
        transform: "scale(1)",
        zIndex: 1
    }
];

const options = {
    duration: 500,
    fill: "forwards"
}