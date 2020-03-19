var tbody = d3.select("tbody");

var ufo_data = data;

var button = d3.select("#filter-btn");



button.on("click", function() {

    var inputElement = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");

    var inputValue = inputElement.property("value");
    var inputValueCity = inputElementCity.property("value");
    var inputValueState = inputElementState.property("value");
    var inputValueCountry = inputElementCountry.property("value");
    var inputValueShape = inputElementShape.property("value");

    console.log(inputValue);
    console.log(ufo_data);

    tbody.html("");


    var filteredData = ufo_data;
    if (inputValue){
      filteredData = filteredData.filter(filteredData => filteredData.datetime === inputValue);
    }
    if (inputValueCity){
      filteredData = filteredData.filter(filteredData => filteredData.city === inputValueCity);
    }
    if (inputValueState){
      filteredData = filteredData.filter(filteredData => filteredData.state === inputValueState);
    }
    if (inputValueCountry){
      filteredData = filteredData.filter(filteredData => filteredData.country === inputValueCountry);
    }
    if (inputValueShape){
      filteredData = filteredData.filter(filteredData => filteredData.shape === inputValueShape);
    };

    filteredData.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
          var cell = row.append("td");
            cell.text(val);
      });  });
        
    });     