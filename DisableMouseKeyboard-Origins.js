$(document).ready(function() {
    function disableSelection(e) {
        if (typeof e.onselectstart != "undefined") e.onselectstart = function() {
            return false
        };
        else if (typeof e.style.MozUserSelect != "undefined") e.style.MozUserSelect = "none";
        else e.onmousedown = function() {
            return false
        };
        e.style.cursor = "default"
    }
    window.onload = function() {
        disableSelection(document.body)
    };

    window.addEventListener("keydown", function(e) {
        if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 67 || e.which == 70 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {
            e.preventDefault()
        }
    });
    document.keypress = function(e) {
        if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 70 || e.which == 67 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {}
        return false
    };

    /* 
    * 'e.which == 65' equals to letter A in keyboard.
    * 'e.which == 66' equals to letter B in keyboard.
    * 'e.which == 67' equals to letter C in keyboard.
    * 'e.which == 70' equals to letter F in keyboard.
    * 'e.which == 73' equals to Letter I in keyboard.
    * 'e.which == 80' equals to letter P in keyboard.
    * 'e.which == 83' equals to letter S in keyboard.
    * 'e.which == 85' equals to letter U in keyboard.
    * 'e.which == 86' equals to letter V in keyboard.
    */

    document.onkeydown = function(e) {
        e = e || window.event;
        if (e.keyCode == 123 || e.keyCode == 18 || e.keyCode == 16) {
            return false
        }
    };

    /* 
    * 'e.keyCode == 123' equals to F12-key in keyboard. 
    * 'e.keyCode == 18' equals to CTRL-key in keyboard.
    * 'e.keyCode == 16' equals to SHIFT-key in keyboard. 
    */

    document.oncontextmenu = function(e) {
        var t = e || window.event;
        var n = t.target || t.srcElement;
        if (n.nodeName != "A") return false
    };
    document.ondragstart = function() {
        return false
    };
});