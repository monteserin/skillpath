import Model from "../model";

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
  async toggleSkill(userId, name){
    const [data] = Model.get({userId,name});
    if(!data){
      await  Model.create(userId, name);
      return true;
    }else{
      const newValue= !data.isActive;
      await Model.updateById(data.id,{ isActive:newValue} );
      return newValue;
    }
  }
}

export default Controller;