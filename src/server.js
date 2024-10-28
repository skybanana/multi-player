import net from 'net';
import { config } from './config/config.js';

const server = net.createServer();

server.listen(config.server.port, config.server.host, () => {
    console.log(`${config.server.host}:${config.server.port} 정상적으로 실행됨.`);
    console.log(server.address());
});