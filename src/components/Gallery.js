import React from 'react';
import AliceCarousel from 'react-alice-carousel';

class Gallery extends React.Component {

  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  }

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    };

    return (
      <AliceCarousel
        duration={400}
        autoPlay={true}
        startIndex = {1}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={false}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        buttonsDisabled={true}
        autoPlayActionDisabled={false}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
        <img src="/img1" className="yours-custom-class" alt="slide" />
    <img src="https://test.nouveta.tech/girlstuff/api/public/product-images/pZWQtNWlTKXipP1k7484.jpg" className="yours-custom-class" alt="slide" />
    <img src="https://test.nouveta.tech/girlstuff/api/public/product-images/pZWQtNWlTKXipP1k7484.jpg" className="yours-custom-class" alt="slide" />
    <img src="https://test.nouveta.tech/girlstuff/api/public/product-images/pZWQtNWlTKXipP1k7484.jpg" className="yours-custom-class" alt="slide" />
    <img src="https://test.nouveta.tech/girlstuff/api/public/product-images/pZWQtNWlTKXipP1k7484.jpg" className="yours-custom-class" alt="slide" />
      </AliceCarousel>
    );
  }
}
export default Gallery;