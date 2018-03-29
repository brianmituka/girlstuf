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
        items: 1
      },
      1024: {
        items: 1
      }
    };

    return (
        <div className="products" >
            <AliceCarousel
        duration={3000}
        autoPlay={true}
        startIndex = {0}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={false}
        responsive={responsive}
        autoPlayInterval={2000}
        autoPlayDirection="ltr"
        buttonsDisabled={true}
        autoPlayActionDisabled={false}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      >
     
    <img src="https://test.nouveta.tech/girlstuff/api/public/product-images/01.jpg" className="yours-custom-class" alt="slide" />
    <img src="https://test.nouveta.tech/girlstuff/api/public/product-images/pop2.jpg" className="yours-custom-class" alt="slide" />
    <img src="https://test.nouveta.tech/girlstuff/api/public/product-images/tt.jpg" className="yours-custom-class" alt="slide" />
    <img src="https://test.nouveta.tech/girlstuff/api/public/product-images/01.jpg" className="yours-custom-class" alt="slide" />
      </AliceCarousel>
        </div>
      
    );
  }
}
export default Gallery;