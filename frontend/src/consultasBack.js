const SERVICES_CONFIG = {
    baseUrl: 'http://localhost',
    port: ':4000',
    path: '/api/auth/login',
  };
  
  export async function getUsers() {
    const endpoint = `${SERVICES_CONFIG.baseUrl}${SERVICES_CONFIG.port}${SERVICES_CONFIG.path}`;
    const response = await fetch(endpoint, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
    });
    return response; 
  };
   