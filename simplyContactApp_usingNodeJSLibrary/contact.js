const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// make a folder from empty data folder
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// make a file json if before empty
const dataPath = "./data/contact.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const inputQuestion = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const saveContact = (nama, email, number) => {
  const contact = { nama, email, number };
  const file = fs.readFileSync("data/contact.json", "utf-8");
  const contacts = JSON.parse(file);
  contacts.push(contact);
  fs.writeFileSync("data/contact.json", JSON.stringify(contacts));
  console.log("Thank's for attention :)");
  rl.close();
};

module.exports = {
  inputQuestion,
  saveContact,
};
