let form=document.querySelector("form");
let inp=document.querySelectorAll("input");
let main=document.querySelector("#main");

form.addEventListener("submit",function(det){
    det.preventDefault();

    let card=document.createElement("div");
    card.classList.add("card");

    let img=document.createElement("img");
    img.setAttribute("src",inp[0].value);
    img.classList.add("image");

    let h2=document.createElement("h2");
    h2.textContent=inp[1].value;

    let h3=document.createElement("h3");
    h3.textContent=inp[2].value;

    let h32=document.createElement("h2");
    h32.textContent=inp[3].value;

    let p=document.createElement("p");
    p.textContent=inp[4].value;

    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h32);
    card.appendChild(p);

    main.appendChild(card);

    inp.forEach(function(e){
        if(e.type!=="submit"){
            e.value="";
        }
    });
    
});