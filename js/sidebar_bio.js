    document.getElementById("btn-menu").onclick = function() {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    document.getElementById("btn-close").onclick = function() {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
