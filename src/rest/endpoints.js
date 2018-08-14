/**
 * Request general info.
 */
export const
  PROTOCOL = 'http',
  IP = '8.8.8.8',
  PORT = '8080',
  API = 'api',
  BASE_URL = `${PROTOCOL}://${IP}:${PORT}/${API}`;

/**
 * Server route template.
 */
export const
  GET_SOMETHING = BASE_URL + '/getSomething',
  CREATE_USER = BASE_URL + '/open/user/create',
  LOGIN = BASE_URL + '/login';