
// docker ps
// docker exec -it 66b28960f6a0 mongo -u admin -psenhaadmin -authentication herois

// databases
show dbs

// mudando um contexto para uma database
use herois

// mostrar tabelas (collections)
show collections

db.herois.insert({
    nome: "flash",
    poder: "Velocidade",
    dataNascimento: "1991-01-01"
})

db.herois.find()

for (let i = 0; i <= 1000; i++) {
    db.herois.insert({
        nome: `clone-${i}`,
        poder: "Velocidade",
        dataNascimento: "1991-01-01"
    })
}   

db.herois.count()