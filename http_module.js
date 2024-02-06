const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to homepage')
    }
    if(req.url === '/about' ){
        res.end("I am Aaryan")
    }
    res.end(`
        <a href='/'><button>oops</button></a>
    `)
})

server.listen(5000)