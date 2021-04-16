var L02_EventInspector;
(function (L02_EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        var body = document.querySelector("body");
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        var divElemente = document.querySelectorAll("div");
        for (var i = 0; i < divElemente.length; i++) {
            divElemente[i].addEventListener("click", logInfo);
            divElemente[i].addEventListener("keyup", logInfo);
        }
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        var infoBox = document.querySelector("span");
        var x = _event.clientX;
        var y = _event.clientY;
        var target = _event.target;
        var koordinaten = "X coords: " + x + "<br>" + "Y coords: " + y + "<br>";
        infoBox.style.left = x + 10 + "px";
        infoBox.style.top = y + 10 + "px";
        infoBox.innerHTML = koordinaten + "Target:" + target;
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.composedPath());
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=Event-Inspector.js.map