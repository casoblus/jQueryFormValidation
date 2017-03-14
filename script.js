$(document).ready(function() {
    $('#formulario').on('submit', function(){
        $('#formulario [type="text"]').each(function() {
            if(($(this).val().length == 0)) {
                console.log($(this).attr('name') + ' está vacío.');
            }
        });
        $('#formulario [type="password"]').each(function() {
            if(($(this).val().length == 0)) {
                console.log($(this).attr('name') + ' está vacío.');
            }
        });
    });
});
