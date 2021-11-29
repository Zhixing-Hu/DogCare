import React, { Component } from 'react';
import './About.css'

class About extends Component {

    componentDidMount() {
        if((document.documentElement.scrollTop || document.body.scrollTop) !== 0) {
            window.scrollTo(0, 0);
        }
    }

    render(){
        return(
            <div className='about'>
                <h1 className='about_main_title'>
                    About Us
                    <br></br><span className='brushy_swash'>r</span>
                </h1>
                <div className='about_people'>
                    <div className='about_image'></div>
                    <div className='about_text'>
                        <h3 className='about_title'>Kenny & Lei</h3>                    
                        <div className='about_details'>
                            <p>Hi there!  My name is Kenny. My cofounder is Lei. I am so glad you decided to visit our site!  We decided to open a website that helps managing a doggie daycare and providing boarding, walks, and house visits.</p>
                            <p>We are located in bayarea, CA </p>
                            <p>We can't wait to assist you and your fur child during your busy work day or while on vacation :)</p>
                        </div>
                    </div>
                </div>
                <div className='about_culture'>
                    <div className='about_image'></div>
                    <div className='about_text'>
                        <h3 className='about_title'>Our Culture</h3>                    
                        <div className='about_details'>
                            <p>We specialize in group play which is monitored at all times to ensure a safe environment.</p>
                            <p>We have experience with many different breeds of all ages and personalities.</p>
                            <p>The company is bonded and insured, and our partners can provide a current background check upon request.  We are also welcome for other sitters to join our community.</p>
                        </div>
                    </div>
                </div>
                <div className='about_facilities'>
                    <div className='about_image'></div>
                    <div className='about_text'>
                        <h3 className='about_title'>Our Facilities</h3>                    
                        <div className='about_details'>
                            {/* <p>My location sits on 2 acres with over 1 acre securely fenced in for your pup to play and get all the exercise he or she needs!</p> */}
                            <p>Your dog will be treated like my own in a clean, safe, and smoke-free home.</p>
                        </div>
                    </div>
                </div>
                <div className='about_memberships'>
                    <div className='about_memberships_bic'></div>
                    <div className='about_memberships_logo'></div>
                    <div className='about_memberships_psi'></div>                        
                </div>
            </div>
        )
    }
}

export default About;