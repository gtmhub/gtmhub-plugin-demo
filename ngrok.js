const ngrok = require("ngrok");
const port = 5000;

(async () => {
  const url = await ngrok.connect(port);
  console.log(`Your ngrok url is: ${url}`);
  console.log(`Copy the url and use it in your plugin manifest file.`);
  console.log(`Note: remember whenever ngrok url changes to update your manifest file with the new url!`);
})();
