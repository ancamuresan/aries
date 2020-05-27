// aici vom seta ce fisier vrem , de dev sau production?

const ENV = process.env.NODE_ENV || 'developments';
const config = require(`./enviroments/${ENV.toLowerCase()}`);

module.exports=config;

console.log("ENV", ENV);