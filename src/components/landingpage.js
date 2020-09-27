import React, {Component} from 'react';
import { Cell, Grid } from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{witdh:'100%',margin: 'auto'}}>
                <div  className="welcome-grid">
                  <h1>Welcome</h1>
                  <p>How are you doing, today?</p>
                </div>
                <Grid className="about-grid odd-background-color">
                <Cell col={12}>
                    <img
                    src={process.env.REACT_APP_MY_AVATAR_URL}
                    alt="avatar"
                    className="avatar-img"
                    />

                    <div className="banner-text">
                        <h1>Hey, I am Khoi</h1>
                        <p>a web developer</p>
                        <hr/>
                        <p>| Skill |</p>
                        <div className= "social-links">
                            {/*Github*/}
                            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github" aria-hidden="true"></i>
                            </a>

                            {/*Facebook*/}
                            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook" aria-hidden="true"></i>
                            </a>

                            {/*Gmail*/}
                            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-google" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                </Cell>
                </Grid>
            </div>
        );
    }
}


export default Landing;