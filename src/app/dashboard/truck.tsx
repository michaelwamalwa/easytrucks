// Truck Animation Example (using CSS)
import './truck.css';
const Truck = () => {
    return (
      <div className="truck">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 50"
          width="100"
          height="50"
          fill="#000"
        >
          <rect width="60" height="30" fill="blue" />
          <rect x="60" width="30" height="30" fill="red" />
          <circle cx="20" cy="35" r="10" fill="black" />
          <circle cx="80" cy="35" r="10" fill="black" />
        </svg>
      </div>
    );
  };
  
  export default Truck;

  