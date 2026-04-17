const headerContainer = document.getElementById("hearder_bottom"); 
const headerRasmContainer = document.querySelector(".header_rasm"); 
const box = document.getElementById("inp");

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
    { id: 1, img: "./img/Group 81.png",name: "AKSIYA"  },
    { id: 2, img: "./img/Group 82.png",name: "AKSIYA"  },
    { id: 3, img: "./img/Group 81.png",name: "AKSIYA"  },
    { id: 4, img: "./img/Group 82.png",name: "AKSIYA"  },
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

rendercard(header_bottom_data, headerContainer);
rendercard(header_rasm, headerRasmContainer);

function filterInp(data) {
    if (!box) return;

    box.addEventListener("input", (e) => { 
        let inputValue = e.target.value.toLowerCase();

        let filteredData = data.filter(item => {
            return item.name.toLowerCase().includes(inputValue);
        });

        rendercard(filteredData, headerContainer);
    });
}