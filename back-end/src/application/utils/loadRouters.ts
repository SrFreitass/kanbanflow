import { readdirSync } from 'node:fs';


function loadRouters() {
    console.log('Loading routers...');
    const routers = readdirSync(__dirname + '/../routers');

    routers.forEach(router => {
        require(__dirname + `/../routers/${router}`);
    });
}

export { loadRouters };

