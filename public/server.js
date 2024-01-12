import express from 'express';
const app = express();

const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer(function (req,res){
    proxy.web(req,res,{target: 'http://localhost:3000/'});
});

app.use((req,res, next) =>{
    res.header('Access Control Origin', '*');

    next();
})




app.get('/subreddits', (req, res, next) =>{
    res.request({
        url: 'https://www.reddit.com/subreddits.json'},
        (error, response,body) =>{
            if(error || response.status.code !== 200){
                return res.status(500).json({type:'error', message: error.message});
            }
            res.json(JSON.parse(body));
          }
        )
});





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT

}`))