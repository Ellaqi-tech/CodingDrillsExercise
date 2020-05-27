//Problem J1: Dog Treats 
const j1function = () => {      
    const S = document.getElementById("s").value;
    const M = document.getElementById("m").value;
    const L = document.getElementById("l").value;
    const output1 = document.getElementById("output1");

    //positive input validation
    if (S>10 || S<0 || M>10 || M<0 || L>10 || L<0) {
        output1.innerHTML = "please insert an interger between 0 and 10"; 
        console.log(S,M,L);
        } 
    //interger input validation
    else if(!(Number.isInteger(Number(S)) && Number.isInteger(Number(M)) && Number.isInteger(Number(L)))) {
        output1.innerHTML = "please insert an interger between 0 and 10"; 
        } else {
            output1.innerHTML =(1*S + 2*M + 3*L) >= 10 ? "Barley is Happy." : "Barley is Sad.";
        }
}

    
//Problem J2: Epidemiology
const j2function = () => {      
    //const onsubmit2 = () => {
        const Pvalue = document.getElementById("P").value;
        const Nvalue = document.getElementById("N").value;
        const Rvalue = document.getElementById("R").value;
        const output2 = document.getElementById("output2");
        
        const operation2 = (P,N,R) => {
            //positive input validation
            if (P>Math.pow(10, 7) || P<0 || N<0 || R>10 || R<0) {
                output2.innerHTML = "please insert P ≤ 10 to the 7th power, N ≤ P, R ≤ 10"; 
                console.log(P,N,R);
                } 
            //interger input validation
            if(!(Number.isInteger(Number(P)) && Number.isInteger(Number(N)) && Number.isInteger(Number(R)))) {
                output2.innerHTML = "please insert intergers"; 
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
}
    
//Problem J3: Art
const j3function = () => {
    const container = document.getElementById("container");
    const btn3 = document.getElementById("btn3");
    const output3 = document.getElementById("output3");
    const dropsValue = document.getElementById("drops").value;

    var xArray = [];
    var yArray = [];

    for (let i = 1; i <= dropsValue; i++) {
        container.innerHTML += 
            `
            <div id="coordinate">
                <span>
                    <label for="X${i}"> X </label>
                    <input type="text" name="X${i}" id="X${i}">
                </span>
                <span>
                    <label for="Y${i}"> Y </label>
                    <input type="text" name="Y${i}" id="Y${i}">
                </span>
            </div>
            `;
    }

    //add event listener because output() is inside another function
    //console.log(btn3); can get btn3 element
    //but no alert, seems it couldn't access to the output function after click the button
    btn3.addEventListener = ("click", output = () => {
        alert("output");
        for (let j = 1; j <= dropsValue; j++) {
            xArray = document.getElementById(`X${j}`).value.push;
            yArray = document.getElementById(`Y${j}`).value.push;
            console.log("x "+xArray+"y "+yArray);
        } 
        output3.innerHTML = ` ${Math.max(xArray)+1}, ${Math.max(yArray)+1}`;
    })
}
    

