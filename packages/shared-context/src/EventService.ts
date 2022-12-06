export default class EventService {
  static events = new Map<string, any>();

  static dispatch(event: string) {
    const hasEvent = this.events.has(event);
    if (hasEvent) {
      const cbs = this.events.get(event);
      cbs.forEach(callback => callback());
    }
  }

  static subscribe(event: string, callback: () => void) {
    const hasEvent = this.events.has(event);
    if (hasEvent) {
      const cbs = this.events.get(event);
      this.events.set(event, [...cbs, callback]);
    } else {
      this.events.set(event, [callback]);
    }

    const unsubscribe = (event: string) => {
      const cbs = this.events.get(event);
      if (cbs.length === 1) {
        this.events.delete(event);
      } else {
        const fcbs = cbs.filter(cb => cb !== callback);
        this.events.set(event, fcbs);
      }
    };
    return unsubscribe;
  }

  static getInfo() {
    this.events.forEach((value, key) => {
      console.log("EventService ~ this.events.entries ~ key", key, value);
    });
  }
}
