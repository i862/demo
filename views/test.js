var random = Math.floor(Math.random() * 100);
key = random <= 33 ? 'error':(random <= 66?'waning':'info');
console.log(key);