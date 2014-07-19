Trello.Collections.Lists = Backbone.Collection.extend({
    model : Trello.Models.List,

    url : function () {
      return this.url() + "/lists";
    },

    initialize : function (models, options) {
      this.board = options.board;
    }
});
