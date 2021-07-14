import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var fullname = this.props.data.fullname;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="columns header-col">

               <h1><span>Get In Touch</span></h1>

            </div>

            <div className="">

                  <p className="lead" style={{marginTop:'20px',fontSize:'20px',color:'#fff'}}>
                     
                     <a href="mailto:nosy_parker@msn.com">{email}</a>
                  </p>

            </div>

         </div>

         <div className="row">

            <aside className="twelve columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Contact details</h4>
					   <p className="address">
                     <i className="fa fa-user"></i> {fullname}<br />
						   <i className="fa fa-home"></i> {street}{city}<br />
						   {/*<span><i className="fa fa-phone"></i> {phone}</span>*/}
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        Descriptions of Portfolio boxes are enhanced with auto fade-in and fade-out effect for portable devices as description boxes were only toggled with mouse on for desktop computer. Besides, I really appreciate the convenience of React's easy passing data feature and this let me to add a css class dynamically in order to categorize portfolio boxes with different colors in a good hand. Above features is done in a day, thanks for React and CSS animation convenience
                        <a href="#" target="_blank"></a>
                        </span>
                        <b><a href="#">2 Jul, 2021</a></b>
                     </li>
                     <li>
                        <span>
                        My first article on Medium is about how I build my portflio website and how I overcome the puzzle I faced with coding ReactJs. Moreover, reading Medium with coding and web technology topics is my every morning habbit.<br/>
                        <a href="https://jefflung.medium.com/my-first-react-puzzle-journey-30d4bab68065" target="_blank">My first react puzzle journey</a>
                        </span>
                        <b><a href="#">26 Dec, 2020</a></b>
                     </li>
                     <li>
                        <span>
                        It is a precious experience to complete the modal function of this website through learning with stackoverflow and reading many samples. From completion of popup to swapping projects contents dynamically in modal, I also learnt a lot with ReactJs. 
                        <a href="#"></a>
                        </span>
                        <b><a href="#">12 Dec, 2020</a></b>
                     </li>
                     <li>
                        <span>
                        I am glad to move in one of the big cities in England which embraces different cultures of races, Hello Manchester!
                        <a href="#"></a>
                        </span>
                        <b><a href="#">16 Oct, 2020</a></b>
                     </li>
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
