import React, { createRef, useEffect, useState } from 'react';
import Button from 'arui-feather/button';
import Link from 'arui-feather/link';
import Carousel from '../../site/carousel/carouselbase';
import MdAddCircleOutline from '../../../theme/images/icons/mdaddcircleoutline.svg';
import './styles.scss';

const settings = {
  dots: true,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,

  responsive: [
    {
      breakpoint: 769,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
      }
    },
    {
    breakpoint: 768,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function DocsBrowser({ title, files, value, index, programm, setProgramm, setFieldValue }) {
  const [upFiles, setUpFiles] = useState([]);
  useEffect(() => {
    if (value) setUpFiles(value);
  }, []);
  let refPopup = createRef();
  const handleClickNew = () => {
    refPopup.click();
  };
  const materialsArr = programm ? programm[index].materials : [];
  const setFieldDocuments = (f) => {
    if (title === 'Документы') {
      setFieldValue('documents', f);
    }
  };
  const handleDeleteFile = (id) => {
    const newUpFiles = upFiles.filter(item => item.id !== id);
    setUpFiles(newUpFiles);
    setFieldDocuments(newUpFiles);
  };
  const handleChangeImage = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      const f = [...upFiles];
      f.push({ id: upFiles.length, img: reader.result });
      if (programm) {
        materialsArr.push(reader.result);
        const newProgramm = programm;
        newProgramm[index] = { ...newProgramm[index], materials: materialsArr };
        setProgramm(newProgramm);
        setFieldValue('programm', programm);
      }
      setUpFiles(f);
      setFieldDocuments(f);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="docs-browser">
      <h2 className="docs-browser-title">
        {title}
        <div className="docs-browser-controls">
          <input
            ref={popup => {
              refPopup = popup;
            }}
            type="file"
            style={{ display:'none' }}
            onChange={handleChangeImage}
          />
        </div>
      </h2>
      <div className="docs-browser-carousel-wrapper">
        <Link onClick={handleClickNew}>
          <img className="dbrowser" width="50" height="50" src={MdAddCircleOutline} alt="Добавить" />  
        </Link>
        <Carousel settings={settings} className="docs-browser-carousel">
          {upFiles.length > 0 ?
            upFiles.map(item =>
              <img
                style={{ zIndex: '0' }}
                key={item.id}
                src={item.img}
                title='9999'
                alt=""
                onClick={() => handleDeleteFile(item.id)}
              />)
            : files.map(item => <img key={item.id} src={item.img} title='2222' alt="" />)}
        </Carousel>
      </div>
    </div>
  );
}
