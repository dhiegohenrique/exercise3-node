module.exports = {
	env: "test",
	sauceTestName: "Contatooh E2E Testing",
 	sauceUser : process.env.SAUCE_USERNAME, 
  	sauceKey : process.env.SAUCE_ACCESS_KEY, 
	travisJobNumber: process.env.TRAVIS_JOB_NUMBER,
    travisBuild: process.env.TRAVIS_BUILD_NUMBER, 
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