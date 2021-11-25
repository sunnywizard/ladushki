import request from './request';

/** Get categories */
const getCategories = () => request({ method: 'get', url: '/category' });

/** Get category by id */
const getCategory = data => request({ method: 'get', url: `/category/${data}` });

const getItemsByCategory = data => request({method:"get", url: `/category/search/${data}`});

const addTeacherCategory = (id) => request({
    method: 'put',
    url: `/profile/category/${id}`,
});

const deleteTeacherCategory = (id) => request({
    method: 'delete',
    url: `/profile/category/${id}`,
});

const addCourseCategory = data => request({
    method: 'post',
    url: `/course/category`,
    data,
});

const updateCourseCategory = data => request({
    method: 'put',
    url: `/course/category`,
    data,
});

export default {
    getCategories,
    getCategory,
    getItemsByCategory,
    addCourseCategory,
    deleteTeacherCategory,
    addTeacherCategory,
    updateCourseCategory,
};
