import { each } from 'lodash';

export const mergeEvents = (rawEvents: Record<string, any>, events: Record<string, any>) => {
  const mergedEvents: { [key: string]: any } = {};
  each(events, (handler: any, key) => {
    if (typeof handler === 'function') {
      mergedEvents[key] = (...args: any[]) => {
        handler(...args);
        if (rawEvents && typeof rawEvents[key] === 'function') {
          rawEvents[key](...args);
        }
      };
    }
  });

  return mergedEvents;
};
