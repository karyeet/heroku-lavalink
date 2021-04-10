
const fs = require("fs")
const fetch = require("node-fetch")

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

function startLavalink() {
    const spawn = require("child_process").spawn;
    const child = spawn("java", ["-jar", "Lavalink.jar"])

    child.stdout.setEncoding("utf8")
    child.stderr.setEncoding("utf8")

    child.stdout.on("data", (data) => {
        console.log(data);
    });

    child.stderr.on("data", (data) => {
        console.error(data);
    });

    child.on("error", (error) => {
        console.error(error);
    });

    child.on("close", (code) => {
        console.log(`Lavalink exited with code ${code}`);
    });
}


console.log("Fetching latest Lavalink.jar url...")
fetch("https://api.github.com/repos/freyacodes/Lavalink/releases/latest")
    .then(res => res.json())
    .then(json => {
        if(json.assets[0] && json.assets[0].browser_download_url){
            console.log("Found: "+json.assets[0].browser_download_url)
            download(json.assets[0].browser_download_url, "./Lavalink.jar", startLavalink)
        }else{
            console.warn("Could not find .jar for latest release!")
            console.warn("Attempting to download previous release...")
            
            let priorVersion = json["tag_name"].split(".")
            priorVersion[priorVersion.length-1] = Number(priorVersion[priorVersion.length-1])-1
            priorVersion[0] = priorVersion[0].replace("v","")
            priorVersion = priorVersion.join(".")

            let priorDL_URL = `https://github.com/freyacodes/Lavalink/releases/download/${priorVersion}/Lavalink.jar`
            console.log("Found: "+priorDL_URL)
            download(priorDL_URL, "./Lavalink.jar", startLavalink)
        }

    })
    .catch(err =>{
        console.error("Error occured when fetching latest release url: "+err)
    });



