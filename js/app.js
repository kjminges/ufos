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
 
