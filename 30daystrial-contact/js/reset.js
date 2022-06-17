// ファイル
jQuery( '#resume' ).change( function() {
    jQuery( '#resume-name' ).show();
    jQuery( '#cancel-btn' ).show();
    jQuery( '#resume-name' ).val( jQuery( this )[0].files[0].name );
    jQuery( this ).val( '' );
});

jQuery( '#cancel-btn' ).click(function() {
    jQuery( '#resume-name' ).val( '' );
    jQuery( '#resume-name' ).hide();
    jQuery( '#cancel-btn' ).hide();
});