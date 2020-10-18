const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {
    async getAction() {
        const postId = this.get('postId');
        const commentId = this.get('id');
        console.log('enter')
        // const comment = this.model('comment');
        if(commentId) { // 获取单条评论的详细信息
        //   const data = await comment.where({post_id: postId, id: commentId}).find();
          return this.success({msg:'ok'});
        } else { // 获取单条文章下的评论列表
        //   const list = await comment.where({post_id: postId}).select();
          return this.success({msg:'no ok'});
        }
      }
      async postAction() {
        const postId = this.get('postId');
        const commentId = this.get('id');
        console.log('enter')
        // const comment = this.model('comment');
        if(commentId) { // 获取单条评论的详细信息
        //   const data = await comment.where({post_id: postId, id: commentId}).find();
          return this.success({msg:'ok'});
        } else { // 获取单条文章下的评论列表
        //   const list = await comment.where({post_id: postId}).select();
          return this.success({msg:'no ok'});
        }
      }
};
