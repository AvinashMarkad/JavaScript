function expect(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}

// Example usage
try {
    console.log(expect(5).toBe(5)); // Output: true
} catch (e) {
    console.error(e.message);
}

try {
    console.log(expect(5).toBe(null)); // Throws error: "Not Equal"
} catch (e) {
    console.error(e.message);
}

try {
    console.log(expect(5).notToBe(null)); // Output: true
} catch (e) {
    console.error(e.message);
}
