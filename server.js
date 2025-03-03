const express = require('express')
const app = express()
PORT = 4000

app.use((req, res, next)=>{
    res.set('Cache-Control', 'public, max-age=3600')
    next()
})

app.get('/user', (_req, res)=>
    res.status(200).json({code: 200, message: {
        name: 'arif',
        email: 'arif@gmail.com',
        userId: 'abcb1234'
    }})
)

//no cache route
app.get('/no-cache', (_req, res)=>{
    res.set('Cache-Control', 'no-store')
    res.json({message: 'this response is never cached'})
})

app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`);
    
})
