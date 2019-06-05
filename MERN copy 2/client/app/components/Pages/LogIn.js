import React, { Component } from "react";
import "whatwg-fetch";
import { Redirect, Link } from "react-router-dom";
import { getFromStorage, setInStorage } from "../../utils/storage";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";


// THIS IS THE LANDING PAGE!


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: "",
      signInError: "",
      signInEmail: "",
      signInPassword: "",
      redirect: false,
      signUpRedirect: false
    };
    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(
      this
    );
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(
      this
    );
    this.onClickSignUp = this.onClickSignUp.bind(this);
    this.onSignin = this.onSignin.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage("the_main_app");

    if (obj && obj.token) {
      const { token } = obj;
      //verify the token
      fetch("/api/account/verify?token=" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      //no token, not logged in
      this.setState({ isLoading: false });
    }
  }

  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to={{ pathname: "/StartTrip" }} />;
    }
  }

  signUpRedirect() {
    if (this.state.signUpRedirect) {
      return <Redirect to={{ pathname: "/SignUp" }} />;
    }
  }

  onClickSignUp() {
    this.setState({ signUpRedirect: true });
  }
  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value
    });
  }

  onSignin() {
    //grab state
    //post request to backend
    const { signInEmail, signInPassword } = this.state;
    this.setState({ isLoading: true });

    //post request to backend , creates API request to out end point
    fetch("/api/account/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          setInStorage("the_main_app", { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInEmail: "",
            signInPassword: "",
            token: json.token,
            redirect: true
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false
          });
        }
      });
  }

  render() {
    var positionStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    };
    var inputStyle = { opacity: 0.7 };

    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword
    } = this.state;

    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      


      <div className="super_container">

        {/* <!-- Home --> */}

        <div className="home">
          <div className="home_background" style={{ "backgroundImage": "url(images/home.jpg)" }}>
            <div className="p-3">




              {this.renderRedirect()}
              {this.signUpRedirect()}


            </div>

          </div>
          <div className="home_content">
            <div className="home_content_inner">
              <div className="home_text_large">discover</div>
              <div className="home_text_small">Discover new worlds</div>
              <div className="text-center">
              <button
                class="btn mt-4"
                style={{backgroundColor:"#fe3c52"}}
                block
                onClick={this.onClickSignUp}
                type="button"
              >
                {" "}
               <span  style={{fontWeight:"bold",fontWeight:"40px", color:"white"}}>Get Started</span> 
              </button></div>

            </div>
          </div>
        </div>


{/* Footer*/}

        <footer className="footer">
          <div className="container">
            <div className="row">

              {/* <!-- Footer Column --> */}
              <div className="col-lg-4 footer_col">
                <div className="footer_about">
                  {/* <!-- Logo --> */}
                  <div className="logo_container">
                    <div className="logo">
                      <div>Excursion</div>
                      <div>Road Trip Advisor</div>
                      <div className="logo_image"><img src="/Users/beverly.ackah/Downloads/RoadTripAdvisor-develop/Fred/MERN copy 2/client/app/images/logo.png" alt="" /></div>

                      <div className="logo_image"><img src="images/logo.png" alt="" /></div>
                    </div>
                  </div>
                  <div className="footer_about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar sed mauris eget tincidunt. Sed lectus nulla, tempor vel eleifend quis, tempus rut rum metus. Pellentesque ultricies enim eu quam fermentum hendrerit.</div>
                  {/* <div className="copyright"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></div> */}
                </div>
              </div>

              {/* <!-- Footer Column --> */}
              <div className="col-lg-4 footer_col">
                <div className="footer_latest">
                  <div className="footer_title">Latest News</div>
                  <div className="footer_latest_content">

                    {/* <!-- Footer Latest Post --> */}
                    <div className="footer_latest_item">
                      <div className="footer_latest_image"><img src="images/latest_1.jpg" alt="https://unsplash.com/@peecho" /></div>
                      <div className="footer_latest_item_content">
                        <div className="footer_latest_item_title"><a href="news.html">Brazil Summer</a></div>
                        <div className="footer_latest_item_date">Jan 09, 2018</div>
                      </div>
                    </div>

                    {/* <!-- Footer Latest Post --> */}
                    <div className="footer_latest_item">
                      <div className="footer_latest_image"><img src="images/latest_2.jpg" alt="https://unsplash.com/@sanfrancisco" /></div>
                      <div className="footer_latest_item_content">
                        <div className="footer_latest_item_title"><a href="news.html">A perfect vacation</a></div>
                        <div className="footer_latest_item_date">Jan 09, 2018</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* <!-- Footer Column --> */}
              <div className="col-lg-4 footer_col">
                <div className="tags footer_tags">
                  <div className="footer_title">Tags</div>
                  <ul className="tags_content d-flex flex-row flex-wrap align-items-start justify-content-start">
                    <li className="tag"><a href="#">travel</a></li>
                    <li className="tag"><a href="#">summer</a></li>
                    <li className="tag"><a href="#">cruise</a></li>
                    <li className="tag"><a href="#">beach</a></li>
                    <li className="tag"><a href="#">offer</a></li>
                    <li className="tag"><a href="#">vacation</a></li>
                    <li className="tag"><a href="#">trip</a></li>
                    <li className="tag"><a href="#">city break</a></li>
                    <li className="tag"><a href="#">adventure</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Login;
