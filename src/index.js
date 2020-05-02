const https = require('https')
const http = require('http')
const EventEmitter = require('events');
const querystring = require('querystring');

const ToyCommands = {
	Vibrate:{
		options:{
			v:{
				min:0,
				max:20
			}
		},
		toys:{
			nora: true,
			max: true,
			lush: true, 
			hush: true, 
			ambi: true, 
			edge: true, 
			domi: true, 
			osci: true, //This may be wrong. I do not have all the toys
		}
	},
	Vibrate1:{
		options:{
			v:{
				min:0,
				max:20
			}
		},
		toys:{
			nora: false,
			max: false,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: true, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	Vibrate2:{
		options:{
			v:{
				min:0,
				max:20
			}
		},
		toys:{
			nora: false,
			max: false,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: true, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	Rotate:{
		options:{
			v:{
				min:0,
				max:20
			}
		},
		toys:{
			nora: true,
			max: false,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: false, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	RotateChange:{
		options:{
		},
		toys:{
			nora: true,
			max: false,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: false, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	RotateClockwise:{
		options:{
			v:{
				min:0,
				max:20
			}
		},
		toys:{
			nora: true,
			max: false,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: false, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	RotateAntiClockwise:{
		options:{
			v:{
				min:0,
				max:20
			}
		},
		toys:{
			nora: true,
			max: false,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: false, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	AirAuto:{
		options:{
			v:{
				min:0,
				max:3
			}
		},
		toys:{
			nora: false,
			max: true,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: false, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	AirIn:{
		options:{
		},
		toys:{
			nora: false,
			max: true,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: false, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	AirOut:{
		options:{
		},
		toys:{
			nora: false,
			max: true,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: false, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	Preset:{
		options:{
			v:{
				min:0,
				max:3
			}
		},
		toys:{
			nora: false,
			max: false,
			lush: true, 
			hush: true, 
			ambi: true, 
			edge: true, 
			domi: true, 
			osci: true, //This may be wrong. I do not have all the toys
		}
	},
	Battery:{
		options:{
		},
		toys:{
			nora: true,
			max: true,
			lush: true, 
			hush: true, 
			ambi: true, 
			edge: true, 
			domi: true, 
			osci: true, //This may be wrong. I do not have all the toys
		}
	},
	AVibrate:{
		options:{
			v:{
				min:0,
				max:20
			},
			sec:{
				min:1,
				max:10000
			}
		},
		toys:{
			nora: true,
			max: true,
			lush: true, 
			hush: true, 
			ambi: true, 
			edge: true, 
			domi: true, 
			osci: true, //This may be wrong. I do not have all the toys
		}
	},
	ARotate:{
		options:{
			r:{
				min:0,
				max:20
			},
			sec:{
				min:1,
				max:10000
			}
		},
		toys:{
			nora: true,
			max: false,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: false, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	AAirLevel:{
		options:{
			a:{
				min:0,
				max:3
			},
			sec:{
				min:1,
				max:10000
			}
		},
		toys:{
			nora: false,
			max: true,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: false, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	AVibRotate:{
		options:{
			v:{
				min:0,
				max:20
			},
			r:{
				min:0,
				max:20
			},
			sec:{
				min:1,
				max:10000
			}
		},
		toys:{
			nora: true,
			max: false,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: false, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	AVibAir:{
		options:{
			v:{
				min:0,
				max:20
			},
			a:{
				min:0,
				max:3
			},
			sec:{
				min:1,
				max:10000
			}
		},
		toys:{
			nora: false,
			max: true,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: false, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	AVibrate1:{
		options:{
			v:{
				min:0,
				max:20
			},
			sec:{
				min:1,
				max:10000
			}
		},
		toys:{
			nora: false,
			max: false,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: true, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	AVibrate2:{
		options:{
			v:{
				min:0,
				max:20
			},
			sec:{
				min:1,
				max:10000	
			}
		},
		toys:{
			nora: false,
			max: false,
			lush: false, 
			hush: false, 
			ambi: false, 
			edge: true, 
			domi: false, 
			osci: false, //This may be wrong. I do not have all the toys
		}
	},
	
}

  

// Assigning to exports will not modify module, must use module.exports
module.exports = class Lovense extends EventEmitter {
	constructor(debug=false) 
	{
		super()
		this.debug = debug;
		this.data = {}
		this.toyid = ''
		this.domain = ''
		https.get(this.apiLink(), res => {
			res.setEncoding("utf8");
			let body = "";
			res.on("data", data => {
				body += data;
			});
			res.on("end", () => {
				body = JSON.parse(body);
				if(this.isDebug())
				{
					console.log(body);
				}
				
				this.data = this.processData(body)
				this.emit('toyDataRecieved', this.data)
			});
		});
	}
	
	//The way we grab the toys
	apiLink()
	{
		return `https://api.lovense.com/api/lan/getToys`;
	} 
	
	//Debug check
	isDebug() 
	{ 
		return this.debug;
	}
	
	//Helper func for data
	processData(data)
	{
		let toys = {}
		for (let [id, domain] of Object.entries(data)) {
			toys[id] = {
				port: domain.httpPort,
				domain: domain.domain,
				toys:domain.toys,
			}
		}
		return toys;
	}
	
	//Returns the toys for the current or passed domain.
	listToys(domain=this.domain)
	{
		return this.data[domain].toys;
	}
	
	//Returns the toys for the current or passed domain.
	listDomains()
	{
		return Object.keys(this.data);
	}
	
	//Set default domain
	setDomain(domain)
	{
		if(this.isDebug())
		{
			console.log(`Setting domain to '${domain}'`);
		}
		if(this.data[domain])
		{
			this.domain = domain
			console.log(`Domain set sucessfully`);
			return true
		}
		else
		{
			console.log(`Domain '${domain}' not valid`);
			return false, `${domain} is not valid!`
		}
	}
	
	//Set default toyid
	setToyID(toyid)
	{
		if(this.isDebug())
		{
			console.log(`Setting toyid to '${toyid}'`);
		}
		this.toyid = toyid
	}
	
	//Send command
	sendCommand(command, commandOptions, domain=this.domain, toyid=this.toyid)
	{
		if(this.isDebug())
		{
			console.log(command, commandOptions, domain, toyid);
		}
		commandOptions.t = toyid
		var requestStr = querystring.stringify(commandOptions);
		http.get(`http://${this.data[domain].domain}:${this.data[domain].port}/${command}?${requestStr}`, res => {
			res.setEncoding("utf8");
			let body = "";
			res.on("data", data => {
				body += data;
			});
			res.on("end", () => {
				body = JSON.parse(body);
				if(this.isDebug())
				{
					console.log(body);
				}
				
				this.emit('commandSent', command, commandOptions, domain, toyid, res.statusCode, body)
			});
			//res
		}).on('error', (err) => {
				this.emit('commandError', command, commandOptions, domain, toyid, err)
			});
	}
	
	//Dumps toy command data
	getCommands()
	{
		return ToyCommands;
	}
	
	//Return set domain
	getDomain()
	{
		return this.domain;
	}
	
	//Return set toyid
	getToyID()
	{
		return this.toyid;
	}
};