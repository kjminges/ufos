// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Indicate to JavaScript to use an empty string when creating the table
function buildTable(data) {
    tbody.html("");
}

// Indicate to JavaScript to find the <tbody> tag within the HTML and add a table row
// Reference one object from the array of UFO sightings, go into the dataRow, specify one item at a time and each value from the variable to a table cell
data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
})

// Indicate through D3 to look for where date values are stored on the webpage and grab/store the information in the "date" variable.
// Set a default filter and save it as a new variable
function handleClick() {
    let data = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
    
        //  Apply a filter method that will match the datetime value to the filtered date value (=== is a strict equality, == losse equality)
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    buildTable(filteredData);
}

// Execute the handleClick() function when the button with an id of filter-btn is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);