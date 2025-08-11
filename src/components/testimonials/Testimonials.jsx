import React from "react";
import styles from './testimonials.css';
import avatar1 from '../../images/testimonial-1.png'
import avatar2 from '../../images/testimonial-2.png'
import avatar3 from '../../images/testimonial-3.png'
import avatar4 from '../../images/testimonial-4.png'
import avatar5 from '../../images/testimonial-5.png'
import avatar6 from '../../images/testimonial-6.png'

const Card = ({image, title,content,author})=>{
    return <div className="card">
        <div className="card-image">
             <img src={image} alt='avatar-1'/>
        </div>
        <div className="card-content">
            <h6>{title}</h6>
            <div>{content} - <span>{author}</span></div>
        </div>
    </div>
}
const Testimonials = ()=>{
    return  (
    <section className='testimonials-wrapper'>
      <span className='header'>Testimonial</span>
      <div className="cards">
        <div className="cards-col-1">
            <Card image={avatar1} title='2 weeks of using Glow Serum' content='After 2 weeks of using Xtragleam, my skin has never felt smoother. Thank you!”' author='Lisa, Verified Buyer' />
            <Card image={avatar2} title='Game Changer' content='The Glow Serum is a game-changer. My dark spots faded within weeks, and my skin feels so hydrated!”' author='Emma L., Verified Buyer' />
        </div>
        <div className="cards-col-2">
            <Card image={avatar3} title='More Confident' content='After 2 weeks of using Xtragleam, my skin has never felt smoother. Thank you!”' author='Lisa, Verified Buyer' />
            <Card image={avatar4} title='More Confident' content='The Glow Serum is a game-changer. My dark spots faded within weeks, and my skin feels so hydrated!”' author='Emma L., Verified Buyer' />
        </div>
        <div className="cards-col-3">
            <Card image={avatar5} title='Dermatologist Recommendation' content='After 2 weeks of using Xtragleam, my skin has never felt smoother. Thank you!”' author='Lisa, Verified Buyer' />
            <Card image={avatar6} title='Beauty Influencer' content='The Glow Serum is a game-changer. My dark spots faded within weeks, and my skin feels so hydrated!”' author='Emma L., Verified Buyer' />
        </div>
      </div>
    </section>
)}

export default Testimonials