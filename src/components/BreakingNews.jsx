import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {

const news = [
  {
    id: 1,
    title: "Global Markets Rally as Tech Stocks Lead Gains",
  },
  {
    id: 2,
    title: "Scientists Discover New Method for Renewable Energy Storage",
  },
  {
    id: 3,
    title: "Major Sports Tournament Announces Expanded Format",
  },
  {
    id: 4,
    title: "Government Unveils New Infrastructure Development Plan",
  },
  {
    id: 5,
    title: "Breakthrough AI Model Shows Improved Reasoning Capabilities",
  },
  {
    id: 6,
    title: "Healthcare Experts Report Advances in Cancer Treatment",
  },
  {
    id: 7,
    title: "Electric Vehicle Sales Reach Record High This Quarter",
  },
  {
    id: 8,
    title: "Space Agency Successfully Launches Lunar Mission",
  },
  {
    id: 9,
    title: "Education Sector Adopts New Digital Learning Standards",
  },
  {
    id: 10,
    title: "Climate Summit Concludes with New International Agreements",
  },
];



    return (
        <div className="bg-gray-100 p-4 flex items-center gap-4 container mx-auto">
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Latest
            </button>
            <Marquee pauseOnHover={true}>
                {news.map(n => (
                    <span key={n.id} className="text-lg mx-4">
                        {n.title}
                    </span>
                ))}
            </Marquee>


        </div>
    );
};

export default BreakingNews;