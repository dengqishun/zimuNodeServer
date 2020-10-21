const Base = require('./../../base.js');

module.exports = class extends Base {
  async listAction(){
    console.log('in goods list action')
    const page = this.get('page') || 1;
    const size = this.get('size') || 10;
    const name = this.get('name') || '';

    const model = this.model('goods');
    const data = await model.where({name: ['like', `%${name}%`]}).order(['id DESC']).page(page, size).countSelect();

    return this.success(data);

    
  }
};
