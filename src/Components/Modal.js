import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 40,
      zIndex: 1
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 800,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };
    

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}
          <div className="footer">
            {this.props.src}
            <div style={{margin:'0 auto',maxWidth:'205px'}}>
              <button onClick={this.props.onPrev}><i className="fa fa-arrow-left"></i> {this.props.previousTitle}</button>&nbsp;
              <button onClick={this.props.onClose}>
                Close
              </button>&nbsp;
              <button onClick={this.props.onNext}>{this.props.nextTitle} <i className="fa fa-arrow-right"></i></button>
            </div>    
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Modal;
