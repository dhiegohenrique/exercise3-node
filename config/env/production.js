module.exports = {
    env: "production",
    port: process.env.PORT,
    address: process.env.APP_NAME + ".herokuapp.com",
    domain: process.env.APP_NAME + ".herokuapp.com",
	apiUrl: "http://api.openweathermap.org/data/2.5/weather?q=",
	apiKey: "&APPID=f1c797fbb41f519011734fb741b76752",
	apiUnits: "&units=metric",
	apiLang: "&lang=",
    translateUrl: "http://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=",
	translateText: "&dt=t&q="
};