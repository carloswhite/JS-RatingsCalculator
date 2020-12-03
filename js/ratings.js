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
        rating = parseInt(element.id.replace("star", ""));

        // 7. Set an Object Value - count
       ratings.count += parseInt(element.value);
    });
}

