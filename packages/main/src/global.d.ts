///<reference types="react" />

declare module "media/WelcomeWidget" {
  const Welcome: React.ComponentType<{ project: string }>;
  export default Welcome;
}
declare module "media/EventsWidget" {
  const EventsWidget: React.ComponentType;
  export default EventsWidget;
}
declare module "media/DirectEvents" {
  const DirectEvents: React.ComponentType;
  export default DirectEvents;
}

declare module "shared/EventsWatcher" {
  const EventsWatcher: React.ComponentType;
  export default EventsWatcher;
}

type Fn = () => void;
