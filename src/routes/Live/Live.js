import React, { Component } from 'react';
import './Live.css'


class Live extends Component {

    componentDidMount() {
        if((document.documentElement.scrollTop || document.body.scrollTop) !== 0) {
            window.scrollTo(0, 0);
        }
    }
    
    render(){
        return(
                <div className='live'>
                    <h1 className='live_main_title'>
                        Live Cam
                        <br></br><span className='brushy_swash'>r</span>
                    </h1>
                
                    <div className='live_people'>
                        <div className='live_image'></div>
                        <div className='live_text'>
                            <h3 className='live_title'>Dog's Live Cam</h3>                    
                            <div className='live_details'>
                            <p>Below is the live streaming for your dogs, Please Click the picture to see.</p>
                            <p>We are located in bayarea, CA </p>
                            <p>Please let us know if you have any question, please call 408-212-3234</p>
                            </div>
                        </div>
                    </div>
                    <p>
                        
                        <a href="http://proxy21.rt3.io:30207/html/"><img src="https://i1.sndcdn.com/avatars-000560768412-fgpz9h-t500x500.jpg" alt='' height='300px' width='300px'></img></a>
                    </p>
                </div>
                

        )
    }
}

export default Live;
