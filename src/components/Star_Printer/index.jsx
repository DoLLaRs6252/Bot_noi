import React, { useEffect, useState } from 'react';

function StarPrinter() {
  const [starCount, setStarCount] = useState('');
  const [stars, setStars] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value) || value === '') {
      setStarCount(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const count = parseInt(starCount);
    if (!isNaN(count)) {
      const starsArray = [];
      for (let i = 1; i <= count; i++) {
        starsArray.push('*'.repeat(i));
      }
      for (let i = count - 1; i >= 1; i--) {
        starsArray.push('*'.repeat(i));
      }
      setStars(starsArray);
    }
  };

  return (
    <div>
      <h1 className="flex justify-center items-center h-full m-4 text-xl">Star Printer</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="starCountInput" className="m-4 mr-0">input:</label>
        <input
          type="text"
          id="starCountInput"
          value={starCount}
          onChange={handleInputChange}
          placeholder="Type here"
          className="input input-bordered w-32 m-4"
        />
        <button type="submit" className="btn btn-neutral ">Submit</button>
      </form>
      <br />
      {stars.map((star, index) => (
        <div key={index} className="m-4">
          <span className="text-xl">{star}</span>
        </div>
      ))}
    </div>
  );
}

export default StarPrinter;
