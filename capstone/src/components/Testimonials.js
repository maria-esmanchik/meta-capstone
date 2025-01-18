import React from 'react';
import AvatarA from '../assets/avatarA.webp';
import AvatarC from '../assets/avatarC.avif';
import AvatarE from '../assets/avatarE.avif';
import AvatarF from '../assets/avatarF.webp';
import AvatarK from '../assets/avatarK.jpg';
import '../style/Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className='testimonial-items'>
        <div className="testimonial-item">
          <img src={AvatarA} alt='AvatarA' className='comments-card'/>
          <p>⭐⭐⭐⭐⭐</p>
          <h4>Alex</h4>
          <p>"The best Greek salad I've ever had!"</p>
        </div>
        <div className="testimonial-item">
          <img src={AvatarC} alt='AvatatrC' className='comments-card'/>
          <p>⭐⭐⭐⭐⭐</p>
          <h4>Gloria</h4>
          <p>"Amazing desserts, highly recommend!"</p>
        </div>
        <div className="testimonial-item">
          <img src={AvatarE} alt='AvatarE' className='comments-card'/>
          <p>⭐⭐⭐⭐⭐</p>
          <h4>Frank</h4>
          <p>"The best Greek salad I've ever had!"</p>
        </div>
        <div className="testimonial-item">
          <img src={AvatarF} alt='AvatarF' className='comments-card'/>
          <p>⭐⭐⭐⭐⭐</p>
          <h4>Olivia</h4>
          <p>"Amazing desserts, highly recommend!"</p>
        </div>
        <div className="testimonial-item">
          <img src={AvatarK} alt='AvatarK' className='comments-card'/>
          <p>⭐⭐⭐⭐⭐</p>
          <h4>Greg</h4>
          <p>"Amazing desserts, highly recommend!"</p>
        </div>
      </div>
      </section>
  );
};

export default Testimonials;
