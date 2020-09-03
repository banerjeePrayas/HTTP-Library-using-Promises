const http = new EasyHttp();

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// User DAta
const data = {
    name: 'Prayas Banerjee',
    username: 'banerjeePrayas',
    email: 'rupuban@gmail.com'
}

// Crete Post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));



// Update POST 
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// Delete POST 
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));