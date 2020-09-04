import React from 'react';
import Skyline from '../images/chicago-skyline.jpg';

const FixedBackground = () => {

    return(
        <figure>
            <div class="fixed-wrap">
                <div id="fixed">
                    <img src={Skyline} />
                </div>
            </div>
        </figure>
    );
}

export default FixedBackground;