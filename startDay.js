const path = require("path");
const { execSync } = require("child_process");
const LEISURE_WEBSITE_LIST = require("./leisureWebsites.json");
const SCRIPT_LOCATION = "./chrome.sh";

const open = () => {
  let leisureWebsites = LEISURE_WEBSITE_LIST;


  let script = path.resolve(__dirname, SCRIPT_LOCATION);

  leisureWebsites.map((website) => {
    let cmd = `${script} ${website}`;
    try {
      execSync(cmd);
    } catch (e) {
      console.log(e);
    }
  });
};

module.exports = {
  open,
};
