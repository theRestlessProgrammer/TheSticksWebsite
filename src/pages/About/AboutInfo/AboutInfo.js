import React from "react";

import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <div className="section">
      <div className="container grid-container">
        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              A few words <span>about us</span>
            </h2>

            <h4>Let us introduce ourselves</h4>

            <p>
            "At The Sticks Bar and Grill, we proudly combine the warmth of a small-town tavern with the flair of a modern eatery. Nestled in the heart of Madison, MN, our establishment is more than just a place to grab a meal—it's a gathering spot for friends, families, and visitors alike. Our menu offers a rich selection of classic favorites and innovative dishes, all crafted with the finest ingredients. 
            </p>

            <blockquote>
            "Good food is the foundation of genuine happiness; shared meals create shared memories."
            </blockquote>

            <p>
            Whether you're looking for a cozy spot to unwind after work, a lively venue to catch the weekend game, or a family-friendly setting for a hearty meal, The Sticks is where memories are made.
            </p>
          </div>
        </div>

        <div>
          <div className="about-info-content">
            <h2 className="heading-secondary">
              history is everywhere <span>what is ours?</span>
            </h2> 

            <h4>From humble beginnings to the heart of Madison, our story is one of passion, perseverance, and plates full of memories.</h4>

            <p>
              Established in 2022, The Sticks Bar and Grill quickly cemented its place as a beloved cornerstone in the heart of Madison, MN. Born from a vision of creating a place where both locals and visitors could gather, share stories, and enjoy delectable meals, The Sticks became more than just a bar and grill—it evolved into a symbol of community spirit. Located at 205 8th Ave, our establishment has witnessed countless celebrations, get-togethers, and heartwarming moments. 
            </p>

            <blockquote>
            "Where every plate is a promise and every gathering, a testament to tradition."
            </blockquote>

            <p>
            Although we're a relatively new addition to Madison's vibrant culinary scene, our dedication to quality service, scrumptious dishes, and a warm, welcoming ambiance feels as timeless as any long-standing institution. Every visit tells a story, and every story adds to our rich tapestry of history. Come and be a part of our growing legacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
