const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const subtitle = this.model('subtitle')
    let data = await subtitle.page(this.get('page'),this.get('size')).countSelect();
    console.log(data)
    return this.success(data);
  }
  async findAction(){
    const subtitle = this.model('subtitle')
    let name = this.query('name')
    let data = await subtitle.page(this.get('page'),this.get('size')).where({content: ['like', `%${name}%`]}).countSelect();
    return this.success(data)
  }
  async findByIdAction(){
    const subtitle = this.model('subtitle')
    let id = this.query('id')
    let data = await subtitle.where({id: id}).find();
    return this.success(data)
  }
};
