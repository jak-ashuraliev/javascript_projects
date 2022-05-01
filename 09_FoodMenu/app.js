// menu items 
const menu = [
    {
        id: 1,
        title: "Smothered Chicken Burger",
        category: "burgers",
        price: 15.99,
        img: "./images/menu-item-burger.png",
        description: "Grilled chicken breast with sautéed onions, green peppers and mushrooms topped with provolone cheese served on a toasted brioche bun.",
        calories: 1121
    },
    {
        id: 2,
        title: "Western BBQ Burger",
        category: "burgers",
        price: 15.99,
        img: "./images/menu-item-burger2.png",
        description: "Grilled 8oz. burger served with bbq sauce, cheddar cheese, bacon and onion rings on a toasted brioche bun.",
        calories: 1330
    },
    {
        id: 3,
        title: "Philly Cheesesteak Sandwich",
        category: "sandwiches",
        price: 12.29,
        img: "./images/menu-item-sandwich.png",
        description: "Shaved steak sautéed with onions, peppers and mushrooms topped with provolone cheese served on a toasted hoagie bun.",
        calories: 1241
    },
    {
        id: 4,
        title: "Buffalo Chicken Sandwich",
        category: "sandwiches",
        price: 13.45,
        img: "./images/menu-item-sandwich2.png",
        description: "Everything you love about our wings, but in a sandwich. Hand-breaded chicken breast tossed in your favorite wing sauce, topped with lettuce and tomato and served on a toasted brioche bun.",
        calories: 1021
    },
    {
        id: 5,
        title: "Chicken Garden Salad",
        category: "salads",
        price: 14.29,
        img: "./images/menu-item-salad.png",
        description: "Romaine Lettuce with diced tomatoes, cucumbers, cheddar and Monterey cheese croutons and your choice of dressing topped with grilled or fried chicken strips.",
        calories: 929
    },
    {
        id: 6,
        title: "Chicken Caesar Salad",
        category: "salads",
        price: 14.29,
        img: "./images/menu-item-salad2.png",
        description: "Romaine mixed with parmesan and croutons tossed with a creamy Caesar dressing topped with grilled or fried chicken.",
        calories: 829
    },
    {
        id: 7,
        title: "Naked Wings",
        category: "wings",
        price: 16.49,
        img: "./images/menu-item-wings.png",
        description: "Non breaded wings with your choice of sauce. Served 10 pc",
        calories: 1360
    },
    {
        id: 8,
        title: "Smoked Wings",
        category: "wings",
        price: 16.49,
        img: "./images/menu-item-wings2.png",
        description: "Wings marinated and smoked served with your choice of dry rub or sauce.. Served 10 pc",
        calories: 1360
    }
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

// load all items when page loads
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();
});


// function to display menu items 
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item){ 
        return `
            <article class="menu-item">
                <img src="${item.img}" alt="${item.title}" class="photo">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">
                        ${item.description}
                    </p>
                    <p class="calories">Calories: <span class="caloires">${item.calories}</span></p>
                </div>
            </article>`
    });

    // return a new string by concatenating all the array elements
    displayMenu = displayMenu.join("");

    // add/insert our data/displayMenu in the HTML
    sectionCenter.innerHTML = displayMenu;
};

// display menu buttons
function displayMenuButtons() {
    const categories = menu.reduce(function(values, item){
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);

    // filter buttons
    const filterButtons = categories.map(function(category){
        return `<button class="btn-filter" type="button" data-type=${category}>${category}</button>`
    }).join("");
    
    btnContainer.innerHTML = filterButtons;

    const btnFilter = btnContainer.querySelectorAll('.btn-filter');

    // filter items
    btnFilter.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.type;
            const menuCategory = menu.filter(function(menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }

            // add active class to the button
            btnFilter.forEach(function(btn){
                btn.classList.remove('active')
            });
            this.classList.add('active');
        
        });
    });
  
};