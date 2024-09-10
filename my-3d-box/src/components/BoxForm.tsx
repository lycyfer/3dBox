import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import './BoxForm.css'; // Импортируем стили

interface BoxFormProps {
  onSubmit: (vertices: number[]) => void;
}

const BoxForm: React.FC<BoxFormProps> = ({ onSubmit }) => {
  const [length, setLength] = useState(1);
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/triangulate', { length, width, height });
    onSubmit(response.data.vertices);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Length"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          type="number"
          required
        />
        <TextField
          label="Width"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          type="number"
          required
        />
        <TextField
          label="Height"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          type="number"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Update Box
        </Button>
      </form>
    </div>
  );
};

export default BoxForm;