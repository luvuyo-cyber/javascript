let start = 10; 

function countDown(arg1) { 
    console.log(arg1); 
    if (arg1 < 1) { 
        return; 
    } else {
        return countDown(arg1 - 1); 
    };
};

countDown(start);

function countDown2(arg2) { 
    console.log(arg2); 
    if (arg2 > 0) { 
        --arg2; 
        return countDown2(arg2); 
    } else {
        return;
    }; 
}; 

countDown2(start);
