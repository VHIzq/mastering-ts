(function () {
    // **********************************************
    // ******************* PART 1 *******************
    // **********************************************
    // Create an empty array of numbers called "ages":
    var ages = [29, 29, 56, 57, 55, 54];
    // **********************************************
    // ******************* PART 2 *******************
    // **********************************************
    // Create an array variable called gameBoard that starts as an empty array.
    // It should be typed to hold a 2 dimensional array of strings
    var gameBoard = [[]];
    // **********************************************
    // ******************* PART 4 *******************
    // **********************************************
    // Write a function called getTotal that accepts an array of Product types
    // It should return the sum of all the products' prices
    var getTotal = function (basket) {
        return basket.map(function (item) { return item.price += item.price; });
    };
})();
