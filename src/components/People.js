import { useEffect, useState } from "react";
import axios from "axios";

function People() {
    const [people, setPeople] = useState([]);
    useEffect(()=>{
        axios.get("https://api.tvmaze.com/people")
        .then((response)=>{
            console.log(response.data);
            setPeople(response.data)
        })
    },[]);

    return (
        <div>
            {people.map(p => {
                return (
                    <div>
                        <h2>{p.name}</h2>
                        {p.image && <img src={p.image.medium} />}
                    </div>
                )
            })}
        </div>
    )
}

export default People;