function test(val) {
    try {
        if (isNaN(val)) {
            throw "not a number";
        } else {
            console.log("got number");
        }
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Done " + val);
    }
}
test("a");
test(100);
