//fetch(url, {})
// method: tells your fetch what to do
//mode, cache, credentials: some APIs require and some don't
//headers: where we get authorization. Tells the fetch that we're meant to be there, with API keys etc.
//body is where we attach data. You can only send a body in a POST, not a GET request.

//MDN Fetch URL: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

let body = {
  feedbackType: "General",
  feedback: "string",
  entityID: "3f49f4hfl43",
};

let options = {
  method: "POST",
  body: JSON.stringify(body),
};

const theData = async () => {
  const data = await fetch(url, options);
  const dataJson = await data.json();
};

// method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

//=======
