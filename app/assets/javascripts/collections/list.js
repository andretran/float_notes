Trello.Collections.Lists = Backbone.Collection.extend({
  model : Trello.Models.List,

  url : function () {
    return this.url() + "/lists";
  },

  initialize : function (models, options) {
    this.board = options.board;
  },

  // getOrFetch: function (id) {
  //   var lists = this;
  //
  //   var list;
  //   if (list = this.get(id)) {
  //     list.fetch();
  //   } else {
  //     list = new Trello.Models.List({ id: id });
  //     list.fetch({
  //       success: function () { lists.add(list); }
  //     });
  //   }
  //
  //   return list;
  // }

});
