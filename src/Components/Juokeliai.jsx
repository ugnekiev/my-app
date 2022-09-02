import { useEffect } from "react";
import { useState } from "react";
import Juokelis from "./Juokelis";

const Juokeliai  = () => {

    const [data, setData] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then((res) => res.json())
        .then (
            (result) => {
                console.log(result.jokes);
            setData(result.jokes);

          },
            (error) => {
                console.log(error);
                setErrorMsg(error.message);

        }
        )

    },[])
 
    return <ul>

    {errorMsg}
    {data.map((joke, index) => (<Juokelis key={index} juokas={joke.setup} juokas2={joke.delivery}/>
    ))}

    </ul>;
}

export default Juokeliai;