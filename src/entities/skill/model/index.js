import Schema from './schema';
import GenericModel from '@Application/repository/generic-model';

const Model = {
    ...GenericModel(Schema),
    getByEmail: email => Schema.findOne({ where: { email } })
};

export default Model;

