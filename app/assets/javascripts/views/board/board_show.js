Trello.Views.BoardShow = Backbone.View.extend({
  template: JST['board/show'],
  render : function () {
      var renderedContent = this.template({model: this.model});
      this.$el.html(renderedContent);
      return this;
  }
});
