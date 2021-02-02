$(document).ready(function(){

    $('.numeros, .operaciones').click(function(){
        var valores = $('#logica').val()
        var val = $(this).data('id')
        $('#logica').val(valores+val)
    })

    $('.resultado').click(function(){
        $('#logica').val(eval($('#logica').val()))
    })

    $('.limpiar').click(function(){
        $('#logica').val('')
    })

    $('.eliminar').click(function(){
        var valor = $('#logica').val()
        $('#logica').val(valor.substring(0, valor.length - 1))
    })

})