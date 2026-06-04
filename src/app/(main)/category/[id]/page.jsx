import Link from "next/link";
import RightSideBar from "@/components/Rightsidebar";
import NewsByCategoryCard from "@/components/NewsByCategoryCard";

async function categoriesData() {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    return data.data.news_category;
}
const NewsByCategoryData = async (categoryId) => {
        const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
        const data = await res.json();
        return data.data;
    };
export default async function Home({params}) {
  const categories = await categoriesData();
    const {id}= await params;
    const categoryNews = await NewsByCategoryData(id);


  return (
    <div className =" container mx-auto py-4 grid grid-cols-12 gap-4 ">

      <div className ="col-span-3 bg-blue-100  p-4"> 
        
        <h1>All Category</h1>
        <ul className="mt-4 flex flex-col gap-2">
          {categories.map(category => (
            
            <li key={category.category_id} className="bg-blue-300 text-center hover:bg-red-300">
              <Link href={`/category/${category.category_id}`} className="block p-2">
                {category.category_name}
              </Link>
            </li>
          ))}
        </ul>
        
        </div>


      <div className ="col-span-6 bg-blue-200 text-white p-4 ">
        <h1>All News</h1>
        <div className="flex flex-col gap-4 mt-4">
          {
            categoryNews.length === 0 ? <p className="text-center text-2xl">No news found for this category.</p> :
                categoryNews.map(news => (
                    <NewsByCategoryCard key={news._id} news={news} />
                ))
            }

        </div>
      </div>



      <div className ="col-span-3 bg-blue-500 text-white p-4">
        <RightSideBar/>
      </div>


    </div>

  );
}





// import React from 'react';





// const page = async({params}) => {
//     const {id} = await params;

//     return (
//       <div>
           
//         </div>  
//     );
// };

// export default page;