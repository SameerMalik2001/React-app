import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Loader from "../../components/loader";


// class SingleSeries extends Component {
//     states = {
//         show : null
//     }

//     componentDidMount() {
//         const {id} = useParams();
        
//         fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
//         .then(response => response.json()).then(json => this.setState({show : json}))
//     }
    
//     render() {
//         const {show} = this.states
//         return (
//             <div>
//                 {
//                     show === null && <p>Null</p>
//                 }
//                 {
//                     show !== null && <p>show has been loaded{show}</p>
//                 }
//             </div>
//         );
//     }
// }

function SingleSeries() {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
      fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then((response) => response.json())
      .then((json) => { setShow(json);});
  }, [id]);

  return (
    <>
      {show === null ? (
        <>
          <p>NULL</p>
          <p>{id}</p>
        </>
      ) : (
        <div>
          <h2>Show Details</h2>
          <p>Show Name: {show.name}</p>
          <p>Show Rating : {show.rating.average}</p>
          <p>Show Premiered : {show.premiered}</p>
          <p>No. of Episodes : {show._embedded.episodes.length}</p>
          <p> <img alt="show image" src={show.image.medium}></img>
          </p>
        </div>
      )}
    </>
  );
}

export default SingleSeries;
