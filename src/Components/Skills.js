import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var profilepic2= "images/"+this.props.data.image2;
      
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
      var bio3 = this.props.data.bio3;
    }

    return (
      <section id="skills">

      <div className="row skill">

         <div className="three columns header-col">
            {/*<h1><span>Skills</span></h1>*/}<img src="images/skills.svg" data-aos="fade-up"/>
         </div>

         <div className="nine columns main-col" style={{marginBottom:"100px"}}>

            {/*<p>{skillmessage}
            </p>
				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
    </div>*/}

            <p><b>Operating Systems</b>: Windows, Mac</p>
            <p><b>Applications</b>: Adobe Suite (Photoshop, Illustrator, XD, Dreamweaver, Aftereffect, Media Encoder)<br />
                Visual Studio Code, Sourcetree, Autodesk Maya, Unity, MS Office/Outlook
            </p>
            <p><b>Coding</b>: HTML, CSS, Bootstrap, JQuery, Javascript and ReactJs (Elementary level)</p>
            <p><b>Platforms</b>: Wordpress (update content/layout editing), Git, Netlify (Elementary level)</p>
            <p><b>Languages</b>: Fluent in English (speaking and writing), Native in Cantonese</p>
        </div>
          <div className="three columns propic" >
            <p>
            <img className="profile-pic" src={profilepic2} alt="Jeff Lung Profile Pic2" data-aos="fade-right"/>
            </p>
          </div>
          <div className="nine columns main-col">
            <h2>My Pastime</h2>
            <p className="pastime">{bio3}</p>
          </div>
      
    </div>
   </section>
    );
  }
}

export default Resume;
