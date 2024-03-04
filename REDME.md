# Projeto Multi-db

Esse projeto tem como principal objetivo aprender e aperfeiçoar as abilidades em node.js

Nesse projeto estou fazendo a comunicação entre dois bancos de dados, um é o postgres e o outro o mongodb.

Utilizo a plataforma do docker para a contanerização.

comandos para a criação do container postgres

```
    docker run \
        --name postgres \
        -e POSTGRES_USER=admin \
        -e POSTGRES_PASSWORD=minhasenhasecreta \
        -e POSTGRES_DB=heros \
        -p 5432:5432 \
        -d \
        postgres 

<!-- Painel admin do postgres -->

    docker run \
        --name adminer
        -p 8080:8080
        --link postgres:postgres
        -d
        adminer
```

## ---- MONGODB
```
    docker run
        --name mongodb
        -p 27017:27017
        -e MONGO_INITDB_ROOT_USERNAME=admin 
        -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin
        -d
        mongo:4
        MONGO_INITDB_ROOT_USERNAME
        MONGO_INITDB_ROOT_PASSWORD

<!-- Painel admin mongodb -->

    docker run
        --name mongoclient
        -p 3000:3000
        --link mongodb:mongodb
        -d
        mongoclient/mongoclient

<!-- Criar banco de tabela -->
    docker exec -it mongodb mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'Marcos', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'herois'}]})
```