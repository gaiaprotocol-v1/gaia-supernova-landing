import { SkyRouter } from "skyrouter";
import msg from "msg.js";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import Landing from "./view/Landing";

(async () => {

    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("", Landing);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();