import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const SuccessCard = ({ image, number, title }) => {
  const [startCounting, setStartCounting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById(`success-card-${title}`);
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [title]);

  return (
    <div 
      id={`success-card-${title}`}
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
    >
      <img src={image} alt="" className="w-16 h-16 mb-4" />
      {/* <div className="text-4xl mb-4">{image}</div> */}
      <div className="text-3xl font-bold text-blue-600 mb-2">
        {startCounting ? <CountUp end={number} duration={2.5} /> : 0}
      </div>
      <h3 className="text-xl font-medium text-gray-800 text-center">{title}</h3>
    </div>
  );
};

export default SuccessCard;