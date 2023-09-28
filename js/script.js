const container = document.getElementById('container');


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];



posts.forEach( post => container.innerHTML += template(post) )

function template(post){

    const id = post.id;
    const content = post.content;
    const media = post.media;
    const author = post.author.name;
    const image = post.author.image;
    let likes = post.likes;
    const created = post.created;
    return`
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                       <img class="profile-pic" src="${image}" alt="${author}">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author}</div>
                        <div class="post-meta__time">${created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div> 
            </div>            
        </div>
    
    `
    
}


const likeBtn = document.querySelectorAll('.js-like-button');
const counter = document.querySelectorAll('.js-likes-counter');
let mylike=[];


likeBtn.forEach((btn,index) =>{
    btn._id = posts[index].id;
    btn._index = index;

    btn.addEventListener('click', function(event){

    event.preventDefault();
    this.classList.toggle('like-button--liked');

    const postLiked = posts.find( post => btn._id === post.id);

    if(mylike.includes(this._id)){
        mylike = mylike.filter( likeId => likeId !==  this._id);
        postLiked.likes--; 
    }else{
        postLiked.likes++;
        mylike.push(this._id);

    }
    counter[this._index].innerText = postLiked.likes;
    
  
    });



})







