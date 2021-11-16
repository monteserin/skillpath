import Model from "../../user/model";
import Service from '../service';

const Controller = {
    get(conditions) {
        return Model.get(conditions);
    },
    getById(id) {
        return Model.getById(id);
    },
    create(data) {
        return Model.create(data);
    },
    updateById(id, data) {
        return Model.updateById(id, data);
    },
    deleteById(id) {
        return Model.deleteById(id);
    },
    getStudentsFromTeacherAndCod(teacherId, cod) {
        return Model.getStudentsByTeacherIdAndCod(teacherId, cod);
    },
    login(token) {
        return Service().signIn(token);
    }
}

export default Controller;
