$(document).ready(function() {
    $('#formulario').on('submit', function(){
        var valido = true;
        $('#formulario [type="text"]').each(function() {
            if(($(this).val().length === 0)) {
                console.log($(this).attr('name') + ' está vacío.');
                if($(this).hasClass('correctos')) {
                    $(this).removeClass('correctos');
                }
                $(this).addClass('erros');
                valido = false;
            }
            else {
                if($(this).hasClass('erros')) {
                    $(this).removeClass('erros');
                }
                $(this).addClass('correctos');
            }
        });
        $('#formulario [type="password"]').each(function() {
            if(($(this).val().length === 0)) {
                console.log($(this).attr('name') + ' está vacío.');
                if($(this).hasClass('correctos')) {
                    $(this).removeClass('correctos');
                }
                $(this).addClass('erros');
                valido = false;
            }
            else {
                if($(this).hasClass('erros')) {
                    $(this).removeClass('erros');
                }
                $(this).addClass('correctos');
            }
        });
        if(valido === true) {
            valido = confirm('¿Está seguro/a de enviar este formulario?');
        }
        return valido;
    });
});
