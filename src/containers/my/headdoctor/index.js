import React from 'react';
import Helmet from 'react-helmet';
import Link from 'arui-feather/link';
import GridRow from 'arui-feather/grid-row';
import GridCol from 'arui-feather/grid-col';
import Button from 'arui-feather/button';
import Pencil from '../../../theme/images/account/pencil.svg';
import { myheadteacherBreadcrumbs } from '../../../core/utils/testdata';
import Breadcrumbs from '../../../components/common/breadcrumbs';
import HeadteacherForm from '../../../components/my/forms/headteacher';
import '../../../theme/styles/settings.scss';
/**
 * headteacher
 */
const Headteacher = () => {
  return (
    <>
      <Helmet>
        <title>Headteacher</title>
        <meta name="description" content="Headteacher" />
        <meta name="keywords" content="Headteacher" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={myheadteacherBreadcrumbs} />
      </section>
      <section className="section">
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 9, desktop:9 }} className="form-field">
            <h1 className="student-title">Создание профиля завуча</h1>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 9, desktop:3 }} className="form-field right-poz">
            <div className="student-pencil">
              <Link pseudo>
                <img src={Pencil} alt="" />
              </Link>
            </div>
            <div className="student-refresh">
              <Button type="submit" className="button button_default button_modal">
                Образец
              </Button>
            </div>
          </GridCol>
        </GridRow>
        <HeadteacherForm formType="headteacher" />
      </section>
    </>
  );
};
export default Headteacher;
