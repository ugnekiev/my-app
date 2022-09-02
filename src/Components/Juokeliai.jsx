import { useEffect } from "react";
import { useState } from "react";
import Juokelis from "./Juokelis";

const Juokeliai  = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then((res) => res.json())
        .then (
            (result) => {
            setData(result.jokes);

          }
            (error) => {

        }
        )

    },[])
 
    return <>

    {data.map((jokes) => (<Juokelis key={id} />
    ))};
    Juokeliai
    </>;
}

export default Juokeliai;