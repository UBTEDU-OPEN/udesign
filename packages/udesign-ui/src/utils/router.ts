export type routeProps = {
  to?: string;
  url?: string;
  replace?: boolean;
};

export function route({ to, url, replace = false }: routeProps) {
  if (to) {
    // Router[replace ? 'replace' : 'push'](to);
  } else if (url) {
    replace ? location.replace(url) : (location.href = url);
  }
}
