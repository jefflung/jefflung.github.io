import React, { Component } from 'react';

class Testimonials extends Component {
  render() {

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        var signImage = 'images/signature/' +testimonials.image;
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite><img src={signImage}/><br/><span><a href={testimonials.url} target="_blank">{testimonials.url}</a></span>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
         <div className="topoverlay">
          <img src="images/testimonial-top-overlay.svg"/>
         </div>
         <div className="text-container">
            <div className="row">
               <div className="two columns header-col" data-aos="fade-right">
                  <h1><span>Testimonials</span></h1>
               </div>

               <div className="ten columns flex-container">
                  <ul className="slides">
                     {testimonials}
                  </ul>
               </div>
            </div>
         </div>
         <div className="bottomoverlay">
          <img src="images/testimonial-bottom-overlay.svg"/>
         </div>
   </section>
    );
  }
}

export default Testimonials;
