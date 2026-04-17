const headerContainer = document.getElementById("hearder_bottom"); 

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
    { id: 1, img: "./img/Group 81.png", name: "999" },
    { id: 2, img: "./img/Group 82.png", name: "10%" },
    { id: 1, img: "./img/Group 81.png", name: "999" },
    { id: 2, img: "./img/Group 82.png", name: "10%" },
];

function rendercard(data) {
    if (!headerContainer) return; // Element topilmasa funksiyani to'xtatadi

    if (data.length === 0) {
        headerContainer.innerHTML = "<h3> Hech narsa yo'q</h3>";
        return;
    }

    const cardHTML = data.map(el => `
    <div class="card"> <img src="${el.img}" alt="${el.name}">
        <h1>${el.name}</h1>
    </div>
    `).join('');

    // MANA SHU YERDA XATO EDI:
    headerContainer.innerHTML = cardHTML; 
}

rendercard(header_bottom_data);


// const header_rasm = [
//     { id: 1, img: "./images/Group 81.png", name: "999" },
//     { id: 2, img: "./images/Group 82.png", name: "10%" },
//     { id: 1, img: "./images/Group 81.png", name: "999" },
//     { id: 2, img: "./images/Group 82.png", name: "10%" },
// ];
