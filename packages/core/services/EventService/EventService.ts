type Event = "watch" | "boom";

type Fn = () => void;

class EventService {
  private static events = new Map<Event, Array<Fn>>();

  static dispatch(event: Event) {
    const hasEvent = this.events.has(event);
    if (hasEvent) {
      const cbs = this.events.get(event);
      cbs.forEach(callback => callback());
    }
  }

  static subscribe(event: Event, callback: Fn) {
    const hasEvent = this.events.has(event);
    if (hasEvent) {
      const cbs = this.events.get(event);
      this.events.set(event, [...cbs, callback]);
    } else {
      this.events.set(event, [callback]);
    }

    const unsubscribe = () => {
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

export default EventService;
