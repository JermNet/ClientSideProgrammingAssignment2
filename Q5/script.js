/*Axios, as you can see, is very similar to the built in fetch of JavaScript but there are some differences.
In Axios, you don't have to deal with checking the ok property of fetch which maks thinks clearer. One part
for if it works, another part for if it doesn't. And, although it isn't used here, Axios has more detailed
error handling since you can access the error object*/

//Once again, using this website instead since the one provided didn't work
axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log("Error geting data, ", err);
    });