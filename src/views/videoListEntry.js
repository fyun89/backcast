var VideoListEntryView = Backbone.View.extend({

  //$('.video-list-entry-title').on('click', model.select())
  render: function() {
    this.$el.html(this.template(this.model.attributes)); 
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
