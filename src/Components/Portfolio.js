import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import './styles.css';
import './stylesheets/vendor/stylesheet.css';
import './stylesheets/vendor/github-light.css';
import './stylesheets/app.css';
import image1 from './images/hotel.jpg';
import image2 from './images/realmadrid.jpg';
import image3 from './images/chidrama.gif';
import image4 from './images/nuhart_web.gif';
import image5 from './images/profitlink.jpg';
import image6 from './images/eastern.gif';
import image7 from './images/iac.jpg';
import image8 from './images/nuhart_edm.jpg';
import image9 from './images/brava.jpg';
import image10 from './images/gaming.jpg';
import image11 from './images/dreamsoft.jpg';
import image12 from './images/uws.jpg';
import image13 from './images/plan.jpg';
import image14 from './images/taxi.jpg';
import image15 from './images/wireframe.jpg';
import image16 from './images/townhealth.gif';
import image17 from './images/mobile.jpg';
import image18 from './images/3d.gif';
import image19 from './images/robot.jpg';


import image1Thumb from './images/hotel_s.jpg';
import image2Thumb from './images/realmadrid_s.jpg';
import image3Thumb from './images/chidrama_s.jpg';
import image4Thumb from './images/nuhart_web_s.jpg';
import image5Thumb from './images/profitlink_s.jpg';
import image6Thumb from './images/eastern_s.jpg';
import image7Thumb from './images/iac_s.jpg';
import image8Thumb from './images/nuhart_edm_s.jpg';
import image9Thumb from './images/brava_s.jpg';
import image10Thumb from './images/gaming_s.jpg';
import image11Thumb from './images/dreamsoft_s.jpg';
import image12Thumb from './images/uws_s.jpg';
import image13Thumb from './images/plan_s.jpg';
import image14Thumb from './images/taxi_s.jpg';
import image15Thumb from './images/wireframe_s.jpg';
import image16Thumb from './images/townhealth_s.jpg';
import image17Thumb from './images/mobile_s.jpg';
import image18Thumb from './images/3d_s.jpg';
import image19Thumb from './images/robot_s.jpg';
import image20Thumb from './images/restaurantux_s.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19];
const thumbs = [image1Thumb, image2Thumb, image3Thumb, image4Thumb, image5Thumb, image6Thumb, image7Thumb, image8Thumb, image9Thumb, image10Thumb, image11Thumb, image12Thumb, image13Thumb, image14Thumb, image15Thumb, image16Thumb, image17Thumb, image18Thumb, image19Thumb, image20Thumb];

const titles = [
  <span>
    Website&nbsp;
    <a className="creditLink" href="https://restaurant-ux.netlify.app" target="_blank">
      link
    </a>
  </span>,
  <span>
    Website&nbsp;
    <a className="creditLink" href="https://frmclinicshk.com/" target="_blank">
      link
    </a>
  </span>,
  <span>
  Website&nbsp;
  <a className="creditLink" href="https://www.cof.gov.hk/2013/2013/en/index.html" target="_blank">
    link
  </a>
</span>,
  <span>
    Website&nbsp;
    <a className="creditLink" href="https://www.nuhart.com.hk" target="_blank">
      link
    </a>
  </span>,
   <span>
    Website&nbsp;
    <a className="creditLink" href="http://www.profitlinkvip.com/index_en.html" target="_blank">
      link
    </a>
  </span>,
  '',
  '',
 '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  <span>
    Demo&nbsp;
    <a className="creditLink" href="https://youtu.be/cNJxIUNDPgA" target="_blank">
      Video
    </a>
  </span>,
  <span>
  Demo&nbsp;
  <a className="creditLink" href="https://youtu.be/i10G1FGAQBY" target="_blank">
    Gameplay
  </a>
</span>,
<span>
  Demo&nbsp;
  <a className="creditLink" href="https://youtu.be/ZcUMXIn5reI" target="_blank">
    Attack,
  </a>&nbsp;
  <a className="creditLink" href="https://youtu.be/sVIJq5DNYuQ" target="_blank">
    Run & roll
  </a>
</span>,
<span>
  Demo&nbsp;
  <a className="creditLink" href="https://youtu.be/D3X3KK3ado4" target="_blank">
    To robot, 
  </a>&nbsp;
  <a className="creditLink" href="https://youtu.be/8ggqDskmhGI" target="_blank">
    To house,
  </a>&nbsp;
  <a className="creditLink" href="https://youtu.be/0YbGKuJoigE" target="_blank">
    Jump & fly
  </a>
</span>
];

const captions = [
  <p>
    <b>Situation & Task </b>: A recruitment task of an accommodation agency in Manchester<br />
    <b>Action</b>: The website is built with bootstrap, jquery plugins TweenMax, ScrollMagic, Jarallax for transition animation.<br />
     <b>Result</b>: A grand tone is achieved for the website with the help of animation triggered by scrolling. 
  </p>,
  <p>
  <b>Situation & Task </b>: Real Madrid football club requested a website for the kid training program in Hong Kong.<br />
  <b>Action</b>: Design web pages with a design team and built them with Bootstrap and CSS.<br />
  <b>Result</b>: A responsive website is achieved with a concise design. The client still keeps the basic structure of the website until now.
</p>,
  <p>
  <b>Situation & Task </b>: For promotion of Chinese opera program which was ran by the Leisure and Cultural Services Department of Hong Kong Government.<br />
  <b>Action</b>: To ensure accessibility for visitors, the website was built by following the WCAG 2.0 Level AA standard.<br />
  <b>Result</b>: The government department praised the website usability standard for the public.
  </p>,
  <p>
   <b>Situation & Task </b>: Polish the website design and update content if necessary.<br />
   <b>Action</b>: Update the layout through HTML and CSS under a PHP CMS environment. Part of the update is edited on Wordpress platform as the blog section is built with Wordpress.<br />
   <b>Result</b>: Facilitate the website being informative and compelling to attract potential customers.
</p>,
<p>
  <b>Situation & Task </b>: A website for an accommodation agency who serves the customers in south east asia.<br />
  <b>Action</b>: Boostrap and respnosive css was adopted to achieve a responsive website which could be compatible on different digital devices.<br />
  <b>Result</b>: A responsive website provided a platform for visitors to book accommodation and transportation in the tourist location.
</p>,
<p>
  <b>Situation & Task </b>: Refresh a website for a well known Hong Kong local football club.<br />
  <b>Action</b>: After a design tone has been confirmed, I built the web pages with Bootstrap and CSS.<br />
  <b>Result</b>: The old website has been updated to be compatible with different digital widgets and a refresh outlook was achieved. 
</p>,
<p>
   <b>Situation & Task </b>: A website for the Leisure and Cultural Services Department of Hong Kong Government to promote summer shows for families. <br />
   <b>Action</b>: Built With WCAG 2.0 Level AA standard to ensure coverage of all kind of visitors even who has weak sight or color blindness.<br />
   <b>Result</b>: The project has been qualified under the WCAG 2.0 standard and finished on time.
</p>,
<p>
  <b>Situation & Task </b>: Email newsletters for promotion of new offer and increasing potential customer pool.<br />
  <b>Action</b>: Design email newsletters and send them out through an online platform weekly under a schedule.<br />
  <b>Result</b>: Customers pool increased steadily and more enquiries for the service was told by the client.
</p>,
<p>
  <b>Situation & Task </b>: The client who provides beauty services requested for a website to promote their products.<br />
  <b>Action</b>: A feminine aesthetic design included color tone and graphics were applied for the web design.<br />
  <b>Result</b>: The client was satisfied with the layout design which was fit their company image.
</p>,
<p>
  <b>Situation & Task </b>: A gaming platform company required a front page layout for updating the existing one.<br />
  <b>Action</b>: I provided several design which conveyed the style for the luxury services.<br />
  <b>Result</b>: We provided some options and directions for the client to consider the new front page design.
</p>,
<p>
  <b>Situation & Task </b>: A new IT agency requested for a logo design.<br />
  <b>Action</b>: After I drafted some logos, I selected the two best design and made some preview.<br />
  <b>Result</b>: Client could have a more clear idea and direction for what a logo they want.
</p>,
<p>
  <b>Situation & Task </b>: A newly formed charity organization requested for a logo design.<br />
  <b>Action</b>: My logo design was selected from designs created in my team, then I created drafts with different color combinations for client to consider.<br />
  <b>Result</b>: Client could have a number of choices from different color combination which could help them to choose the appropriate one.
</p>,
<p>
  <b>Situation & Task </b>: A Charity group, Plan, needed a design of scarf as a souvenir for an event.<br />
  <b>Action</b>: I used the colors from the Plan logo for the design and a concise design was applied to match the Plan design system colors.<br />
  <b>Result</b>: I am glad that I could help to promote a charity event with Plan.
</p>,
<p>
  <b>Situation & Task </b>: An app for hiring taxi was conceived before the prototype stage.<br />
  <b>Action</b>: I created the flowchart of the app with given assets from my teammates to illustrate the steps throughout the hiring taxi process.<br />
  <b>Result</b>: Developers could have a clear vision for the hiring flow in the app, and this facilitated the further improvement.
</p>,
<p>
  <b>Situation & Task </b>: A gaming platform app was in a development stage and a wireframe was needed.<br />
  <b>Action</b>: It was drawn based on the sketch provided by a UX designer. I adjusted all elements to be unified like size and style for buttons and text.<br />
  <b>Result</b>: The wireframe provided a clear picture for developers to produce the app.
</p>,
<p>
  <b>Situation & Task </b>: A video was used to express the values of the medical corporate company for motivation of staffs.<br />
  <b>Action</b>: The 3D assets were created with Maya and they were edited with Aftereffect to export the video.<br />
  <b>Result</b>: This could boosted the morale among the staffs by educating them with the common values of the company.
</p>,
<p>
  <b>Situation & Task </b>: An individual final project of my Bachelor Degree course<br />
  <b>Action</b>: It was an Android game demo. Concepts was built up with researches and references with movie. It was developed with Maya, Unity and Javascript.<br />
  <b>Result</b>: I have learnt a lot from this project especially on Javascript. For instances, there were some functions inside the game, like a timer, trigger of win or loss condition.
</p>,
<p>
  <b>Situation & Task </b>: It was a personal practice for 3d character animation.<br />
  <b>Action</b>: The character was built and rendered in Maya. Texture was drawn in Photoshop.<br />
  <b>Result</b>: This has helped me to understand whole process for creating a character animation. 
</p>,
<p>
  <b>Situation & Task </b>: A client request character animation for a computer store website.<br />
  <b>Action</b>: The 3D was built and rendered with Maya and Mentalray. I took references from the movie Transformers and the render was aimed for a realistic material.<br />
  <b>Result</b>: It was a great experience for me to experiment realistic metal rendering with Maya and Mentalray.
</p>,
];
class Portfolio extends Component {

  static onImageLoadError(imageSrc, _srcType, errorEvent) {
    console.error(`Could not load image at ${imageSrc}`, errorEvent); // eslint-disable-line no-console
  }

  constructor() {
    super();

    this.state = {
      index: 0,
      isOpen: false,
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.moveNext = this.moveNext.bind(this);
    this.movePrev = this.movePrev.bind(this);
  }

  openLightbox() {
    this.setState({ isOpen: true });
  }

  closeLightbox() {
    this.setState({ isOpen: false });
  }

  moveNext() {
    this.setState(prevState => ({
      index: (prevState.index + 1) % images.length,
    }));
  }

  movePrev() {
    this.setState(prevState => ({
      index: (prevState.index + images.length - 1) % images.length,
    }));
  }

  render() {
    let lightbox;
    if (this.state.isOpen) {
      lightbox = (
        <Lightbox
          mainSrc={images[this.state.index]}
          nextSrc={images[(this.state.index + 1) % images.length]}
          prevSrc={
            images[(this.state.index + images.length - 1) % images.length]
          }
          mainSrcThumbnail={thumbs[this.state.index]}
          nextSrcThumbnail={thumbs[(this.state.index + 1) % images.length]}
          prevSrcThumbnail={
            thumbs[(this.state.index + images.length - 1) % images.length]
          }
          onCloseRequest={this.closeLightbox}
          onMovePrevRequest={this.movePrev}
          onMoveNextRequest={this.moveNext}
          onImageLoadError={Portfolio.onImageLoadError}
          imageTitle={titles[this.state.index]}
          imageCaption={captions[this.state.index]}
        />
      );
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <img className="works" src="images/some_of_my_works.svg" data-aos="fade-right"/>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" data-aos="fade-up">

            <div className="columns portfolio-item">
                <a href='https://restaurant-ux.netlify.app' target="_blank">
                <div className="item-wrap">
                  <img src={image20Thumb}/>
                  <div className="overlay">Google UX Design certificate project</div>
                </div>
                </a>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <img src={image1Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:0 })}>
                    Accommodation service website
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <img src={image2Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:1 })}>
                    Real Madrid Foundation Clinic website
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <img src={image3Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:2 })}>
                    Chinese opera festival website
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image4Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:3 })}>
                    Hair transplant service website
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image5Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:4 })}>
                    Accommodation agency website
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image6Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:5 })}>
                    Eastern sport club website
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image7Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:6 })}>
                    International arts carnival website
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image8Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:7 })}>
                    Email promotion for hair transplant service
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image9Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:8 })}>
                    Beauty service website layout
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image10Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:9 })}>
                    Login page layout
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image11Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:10 })}>
                    Logo design for an IT services agency
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image12Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:11 })}>
                    Logo design for a charity organization
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image13Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:12 })}>
                    Souvenir design for Plan
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image14Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:13 })}>
                    Flowchart design for a Taxi app
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image15Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:14 })}>
                    Wireframe design for an app
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image16Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:15 })}>
                    Animation with 3D elements for corporate company
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image17Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:16 })}>
                    Android game demo for final project
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image18Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:17 })}>
                    3D character animation demo
                  </div>
                </div>
              </div>
              <div className="columns portfolio-item">
                <div className="item-wrap">
                <img src={image19Thumb}/>
                  <div className="overlay" onClick={() => this.setState({ isOpen: true, index:18 })} >
                    3D character with realistic material shader testing
                  </div>
                </div>
              </div>
              
              
              <div>{lightbox}</div>

              <div className="updatedsoon">More works will be updated soon ...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
}

export default Portfolio;
