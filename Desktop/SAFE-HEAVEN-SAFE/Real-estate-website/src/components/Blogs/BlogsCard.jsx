import React from "react";
import { FaArrowRight } from 'react-icons/fa'; // Correct import for Font Awesome icons


const BlogsCard = ({ image, title, description }) => {
  return (
    <>
    
      <div style={{ color: 'white', position: 'relative' }}>
    
        <div style={{ overflow: 'hidden' }}>
          <img
            src={image}
            alt="No image"
            style={{
              margin: '0 auto',
              height: '420px',
              width: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s',
            }}
            className="group-hover:scale-105"
          />
        </div>
        <div
          style={{
            padding: '16px',
            marginLeft: '24px',
            backgroundColor: 'white',
            color: 'black',
            position: 'relative',
            transform: 'translateY(-64px)',
          }}
        >
          <h1 style={{ fontSize: '24px', fontWeight: '600', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {title}
          </h1>
          <p style={{ color: '#6B7280', fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '4', WebkitBoxOrient: 'vertical' }}>
            {description}
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '16px', color: '#6B7280' }}>
            {/* <FaArrowRight
              style={{
                transition: 'color 0.3s, transform 0.3s',
              }}
              className="group-hover:text-primary group-hover:translate-x-2"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsCard;
