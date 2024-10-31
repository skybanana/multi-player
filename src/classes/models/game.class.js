import { createLocationPacket } from "../../utils/notification/game.notification.js";

const MAX_PLAYERS = 10;

class Game {
  constructor(id) {
    this.id = id;
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  getUser(userId) {
    return this.users.find((user) => user.id === userId);
  }

  removeUser(userId) {
    this.users = this.users.filter((user) => user.id !== userId);
  }

  getAllLocation(userId){
    const location = this.users.filter((user) => user.id !== userId)
    .map((user)=>{
      return { id: user.id, playerId: user.playerId, x: user.x, y: user.y}
    });

    return createLocationPacket(location);
  }
}

export default Game;
