/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

const Carousel = ({ carouselRef = null, settings, children, className }) => (
  <Slider ref={carouselRef} {...settings} className={className}>
    {children}
  </Slider>
);

Carousel.propTypes = {
  settings: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  className: PropTypes.string,
  carouselRef: PropTypes.any,
};

export default Carousel;
