import Schema from './schema';
import GenericModel from '@Application/repository/generic-model';

const Model = {
    ...GenericModel(Schema),
    getStudentsByTeacherIdAndCod: (teacherId, cod) => Schema.findAll({
        where: {
            teacherId,
            cod
        }
    }),
    isUserInClassroom : (auth0Id, teacherId, cod, isStudent) => Schema.findOne({
        where: {
            auth0Id,
            teacherId,
            cod,
            student: isStudent
        }
    })
};


export default Model;
