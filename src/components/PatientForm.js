import React from 'react';

export default function PatientForm() {
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('yes');
  }

  return (
    <React.StrictMode>
      <h1>Hello World</h1>
      <form action="" onSubmit={handleFormSubmit}>
        <input type="file" accept="image/*" capture="camera" />
        <input type="submit" value="Submit" />
      </form>
    </React.StrictMode>
  );
}