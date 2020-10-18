const Base = require('./base.js');
const Rest = require('./rest.js');
module.exports = class extends Rest {
  async indexAction() {
    const subtitle = this.model('subtitle')
    let data = await subtitle.page(this.get('page')).countSelect();
    console.log(data)
    return this.success(data);
  }
};
