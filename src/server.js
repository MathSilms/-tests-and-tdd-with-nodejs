import app from './app'

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Servidor rodando na porta ${process.env.PORT || 8080}`)
})