import React, { useEffect, useState} from 'react';
import Helmet from 'react-helmet';
import Type from 'prop-types';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Breadcrumbs from '../../../components/common/breadcrumbs';
import TeacherBlock from '../../../components/site/teacherblock';
import CourseBlock from '../../../components/site/courseblock';
// import FooterMain from '../../../components/common/footerMain';
import connectorSearch from '../../../core/connectors/search';
import connectorTeachers from '../../../core/connectors/teachers';
import connectorCourses from '../../../core/connectors/courses';
import connectorCategories from '../../../core/connectors/categories';
import Cyberweekbox from '../../../components/sitecyberweek/cyberweekbox';
import UpButton from '../../../components/common/upbutton';
import '../../../theme/styles/settings.scss';

function SearchPage({ search, teachers, courses, categories }) {
  console.log('SEARCH-COURSES========',courses);
  console.log('SEARCH========',search);
  console.log('SEARCH-TEACHER========',teachers);
  console.log('SEARCH-CATEGORIES========',categories);
  const searchglobal = [{
    title: 'Главная',
    link: '/',
  },{
    title: 'Поиск',
    link: '',
  },
];

  if (search.search) {
    const [searchStepTeachers, setSearchStepTeachers] = useState(6);
    const [searchStepCourses, setSearchStepCourses] = useState(6);
    const [searchStepCategories, setSearchStepCategories] = useState(6);

    useEffect(() => {
      setSearchStepTeachers(6);
      setSearchStepCourses(6);
      setSearchStepCategories(6);
    }, [search.searchText]);
    console.log('search.searchText========',search.searchText)    
      
    const teachersSearchOutput =
      teachers.searchData.length > 0
        ? teachers.searchData.slice(0, searchStepTeachers)
        : [];
    const coursesSearchOutput =
      courses.searchCourses.length > 0
        ? courses.searchCourses.slice(0, searchStepCourses)
        : [];
console.log('courses.searchCourses========',courses)        
    const categoriesSearchOutput =
    categories.searchCategories.length > 0
        ? categories.searchCategories.slice(0, searchStepCategories)
        : [];        
// todo добавить флаг или состояние для открытия\закрытия этого рендера
    return (
      <>
        <Helmet>
          <title>Море-Поиск. Маркетплейс для всех</title>
          <meta name="description" content="Море" />
          <meta name="keywords" content="Море" />
        </Helmet>
        <UpButton />
        <section className="section section_fullwidth1 breadcrumbs">
          <Breadcrumbs items={searchglobal} /> 
          <div className="contact-media-s20" />
          <h2 className="settings-h2">Результаты поиска</h2> 
        </section>
        <section className="section">
          {/* {`Поиск по запросу "${search.searchText}"`} */}
          Поиск по запросу:
          &nbsp;
          <b>{search.searchText}</b>
        </section>
        <section className="section section_fullwidth1">
          <Cyberweekbox />
        </section>        
        <div className="contact-media-s20" />
        {teachers.searchData.length > 0 && (
          <section className="section section_fullwidth1">
            Витрины
            <div className="contact-media" />
            <GridRow justify="left">
              {teachersSearchOutput.map(teacher => (
                <GridCol
                  key={`${teacher.id}${Math.random()}`}
                  width={{ mobile: 12, tablet: 6, desktop:4 }}
                >
                  <TeacherBlock teacher={teacher} />
                </GridCol>
              ))}
            </GridRow>
            {teachersSearchOutput.length >= searchStepTeachers && (
              <div className="button-center m-t30">
                <Button
                  className="button button_secondary"
                  onClick={() => setSearchStepTeachers(searchStepTeachers + 6)}
                >
                  Показать ещё
                </Button>
              </div>
            )}
          </section>
        )}
        {courses.searchCourses.length > 0 && (
          <section className="section section_fullwidth1">
            Товары
            <div className="contact-media" />
            <GridRow justify="left">
              {coursesSearchOutput.map(course => (
                <GridCol
                  key={`${course.id}${Math.random()}`}
                  width={{ mobile: 12, tablet: 6, desktop:4 }}
                >
                  {console.log(`************${course.price}`)}
                  <CourseBlock course={course} />
                </GridCol>
              ))}
            </GridRow>
            {coursesSearchOutput.length >= searchStepCourses && (
              <div className="button-center">
                <Button
                  className="button button_secondary"
                  onClick={() => setSearchStepCourses(searchStepCourses + 6)}
                >
                  Показать ещё
                </Button>
              </div>
            )}
          </section>
        )}
        {categories.searchCategories.length > 0 && (
          <section className="section section_fullwidth1">
            Товары В КАТЕГОРИИ
            <div className="contact-media" />
            <GridRow justify="left">
              {categoriesSearchOutput.map(category => (
                <GridCol
                  key={`${category.id}${Math.random()}`}
                  width={{ mobile: 12, tablet: 6, desktop:4 }}
                >
                  <CourseBlock course={category.children[0]} />
                </GridCol>
              ))}
            </GridRow>
            {categoriesSearchOutput.length >= searchStepCategories && (
              <div className="button-center">
                <Button
                  className="button button_secondary"
                  onClick={() => setSearchStepCategories(searchStepCategories + 6)}
                >
                  Показать ещё
                </Button>
              </div>
            )}
          </section>
        )}        
        {teachers.searchData.length === 0 &&
        courses.searchCourses.length === 0 && 
        // courses.searchCourses.length === 0 && (
        categories.searchCategories.length === 0 && (
          <section className="section">
            {`Поиск по запросу "${search.searchText}" не дал результатов`}
          </section>
        )}
        {/* <FooterMain /> */}
      </>
    );
  }
}
SearchPage.propTypes = {
  teachers: Type.oneOfType([Type.array, Type.object]).isRequired,
  courses: Type.oneOfType([Type.array, Type.object]).isRequired,
  categories: Type.oneOfType([Type.array, Type.object]).isRequired,
  search: Type.oneOfType([Type.array, Type.object]).isRequired,
};
// export default connectorCourses(connectorTeachers(connectorSearch(SearchPage)));
export default connectorCourses(connectorTeachers(connectorCategories(connectorSearch(SearchPage))));
