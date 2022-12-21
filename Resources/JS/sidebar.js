const delay = ms => new Promise(res => setTimeout(res, ms));

const listExtend = async () => {
    var sideBR = document.getElementById('sideBar');
    var sideBTN = document.getElementById('sideBtn');
    var elems = sideBR.getElementsByTagName('txt')
    if (sideBR.style.width != "208px") {
        sideBR.style.width = "208px";
        sideBTN.animate([{ transform: 'translateX(300%)'}], {duration: 300, iterations: 1, fill: "forwards"});
        
        for (var i=0;i<elems.length;i+=1){
            elems[i].animate([{ fontSize: '27px'}], {duration: 250, iterations: 1, fill: "forwards"})
        }

        await delay(305);

        for (var i=0;i<elems.length;i+=1){
            elems[i].animate([{ opacity: '1'}], {duration: 250, iterations: 1, fill: "forwards"})
        }   
        } else {
        sideBR.style.width = "91px";
        sideBTN.animate([{ transform: 'translateZ(208px)'}], {duration: 300, iterations: 1, fill: "forwards"});

        for (var i=0;i<elems.length;i+=1){
            elems[i].animate([{ fontSize: '0px'}], {duration: 250, iterations: 1, fill: "forwards"})
        }
                
        for (var i=0;i<elems.length;i+=1){
            elems[i].animate([{ opacity: '0'}], {duration: 50, iterations: 1, fill: "forwards"})
        }
    }
}