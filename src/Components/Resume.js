import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3><span><a href={work.url} target="_blank">{work.url}</a></span>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
     
    }

    return (
      <section id="resume">

      <div className="row work">

         <div className="three columns header-col">
            {/*<h1><span>Work</span></h1>*/}<img className="workimg" src="images/work.svg" data-aos="fade-up"/>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>
      <div className="curve"><img src="images/resume_curve.svg"/></div>
    <div className="row education">
         <div className="three columns header-col" id="work">
            {/*<h1><span>Education</span></h1>*/}<img className="educationimg" src="images/education.svg" data-aos="fade-up"/>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

     
   </section>
    );
  }
}

export default Resume;
