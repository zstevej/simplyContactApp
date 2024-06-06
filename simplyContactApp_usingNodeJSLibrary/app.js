const { inputQuestion, saveContact } = require("./contact.js");
const main = async () => {
  const nama = await inputQuestion("Input ur name first: ");
  const email = await inputQuestion("Input ur email: ");
  const number = await inputQuestion("Input ur number: ");

  saveContact(nama, email, number);
};

main();
