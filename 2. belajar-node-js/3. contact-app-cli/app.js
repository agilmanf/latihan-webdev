const fs = require('fs');
const yargs = require("yargs");
const contact = require("./contact")

// Check apabila folder belum ada maka dibuat
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
};

// Check apakah file contact.json sudah dibuat
const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, "[]", 'utf-8');
};

yargs.command({
    command: "add",
    describe: "Menambahkan Kontak Baru",
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: "string"
        },
        email: {
            describe: "Alamat Email",
            demandOption: false,
            type: "string"
        },
        hp: {
            describe: "Nomer Handphone",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        contact.simpanContact(argv.nama, argv.email, argv.hp)
    }
}).demandCommand();

yargs.command({
    command: "list",
    describe: "Menampilkan Data Kontak",
    handler() {
        contact.listContact();
    }
})

yargs.command({
    command: "delete",
    describe: "Menghapus Data Kontak (masukan argument nama)",
    builder: {
        nama: {
            describe: "Nama kontak yang akan dihapus",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        contact.deleteContact(argv.nama);
    }
})

yargs.parse();