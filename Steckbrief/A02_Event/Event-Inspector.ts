namespace L02_EventInspector {
    window.addEventListener("load", handleLoad);

    function handleLoad () : void {
        let body : HTMLBodyElement = document.querySelector("body");
        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);

        let divElemente : NodeListOf<HTMLDivElement> = document.querySelectorAll("div");
        for (let i: number = 0; i < divElemente.length; i++) {
        divElemente[i].addEventListener("click", logInfo);
        divElemente[i].addEventListener("keyup", logInfo);
        }

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
    }

    function setInfoBox (_event:MouseEvent): void {
        let infoBox : HTMLSpanElement = document.querySelector("span");
        let x : number = _event.clientX;
        let y : number = _event.clientY;
        let target : EventTarget = _event.target;
        let koordinaten : string = "X coords: " + x + "<br>" + "Y coords: " + y + "<br>";

            infoBox.style.left = x + 10 + "px";
            infoBox.style.top = y + 10 + "px";
            infoBox.innerHTML = koordinaten +  "Target:" + target;
    }
    
    function logInfo (_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.composedPath());
    }

}