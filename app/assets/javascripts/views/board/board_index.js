Trello.Views.BoardIndex = Backbone.View.extend({
  template: JST['board/index'],
  render : function () {
    var renderedContent = this.template({boards : this.collection});
    this.$el.html(renderedContent);
    return this;
  }
});
