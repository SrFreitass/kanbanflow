import cors from '@fastify/cors';
import 'dotenv/config';
import { fastify } from 'fastify';
import { loadRouters } from '../utils/loadRouters';

export const app = fastify();

loadRouters();

app.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
});

app.listen({ port: 8080 }, (err, address) => {
    console.log(`Server listening at ${address}`);
});
