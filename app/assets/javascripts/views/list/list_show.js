Trello.Views.ListShow = Backbone.View.extend({
  template : JST['list/show'],

  render : function () {
    var renderedContent = this.template({ list : this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
