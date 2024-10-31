import { addUser } from '../../session/user.session.js';
import { HANDLER_IDS, RESPONSE_SUCCESS_CODE } from '../../constants/handlerIds.js';
import { createResponse } from '../../utils/response/createResponse.js';
import { getGameSession } from '../../session/game.session.js';

const initialHandler = async ({socket, userId, payload}) => {
    try {
        // 유저 추가 및 세션 생성, 세션에 유저 추가
        const { deviceId, latency, playerId } = payload;
        const user = addUser(socket, deviceId, playerId, latency);
        const gameSession = getGameSession();
        gameSession.addUser(user);

        // 유저 정보 응답 생성
        const initialResponse = createResponse(
            HANDLER_IDS.INITIAL,
            RESPONSE_SUCCESS_CODE,
            {userId: deviceId,}
        );

        // 소켓을 통해 클라이언트에게 응답 메시지 전송
        socket.write(initialResponse);
    } catch (error){
        console.log(error)
    }
}

export default initialHandler;