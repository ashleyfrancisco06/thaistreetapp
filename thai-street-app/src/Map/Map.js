import React from 'react'

const Map = () => {
    return(
        <div class="mapouter">
        	<div class="gmap_canvas">
        		<iframe width="430" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=rhong%20thiam&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        	</div>
        </div>
    )
}

export default Map