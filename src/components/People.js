import { useEffect, useState } from "react";
import axios from "axios";
import "./People.css";

function People() {
    const [people, setPeople] = useState([]);
    useEffect(()=>{
        axios.get("https://api.tvmaze.com/people")
        .then((response)=>{ 
            setPeople(response.data);
            console.log(response.data);
        })
    },[]);

    return (
        <div className="gallery">
            {people.filter(p => {return p.image != null}).map(p => {
                return (  
                    <div className="single-img">
                        {p.image && <img src={p.image.medium} />}
                    </div>
                )
            })};
        </div>
    )
}

export default People;