let endDate = "Oct 15 2024";

function countdown() {
    let total = Date.parse(endDate) - Date.now();
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
};

function update() {
    let temp = countdown();
    let output = "";
    for (let key in temp) {
        output += `${key}: ${temp[key]} `;
    }
    console.log(output);
    setTimeout(update, 1000);
};

update();
