import React, { useState } from 'react';
import './Gallery.css';

import imageItem1 from "../../../assets/gallery01.jpg";
import imageItem2 from "../../../assets/gallery02.jpg";
import imageItem3 from "../../../assets/gallery03.jpg";
import imageItem4 from "../../../assets/gallery04.jpg";
import imageItem5 from "../../../assets/gallery05.jpg";
import imageItem6 from "../../../assets/gallery06.jpg";
import imageItem7 from "../../../assets/gallery07.jpg";
import imageItem8 from "../../../assets/gallery08.jpg";
import imageItem9 from "../../../assets/Quesadilla.jpg";
import imageItem10 from "../../../assets/Tenders.jpg";

const Gallery = () => {
  const imageUrls = [imageItem1, imageItem2, imageItem3, imageItem4, imageItem5, imageItem6, imageItem7, imageItem8, imageItem9, imageItem10];

  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  return (
    <div className="gallery-container">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} onClick={() => setSelectedImageIndex(index)}>
          <img src={imageUrl} alt={`Gallery Image ${index + 1}`} className="gallery-image" />
        </div>
      ))}
      {selectedImageIndex !== -1 && (
        <div>
          <img src={imageUrls[selectedImageIndex]} alt={`Selected Image ${selectedImageIndex + 1}`} className="selected-image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
