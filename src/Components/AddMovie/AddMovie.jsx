import { useState } from "react";

function AddMovie({ handleAdd, handleCancel }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const addMovie = () => {
    const newMovie = { title, rating, description, posterUrl };
    if (title && rating && description && posterUrl) {
      handleAdd(newMovie);
      handleCancel();
      setTitle("");
      setRating("");
      setDescription("");
      setPosterUrl("");
    } else alert("Field should not be empty");
  };

  return (
    <form className="border border-primary rounded m-3 p-3">
      <h1 className="text-center bg-secondary text-white rounded">
        Add a Movie
      </h1>
      <div className="row mb-3">
        <label htmlFor="">
          Title:
          <input
            className="form-control form-control-lg"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>

      <div className="row mb-3">
        <label htmlFor="">
          description:
          <textarea
            className="form-control"
            placeholder="Enter description..."
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </label>
      </div>

      <div className="row mb-3">
        <label htmlFor="">
          Poster URL:
          <input
            className="form-control"
            placeholder="Enter a valid image URL..."
            type="text"
            onChange={(e) => setPosterUrl(e.target.value)}
          />
        </label>
      </div>

      <div className="row mb-3">
        <label htmlFor="">
          rating:
          <input
            className="form-control"
            name="rating"
            type="number"
            min="0"
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-secondary m-3"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={addMovie}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddMovie;
