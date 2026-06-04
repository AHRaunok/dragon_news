import Rightsidebar from '@/components/Rightsidebar';
import Link from 'next/link';

const getNewsDetails = async (id) => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
        const data = await response.json();
        return data.data[0];
    } catch (error) {
        console.error('Error fetching news details:', error);
        return null;
    }
};


const NewsDetails = async ({ params }) => {
    const { id } = await params; 
    const news = await getNewsDetails(id);
    console.log(news); 
    return (
        <div className='container mx-auto my-10 grid grid-cols-12'>
            <div className='col-span-9'>
                <h1>News Details</h1>
                <p>ID: {id}</p>
                <h2>{news.total_view}</h2>

                <Link href={`/category/${news.category_id}`}>
                    <button className="btn primary">See news in this category</button>
                </Link>
            </div>
                
            <div className='col-span-3'>
                <Rightsidebar/>
            </div>

        </div>
    );
};

export default NewsDetails;