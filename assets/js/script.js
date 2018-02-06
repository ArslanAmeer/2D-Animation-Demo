document.addEventListener("DOMContentLoaded",function(){
    
    var carState = null;

    document.getElementById("engineButton").addEventListener("click",function(){
        
        var state = document.getElementById("box").className;

        if (state == "start stop") {
            
            this.className = "startButton";
            document.getElementById("engStop").pause();
            document.getElementById("engStop").currentTime = 0;
            document.getElementById("engStart").play();
            
            setTimeout(function(){
                document.getElementById("engRun").play();
                document.getElementById("box").classList.remove("stop");
            },2000);

            carState = 1;
        
        }else {
            
            document.getElementById("box").classList.add("stop");
            this.className = "stopButton";
            
            document.getElementById("engStart").pause();            
            document.getElementById("engStart").currentTime = 0;
            
            document.getElementById("engStop").play();            
            document.getElementById("engRun").pause();
            
            document.getElementById("engRun").currentTime = 0;
            
            carState = 0;            
        }    
    },false);

    document.getElementById("brake").addEventListener("mousedown",function(){
        
        if (carState == 1) {
            document.getElementById("carBrake").play();
            document.getElementById("engRun").pause();
            document.getElementById("box").classList.add("stop");
        }

    },false);
    
    document.getElementById("brake").addEventListener("mouseup",function(){
        
        if (carState == 1) {
            document.getElementById("carBrake").pause();
            document.getElementById("carBrake").currentTime = 0;
            document.getElementById("engRun").play();            
            document.getElementById("box").classList.remove("stop");
        }

    },false);

    document.getElementById("gitBtn").addEventListener("click",function(){
        window.open("https://github.com/ArslanAmeer/2D-Animation-Demo-HTML-CSS-JS","_blank");
    },false);

});
