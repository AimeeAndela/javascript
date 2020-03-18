var ufo_data = data;

var button = d3.select("#filter-btn");

button.on("click", function() {

    var inputElement = d3.select("#datetime");
  
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(ufo_data);

    var filteredData = ufo_data.filter(ufo_data => ufo_data.datetime === inputValue);

    console.log(filteredData);

    return filteredData;

    console.log(filteredData.datetime);

    var table = d3.select("table");

    var tbody = d3.select("tbody");

    var row = tbody.append("tr");

    row.append("td").table(filteredData);
//I have tried changing .table to .text, changing 
//filteredData to filteredData.datetime but still can't get anything to display on the page.

    

    // var list = d3.select("#ufo-table");

    // // remove any children from the list to
    // list.html("");

    // list.append("tr").text(`Date: ${filteredData.datetime}`);
    // // list.append("li").text(`City: ${city}`);
    // // list.append("li").text(`State: ${state}`);
    // // list.append("li").text(`Country: ${country}`);
    // // list.append("li").text(`Shape: ${shape}`);
    // list.append("li").text(`Duration: ${durationMinutes}`);
    // list.append("li").text(`Comments: ${comments}`);
});