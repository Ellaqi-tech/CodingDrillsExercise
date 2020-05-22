const load = () => {
    //Problem J1: Dog Treats
    const formhanlde1 = document.forms[0];       
    const onsubmit1 = () => {
        const S = document.getElementById("s").value;
        const M = document.getElementById("m").value;
        const L = document.getElementById("l").value;
        const output1 = document.getElementById("output1");
        
        const operation1 = (s,m,l) => {
            //positive input validation
            if (s>10 || s<0 || m>10 || m<0 || l>10 || l<0) {
                output1.innerHTML = "please insert an interger between 0 and 10"; 
                console.log(s,m,l);
                return false;
                } 
            //interger input validation
            if(!(Number.isInteger(Number(s)) && Number.isInteger(Number(m)) && Number.isInteger(Number(l)))) {
                output1.innerHTML = "please insert an interger between 0 and 10"; 
                return false;
                }
            output1.innerHTML =(1*s + 2*m + 3*l) >= 10 ? "Barley is Happy." : "Barley is Sad.";
        }
        operation1(S,M,L);
        return false;
    }        
    formhanlde1.onsubmit = onsubmit1;
    
    //Problem J2: Epidemiology
    const formhanlde2 = document.forms[1];       
    const onsubmit2 = () => {
        const Pvalue = document.getElementById("P").value;
        const Nvalue = document.getElementById("N").value;
        const Rvalue = document.getElementById("R").value;
        const output2 = document.getElementById("output2");
        
        const operation2 = (P,N,R) => {
            //positive input validation
            if (P>Math.pow(10, 7) || P<0 || N<0 || R>10 || R<0) {
                output2.innerHTML = "please insert P ≤ 10 to the 7th power, N ≤ P, R ≤ 10"; 
                console.log(P,N,R);
                return false;
                } 
            //interger input validation
            if(!(Number.isInteger(Number(P)) && Number.isInteger(Number(N)) && Number.isInteger(Number(R)))) {
                output2.innerHTML = "please insert intergers"; 
                return false;
                }
            //logic
            let p = parseInt(Pvalue);
            let n = parseInt(Nvalue);
            let r = parseInt(Rvalue);
            var day = 0;
            var peopleinfect = n;
            while(peopleinfect <= p) {
                day++;
                peopleinfect += n*Math.pow(r, day);
                console.log("day: "+ day +" peopleinfect: " + peopleinfect);
            }
            output2.innerHTML = `Over ${p} people have disease by the end of Day ${day}.`;
        }
        operation2(Pvalue,Nvalue,Rvalue);
        return false;
    }        
    formhanlde2.onsubmit = onsubmit2;
    
    //Problem J3: Art
    const formhanlde3 = document.forms[2];  
    //NaN?
    const dropsValue = document.getElementById("drops").value;
    const drops = parseInt(dropsValue);
    
    const coordinatesBtn = document.getElementById("coordinates");
    const container = document.getElementById("container");
    const output3 = document.getElementById("output3");

    const outputContainer = () => {
        alert(dropsValue);
        for (let i = 1; i <= drops; i++) {
            container.innerHTML += 
                `<div id="coordinate">
                    <span>
                        <label for="X${i}"> X </label>
                        <input type="text" name="X${i}" id="X${i}">
                    </span>
                    <span>
                        <label for="Y${i}"> Y </label>
                        <input type="text" name="Y${i}" id="Y${i}">
                    </span>
                </div>`;
            console.log(i, container.innerHTML);
        }
    }
    coordinatesBtn.addEventListener("click",outputContainer);
    const onsubmit3 = () => {
        var xArray = [];
        var yArray = [];
        xArray = document.getElementById(`X${i}`).push();
        yArray = document.getElementById(`Y${i}`).push();
        output3.innerHTML = ` ${Math.max(xArray+1)}, ${Math.max(yArray+1)}`;
        return false;
    }        
    formhanlde3.onsubmit = onsubmit3;  
}
window.onload = load;
