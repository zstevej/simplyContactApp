const { error } = require("console");
const fs = require("fs");

const readLine = require("readline");
const { json } = require("stream/consumers");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("masukkan nama anda: ", (nama) => {
  rl.question("masukkan nomor anda: ", (numb) => {
    const contact = { nama, numb };
    const file = fs.readFileSync("data/contact.json", "utf-8");
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync("data/contact.json", JSON.stringify(contacts));
    console.log("terimakasih sudah menuliskan data");
    rl.close();
  });
});
