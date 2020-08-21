import React, { useState, useEffect } from "react";

const LoginComponent: React.FC = () => {
    const [text, setText] = useState<string>("inget än");

    const beginLoginFlow = async () =>{
        const response = await fetch("https://www.strava.com/oauth/authorize?client_id=52327&scope=activity:read_all&redirect_uri=http://localhost:5000&response_type=code", {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            //mode: 'cors', // no-cors, *cors, same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            // headers: {
            //   'client_id': '52327'
            //   // 'Content-Type': 'application/x-www-form-urlencoded',
            // },
            redirect: 'follow', // manual, *follow, error
            //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          setText(JSON.stringify(response.json));      
    }

    React.useEffect(() => {
        //beginLoginFlow();
    }, [])
    
    if (true)
    {
        window.location.assign("");
        return <>Reerouted</>
    }
    return <>Login sir {text}</>;
}

export const Login = LoginComponent;