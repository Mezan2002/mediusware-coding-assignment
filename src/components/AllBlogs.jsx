import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";

const AllBlogs = () => {

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("blogs", blogs);
  console.log("categories", categories);



  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://hr.mediusware.xyz/api/website/blogs/categories', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCategories(data?.data || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://hr.mediusware.xyz/api/website/blogs', {

        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className="container">
      <div>
        <div className="">
          <p className="sm:text-[48px] text-2xl leading-8 font-bold text-center">
            All <span className="text-[#00A88E]"> Blogs</span>
          </p>
        </div>
        <div className="flex items-center flex-wrap justify-center gap-4 sm:py-12 py-5">
          <button className="text-lg font-medium text-white py-3 px-6 bg-primary-3 rounded-xl">
            All
          </button>
          {
            categories.map(category => (
              <button className="text-lg font-medium py-3 px-6 text-gray-7 bg-white rounded-xl border border-border-2">
                {category.name} <span className="py-1 px-2 bg-gray-200 text-sm font-bold text-gray-7 rounded-[15px] inline-block ml-2">{category.total_blog}</span>
              </button>
            ))
          }

        </div>
        {/* card outer container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs?.results?.map((blog) => (
            <div key={blog.id} className="flex justify-center">
              <BlogCard blog={blog} />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default AllBlogs;

