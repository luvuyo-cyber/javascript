function recursiveFunction(param1) {
    console.log(param1);
    if (param1 < 10) {
        return recursiveFunction(param1 + 1);
    } else {
        return;
    };   
};

recursiveFunction(0);


