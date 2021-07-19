// import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../homepage_styles";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import React from "react";
import TestimonialCard from "./TestimonialCard.component";

function Testimonials() {
  const classes = useStyles();
  return (
    <div className={classes.testimonial_cont}>
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        className={classes.Carousel}>
        <TestimonialCard
          name="Jarrod Phillips"
          message="Speech Therapy has made me a better public speaker "
        />
        <TestimonialCard
          name="Bellana Peiris"
          message="I was not aware that i was a victim of BrainFog until I came here "
        />
        <TestimonialCard
          name="Snoop Ratwatta"
          message="Was looking for a book regarding brainFog, finally managed to find it here! "
        />
      </Carousel>
    </div>
  );
}

export default Testimonials;

// function Testimonials() {
//   const classes = useStyles();
//   return (
//     <div className={classes.testimonial_cont}>
//       <Carousel className={classes.Carousel}>
//         <div>
//           <Card>
//             <div>yo yo</div>
//           </Card>
//           {/* <p className="legend">Legend 1</p> */}
//         </div>
//         <div>
//           <Card>
//             <div>yo yo</div>
//           </Card>
//           {/* <div>yo yo</div> */}
//           {/* <p className="legend">Legend 2</p> */}
//         </div>
//         <div>
//           <Card>
//             <div>yo yo</div>
//           </Card>
//           {/* <div>yo yo</div> */}
//           {/* <img src="assets/3.jpeg" /> */}
//           {/* <p className="legend">Legend 3</p> */}
//         </div>
//       </Carousel>
//     </div>
//   );
// }

// export default Testimonials;
