    const body = document.querySelector('.container');

    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => ShowData(data));

    function ShowData(data) {
        for (let i = 0; i < 50; i++) {
            body.innerHTML += `${i+1}.${data[i].name} level is ${data[i].level}<br>`;
        }
    }