import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '500px'
  };
  
function App() {
  return (
<div style={styles}>
<Carousel>
<div>
<img src="http://www.freeimageslive.com/galleries/buildings/london/pics/palace_of_westminster.jpg" alt="Hong Kong" />
<p className="legend">Houses of Parliament</p>
</div>
<div>
<img src="http://www.freeimageslive.com/galleries/buildings/london/pics/big_ben_close_up.jpg" alt="Singapore"/>
<p className="legend">Big Ben</p>
</div>
<div>
<img src="http://www.freeimageslive.com/galleries/buildings/london/pics/national_gallery.jpg" alt="London"/>
<p className="legend">National Gallery</p>
</div>
<div>
<img src="http://www.freeimageslive.com/galleries/buildings/london/pics/stpauls03408.jpg" alt="Las Vegas"/>
<p className="legend">St. Paul's Cathedral and Financial District</p>
</div>
</Carousel>
</div>
  );
}

export default App;
 