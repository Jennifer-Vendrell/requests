const express = require('express') //importando el modulo express
const app = express()
app.use(express.json());

//http://localhost:3000/
app.get('/', (req, res) => {
    res.json({msg: 'HELLO GET'})
})

//http://localhost:3000/
app.get('/:user/:pass', (req, res) => {
    const {user, pass} = req.params
    if (user === 'jenni' && pass === '1234'){
        res.json({msg: 'Iniciaste sesión con éxito'})
    }
    res.json({msg: 'Error en el usuario o contraseña'})
})

// http://localhost:3000/login?user=jenni&password=1234&email=isc20350326@gmail.com

app.get('/login',(req, res)=> {
    const {user, password} = req.query

    if(!user || !password){
        res.status(400).json({msg: 'you need to provide <user> and <password> parameters'})
    return
    }

    if (user === 'jenni' && password === '1234'){
        res.json({msg: 'Iniciaste sesión con éxito'})
    }
    res.status(404).json({msg: 'Error en el usuario o contraseña'})
    return
})




app.post('/login', (req, res) => {//Endpoint
    const {user, password} = req.body    
    if(!user || !password){
        res.status(400).json({msg: 'you need to provide <user> and <password> parameters'})
    return
    }

    if (user === 'jenni' && password === '1234'){
        res.json({msg: 'you sign in succesfully'})
        return
    }

    res.status(404).json({
        msg:'Error en el usuario o contraseña'
    })
})

//http://localhost:3000/
app.put('/', (req, res) => {
    res.json({msg: 'HELLO PUT'})
})

//http://localhost:3000/
app.put('/', (req, res) => {
    res.json({msg: 'HELLO PUT'})
})

//http://localhost:3000/
app.patch('/', (req, res) => {
    res.json({msg: 'HELLO PATCH'})
})

//http://localhost:3000/
app.delete('/', (req, res) => {
    res.json({msg: 'HELLO DELETE'})
})

app.listen(3000, () => {console.log('listening on port 3000')})