var romanToInt = function(s) {
    var romanObject = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let number =0;
    for(let i=0; i<s.length; i++){
        if(romanObject[s[i]] && romanObject[s[i+1]] && romanObject[s[i]]<romanObject[s[i+1]]){
            number =number + (romanObject[s[i+1]] - romanObject[s[i]] );
            i=i+1;
        }else{
            number+=(romanObject[s[i]]);
        }
    }
    console.log(number)
};
romanToInt('III');
romanToInt('IV');
romanToInt('LVIII');
romanToInt('MCMXCIV');
