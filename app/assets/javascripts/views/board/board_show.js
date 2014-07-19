Trello.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['board/show'],

  initialize : function () {
    this.listenTo(this.model.lists(), 'add', this.addList);
  },

  addList : function (list) {
    var listShow = new Trello.Views.ListShow({ model : list });
    this.addSubview('#list-ul', listShow);
  },

  render : function () {
      var renderedContent = this.template({model: this.model});
      this.$el.html(renderedContent);


      var that = this;
      this.model.lists().each(function (list) {
        that.addList(list);
      });

      var newList = new Trello.Models.List();
      this.addSubview('#list-form', new Trello.Views.ListNew({ list : newList }));


      return this;
  }
});
