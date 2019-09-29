$(function() {
  $('#language_id').change(function(event) {
    var languageId = $(event.currentTarget).val();
    var url = '/languages/projects/' + languageId;
    $.ajax({
      type: 'GET',
      url: url,
      success: function(htmlData) {
        $('#project-list').html($(htmlData).find('div.box.projects'));
      }
    })
    $('#projects-message').text('Displaying filtered project results');
    $('#reset-filter').show()
  })
  $('#reset-filter').click(function(event) {
    $.ajax({
      type: 'GET',
      url:  '/',
      success: function(htmlData) {
        $('#project-list').html($(htmlData).find('div.box.projects'));
      }
    })
    $('#reset-filter').hide();
    $('#projects-message').text('Displaying all projects');
    $('#language_id').val("");
  })
});
