var init;
!function() {
    init = function () {
        //with "on" function
        $('.inpuTextName').on('enterKey',function(e) {           
            alert("Hello " + this.value+" !");
        });
        //with event-delegation
        $('body').on('enterKey','.inpuTextName',function(e) {
            alert("Bye " + this.value + "!");
        });
        $('.inpuTextName').trigger('enterKey');
    };
}();