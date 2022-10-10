import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieForm = () => {
  const { id } = useParams(); // Taking Params Value Hook
  const navigate = useNavigate(); // Programmatic Navigation Hook
  console.log(useParams());
  return (
    <div>
      <h1>MovieForm {id} </h1>
      <button
        onClick={() => navigate('/movies')}
        className="btn btn-sm btn-primary"
      >
        Click Me
      </button>
    </div>
  );
};

export default MovieForm;
