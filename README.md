# InternalHackathon2022
internal hackathon

Gangs of Altudo 

Room Booking App

--INTRODUCTION--
Its a JSS app built using modern UI (ReactJS), its a client first and disconnected mode JSS app,
so that it can be connected with any Sitecore Instance. 

--DEPLOYMENT INSTRUCTIONS--
1. Create API key in your Instance
	a. you can create api key under content tree
			system/settings/services/api key
	b. create new API key with any name
			give values:
				CORS Origins: *
				Allowed Controllers: *
				Impersonation User: extranet\anonymous
	c. Save and publish the key.
	
	
2. Open file in Visual Studio Code
    a. change directory to hackathon-app in terminal

3. Run following commands in Terminal
	a. jss setup
	b. Set the instance permission to "YES"
	c. Then you have to give the path of your Instance
		ex: C:\inetpub\wwwroot\Sitecore10sc.dev.local
	d. Enter the host name for your App (from sitecore/config/hackathon-app.config)
		http://hackathon-app.dev.local
	e. It will ask ask for import services
		Just click "ENTER"
	f. It will ask for API key
		 Please Enter the ITEM ID of API key wich you created in Step1.b.
	g. It will ask for Deployment secret 
		Just click "ENTER"
	h. Make the HOST entry in IIS and Host file
	       IIS: hackathon-app.dev.local
		   host file: 127.0.0.1	hackathon-app.dev.local
	i. Enter the following Command in VS terminal
			jss deploy config
			
			jss deploy app -c -d
			
			
		

--WORKING--
	To run jss app directly from visual studio code.
	1. check the current directory is pointed to hackathon-app in terminal
	2. Run:
			jss start
			
			
Please refer to our Demo Video.

