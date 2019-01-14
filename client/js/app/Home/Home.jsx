import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    document.getElementById('navbar').classList.remove('nav-raised');
    document.getElementById('navbar').classList.add('nav-transparent');
  }
  render() {
    return (
      <main>
        <div className="home-clip-path-1"></div>
        <section id="welcome">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h1>Turn visitors into leads and customers into happy, engaged users</h1>
                <p>Modern products for sales, marketing and support to connect with customers and grow faster.</p>
                <a className="btn white" href="#">Get Started</a>
              </div>
              <div className="col-sm-6">
                <img src="/img/welcome.png" alt="Welcome" className="welcome-img" />
                </div>
              </div>
            </div>
          </section>
          <div style={{height:2000}}></div>
        </main>
      );
    }
  }

  export default Home;
