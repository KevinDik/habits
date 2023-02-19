import fastify from "fastify";
import {PrismaClient} from "@prisma/client";
import cors from "@fastify/cors";

// backend api restful
const app = fastify();
const prisma = new PrismaClient();
app.register(cors);

/*
metodo http: get, post, put, patch, delete
*/

app.get('/', async () => {
    const habits = await prisma.habit.findMany({
        
    })
    return habits
})

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP server running');
})
//criar habitos

//retorna informacoes