// let formData = {
//     dogName: "Charlie",
//     dogBreed: "Bulldog"
// }

// let configObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// }

// fetch('http://localhost:3000/dogs', configObject)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(object) {
//         console.log(object)
//     })
//     .catch(function(error){
//         alert("Bad Things!");
//         console.log(error.message)
//     })

function submitData(userName, userEmail){
    let userData = {
        name: userName,
        email: userEmail
    }
    
    let userObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"          
        },
        body: JSON.stringify(userData)
    }
    return fetch('http://localhost:3000/users', userObject)
        .then(function(response){
            return response.json()
        })
        .then(function(object){
            document.body.innerHTML += object["id"]
        } )
        .catch(function(error){
            document.body.innerHTML += error.message
        })
}