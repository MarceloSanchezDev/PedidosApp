
export async function getUsers() {
  const endpoint = 'http://localhost:4000/api/auth';
  try {
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

    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

export async function getOrders() {
  const endpoint = 'http://localhost:4000/api/clientes';
  try {
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

    if (!response.ok) {
      throw new Error(`Server responded with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
