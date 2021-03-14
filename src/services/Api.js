export const API_URL =
  'http://desafioonline.webmotors.com.br/api/OnlineChallenge/';

export function MAKE_GET() {
  return {
    url: `${API_URL}Make`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function MODEL_GET(makeId) {
  return {
    url: `${API_URL}Model?MakeID=${makeId}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function VERSION_GET(modelID) {
  return {
    url: `${API_URL}Version?ModelID=${modelID}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function Vehicles_GET(page) {
  return {
    url: `${API_URL}Vehicles?Page=${page}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}
