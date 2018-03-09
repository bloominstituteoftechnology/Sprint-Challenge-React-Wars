import React, { Component } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

// const items = this.state.starWarsChars.map((char, index) => {
//   return <Card char={char} />;
// });

class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, starWarsChars: props.swChars };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    // this.onExiting = this.onExiting.bind(this);
    // this.onExited = this.onExited.bind(this);
  }

  // onExiting() {
  //   this.animating = true;
  // }

  // onExited() {
  //   this.animating = false;
  // }

  next() {
    // if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.state.starWarsChars.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    // if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.swChars.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    // if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    // const slides = items.map(item => {
    //   return (
    //     <CarouselItem
    //       // onExiting={this.onExiting}
    //       // onExited={this.onExited}
    //       key={item.src}
    //     >
    //       <img src={item.src} alt={item.altText} />
    //       <CarouselCaption
    //         captionText={item.caption}
    //         captionHeader={item.caption}
    //       />
    //     </CarouselItem>
    //   );
    // });

    const slides = this.state.starWarsChars.map((char, index) => {
      return (
        <CarouselItem>
          {this.state.starWarsChars.map((char, index) => {
            return (
              <div key={index}>
                <CardComponent char={char} />;
              </div>
            );
          })}
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={this.state.starWarsChars}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default CarouselComponent;
