/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import Type from 'prop-types';
import { useSelector } from 'react-redux';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
// import Link from 'arui-feather/link';
import SlideDown from 'arui-feather/slide-down';
import IconArrowDown from 'arui-feather/icon/ui/arrow-down';
import Button from 'arui-feather/button';
import MobileIcon from 'arui-feather/icon/ui/arrow-right';
import './styles.scss';

export default function Headermenumobile({ isOpen, navTo, onClose, isExpanded }) {
  const courses = useSelector(state => state.courses.inputCourses);
  const teachers = useSelector(state => state.teachers.inputData);
  const categories = useSelector(state => state.categories.inputCategories);
  let startCol = 0;
  let finishCol = 7;

  // const [idSubMenu4, setIdSubMenu4] = useState('');
  const [idSubMenu3, setIdSubMenu3] = useState('');
  const [idSubMenu2, setIdSubMenu2] = useState('');
  const [idSubMenu1, setIdSubMenu1] = useState('');
  const [idSubMenu, setIdSubMenu] = useState('');
  
  const handleClickMenuItem = newIdSubMenu => event => {
    event.preventDefault();
    setIdSubMenu(newIdSubMenu !== idSubMenu ? newIdSubMenu : '');
  };
  const handleClickMenuItem1 = newIdSubMenu1 => event => {
    event.preventDefault();
    setIdSubMenu1(newIdSubMenu1 !== idSubMenu1 ? newIdSubMenu1 : '');
  };
  const handleClickMenuItem2 = newIdSubMenu2 => event => {
    event.preventDefault();
    setIdSubMenu2(newIdSubMenu2 !== idSubMenu2 ? newIdSubMenu2 : '');
  };
  const handleClickMenuItem3 = newIdSubMenu3 => event => {
    event.preventDefault();
    setIdSubMenu3(newIdSubMenu3 !== idSubMenu3 ? newIdSubMenu3 : '');
  };
  // const handleClickMenuItem4 = newIdSubMenu4 => event => {
  //   event.preventDefault();
  //   setIdSubMenu4(newIdSubMenu4 !== idSubMenu4 ? newIdSubMenu4 : '');
  // };
  
const [openPanelNumber, setOpenPanelNumber] = useState(0);
const handleClickExpand = (panelNumber) => {
const newOpenPanelNumber = openPanelNumber !== panelNumber ? panelNumber : 0;
  setOpenPanelNumber(newOpenPanelNumber);
};

  // --------первая колонка меню
  const firstCol = () => {
    if (categories.length > 0) {
      const list = [];
      categories.map((category, index) => {
        if (index >= startCol && index < finishCol) {
          if (category.children.length !== 0) {
            // --- Children вывод начало
            let parent;
            parent = category.id;
            // alert((child));
            // alert('GHBDTN')
            // alert((category.id));
            const childs = category.children;
            const renderCategoryChild = () => {
              if (childs.length > 0) {
                const list1 = [];
                childs.map((child, index) => {
                  if (child.parent_id == parent) {
                    list1.push(
                      <li key={index + Math.random()}>
                        <Button
                          pseudo
                          className="buttonmenu buttonmenu_menu-mobile"
                          key={child.id}
                          onClick={navTo(`/searchcase/${child.id}`)}
                        >
                          {child.name}
                        </Button>
                      </li>
                    );
                  }
                });
                return list1;
              }
            };
            // --- Children вывод ОКОНЧАНИЕ
            const subj = `subjects01${index}`;
            list.push(
              <li key={index + Math.random()}>
                <Button
                  pseudo
                  // className="link5"
                  className="buttonmenu buttonmenu_menu-mobile"
                  key={category.id}
                  onClick={handleClickMenuItem1(subj)}
                >
                  {category.name}
                </Button>
                <ul
                  className={`header-menu-mobiles-sub-menu ${
                    idSubMenu1 === subj
                      ? 'header-menu-mobiles-sub-menu-open'
                      : ''
                  }`}
                >
                  {/* <li>
                  
                    <ul> */}
                  {renderCategoryChild()}
                  {/* </ul>
                  </li> */}
                </ul>
              </li>
            );
          } else {
            list.push(
              <li key={index + Math.random()}>
                <Button
                  pseudo
                  // className="link5"
                  className="buttonmenu buttonmenu_menu-mobile"
                  key={category.id}
                  onClick={navTo(`/shop/${category.id}`)}
                  // onClick={navTo(`/shops`)}
                >
                  {category.name}
                </Button>
              </li>
            );
          }
        }
      });
      return list;
    }
  };

  // *******************

  const renderCategory = () => {
    if (categories.length > 0) {
      const list = [];

      categories.map((category, index) => {
        if (index < 4 && category.parent_id <= 0) {
          list.push(
            <li key={index + Math.random()}>
              <Button
                pseudo
                // className="link6 link6_third"
                className="buttonmenu buttonmenu_menu-mobile"
                key={category.id}
                onClick={navTo(`/shop/${category.id}`)}
                // onClick={navTo(`/shops`)}
              >
                {category.name}
              </Button>
            </li>
          );
        }
      });
      return list;
    }
  };
  const renderTeachers = () => {
    if (teachers.length > 0) {
      const list = [];
      teachers.map((teacher, index) => {
        if (index < 5) {
          list.push(
            <li key={index + Math.random()}>
              <Button
                pseudo
                // className="link6 link6_third"
                className="buttonmenu buttonmenu_menu-mobile"
                key={teacher.id}
                onClick={navTo(`/shop/${teacher.id}`)}
              >
                {teacher.name}
              </Button>
            </li>
          );
        }
      });
      return list;
    }
  };
  const renderCourses = () => {
    if (courses.length > 0) {
      const list = [];
      courses.map((course, index) => {
        if (index < 5) {
          list.push(
            <li key={index + Math.random()}>
              <Button
                pseudo
                // className="link6 link6_third"
                className="buttonmenu buttonmenu_menu-mobile"
                key={course.id}
                onClick={navTo(`/good/${course.id}`)}
              >
                {course.title}
              </Button>
            </li>
          );
        }
      });
      return list;
    }
  };



  return (
    <div
      className={`header-menu-mobile${
        isOpen ? ' header-menu-mobile-open' : ''
      }`}
    >
      <section className="section header-menu-mobile-wrapper">
        {/* <b>Популярные разделы</b> */}
        <span 
          style={{ border:'2px solid #EF3124', padding:'4px', top:'0px', right:'0', textAlign: 'right' }} 
          className={`close-btn1 `} 
          onClick={() => onClose()}
        >
          &times;
        </span>

        {/* <hr /> */}
        <div className="header-menu-mobile-menu">
          <Button
            pseudo
            className="buttonmenu buttonmenu_menu-mobile"
                    // className="link5"
            onClick={handleClickMenuItem('subjects')}
          >
            <strong>Популярные разделы</strong>
            <MobileIcon size="m" colored />
          </Button>
          <p
            className={`header-menu-mobiles-sub-menu ${
                      idSubMenu === 'subjects'
                        ? 'header-menu-mobiles-sub-menu-open'
                        : ''
                    }`}
          >
            {renderCategory()}
          </p>
        </div>
        <div className="hr4" />

        {/* РАЗДЕЛЫ */}
        <div className="header-menu-mobile-menu">
          <Button
            pseudo
            className="buttonmenu buttonmenu_menu-mobile"
            onClick={handleClickMenuItem('subjects111')}
            icon={<IconArrowDown className={`${isExpanded ? 'link__icon-open' : 'link__icon-close'}`} />}
            iconPosition="right"
          >
            {/* <MobileIcon size="m" colored /> */}
            Разделы
          </Button>
          <ul
            className={`header-menu-mobiles-sub-menu ${
                idSubMenu === 'subjects111'
                ? 'header-menu-mobiles-sub-menu-open'
                : ''
              }`}
          >
            <GridRow>
              <GridCol style={{ padding:' 0px 2px 0px 0px', overflow: 'hidden' }} width={{ mobile: 6 }}>
                {firstCol()}
              </GridCol>
              <GridCol width={{ mobile: 6 }}>
                {firstCol((startCol += 7), (finishCol += 7))}
              </GridCol>
            </GridRow>
            <div className="hr4" />
          </ul>

        </div>

        {/* ВИТРИНЫ */}
        <div className="header-menu-mobile-menu">
          <Button
            className="buttonmenu buttonmenu_menu-mobile"
            onClick={() => handleClickExpand(2)}
            icon={<IconArrowDown className={`${isExpanded ? 'link__icon-open' : 'link__icon-close'}`} />}
            iconPosition="right"
          >
            Витрины
          </Button>
          <div className='row'>
            <SlideDown isExpanded={openPanelNumber === 2}>
              <Button
                pseudo
                className="buttonmenu buttonmenu_menu-mobile"
                onClick={navTo('/shops')}
              >
                Все витрины
              </Button>
              {/* <div className="contact-media" /> */}
              <br />
              <Button
                pseudo
                className="buttonmenu buttonmenu_menu-mobile"
                onClick={handleClickMenuItem2('teachers01')}
              >
                Популярные витрины
                <MobileIcon size="m" colored />
              </Button>
              <p
                className={`header-menu-mobiles-sub-menu ${
                    idSubMenu2 === 'teachers01'
                      ? 'header-menu-mobiles-sub-menu-open'
                      : ''
                  }`}
              >
                {renderTeachers()}
              </p>
              <div className="hr4" />
            </SlideDown>
          </div>
        </div> 

        {/* ТОВАРЫ */}
        <div className="header-menu-mobile-menu">
          <Button
            className="buttonmenu buttonmenu_menu-mobile"
            onClick={() => handleClickExpand(3)}
            icon={<IconArrowDown className={`${isExpanded ? 'link__icon-open' : 'link__icon-close'}`} />}
            iconPosition="right"
          >
            Товары
          </Button>
          <div className='row'>
            <SlideDown isExpanded={openPanelNumber === 3}>
              <Button
                pseudo
                className="buttonmenu buttonmenu_menu-mobile"
                onClick={navTo('/goods')}
              >
                Все товары
              </Button>
              {/* <div className="contact-media" /> */}
              <br />
              <Button
                pseudo
                className="buttonmenu buttonmenu_menu-mobile"
                onClick={handleClickMenuItem3('courses01')}
              >
                Популярные товары
                <MobileIcon size="m" colored />
              </Button>
              <p
                className={`header-menu-mobiles-sub-menu ${
                    idSubMenu3 === 'courses01'
                      ? 'header-menu-mobiles-sub-menu-open'
                      : ''
                  }`}
              >
                {renderCourses()}
              </p>
              <div className="hr4" />
            </SlideDown>
          </div>
        </div>     
        {/* КОНЕЦ */}
      </section>
    </div>
  );
}

Headermenumobile.propTypes={
  isOpen: Type.bool.isRequired,
  onClose: Type.func.isRequired,
  isExpanded: Type.bool,
  navTo: Type.func.isRequired,
};
