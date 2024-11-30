import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              N'hésitez pas à me contacter pour toute opportunité de travail ou pour toute question.
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Contact :
                {resumeData.linkedinId}
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}