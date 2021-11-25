/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './dashboard';
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import Student from './student';
import Medoffice from './medoffice';
import Doctorprof from './doctorprof';
import Teacher from './teacher';
import Headteacher from './headteacher';
import Course from './course';
import Teacher1 from './teacher1';
import Admin from './admin';
import UpdateTeacher from './updateteacher';
import UpdateCourse from './updatecourse';
import Student1 from './student1';
import { getCourses } from '../../core/actions/courses';
import { getTeachers } from '../../core/actions/teachers';
import { getCategories } from '../../core/actions/categories';
/**
 * My
 */
export default function My() {
  const dispatch = useDispatch();
  const coursesState = useSelector(state => state.courses);
  const { courses } = coursesState;
  const teachersState = useSelector(state => state.teachers);
  const teachers = teachersState.data;
  const categoriesState = useSelector(state => state.categories);
  const { categories } = categoriesState;

  useEffect(() => {
    if (courses.length < 1 && !courses.fetching) {
      dispatch(getCourses());
    }
    if (teachers.length < 1 && !teachers.fetching) {
      dispatch(getTeachers());
    }
    if (categories.length < 1 && !categories.fetching) {
      dispatch(getCategories());
    }
  }, []);

  return (
    <>
      <Header isUser />
      <main className="layout__main">
        <Switch>
          <Route path="/my/student" component={Student} />
          <Route path="/my/medoffice" component={Medoffice} />
          <Route path="/my/doctorprof" component={Doctorprof} />
          <Route path="/my/create-good" component={Teacher} />
          <Route path="/my/update-shop" component={UpdateTeacher} />
          <Route path="/my/update-good/:id" component={UpdateCourse} />
          <Route path="/my/headteacher" component={Headteacher} />
          <Route path="/my/create-good1" component={Course} />
          <Route exact path="/my/lk" component={Teacher1} />
          <Route exact path="/my/lk1" component={Admin} />
          <Route path="/my/student1" component={Student1} />
          <Route path="*" component={Dashboard} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}
