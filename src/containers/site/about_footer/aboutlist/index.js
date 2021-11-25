import React from 'react';
import Helmet from 'react-helmet';
// import FooterMain from '../../../../components/common/footerMain';
import UpButton from '../../../../components/common/upbutton';
import About from '../../../../components/site/about';
import connectorSearch from '../../../../core/connectors/search';
import connectorTeachers from '../../../../core/connectors/teachers';
import connectorCourses from '../../../../core/connectors/courses';
import '../../../../theme/styles/settings.scss';

function Home() {
  return (
    <>
      <Helmet>
        <title>Море- О нас</title>
        <meta name="description" content="Море" />
        <meta name="keywords" content="Море" />
      </Helmet>
      <UpButton />    
      <section className="section section_fullwidth1">
        <About />
      </section>
      {/* <FooterMain /> */}
    </>
  );
}
export default connectorCourses(connectorTeachers(connectorSearch(Home)));
