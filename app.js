import express from 'express'
import connectDB from './config/db.js'
import usuarioRouter from './routers/usuarioRouter.js'
import carteiraRouter from './routers/carteiraRouter.js'
import transacaoRouter from './routers/transacaoRouter.js'

connectDB()

const app= express()
app.use(express.json())
app.use('/usuario', usuarioRouter)
app.use ('/carteira', carteiraRouter)
app.use ('/transacao', transacaoRouter)

app.listen (3000, ()=> console.log ('example app listening on port 3000'))