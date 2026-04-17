const headerContainer = document.getElementById("hearder_bottom");
const headerRasmContainer = document.querySelector(".header_rasm");
const box = document.getElementById("inp");
const mainContainer = document.getElementById("pizza_list");

const header_bottom_data = [
    { id: 1, img: "./img/Fire.png", name: "AKSIYA" },
    { id: 2, img: "./img/Pizza.png", name: "PIZZA" },
    { id: 3, img: "./img/Sushi.png", name: "SUSHI" },
    { id: 4, img: "./img/Drink.png", name: "NAPITKI" },
    { id: 5, img: "./img/Snacks.png", name: "FRRI" },
    { id: 6, img: "./img/Combo.png", name: "COMBO" },
    { id: 7, img: "./img/Dessert.png", name: "DESSERT" },
    { id: 8, img: "./img/Sauce.png", name: "SOUS" },
];

const header_rasm = [
    { id: 1, img: "./img/Group 81.png", name: "AKSIYA" },
    { id: 2, img: "./img/Group 82.png", name: "AKSIYA" },
    { id: 3, img: "./img/Group 81.png", name: "AKSIYA" },
    { id: 4, img: "./img/Group 82.png", name: "AKSIYA" },
];


// PIZZA BOLIM

let pizza_data = [
    {
        id: 1,
        img: "./img/Rectangle 4.png",
        name: "EASY PEASY огуречный расколбас",
        description: "Курица, Лук, Перец Халапеньо,",
        price: 399,
        count: 0,
        badge: "ХИТ"
    },
    {
        id: 2,
        img: "./img/Rectangle 4 (1).png",
        name: "Margarita Pitsa",
        description: "Klassik pomidor va motsarella pishlog'i...",
        price: 549,
        count: 0,
        badge: "NEW"
    },
    {
        id: 3,
        img: "./img/Rectangle 4 (2).png",
        name: "Margarita Pitsa",
        description: "Klassik pomidor va motsarella pishlog'i...",
        price: 249,
        count: 0,
        badge: "NEW"
    },
    {
        id: 4,
        img: "./img/Rectangle 4 (3).png",
        name: "Margarita Pitsa",
        description: "Klassik pomidor va motsarella pishlog'i...",
        price: 630,
        count: 0,
        badge: "NEW"
    },
    {
        id: 5,
        img: "./img/Rectangle 4 (3).png",
        name: "Margarita Pitsa",
        description: "Klassik pomidor va motsarella pishlog'i...",
        price: 630,
        count: 0,
        badge: "NEW"
    },
    {
        id: 6,
        img: "./img/Rectangle 4 (2).png",
        name: "Margarita Pitsa",
        description: "Klassik pomidor va motsarella pishlog'i...",
        price: 249,
        count: 0,
        badge: "NEW"
    },
    {
        id: 7,
        img: "./img/Rectangle 4.png",
        name: "EASY PEASY огуречный расколбас",
        description: "Курица, Лук, Перец Халапеньо, фирменный соус...",
        price: 399,
        count: 0,
        badge: "ХИТ"
    },
    {
        id: 8,
        img: "./img/Rectangle 4 (1).png",
        name: "Margarita Pitsa",
        description: "Klassik pomidor va motsarella pishlog'i...",
        price: 549,
        count: 0,
        badge: "NEW"
    },
];


function rendercard(data, element) {
    if (!element) return;
    if (data.length === 0) {
        element.innerHTML = "<h3> Hech narsa yo'q</h3>";
        return;
    }
    const cardHTML = data.map(el => `
    <div class="card"> 
        <img src="${el.img}" alt="${el.name}">
        <h1>${el.name}</h1>
    </div>
    `).join('');
    element.innerHTML = cardHTML;
}

function renderPizzas(data) {
    if (!mainContainer) return;
    if (data.length === 0) {
        mainContainer.innerHTML = "<h3 style='grid-column: 1/-1; text-align: center;'>Hech narsa topilmadi...</h3>";
        return;
    }

    mainContainer.innerHTML = data.map(item => `
        <div class="card">
            <div class="badge">${item.badge}</div>
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            
            <div class="counter-container">
                <button onclick="changeCount(${item.id}, -1)">-</button>
                <span>${item.count}</span>
                <button onclick="changeCount(${item.id}, 1)">+</button>

            <div class="card-footer">
                <button class="select-btn" onclick="resetCount(${item.id})">Выбрать</button>
                <span class="price">от ${item.price * item.count} ₽</span>
            </div>
            </div>

        </div>
    `).join('');
}

// input bolim

function filterInp(data) {
    if (!box) return;

    box.addEventListener("input", (e) => {
        let inputValue = e.target.value.toLowerCase();

        let filteredData = data.filter(item => {
            return item.name.toLowerCase().includes(inputValue);
        });

        renderPizzas(filteredData);
    });
}


window.changeCount = function (id, action) {
    pizza_data = pizza_data.map(item => {
        if (item.id === id) {
            let newCount = item.count + action;
            return { ...item, count: newCount < 0 ? 0 : newCount };
        }
        return item;
    });
    renderPizzas(pizza_data);
};

window.resetCount = function (id) {
    pizza_data = pizza_data.map(item => {
        if (item.id === id) {
            return { ...item, count: 0 };
        }
        return item;
    });
    renderPizzas(pizza_data);
};

rendercard(header_bottom_data, headerContainer);
rendercard(header_rasm, headerRasmContainer);
renderPizzas(pizza_data);
filterInp(pizza_data);

// SUSHI BOLIM

