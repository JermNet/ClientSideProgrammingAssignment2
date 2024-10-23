function getData() {
    //Using this website for placeholder data because the specified on didn't work
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            if(!res.ok) {
                throw new Error("There was a network response error.");
            }
            return res.json();
        })
        .then(data => {
            console.log("Here is the data! ", data);
        })
        .catch(error => {
            console.error("There was an error getting the data! ", error);
        });
}

getData();