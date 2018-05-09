var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.entryRender, this);
    
    return this;
  },
  
  entryRender: function(video) {
    this.$(".video-list").append(new VideoListEntryView({model: video}).render().$el);
  },

  template: templateURL('src/templates/videoList.html')

});