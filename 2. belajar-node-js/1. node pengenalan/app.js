const fs = require('fs');

// try {
//     fs.writeFileSync('/asd/tes.txt', "Ini lagi tes");
// } catch (e) {
//     console.log(e);
// }

// fs.writeFile('data/tes.txt', 'Belajar nulis node async', e => {
//     console.log(e);
// })

// const data = fs.readFile("data/tes.txt", 'utf-8', (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     })
//     // console.log(data);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukan nama anda : ', (nama) => {
    rl.question(`Berapa nomer hp anda ${nama}? `,
        nomer => {
            const contact = { nama, nomer };
            const file = fs.readFileSync('data/contacts.json', 'utf-8');
            const contacts = JSON.parse(file);

            contacts.push(contact);
            fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
            console.log(`Nama anda adalah ${nama}, dan nomer hp anda adalah ${nomer}`);
            rl.close();
        })
})