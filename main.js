// --- 1. ELEMENTLARNI TANLAB OLISH ---
const headerContainer = document.getElementById("hearder_bottom");
const headerRasmContainer = document.querySelector(".header_rasm");
const box = document.getElementById("inp");

// XATOLIK: mainContainer ikki marta e'lon qilingan edi. 
// Ularni alohida nom bilan olish kerak:
const pizzaContainer = document.getElementById("pizza_list");
const sushiContainer = document.getElementById("sushi_list");

// --- 2. MA'LUMOTLAR (DATA) ---
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

let pizza_data = [
    { id: 1, img: "./img/Rectangle 4.png", name: "EASY PEASY огуречный расколбас", description: "Курица, Лук, Перец Халапеньо,", price: 399, count: 0, badge: "ХИТ" },
    { id: 2, img: "./img/Rectangle 4 (1).png", name: "Margarita Pitsa", description: "Klassik pomidor va motsarella pishlog'i...", price: 549, count: 0, badge: "NEW" },
    { id: 3, img: "./img/Rectangle 4 (2).png", name: "Margarita Pitsa", description: "Klassik pomidor va motsarella pishlog'i...", price: 249, count: 0, badge: "NEW" },
    { id: 4, img: "./img/Rectangle 4 (3).png", name: "Margarita Pitsa", description: "Klassik pomidor va motsarella pishlog'i...", price: 630, count: 0, badge: "NEW" },
    { id: 5, img: "./img/Rectangle 4 (3).png", name: "Margarita Pitsa", description: "Klassik pomidor va motsarella pishlog'i...", price: 630, count: 0, badge: "NEW" },
    { id: 6, img: "./img/Rectangle 4 (2).png", name: "Margarita Pitsa", description: "Klassik pomidor va motsarella pishlog'i...", price: 249, count: 0, badge: "NEW" },
    { id: 7, img: "./img/Rectangle 4.png", name: "EASY PEASY огуречный расколбас", description: "Курица, Лук, Перец Халапеньо, фирменный соус...", price: 399, count: 0, badge: "ХИТ" },
    { id: 8, img: "./img/Rectangle 4 (1).png", name: "Margarita Pitsa", description: "Klassik pomidor va motsarella pishlog'i...", price: 549, count: 0, badge: "NEW" },
];

let sushi_data = [
    { id: 1, img: "./img/Rectangle 4..png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 399, count: 0, badge: "ХИТ" },
    { id: 2, img: "./img/Rectangle 5 (1).png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 549, count: 0, badge: "NEW" },
    { id: 3, img: "./img/Rectangle 5 (2).png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 249, count: 0, badge: "NEW" },
    { id: 4, img: "./img/Rectangle 5 (3).png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 475, count: 0, badge: "NEW" }, 
    { id: 5, img: "./img/Rectangle 5 (3).png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 475, count: 0, badge: "NEW" }, 
    { id: 6, img: "./img/Rectangle 5 (2).png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 249, count: 0, badge: "NEW" },
    { id: 7, img: "./img/Rectangle 4..png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 399, count: 0, badge: "ХИТ" },
    { id: 8, img: "./img/Rectangle 5 (1).png", name: "Филадельфия кранч", description: "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чип...", price: 549, count: 0, badge: "NEW" },
    // Narx o'zgartirildi
];

// --- 3. FUNKSIYALAR ---

function rendercard(data, element) {
    if (!element) return;
    element.innerHTML = data.map(el => `
    <div class="card"> 
        <img src="${el.img}" alt="${el.name}">
        <h1>${el.name}</h1>
    </div>`).join('');
}

// PIZZA RENDER
function renderProducts(data) {
    if (!pizzaContainer) return;
    if (data.length === 0) {
        pizzaContainer.innerHTML = "<h3 style='grid-column: 1/-1; text-align: center;'>Hech narsa topilmadi...</h3>";
        return;
    }

    pizzaContainer.innerHTML = data.map(item => `
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
                <span class="price">от ${item.count > 0 ? item.price * item.count : item.price} ₽</span>
            </div>
            </div>
        </div>
    `).join('');
}

// SUSHI RENDER
function renderSushi(data) {
    if (!sushiContainer) return;
    if (data.length === 0) {
        sushiContainer.innerHTML = "<h3 style='grid-column: 1/-1; text-align: center;'>Hech narsa topilmadi...</h3>";
        return;
    }

    sushiContainer.innerHTML = data.map(item => `
        <div class="card">
            <div class="badge">${item.badge}</div>
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            
            <div class="counter-container">
                <button onclick="changeSushiCount(${item.id}, -1)">-</button>
                <span>${item.count}</span>
                <button onclick="changeSushiCount(${item.id}, 1)">+</button>
            <div class="card-footer">
                <button class="select-btn" onclick="resetSushiCount(${item.id})">Выбрать</button>
                <span class="price">от ${item.count > 0 ? item.price * item.count : item.price} ₽</span>
            </div> 
            </div>
        </div>
    `).join('');
}

// Qidiruv funksiyasi (Universal)
function filterInp(data, type) {
    if (!box) return;
    box.addEventListener("input", (e) => {
        let inputValue = e.target.value.toLowerCase();
        let filteredData = data.filter(item => item.name.toLowerCase().includes(inputValue));
        if(type === 'pizza') renderProducts(filteredData);
        if(type === 'sushi') renderSushi(filteredData);
    });
}

// Hisoblagichlar
window.changeCount = function (id, action) {
    pizza_data = pizza_data.map(item => {
        if (item.id === id) {
            let newCount = item.count + action;
            return { ...item, count: newCount < 0 ? 0 : newCount };
        }
        return item;
    });
    renderProducts(pizza_data);
};

window.resetCount = function (id) {
    pizza_data = pizza_data.map(item => (item.id === id ? { ...item, count: 0 } : item));
    renderProducts(pizza_data);
};

window.changeSushiCount = function (id, action) {
    sushi_data = sushi_data.map(item => {
        if (item.id === id) {
            let newCount = item.count + action;
            return { ...item, count: newCount < 0 ? 0 : newCount };
        }
        return item;
    });
    renderSushi(sushi_data);
};

window.resetSushiCount = function (id) {
    sushi_data = sushi_data.map(item => (item.id === id ? { ...item, count: 0 } : item));
    renderSushi(sushi_data);
};

// --- 4. ISHGA TUSHIRISH ---
rendercard(header_bottom_data, headerContainer);
rendercard(header_rasm, headerRasmContainer);

renderProducts(pizza_data); 
renderSushi(sushi_data);

filterInp(pizza_data, 'pizza');
filterInp(sushi_data, 'sushi');