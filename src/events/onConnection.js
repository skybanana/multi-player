import { onEnd } from './onEnd.js';
import { onError } from './onError.js';
import { onData } from './onData.js';

export const onConnection = (socket) => {
    console.log('클라이언트 연결 성공 :', socket.remoteAddress, socket.remotePort);

    // 소켓에 버퍼를 하나 만든다.
    socket.buffer = Buffer.alloc(0)

    socket.on('data', onData(socket));
    socket.on('end', onEnd(socket));
    socket.on('error', onError(socket));
};
