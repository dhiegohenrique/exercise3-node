module.exports = {
	env: "development",
	clientID: process.env.CLIENT_ID, 
	clientSecret: process.env.CLIENT_SECRET,
	seleniumUser: process.env.SELENIUM_USER, 
	seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD, 
	port: 3000, 
	address: "localhost", 
	domain: "localhost:3000",
	apiUrl: "http://api.openweathermap.org/data/2.5/weather?q=",
	apiKey: "&APPID=f1c797fbb41f519011734fb741b76752",
	apiUnits: "&units=metric",
	apiLang: "&lang=",
	translateUrl: "http://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=",
	translateText: "&dt=t&q="
};