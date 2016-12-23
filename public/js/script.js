/*
    TODO: kaikki toiminnot
*/

(function () {

    function fileSelected(f) {
        var filter = /^(text\/plain)$/i;
        var file = f[0];
        if (!filter.test(file.type)) {
            document.getElementById('tempmsg').innerHTML = "Ei tekstitiedosto";
        } else {
            document.getElementById('tempmsg').innerHTML = file.type;
            document.getElementById('sendButton').removeAttribute('disabled');
        }
        return;
    }

}) ();
