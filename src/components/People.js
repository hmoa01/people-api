import { useEffect, useState } from "react";
import axios from "axios";
import "./People.css";

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
        <div className="gallery">
            {people.map(p => {
                return (
                    <div className="single-img">
                        {p.image && <img src={p.image.medium} />}
                    </div>
                )
            })}
        </div>
    )
}

export default People;