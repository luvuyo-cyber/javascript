const endDate = "Sept 1 2022";

function countDown() {
   let total = Date.parse(endDate) - new Date();
   let days = Math.floor(total / (1000 * 60 * 60 * 24));
   let hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
   let mins = Math.floor((total / 1000 / 60) % 60);
   let secs = Math.floor((total / 1000) % 60);
    return {
        days,
        hrs,
        mins,
        secs
    };
}

function update() {
   let temp = countDown();
    let output = "";
    for (let property in temp) {
        output += (`${property}: ${temp[property]} `);
    }
    console.log(output);
    setTimeout(update, 1000);
}

update();
