import React from 'react';
import Img from 'next/image';

import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import Link from 'next/link';
const NewsByCategoryCard = ({ news }) => {
    const AuthName = news.author.name;
    const PublishedDate = news.author.published_date;
    const Authimage = news.author.img;
    return (
        <div>
            <div className="bg-purple-400 p-4 justify-between flex items-center">
                <div className="flex items-center gap-4 ">
                    <Img src={Authimage} alt={AuthName} width={40}
                        height={40}
                        className="rounded-full" />
                    <div>
                        <p>{AuthName}</p>
                        <p>{PublishedDate}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <CiBookmark />
                    <CiShare2 />

                </div>
            </div>
            <h1 className="text-2xl font-bold my-4">{news.title}</h1>
            <div>
                <Img src={news.image_url} alt={news.title} width={600} height={400} />
            </div>
            <p className="text-gray-700 my-4 line-clamp-3">{news.details}</p>
            <div className="flex items-center gap-2 border border-t border-gray-600 mt-4  justify-between">
                <p>rating : {news.rating.number}</p>
                <p className="flex items-center gap-1"><FaEye /> {news.total_view} 
                 <Link href={`/newsdetails/${news._id}`} ><button className='btn btn-primary'>Show More</button></Link>
                 
                 </p>
            </div>
        </div>
    );
};

export default NewsByCategoryCard;