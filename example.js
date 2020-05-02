//Requirements
const Lovense = require('./src/index.js');
//Config
const debug = false;
const LovenseConnection = new Lovense(debug);
LovenseConnection.on('toyDataRecieved', function(data){//This means we are got data
	//data is the toy data.
	console.log(data) 
	var domains = Object.keys(data);
	for (let [domain, info] of Object.entries(data))
	{
		console.log(`Vibrating all toys on ${domain} for 5 seconds at 100%`)
		LovenseConnection.setDomain(domain)//Set the domain. 
		LovenseConnection.sendCommand("Vibrate", {v:5}, undefined,'')//Setting the 3rd arg to undefined means it will send the command to the default domain
		//and a blank toyid means that we send it to all toys.
		setTimeout(function()
		{
			LovenseConnection.setDomain(domain)
			LovenseConnection.sendCommand("Vibrate", {v:0}, undefined,'')
			setTimeout(function()
			{
				var keys = Object.keys(info.toys)
				var randomToy = info.toys[keys[Math.floor(Math.random()*keys.length)]]
				console.log(randomToy)
				var name = randomToy.name
				if(randomToy.nickName & randomToy.nickName != ''){name = randomToy.nickName}
				console.log(`Vibrating toy ${name}(${randomToy.id}) on ${domain} for 5 seconds at 100%`)
				LovenseConnection.setDomain(domain)
				LovenseConnection.sendCommand("Vibrate", {v:20}, undefined, randomToy.id)
				setTimeout(function()
				{
					LovenseConnection.setDomain(domain)
					LovenseConnection.sendCommand("Vibrate", {v:0}, undefined, randomToy.id)
				}, 5000)
			},2000)
		},5000)
		console.log(`---------------`)
		console.log(domain)
		console.log(info)
		console.log(`---------------`)
	}
})
LovenseConnection.on('commandSent', console.log)
LovenseConnection.on('commandError', console.log)