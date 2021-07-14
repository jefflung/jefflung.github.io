import React, { Component } from 'react';
import Modal from './Modal';

class Portfolio extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      isOpen: false,
      activeProject: "",
      activeProjectImage: "",
      url: "",
      url2: "",
      url3: ""
    };
	  
    this.nextClick = this.nextClick.bind(this);
    this.prevClick = this.prevClick.bind(this);

  } 

  toggleModal = (index,projectImage,title,url,url2,url3) => {
    this.setState({
      isOpen: !this.state.isOpen,
      activeProject:index,
      activeTitle:title,
      activeProjectImage:projectImage,
      activeUrl:url,
      activeUrl2:url2,
      activeUrl3:url3
    });
  }

  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map((projects,index) => {
        var projectImage = 'images/portfolio/'+projects.image;
        var title = projects.title;
        var url = projects.url;
        var url2 = projects.url2;
        var url3 = projects.url3;
        var bg = projects.bg;
        return <div key={index} className="columns portfolio-item">
          <div className="item-wrap">
           <a onClick={() => this.toggleModal(index,projectImage,title,url,url2,url3,bg)} className="open-popup" title={projects.title}> 
               <img alt={projects.title} src={projectImage} />
               <div className={`overlay ${bg}`}> 
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>  
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            {/*<h1>Check Out Some of My Works</h1>*/}<img className="works" src="images/some_of_my_works.svg"/>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
              <div className="updatedsoon">More works will be updated soon ...</div>
              <Modal 
                show={this.state.isOpen} 
                onClose={this.toggleModal} 
                onNext={this.nextClick} 
                onPrev={this.prevClick}
              >
                <h1 style={{marginBottom:"20px"}}>{this.state.activeTitle}</h1>
                <img src={this.state.activeProjectImage}/>
                <div>
                  {this.state.activeUrl ? <div>Link(s):<br/>
                    <a href={this.state.activeUrl} target="_blank">{this.state.activeUrl}</a><br/>
                    <a href={this.state.activeUrl2} target="_blank">{this.state.activeUrl2}</a><br/>
                    <a href={this.state.activeUrl3} target="_blank">{this.state.activeUrl3}</a>
                    </div> : <div></div>
                  }
                </div>
              </Modal>

            </div>
          </div>
        </div>
      </section>
    );
  }
  
  nextClick() {
    const { activeProject } = this.state;
    const imgLength = this.props.data.projects.length;
    const newPointer = activeProject === imgLength - 1 ? 0 : activeProject + 1;
    this.setState({ 
      activeProject: newPointer, 
      activeProjectImage: 'images/portfolio/'+this.props.data.projects[newPointer].image,
      activeTitle: this.props.data.projects[newPointer].title,
      activeUrl: this.props.data.projects[newPointer].url,
      activeUrl2: this.props.data.projects[newPointer].url2,
      activeUrl3: this.props.data.projects[newPointer].url3
    });
  }
  prevClick() {
    const { activeProject } = this.state;
    const imgLength = this.props.data.projects.length;
    const newPointer = activeProject === 0 ? imgLength - 1 : activeProject - 1; 
    this.setState({ 
      activeProject: newPointer, 
      activeProjectImage: 'images/portfolio/'+this.props.data.projects[newPointer].image,
      activeTitle: this.props.data.projects[newPointer].title,
      activeUrl: this.props.data.projects[newPointer].url,
      activeUrl2: this.props.data.projects[newPointer].url2,
      activeUrl3: this.props.data.projects[newPointer].url3
    });
  }
}

export default Portfolio;
