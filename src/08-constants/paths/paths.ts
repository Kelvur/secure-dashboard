
export interface Path {
  [name: string]: string;
}

const PATHS: Path = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  SETTINGS: '/setting',
};

export default PATHS;
