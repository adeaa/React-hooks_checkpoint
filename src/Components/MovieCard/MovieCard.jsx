import React from 'react';

const MovieCard = ({title, description, posterURL, rating}) => {
    const styles ={
        card :{
            display:"flex",
            flexDirection:"row",
            border:"1px bold black",

        },
        image:{
            width:"20vw",
            height:"30vw"
        },
        info:{
            padding:"5px"
        }
    }


    return ( 
        <div className="card m-1" style={styles.card}>
            <img src={posterURL} style={styles.image} alt={title} />
            <div className="info" style={styles.info}>
                <h2>{title}</h2>
                <h5>⭐{rating}</h5>
                <p>{description}</p>
            </div>
        </div>
     );
}
 
export default MovieCard;