import net from 'net';
import { config } from './config/config.js';
import { onConnection } from './events/onConnection.js';
import initServer from './init/index.js';

const server = net.createServer(onConnection);

initServer().then(() => {
    server.listen(config.server.port, config.server.host, () => {
        console.log(`${config.server.host}:${config.server.port} 정상적으로 실행됨.`);
        console.log(server.address());
    });
}).catch((e)=>{
    console.error(e);
    process.exit(1);
})
