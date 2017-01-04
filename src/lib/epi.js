import 'es6-promise'
let EPIQUERY_ROOT=""

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default class epi {
  constructor(epiRoot) {
    EPIQUERY_ROOT = epiRoot
  }
  get(url) {
    console.log('get url: %s', url)
    return fetch(`${EPIQUERY_ROOT}/epiquery1/glglive/${url}`,
      { method: 'GET', mode: 'cors', headers: {'Accept': 'application/json','Content-Type': 'application/json'} }
    )
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return
    }).catch(function(error) {
      console.log("epi get error: %s", error);
      sleep(2*1000).then(() => {
        return fetch(`${EPIQUERY_ROOT}/epiquery1/glglive/${url}`,
          { method: 'GET', mode: 'cors', headers: {'Accept': 'application/json','Content-Type': 'application/json'} }
        )
      })
    });
  }

  post(url, data) {
    console.log('post url: %s data: %s', url, JSON.stringify(data))
    return fetch(`${EPIQUERY_ROOT}/epiquery1/glglive/${url}`,
      { method: 'POST', body: JSON.stringify(data), mode: 'cors', headers: {'Accept': 'application/json','Content-Type': 'application/json'} }
    )
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return
    }).catch(function(error) {
      console.log("epi post error: %s", error);
      sleep(2*1000).then(() => {
        return fetch(`${EPIQUERY_ROOT}/epiquery1/glglive/${url}`,
          { method: 'POST', body: JSON.stringify(data), mode: 'cors', headers: {'Accept': 'application/json','Content-Type': 'application/json'} }
        )
      })
    });
  }
}
