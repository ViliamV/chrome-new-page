$( document ).ready(function() {
    $('.top-panel a').on('click', function(e) {
        e.preventDefault();
        changeView(this.id);
    });
});
function changeView(id) {
    $('.top-panel a').removeClass('active');
    $('.container').addClass('hide');
    var topPanel = '.top-panel a#' + id;
    var container = '.container#' + id;
    $(topPanel).addClass('active');
    $(container).removeClass('hide');
}


