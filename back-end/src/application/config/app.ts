import { fastify } from 'fastify';
import { loadRouters } from '../utils/loadRouters';

export const app = fastify();

loadRouters();

app.listen({ port: 8080 }, (err, address) => {
    console.log(`Server listening at ${address}`);
});
