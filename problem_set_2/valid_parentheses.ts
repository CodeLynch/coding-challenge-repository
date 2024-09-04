let stack:string[] = [];

function isValid(containers: string):Boolean{
    for (let i=0; i < containers.length; i++){
        if(containers.charAt(i) === "(" || containers.charAt(i) === "[" || containers.charAt(i) === "{"){
            stack[stack.length] = containers.charAt(i);
        }else{
            let popVal = stack.splice(stack.length-1, 1.);
            switch(popVal[0]){
                case "(":
                    if(containers.charAt(i) != ")"){
                        return false;
                    }
                    break;
                case "[":
                    if(containers.charAt(i) != "]"){
                        return false;
                    }
                    break;
                case "{":
                    if(containers.charAt(i) != "}"){
                        return false;
                    }
                    break;
                default: break;
            }     
        }
    }
    if(stack.length > 0){
       return false; 
    }else{
        return true;
    }
}

//test input here
let inputStr = "[](){}";
console.log(isValid(inputStr));
