import { addGameSession } from "../session/game.session.js";
import { loadProtos } from "./loadProto.js";
import { v4 as uuidv4} from 'uuid'

const initServer = async () => {
    try{
        await loadProtos();
        const gameId = uuidv4();
        const gameSession = addGameSession(gameId);
        console.log(gameSession)
    } catch (e){
        console.log(e)
        process.exit(1)
    }    
};

export default initServer;