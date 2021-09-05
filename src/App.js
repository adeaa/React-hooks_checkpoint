import React, { useState } from "react";
import AddMovie from "./Components/AddMovie/AddMovie";
import Filter from "./Components/Filter/Filter";
import MovieList from "./Components/MovieList/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Dark",
      description:
        "When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids. The mystery-drama series introduces an intricate puzzle filled with twists that includes a web of curious characters, all of whom have a connection to the town's troubled history -- whether they know it or not. The story includes supernatural elements that tie back to the same town in 1986. 'Dark' represents the first German original series produced for Netflix.",
      posterURL: "https://mrjavan.com/wp-content/uploads/2021/07/Dark.jpg",
      rating: "8.8",
    },
    {
      title: "The End of the F...ing World",
      description:
        "Two 17-year-old outsiders, James and Alyssa, embark on a road trip to find Alyssa's estranged father, who left home when she was just a child. James, who's pretty convinced he's a psychopath, has decided it's time to graduate from killing animals to something bigger, and he's already got a target in mind. Alyssa, the embodiment of existential angst, feels like she doesn't fit in at her new school despite being quite popular. Together, they get caught up on a trail of violent events that grow increasingly more ominous as their quest progresses.",
      posterURL: "https://flxt.tmsimg.com/assets/p14695238_b_v13_aa.jpg",
      rating: "8.1",
    },
    {
      title: "I Am Not Okay With This",
      description:
        "A teenager navigates the complexities of high school, family and her sexuality while dealing with new superpowers; based on Charles Forsman's graphic novel.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMWM5YzhmNGMtZTI4Ny00MGM4LThkYjAtMDIyMTEwNTQyZmQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
      rating: "7.5",
    },
    {
      title: "Game Of Thrones",
      description:
        "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.",
      posterURL:
        "https://www.gannett-cdn.com/presto/2019/03/21/USAT/22edb4df-2995-43bd-a62d-678ae2db1e25-GoT8_KeyArt.jpg?width=1588",
      rating: "9.2",
    },
    {
      title: "The Middle",
      description:
        "Frances Heck is a middle-class, married woman and mother of three who resides in the small town of Orson, Indiana, and tries to manage her dysfunctional family and career.",
      posterURL:
        "https://i.pinimg.com/originals/55/27/74/55277428d5f2064ff4a49bafd47686f3.jpg",
      rating: "7.6",
    },
    {
      title: "2 Broke Girls",
      description:
        "Max and Caroline, two girls in their mid-twenties, work at a Brooklyn restaurant as waitresses. Together, they dream of starting up their cupcake business, but always find themselves without money.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMTYxMDA3Mzg5NV5BMl5BanBnXkFtZTgwNDIxOTcwMDI@._V1_.jpg",
      rating: "6.6",
    },
    // {
    //   title:"",
    //   description: "",
    //   posterURL:"",
    //   rating: "",
    // },
  ]);
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);


  const toggleAddMovie = () => setAdding(!adding);
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
    toggleAddMovie();
  };
  const handleChange = (e) => {
    setTitle(
      e.target.value
        .split(" ")
        .filter((el) => el !== "")
        .join(" ")
        .trim()
    );
  };
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  if (adding) {
    return <AddMovie handleAdd={handleAdd} handleCancel={toggleAddMovie} />;
  }
  return (
    <React.Fragment>
      <Filter
        handleChange={handleChange}
        title={title}
        toggleAddMovie={toggleAddMovie}
        ratingChanged={ratingChanged}
        rating={rating}
      />
      <MovieList
        movies={movies.filter(
          (movie) =>
            movie.title.toUpperCase().includes(title.toUpperCase().trim()) &&
            movie.rating >= rating
        )}
      />
    </React.Fragment>
  );
}

export default App;
