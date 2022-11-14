var btnpress;
var len = document.querySelectorAll(".btn").length;

//clr btn
document.querySelector(".clr").addEventListener("click", function (){
    _clr_();
})

//mouse click
for(var i = 0;i < len;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function (){
        btnPress = this.innerText;
        if(btnPress != "="){
            display(btnPress);
        }
        if(btnPress === "="){
            calculate();
        }
    });
}

//clr func
function _clr_(){
    document.getElementById("result").innerText = " ";
}

//display func
function display(val){
    document.getElementById("result").innerText += val;
}


//eval
function calculate(){
    var p = document.getElementById("result").innerText;
    q = eval(p);
    document.getElementById("result").innerText = q;
}


//keyboard press
document.addEventListener("keypress", function (event){
        switch (event.key) {
            case '1':
                display(event.key);
                break;
            
            case '2':
                display(event.key);
                break;
            
            case '3':
                display(event.key);
                break;

            case '4':
                display(event.key);
                break;

            case '5':
                display(event.key);
                break;

            case '6':
                display(event.key);
                break;

            case '7':
                display(event.key);
                break;
            
            case '8':
                display(event.key);
                break;

            case '9':
                display(event.key);
                break;

            case '0':
                display(event.key);
                break;

            case '.':
                display(event.key);
                break;

            case '+':
                display(event.key);
                break;

            case '-':
                display(event.key);
                break;

            case '*':
                display(event.key);
                break;

            case '/':
                display(event.key);
                break;

            case 'c':
                _clr_();
                break;
            
            case 'C':
                _clr_();
                break;
            
            case 'Enter':
                calculate();

            default:
                alert("only number, operators and 'c' for clear");
                break;
        }
    }
);





