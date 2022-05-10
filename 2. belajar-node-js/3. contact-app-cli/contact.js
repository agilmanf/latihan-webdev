const chalk = require('chalk');
const validator = require('validator');
const fs = require('fs');

const dataPath = './data/contact.json';

const loadContact = () => JSON.parse(fs.readFileSync(dataPath))

const simpanContact = (nama, email, hp) => {
    const contacts = loadContact();
    const newContact = { nama, email, hp };

    // check duplikat kontak
    const duplikat = contacts.find(c => c.nama === nama);
    if (duplikat) {
        console.log(chalk.bgRed("Gagal Menambahkan : Nama sudah terdaftar"));
        return false;
    }

    // check email validation
    if (email) {
        if (!validator.isEmail(email)) {
            console.log(chalk.bgRed("Gagal Menambahkan : Email tidak valid"));
            return false;
        }
    }

    if (!validator.isMobilePhone(hp, "id-ID")) {
        console.log(chalk.bgRed("Gagal Menambahkan : Nomer handphone tidak valid"));
        return false;
    }

    contacts.push(newContact);

    fs.writeFile(dataPath, JSON.stringify(contacts), e => {
        if (e) {
            console.log(chalk.bgRed('Data Gagal Ditambahkan'));
            throw e
        } else console.log(chalk.bgBlue(`Kontak ${nama} berhasil ditambahkan`));
    })
}

const listContact = () => {
    const contacts = loadContact();
    contacts.forEach((contact, index) => {
        console.log(`${index + 1}. ${contact.nama} - ${contact.hp}`);
    })
}

const deleteContact = (nama) => {
    const contacts = loadContact();
    const newContact = contacts.filter(contact => contact.nama.toLowerCase() !== nama.toLowerCase());

    if (contacts.length === newContact.length) {
        console.log(chalk.bgRed(`Gagal Menghapus : kontak ${nama} tidak ditemukan`));
        return false;
    }

    fs.writeFileSync(dataPath, JSON.stringify(newContact));
    console.log(chalk.bgBlue(`Kontak ${nama} berhasil dihapus`));
}

module.exports = {
    simpanContact,
    listContact,
    deleteContact
}