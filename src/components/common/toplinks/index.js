import React from 'react';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import { Link, useLocation } from 'react-router-dom';
import { announcementBlock1 } from '../../../core/utils/testdata';
import './styles.scss';

export default function TopLinks() {

  function HeaderView() {
    const location = useLocation();
    // console.log(location.pathname);
    const loc3 = location.pathname;
    if (loc3 === '/') {
      // console.log('НЕ ПЕТРОВ');
      return (
        <Link className="announcement" to="/акция">
          <div style={{ textAlign: 'center' }}>
            {announcementBlock1[0].titleDeclare}
      
          </div>
        </Link>
      );
    }  
    if (loc3 === '/о-нас') {
      // console.log('НЕ ПЕТРОВ');
      return (
        <Link className="announcement" to="/педиатр">
          <div style={{ textAlign: 'center' }}>
            {announcementBlock1[1].titleDeclare}
      
          </div>
        </Link>
      );
    }  
    // console.log('петров'); 
    return (
      <div style={{ textAlign: 'center' }} />
    );
  }

  return (
    <div className="top-links-wrap">
      <section className="section section_fullwidth1 section_top">
        <div className="top-links1">
          <GridRow>
            <GridCol width={{ mobile: 12, tablet: 12, desktop: 12 }}>
              <HeaderView />
            </GridCol>
          </GridRow>
        </div>

      </section>
    </div>
  );
}
