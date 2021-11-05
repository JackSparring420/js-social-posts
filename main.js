// creo array di oggetti
// var per segnare incremento like
const arrayOgg = [
    {
        "nome" : "Phil Mangione",
        "fotoProfilo" : "https://unsplash.it/300/300?image=15",
        "data" : "4 minuti fa",
        "post" : "loLorem ipsum dolor, sit amet consectetur adipisicing elit. Atque accusantium repudiandae porro numquam, consectetur tempore aperiam est ipsum quod architecto dicta vitae fugiat saepe in tempora dignissimos obcaecati repellendus ex!",
        "fotoPost" : "https://unsplash.it/600/300?image=171",
        "likes" : 80
    },
    
    {
        "nome" : "Phil Mangione",
        "fotoProfilo" : "https://unsplash.it/300/300?image=15",
        "data" : "4 minuti fa",
        "post" : "loLorem ipsum dolor, sit amet consectetur adipisicing elit. Atque accusantium repudiandae porro numquam, consectetur tempore aperiam est ipsum quod architecto dicta vitae fugiat saepe in tempora dignissimos obcaecati repellendus ex!",
        "fotoPost" : "https://unsplash.it/600/300?image=171",
        "likes" : 35
    },
    
    {
        "nome" : "Phil Mangione",
        "fotoProfilo" : "https://unsplash.it/300/300?image=15",
        "data" : "4 minuti fa",
        "post" : "loLorem ipsum dolor, sit amet consectetur adipisicing elit. Atque accusantium repudiandae porro numquam, consectetur tempore aperiam est ipsum quod architecto dicta vitae fugiat saepe in tempora dignissimos obcaecati repellendus ex!",
        "fotoPost" : "",
        "likes" : 43
    },
    
    {
        "nome" : "Phil Mangione",
        "fotoProfilo" : "https://unsplash.it/300/300?image=15",
        "data" : "4 minuti fa",
        "post" : "loLorem ipsum dolor, sit amet consectetur adipisicing elit. Atque accusantium repudiandae porro numquam, consectetur tempore aperiam est ipsum quod architecto dicta vitae fugiat saepe in tempora dignissimos obcaecati repellendus ex!",
        "fotoPost" : "https://unsplash.it/600/300?image=171",
        "likes" : 60
    }
    
]

// stampo array oggetti
const stamp = document.querySelector(".posts-list");
stampArrayOgg()

// incremento like al click
let buttons = document.querySelectorAll(".js-like-button");


for(let i=0; i< buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        const index = this.getAttribute("data-postid");
        arrayOgg[index].likes++;
        stampArrayOgg()
    }, );
}

function stampArrayOgg() {
    let card =""
    // prendo tutti gli oggetti nell'array
    for(let i = 0; i < arrayOgg.length; i++) {
        // inserisco gli ogg in una variabile per poter selezionare le propietà 
        var objArrayOgg = arrayOgg[i];

        // console.log(objArrayOgg);
        // stampo testo html per il creare il contenuto delle carte nella var teamCard inserendo le propietà degli oggetti  
        card += `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${objArrayOgg.fotoProfilo}" alt="${objArrayOgg.nome}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${objArrayOgg.nome}</div>
                    <div class="post-meta__time">${objArrayOgg.data}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
        <div class="post__image">
            <img src="${objArrayOgg.fotoPost}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" data-postid="${i}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${objArrayOgg.likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`
    }

// console.log(card);
stamp.innerHTML = card;
}