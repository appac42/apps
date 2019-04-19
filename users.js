var request = require("request");


const baseurl= 'https://jsonplaceholder.typicode.com/posts'




let get = function (){
    return new Promise((resolve, reject) =>{
        request.get(baseurl, function (error, response, body) {
            if (error){
                return reject(error)
            } else if (response.statusMessage == 'OK'){
                return resolve(body)
            }else{
                return reject(body)
            }
        });
    })
        
    
};

let post =  function (user){
    return new Promise((resolve, reject) =>{

        let options = { 
            method: 'POST',
            url: baseurl,
            body: user,
            json: true };
        request(options, function (error, response, body) {
            if (error){
                return reject(error)
            } else if (response.statusCode == 201){
                return resolve({'status': 'success', "id": body.id})
            }else{
                return reject(body)
            }
        });
    }) 
};

let deleteUser = function (id){
    return new Promise((resolve, reject) =>{
        let options = { 
            method: 'DELETE',
            url: baseurl + '/' +id,
            json: true };
        request(options, function (error, response, body) {
            if (error){
                return reject(error)
            } else if (response.statusCode == 200){
                return resolve({'status': 'deleted'})
            }else{
                return reject(body)
            }
        });
    }) 
};

module.exports = {
    get: get,
    post: post,
    delete: deleteUser
}