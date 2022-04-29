// menu items 
const menu = [
    {
        id: 1,
        title: "Smothered Chicken Sandwich",
        category: "burgers",
        price: 15.99,
        img: "./images/menu-item-burger.png",
        description: "Grilled chicken breast with sautéed onions, green peppers and mushrooms topped with provolone cheese served on a toasted brioche bun.",
        calories: 1121
    },
    {
        id: 2,
        title: "Philly Cheesesteak Sandwich",
        category: "sandwiches",
        price: 12.29,
        img: "./images/menu-item-sandwich.png",
        description: "Shaved steak sautéed with onions, peppers and mushrooms topped with provolone cheese served on a toasted hoagie bun.",
        calories: 1241
    },
    {
        id: 3,
        title: "Chicken Garden Salad",
        category: "salads",
        price: 14.29,
        img: "./images/menu-item-salad.png",
        description: "Romaine Lettuce with diced tomatoes, cucumbers, cheddar and Monterey cheese croutons and your choice of dressing topped with grilled or fried chicken strips.",
        calories: 929
    },
    {
        id: 4,
        title: "Breaded Wings",
        category: "salads",
        price: 16.49,
        img: "./images/menu-item-wings.png",
        description: "Breaded wings with your choice of sauce and dressing. Served 10 pc",
        calories: 1360
    }
];

const sectionCenter = document.querySelector('.section-center');
const btnFilter = document.querySelectorAll('.btn-filter');

// load all items when page loads
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
});

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
    });
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
                        <h4 class="price">${item.price}</h4>
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