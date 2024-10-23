function getObjectAttributes(jsonString) {
    try {
        const array = JSON.parse(jsonString);
        array.forEach(element => {
            console.log("Name: ", element.name);
            console.log("Email: ", element.email);
        });
    } catch(err) {
        console.error("There was an error parsing the data, ", err);
    }
}

const jsonString = '[{"name": "Nagisa", "email": "nagisa@furukawabread.net"}, {"name": "Kyou", "email": "bookthrower@gmail.gov"}, {"name": "Tomoya", "email": "mc@chd.key"}]';
getObjectAttributes(jsonString);