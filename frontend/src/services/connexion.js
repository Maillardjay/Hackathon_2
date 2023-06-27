const getData = (url) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const postData = (path, data) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}${path}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const updateData = (url, body) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).catch((err) => console.error(err));
};

const deleteData = (path) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}${path}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const connexion = {
  get: (url) => getData(url),
  post: (path, data) => postData(path, data),
  put: (url, body) => updateData(url, body),
  delete: (path) => deleteData(path),
};

export default connexion;
