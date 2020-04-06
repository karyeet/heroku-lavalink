  
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

child.stdout.setEncoding('utf8')
child.stderr.setEncoding('utf8')

child.stdout.on('data',(data)=>{
	console.log(data);
});

child.stderr.on('data', (data) => {
  console.error(data);
});

child.on('error',(error)=>{
	console.error(error);
});

child.on('close', (code) => {
  console.log(`Lavalink exited with code ${code}`);
});
