class LatencyManager {
  constructor() {
    this.intervals = new Map();
  }

  addUser(userId, callback, interval) {
    if (this.intervals.has(userId)) {
      console.error("중복된 인터벌 감지");
    }
    this.intervals.set(userId, setInterval(callback, interval));
  }

  removeUser(userId) {
    if (!this.intervals.has(userId)) {
      return;
    }
    clearInterval(this.intervals.get(userId));
  }

  clearAll() {
    this.intervals.forEach((interval) => {
      clearInterval(interval);
    });
  }
}

export default LatencyManager;
