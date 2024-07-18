import React from "react";
import banerImg1 from "../../assets/images/about-banner_0.jpg"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { images } from "../../data";

const Gallery = () => {
  return (
    <div className="md:container">
      <div className='relative mb-4' > 
            <img src={banerImg1} className='blur-[1px] bg-cover  bg-center h-60 w-full ' alt="bannerImg" />
            <h1 className='absolute bottom-20 md:right-36 right-12 text-white font-medium md:text-6xl text-3xl'>Image Gallery</h1>
        </div>

    <div className=" m-8 ">
      <ImageGallery
        items={images}
        showBullets={true}
        showIndex={true}
        showThumbnails={true}
        lazyLoad={false}
        showPlayButton={false}
        showNav={true}
        showFullscreenButton={true}
        thumbnailPosition={"right"}
      />
    </div>
    </div>
  );
};

export default Gallery;
