(function($) {
  "use strict";
  var fileselectItemView = elementor.modules.controls.BaseData.extend({
    onReady: function () {
      var file_input_id = this.$el.find(".tnc-b-selected-fle-url").attr("id");
  
      this.$el.find(".tnc-b-select-file").on('click', function () {
        var tnc_file_uploader = wp
          .media({
            title: "Upload File",
            button: {
              text: "Get Link",
            },
            multiple: false,
          })
          .on("select", function () {
            var attachment = tnc_file_uploader.state().get("selection").first().toJSON();
            $("#" + file_input_id).val(attachment.url);
            $("#" + file_input_id).trigger("input");
          })
          .open();
      });
    },
  });
  
  elementor.addControlView("b-select-file", fileselectItemView);
  })(jQuery);
