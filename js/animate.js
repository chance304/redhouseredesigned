    
     // x="try" ;
     // var app;

     //                app = {
     //                  // text: x,
     //                  index: 0,
     //                  chars: 0,
     //                  speed: 1,
     //                  container: ".text .content",
     //                  init: function() {
     //                    this.chars = x.length;
     //                    return this.write();
     //                  },
     //                  write: function() {

     //                    $(this.container).append(x[this.index]);
     //                    if (this.index < this.chars) {
     //                      this.index++;
     //                      return window.setTimeout(function() {
     //                        return app.write();
     //                      }, this.speed);
     //                    }
     //                  }
     //                };

                 title = ["Technophiles","Global","Dynamic","Customer First"];
    
    description = [
        "We are updated with advanced and some of the most sophisticated technological tools in the digital space making us one of the most tech savvy team in the dock.",
        "Our office is a melting pot of various culture, nationalities and ethnicities, not only in terms of identity but also when it comes to ideas and vision. Our Strategizing meetings are a confluence of opinions and perspectives from around the globe.",
        "We are an amazing team of vibrant and highly dynamic professionals at the heart of Cairo who are always looking out to deliver something new and fresh. We are passionate about infusing energy into whatever we do.",
        "We are open and welcoming towards different ideas, problems and feedback. We value our customers opinion, customize designs according to their requirements and are committed towards giving them the most customer-friendly experience. "
    ];


    function tryfunc(){
        alert();
    }

    var iFrequency = 1000; // expressed in miliseconds
    var myInterval = 0;
    var currentTitle=0;

    // STARTS and Resets the loop if any
    function startLoop() {
        document.getElementById('tagtitle').innerHTML=title[currentTitle];
        x= description[currentTitle];
        // alert(x);
        if(myInterval > 0) clearInterval(myInterval);  // stop
        myInterval = setInterval( "changeContent()", iFrequency );  // run
    }

   

    function changeContent(){
       document.getElementById ('tagdes').innerHTML="";
        console.log(x);
        currentTitle++;
        if(currentTitle>title.length-1){    
            currentTitle=0;
        }
        document.getElementById('tagtitle').innerHTML=title[currentTitle];
        x=description[currentTitle];
        y=x.split("");
        console.log(y);
        showText("#msg", x, 0, 500);  
              
    }
    var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}
