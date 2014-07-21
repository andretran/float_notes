Trello.Collections.Cards = Backbone.Collection.extend({
  model: Trello.Models.Card,

  url: function () {
    return this.url() + "/cards";
  },

  initialize: function (models, options) {
    this.list = options.list;
  }

});
