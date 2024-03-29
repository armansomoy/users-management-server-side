# users-management-server-side


// steps for sending data to server 

1. create a post api on the server side 
2. client side send data via post 
3. set fetch method inside the options (second perameter)
4. option will have three things: method 
5. option will have headers: 'content-type' : 'applications/json'
6. don't forget to send data by JSON.strigify() in the body: 
7. on the server side don't forget to use express.json() middleware 
