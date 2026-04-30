function add(a, b) {
    return a + b;
}

if (add(1, 2) !== 3) {
    throw new Error("Test failed");
}

console.log("Test passed ✅");