import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var fullname = this.props.data.fullname;
      var profilepic= "images/"+this.props.data.image;
      var profilepic2= "images/"+this.props.data.image2;
      var bio = this.props.data.bio;
      var bio2 = this.props.data.bio2;
      var bio3 = this.props.data.bio3;
      var bio4 = this.props.data.bio4;
      var bio5 = this.props.data.bio5;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns propic">
            <p>
            <img className="profile-pic"  src={profilepic} alt="Jeff Lung Profile Pic" />
            </p>
            <p style={{marginTop:"250px"}}>
            <img className="profile-pic"  src={profilepic2} alt="Jeff Lung Profile Pic2" />
            </p>
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <p>{bio2}</p>
            <p>{bio3}</p>
            {/*<p>{bio4}</p>
            <p>{bio5}</p>*/}
            <div className="row">
               <div className="columns contact-details">
                  <h2 className="contact">Contact Details</h2>
                  <p className="address">
						   <span><i className="fa fa-user"></i> {fullname}</span><br />
						   <span><i className="fa fa-home"></i> {city}
                   </span><br />
						   {/*<span><i className="fa fa-phone"></i> {phone}</span><br />*/}
                     <span><a href="mailto:nosy_parker@msn.com"><i className="fa fa-envelope"></i> {email}</a></span>
					   </p>
               </div>
               {/*<div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>*/}
            </div>
         </div>
      </div>
      <div>
         <img src="images/about-bottom-overlay.svg" />
      </div> 
   </section>
    );
  }
}

export default About;
