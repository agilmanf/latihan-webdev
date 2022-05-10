const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { body, validationResult } = require("express-validator");
const app = express();
const port = 3000;

const {
  loadContacts,
  findContact,
  saveContact,
} = require("./controllers/contacts.controller");

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Contact App",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Contact App - About",
  });
});

app.get("/contact", (req, res) => {
  const contacts = loadContacts();

  res.render("contact", {
    title: "Contact App - Contact",
    contacts,
  });
});

app.get("/contact/add", (req, res) => {
  res.render("contact-add", {
    title: "Contact App - Tambah Kontak",
  });
});

app.post(
  "/contact/add",
  body("email").isEmail().withMessage("email tidak valid"),
  body("hp").isMobilePhone("id-ID").withMessage("nomer handphone tidak valid"),
  body("nama").custom((value) => {
    const contact = findContact(value);
    if (contact) {
      throw new Error("nama sudah terdaftar");
    }

    return true;
  }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //res.status(400).json({ errors: errors.array() });
      res.render("contact-add", {
        title: "Contact App - Tambah Kontak",
        errors: errors.array(),
      });
    } else {
      saveContact(req.body);
      //res.redirect("./");
    }
  }
);

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  res.render("contactDetail", {
    title: "Contact App - Detail",
    contact,
  });
});

app.listen(port, () => {
  console.log("server running on port " + port);
});
