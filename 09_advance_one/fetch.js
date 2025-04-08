//** Now, step by step, we've covered EVERY essential aspect of fetch():

// Basic Fetch Request

// Handling HTTP Errors

// Using Async/Await

// Sending Data (POST)

// Custom Headers

// Retry Logic */

//***basic fetch request
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json()) // Convert response to JSON
//     .then(data => console.log("Step 1: Basic Fetch", data)) // Log the data
//     .catch(error => console.error("Step 1: Fetch Error", error));

//***handling http errors
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => console.log("Step 2: Handled HTTP Errors", data))
//     .catch(error => console.error("Step 2: Fetch Error Handling", error));

//*** using async await */
// async function fetchUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("Step 3: Using Async/Await", data);
//     } catch (error) {
//         console.error("Step 3: Async/Await Error Handling", error);
//     }
// }

// fetchUsers();

//** sending data with post */
// async function createUser() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name: "Aleem",
//                 email: "aleem@example.com"
//             })
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("Step 4: Sending Data with POST", data);
//     } catch (error) {
//         console.error("Step 4: POST Request Error Handling", error);
//     }
// }

// createUser();


//** customizing header for authentication */
// async function fetchProtectedData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//             headers: {
//                 "Authorization": "Bearer YOUR_API_KEY"
//             }
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP Error: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("Step 5: Using Headers", data);
//     } catch (error) {
//         console.error("Step 5: Authentication Error", error);
//     }
// }

// fetchProtectedData();

// //** retry logic with unstable api */
// async function fetchWithRetry(url, retries = 3) {
//     for (let i = 0; i < retries; i++) {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error(`Attempt ${i + 1}: HTTP Error ${response.status}`);

//             const data = await response.json();
//             console.log(`Step 6: Fetch Success on Attempt ${i + 1}`, data);
//             return data;
//         } catch (error) {
//             console.error(`Step 6: Attempt ${i + 1} Failed`, error);
//         }
//     }
//     throw new Error("Step 6: All retry attempts failed.");
// }

// fetchWithRetry("https://jsonplaceholder.typicode.com/users");

//** Chair aur code https://freeapi.hashnode.space/api-guide/apireference/getRequest */
//Get request, with url only, then option as object, then option with other parameters
// async function kitchenSinkGet(){
//     // const url = 'https://api.freeapi.app/api/v1/kitchen-sink/request/headers'
//     // const url = 'https://api.freeapi.app/api/v1/kitchen-sink/http-methods/get'
//     // const options = {method: 'GET'}
//     const url = 'https://api.freeapi.app/api/v1/kitchen-sink/http-methods/get';
//     const options = {method: 'GET', headers: {accept: 'application/json'}};
//     try {
//         const response = await fetch(url, options)
//         if (!response.ok) {
//             throw new Error(`Response status: ${response.status}`);
//           }
//         const data = await response.json()
//         console.log(data)
//         if(data.statusCode === 200){
//             console.log('received status code 200')
//             console.log('here is a msg: '+data.message)
//             console.log('here is success: '+data.success)
//             console.log('here is headers: '+JSON.stringify(data.data.headers))
//             console.log('here is host: '+data.data.headers.host)
//         }

//     } catch (error) {
//         console.log(error)
//     }
// }
// kitchenSinkGet()

//** Post
// async function kitchenSinkPost () {
//     const url = 'https://api.freeapi.app/api/v1/users/register'
//     const options = {
//         method: 'POST',
//         headers:{accept: 'application/json', 'content-type':'application/json'},
//         body:'{"email":"deltadelta@example.com","password":"del@123","role":"admin","username":"deltadelta"}'
//     }
//     const options1 = {
//         method: 'POST',
//         headers: {accept: 'application/json', 'content-type': 'application/json'},
//         body: '{"email":"user1.email1@domain.com","password":"test@123","role":"ADMIN","username":"doejohn11"}'
//       };
//     try {
//         const response = await fetch(url, options)
//         if(!response.ok){
//             throw new Error("Error Occured in Post: "+ response.status);
            
//         }
//         const json = await response.json()
//         console.log(json)
//     } catch (error) {
//         console.log(error)        
//     }
// }
// kitchenSinkPost()

//status codes
// async function fetchAllStatusCode(){
//     const url = 'https://api.freeapi.app/api/v1/kitchen-sink/status-codes'
//     const options = {
//         method: 'GET',
//         header: {accept: "application/JSON", "content-type":"application/JSON"}
//     }
//     try {
//         const response = await fetch(url, options)
//         if(!response.ok)
//         {
//             throw new Error("Error Occured fetching Status Code: "+response.status);
//         }
//         const jsonObj = await response.json()
//         console.log(jsonObj)
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchAllStatusCode()

//