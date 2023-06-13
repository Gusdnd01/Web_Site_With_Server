const express = require('express');
const path = require('path');
const app = express();
const exp = express();

app.set('port', 3000);
exp.use(express.static('public'));
exp.use(express.static('src'));	

app.use((req, res, next) => {
	next();
});

app.get('/', (req, res, next)=>{
	res.send('Main');
});

app.get('/login', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'main.html'));
});
app.get('/happy', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});


app.use((req, res, next) => {
	res.status(404).send('404 NOT FOUND');
});
app.use((err, req, res, next) => {
	console.error(err);
	res.send('에러 입니다');
	next();
});

exp.listen(3001);
app.listen(app.get('port'), () => {
	console.log(`${app.get('port')}번 포트에서 실 행 중`);
});