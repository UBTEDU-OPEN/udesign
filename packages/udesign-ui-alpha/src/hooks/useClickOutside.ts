import { useEffect } from 'react';

export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    function handler(event: Event) {
      if (ref && !ref.current?.contains(event.target as HTMLElement)) {
        callback();
      }
    }
    document.addEventListener('click', handler, false);

    return () => {
      document.removeEventListener('click', handler, false);
    };
  }, [ref, callback]);
};
