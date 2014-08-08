Trello.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['board/show'],

  initialize : function () {
    this.listenTo(this.model, 'sync', this.render);
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

      var newListView = new Trello.Views.ListNew({ model : this.model });
      this.addSubview('#list-form', newListView);

      $('#list-ul').sortable({
        update: function(event, ui) {
          var data = $(this).sortable('toArray');
          data.forEach(function(id) {
            var list = that.model.lists().get(id)
            list.set('ord', data.indexOf(id))
            list.save();
          });
        }
      });

      var movedCard;
      $('.card-wrapper').sortable({ connectWith: '.card-wrapper',
        remove: function (event, ui) {
          var list_id = $(event.target).attr('data-id');
          var list = that.model.lists().get(list_id);

          var card_id = $(ui.item).find('.card-item').attr('data-id');
          movedCard = list.cards().get(card_id);
          list.cards().remove(movedCard);
        },

        receive: function (event, ui) {
          var list_id = $(event.target).attr('data-id');
          movedCard.set('list_id', list_id).save();

          // var list = that.model.lists().get(list_id);
          // var data = $(this).sortable('toArray');
          //
          //
          // var cards = $(this).find('.card-item');
          //
          // cards = _.map(cards, function (card) {
          //   return $(card).attr('data-id');
          // });
          //
          // debugger;
          // cards.forEach(function(id) {
          //   debugger;
          //   var card = list.cards().get(id)
          //   card.set('ord', data.indexOf(id))
          //   card.save();
          // });


        }
      });


      return this;
  },

  // updateLists : function (lists) {
  //   debugger;
  //   var data = $(this).sortable('toArray');
  //   _.each(data, function (id, i) {
  //       var model = lists.get(id);
  //       model.set('ord', i);
  //       model.save();
  //       debugger;
  //    });
  // }
});
