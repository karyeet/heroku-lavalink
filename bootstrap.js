  
const fs = require('fs')

let application = fs.readFileSync('./application.yml','utf8')

if(process.env.PORT){
	application = application.replace('DYNAMICPORT',process.env.PORT)
}

if(process.env.PASS){
	application = application.replace('youshallnotpass',process.env.PASS)
}
fs.writeFileSync('./application.yml', application)

const spawn = require('child_process').spawn;
const child = spawn('java', ['-jar', 'Lavalink.jar'])

child.stdout.on('data',(data)=>{
	console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

child.on('error',(error)=>{
	console.error(error);
});

child.on('close', (code) => {
  console.log(`Lavalink exited with code ${code}`);
});
