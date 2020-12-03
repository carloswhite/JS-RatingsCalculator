// 2. Collect Ratings Function
function collect_ratings() {
    // 3. Create a Ratings Object
    const ratings = {'count': 0, 'sum': 0, 'average': 0};

    // 4. Create a Let Binding
    let rating = 0;

    // 5. Select HTML Elements
    const elements = document.querySelectorAll(".rating");

    // 6. Use the forEach Function
    elements.forEach(element => {
        // 7. Set an Object Value - count
        rating = parseInt(element.id.replace("star", ""));

        // 8. Set an Object Value - count
       ratings.count += parseInt(element.value);

        // 8. Set an Object Value - sum
       ratings.sum += parseInt(element.value) * rating;

    });

    // 10. Prevent Divide by Zero
    if (ratings.count !== 0) {
        // 11. Calculate Average Rating
        ratings.average += ratings.sum / ratings.count;
    }

    // 12. Return Ratings
    return ratings;

}

// 13. Change Event - Handler 
document.addEventListener('change', () => {
    // 14. Call Collect Ratings Function
    const ratings = collect_ratings();
    // 15. Set Value of Input Element
    document.querySelector('#average').value = ratings.average.toFixed(2);
});


