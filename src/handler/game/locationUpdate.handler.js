import { getGameSession } from "../../session/game.session.js";

const locationUpdateHandler = ({socket, userId, payload}) => {
    try {
        const { x, y } = payload;
        const gameSession = getGameSession();
    
        if (!gameSession) {
          console.error('게임 세션을 찾지 못 했습니다.')
        }
    
        const user = gameSession.getUser(userId);
        if (!user) {
          console.error('유저를 찾을 수 없습니다.');
        }
        user.updatePosition(x, y);

        const location = gameSession.getAllLocation(userId)
    
        socket.write(location);
      } catch (error) {
        console.error("LocationUpdate : " + error);
      }
    };
    
export default locationUpdateHandler