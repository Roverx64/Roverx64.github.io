function gbin(input){
    var s = 0x0;
    s = input.toString();
    if(s.slice(0,2) != "0x"){
        s = "0x"+input;
    }else{
        s = input;
    }
    var i = BigInt(0);
    var c = BigInt(1);
    var v = BigInt(s);
    var out = "";
    for(; i < 64; ++i){
        if(v&(c<<i)){
            out = "1"+out;
        }
        else{
            out = "0"+out;
        }
    }
    //Remove leading zeros
    out = out.replace(/^0+/,'');
    return out;
}

function ghex(i){
    var con = BigInt(i);
    var out = "0x"+con.toString(16).toUpperCase();
    return out;
}

function gint(input){
    return parseInt(input,2);
}

function goct(input){
    return input.toString(8);
}

function convert(id){
    /*I'll validate  input eventually*/
    //Get all outputs & inputs
    var inputs = {};
    var outputs = {};
    inputs[1] = document.getElementById("vhex");
    inputs[2] = document.getElementById("vbin");
    inputs[3] = document.getElementById("vlint");
    inputs[4] = document.getElementById("voct");
    var value = inputs[id].value;
    //Get vars
    if(id == 2){outputs[2] = value;}else{outputs[2] = gbin(value);}
    if(id == 3){outputs[3] = value;}else{outputs[3] = gint(outputs[2]);}
    if(id == 1){outputs[1] = value;}else{outputs[1] = ghex(outputs[3]);}
    if(id == 4){outputs[4] = value;}else{outputs[4] = goct(outputs[3]);}
    //Write outputs
    inputs[1].value = outputs[1];
    inputs[2].value = outputs[2];
    inputs[3].value = outputs[3];
    inputs[4].value = outputs[4];
}