var start = performance.now();
        
        function getRandomColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            if (color != "#FFFFFF"){
            return color;}
            else {
                return "#000000"
            }
        }
        
        function setRandomPosition() {
                return Math.round(Math.random() * 400);
            }
            
        function setRandomSize() {
               return Math.round(Math.random() * (300-20) + 20);
            }
        
        
        function makeShapeAppear() {
            
            var chance = Math.random();
            
            if (chance > 0.5) {
                document.getElementById("shape").style.borderRadius = "50%";
            } else {
                document.getElementById("shape").style.borderRadius = "0";
            }
            
            
            document.getElementById("shape").style.width = setRandomSize() + "px";
                        
            document.getElementById("shape").style.height = setRandomSize() + "px";

            
            document.getElementById("shape").style.top = setRandomPosition() + "px";
            
            document.getElementById("shape").style.left = setRandomPosition() + "px";

             document.getElementById("shape").style.backgroundColor = getRandomColor();
            
            document.getElementById("shape").style.display = "block";
            
            start = performance.now();
            
        }
        
        function appearAfterDelay() {
            setTimeout(makeShapeAppear, Math.random() * 2000);
        };
        
        makeShapeAppear();
        
        document.getElementById("shape").onclick = function() {
            
            document.getElementById("shape").style.display = "none";
            
            var end = performance.now();
            
            var timeTaken = Math.round(end - start) 
            
            document.getElementById("timeTaken").innerHTML = timeTaken + " ms";
            
            appearAfterDelay();
        }
    