// Shows
const URL = process.env.REACT_APP_API_BASE_URL

// Create
export function createShow(show) {
  const method = {
    method: "POST",
    body: JSON.stringify(show),
    headers: {"content-type": "application/json"}
  }
  return fetch (`${URL}/shows`, method).then(response => response.json()); 
}

// Delete
export function destroyShow(id) {
  return fetch (`${URL}/shows/${id}` , {method: "delete"}) 
} 

// Index/Get all
export function getAllShows() {
  return fetch (`${URL}/shows`).then((results) => results.json())
}

// Show/Get one
export function getOneShow(id) {
  return fetch (`${URL}/shows/${id}`).then((results) => results.json())
}

// Update
export function updateShow(id, show) {
  const method = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: {"content-type": "application/json"}
  }
  return fetch (`${URL}/shows/${id}`, method).then(response => response.json()); 
}
