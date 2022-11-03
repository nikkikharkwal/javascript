/* Given a string swap the case and print the output
Sample Input - Test
Sample Output - tEST
NOTE: Use multiple functions to achieve the result, NOT one single code block
*/
function swap (str) {
let sum = "";
    for(let i = 0; i < str.length; i++){
        if(str[i]==="A"||str[i]==="B"||str[i]==="C"||str[i]==="D"||str[i]==="E"||str[i]==="F"||str[i]==="G"||str[i]==="H"||str[i]==="I"||str[i]==="J"||str[i]==="K"||str[i]==="L"||str[i]==="M"||str[i]==="N"||str[i]==="O"||str[i]==="P"||str[i]==="Q"||str[i]==="R"||str[i]==="S"||str[i]==="T"||str[i]==="U"||str[i]==="V"||str[i]==="W"||str[i]==="X"||str[i]==="Y"||str[i]==="Z"){
            sum += str[i].toLowerCase() ;
        }
        else if(str[i]==="a"||str[i]==="b"||str[i]==="c"||str[i]==="d"||str[i]==="e"||str[i]==="f"||str[i]==="g"||str[i]==="h"||str[i]==="i"||str[i]==="j"||str[i]==="k"||str[i]==="l"||str[i]==="m"||str[i]==="n"||str[i]==="o"||str[i]==="p"||str[i]==="q"||str[i]==="r"||str[i]==="s"||str[i]==="t"||str[i]==="u"||str[i]==="v"||str[i]==="w"||str[i]==="x"||str[i]==="y"||str[i]==="z"){
            sum += str[i].toUpperCase();
        }
    }
   return sum;
}

let str = "Test";
console.log(swap(str))