const maincontent = document.querySelector('.main-content');
const buttons = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content-item');

maincontent.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id) {
        // remove and add active class from the button
        buttons.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        })

        // hide other articles
        articles.forEach(function(article){
            article.classList.remove('active');
        })

        const articleElement = document.getElementById(id);
        articleElement.classList.add('active');
    }
})