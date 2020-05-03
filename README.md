# Simple Lovense API Wrapper
I decided to create a simple api wrapper for the lovense API.

## Install
Simply run 
`npm install simple-lovense`

## Examples
You can find a simple use case in example.js

## Functions
### LovenseOBJ.apiLink()
Returns the api used to check for toys.
### LovenseOBJ.isDebug()
Returns true/false for the debug mode.
### LovenseOBJ.processData(data)
Takes the json response from the API with the toy data and changes it a touch.
**Only use this if you know why you should.**
### LovenseOBJ.listToys(domain)
Returns the toys for the domain you pass. If you leave it empty, it will return for the currently set domain.
### LovenseOBJ.listDomains()
Returns the domains it found.
### LovenseOBJ.setDomain(domain)
Sets the used domain to the one specified. Returns true if it can, otherwise false if the domain does not exist.
### LovenseOBJ.setToyID(toyid)
Sets the default toy as passed.
### LovenseOBJ.sendCommand(command, commandOptions, domain=this.domain, toyid=this.toyid)
Sends the command, with the command options to the specified domain and toy. If you pass undefined to either/or the domain or toy, it will use the currently set defaults. If you set toyid to '', it will send it to all toys that the command supports.
### LovenseOBJ.getCommands()
Returns an object with all comands and options, along with which toys it will work with
### LovenseOBJ.getDomain()
Returns currently set domain
### LovenseOBJ.getToyID()
Returns currently set toyid
