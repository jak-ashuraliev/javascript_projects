// variation one

const articles = document.querySelectorAll('.article');

articles.forEach(function(article) {
    const btn = article.querySelector('.btn-article');
    btn.addEventListener('click', function() {
        article.classList.toggle('show-text');
    });
});


// variation two 

// const buttons = document.querySelectorAll('.btn-article');

// buttons.forEach(function(button){
//     button.addEventListener('click', function(e){
//       const parentArticle = e.currentTarget.parentElement.parentElement;
//       parentArticle.classList.toggle('show-text')

//     });
// });