import React from "react";
import BlogCard from './BlogsCard'; 
import blogs from "./blogs.css"

// Adding live image URLs
const BlogsData = [
  {
    id: 1,
    image: "https://via.placeholder.com/400x300?text=Image+1", // Placeholder or Google image URL
    title: "Celebration 1",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400x300?text=Image+2", // Placeholder or Google image URL
    title: "Celebration 2",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
    author: "Someone",
    date: "April 23, 2022",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400x300?text=Image+3", // Placeholder or Google image URL
    title: "Celebration 3",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
    author: "Someone",
    date: "April 24, 2022",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/400x300?text=Image+4", // Placeholder or Google image URL
    title: "Celebration 4",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
    author: "Someone",
    date: "April 25, 2022",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/400x300?text=Image+5", // Placeholder or Google image URL
    title: "Celebration 5",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
    author: "Someone",
    date: "April 26, 2022",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/400x300?text=Image+6", // Placeholder or Google image URL
    title: "Celebration 6",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
    author: "Someone",
    date: "April 27, 2022",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/400x300?text=Image+7", // Placeholder or Google image URL
    title: "Celebration 7",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.",
    author: "Someone",
    date: "April 28, 2022",
  }
];

const BlogsComp = () => {
  return (
    <div className="blogs" style={{ backgroundColor: '#F3F4F6' }}> 
     <div className="hiring-section" data-aos="flip-right">
       <h2
         style={{
          
           textAlign: "center",
           fontSize: "30px",
           color: "black",
           paddingTop: "20px",
        
         }}
       >
         Gallery  <span style={{ color: "#04bcb4" }}>of</span> Excellence 
       </h2>
     </div>
      <div
        style={{
          backgroundColor: '#F3F4F6',
          color: 'white',
          padding: '12px 0 56px',
        }}
      >
        <section
          data-aos="flip-up"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div
            data-aos="flip-right"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div
            data-aos="flip-right"
            style={{
              textAlign: 'center',
              marginTop: '0px',
            }}
          >
            <a href="/pg" >
              <button
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  border: '4px solid rgb(146 213 230)',
                  borderRadius: '0px',
                  padding: '12px 24px',
                  cursor: 'pointer',
                  fontSize: '20px',
                }}
              >
                View all post
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogsComp;
