
const fs = require("fs")
const fetch = require("node-fetch")

const APP_NAME = process.env.APP_NAME || false;
const INCLUDE_PRERELEASES =  process.env.PRERELEASES === "true";
const GITHUB_REPO = process.env.GITHUB_REPO || "freyacodes/Lavalink";

let application = fs.readFileSync("./application.yml", "utf8")

if (process.env.PORT) {
    application = application.replace("DYNAMICPORT", process.env.PORT)
}

if (process.env.PASS) {
    application = application.replace("youshallnotpass", process.env.PASS)
}
fs.writeFileSync("./application.yml", application)

const download = function (url, dest, cb) {
    const file = fs.createWriteStream(dest);
    fetch(url).then(res=>{
        res.body.pipe(file)
        console.log("Downloading Lavalink.jar")
        file.on("finish", function () {
            console.log("Downloaded Lavalink.jar")
            file.close(cb);
        });
        file.on("error", function(err){
            console.error("Filestream error while downloading Lavalink: "+err)
        })
    })
    .catch(function(err){
        console.error("Fetch error while downloading Lavalink: "+err)
    })
};

function keepAlive(){
    console.log("heroku-lavalink: running keepAlive")
    fetch(`https://${APP_NAME}.herokuapp.com/`).catch((err)=>{
        
        console.log("Error while running keepAlive: "+ err)
    })
}

function startLavalink() {

    console.log("Checking if APP_NAME is specified...")
    if(APP_NAME){
        console.log("I will visit myself every 20 minutes because APP_NAME specified!");
        setInterval(keepAlive, 20*60*1000);
    }else{
        console.log("I will not visit myself every 20 minutes, APP_NAME is not specified!")
        console.log("If you are using the free tier, Heroku will make this project sleep after 30 minutes unless there is http activity.")
    }

    const spawn = require("child_process").spawn;
    const child = spawn("java", ["-jar", "Lavalink.jar"],{"stdio":"inherit"})

    child.on("error", (error) => {
        console.error(error);
    });

    child.on("close", (code) => {
        console.log(`Lavalink exited with code ${code}`);
    });

}


console.log("Fetching latest Lavalink.jar url...")
fetch("https://api.github.com/repos/"+GITHUB_REPO+"/releases")
    .then(res => res.json())
    .then(json => {

        for(let i = 0; i < json.length; ++i ){ // (json[i].prerelease && INCLUDE_PRERELEASES)
            if(json[i].assets[0] && json[i].assets[0].browser_download_url){ //if dl exists
                if(!json[i].prerelease || INCLUDE_PRERELEASES){ //if not prerelease or if allow prerelease
                    console.log("Found version " + json[i].tag_name +" attempting to download...")
                    download(json[i].assets[0].browser_download_url, "./Lavalink.jar", startLavalink)
                    break;
                }else{
                    console.log("Skipping version " + json[i].tag_name + " because it is a prerelease and PRERELEASES is set to false.")
                }
            }else{
                console.log("Skipping version " + json[i].tag_name + " because no download is available.")
            }
        }

    })
    .catch(err =>{
        console.error("Error occured when fetching latest release url: "+err)
    });



