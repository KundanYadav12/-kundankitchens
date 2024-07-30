 
// import React from 'react';
import './CustomerReviews.css';
import customer1 from "./image/review_1.png"
import customer2 from "./image/review_2.png"
import customer3 from "./image/review_3.png"
import customer4 from "./image/team_member_1.png"
import customer5 from "./image/team_member_2.png"
import customer6 from "./image/team_member_3.png"
import customer7 from "./image/team_member_4.png"
import customer8 from "./image/team_member_4.png"
import customer9 from "./image/team_member_4.png"
// Add more customer images as needed

const reviews = [
  { img: customer1, name: 'John Doe', review: 'Amazing food and great service!' },
  { img: customer2, name: 'Jane Smith', review: 'Loved the ambiance and the dishes.' },
  { img: customer3, name: 'Michael Brown', review: 'A delightful dining experience!' },
  { img: customer4, name: 'John Doe', review: 'Amazing food and great service!' },
  { img: customer5, name: 'Jane Smith', review: 'Loved the ambiance and the dishes.' },
  { img: customer6, name: 'Michael Brown', review: 'A delightful dining experience!' },
  { img: customer7, name: 'John Doe', review: 'Amazing food and great service!' },
  { img: customer8, name: 'Jane Smith', review: 'Loved the ambiance and the dishes.' },
  { img: customer9, name: 'Michael Brown', review: 'A delightful dining experience!' },
  // Add more reviews as needed
];

const CustomerReviews = () => {
  return (
    <section id="customer-reviews" className="customer-reviews">
      <h2>Customer Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.img} alt={review.name} className="review-img" />
            <div className="review-content">
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
