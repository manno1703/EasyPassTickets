import React from 'react';

const Card = () => {
  return (
    <div className="card bg-light border-0 shadow-sm">
      <div className="card-body">
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Your feedback..."
          ></textarea>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-outline-secondary btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512" fill="currentColor">
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          </button>

          <button className="btn btn-outline-secondary btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 512 512" fill="currentColor">
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          </button>

          <button type="submit" className="btn btn-outline-secondary btn-sm">
            <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M7.4 6.32L15.89 3.49C19.7 2.22 21.77 4.3 20.51 8.11L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.92 14.08L7.4 13.24C1.69 11.34 1.69 8.23 7.4 6.32Z" />
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M10.11 13.65L13.69 10.06" />
            </svg>
          </button>
        </div>

        {/* <button className="btn btn-primary w-100">Submit</button> */}
      </div>
    </div>
  );
};

export default Card;
