/**
 * By JFcoDiaz
 */
jQuery.event.special.enterKey = {
    delegateType: "keypress",
    bindType: "keypress",
    handle: function( event ) {
        var handleObj = event.handleObj;
        var ret = null;
        var code = event.keyCode ? event.keyCode : event.which;        
        if (code === 13) {
            event.preventDefault();
            event.type = handleObj.origType;
            ret = handleObj.handler.apply( this, arguments );
            event.type = handleObj.type;
            return ret;
        }   
    }
};