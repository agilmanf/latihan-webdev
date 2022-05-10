const body = document.querySelector('.container');
const cards = document.querySelector('.cards');
const buttonContainer = document.querySelector('.buttons');
let buttons = buttonContainer.querySelectorAll('button');

let _data;

fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(data => {
        //_data = data;
        _data = data.sort((a, b) => {
            return a.name < b.name;
        });
        ShowData(_data);
        console.log(_data);
    });

// Pagination
var page = 1;
let dataPerPage = 24;
let totalData = 209;
CalculateTotalPage();

function CalculateTotalPage() {
    const totalPage = Math.ceil(totalData / dataPerPage);

    for (let i = 1; i < totalPage; i++) {
        buttonContainer.innerHTML += `<button>${i+1}</button>`;
    }

    buttons = buttonContainer.querySelectorAll('button');
}


buttonContainer.addEventListener("click", e => {
    ClearButtonClass(buttons);
    e.target.classList.add('active');
    page = e.target.innerHTML;

    ShowData(_data);
})

function ShowData(data) {
    //clear card container
    cards.innerHTML = "";

    //get first number of data in page
    let firstDataInPage = dataPerPage * page - dataPerPage;
    let lastDataInPage = (dataPerPage + firstDataInPage > totalData) ? totalData : dataPerPage + firstDataInPage;

    for (let i = firstDataInPage; i < lastDataInPage; i++) {
        let number = i + 1;
        let name = data[i].name;
        let level = data[i].level;
        let imgUrl = data[i].img;
        cards.innerHTML += AddCard(number, name, level, imgUrl);
        //body.innerHTML += `${i+1}.${data[i].name} level is ${data[i].level}<br>`;
    }
}

function AddCard(number, name, level, imgUrl) {
    return `<div class="card">
                <h4><span>${number}</span></h4>
                <h2>${name}</h2>
                <h3>${level}</h3>
                <img src="${imgUrl}" alt="">
            </div>`
}

function ClearButtonClass(buttons) {
    buttons.forEach(button => {
        button.classList.remove("active");
    });
}