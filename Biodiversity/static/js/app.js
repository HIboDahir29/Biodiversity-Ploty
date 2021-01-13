// d3.json("samples.json").then(function (sample) {
//     console.log(sample);

//     var ids = sample.names;
//     console.log(ids);

//     d3.select("#selDataset")
//         .selectAll("option")
//         .sample(ids)
//         .enter()
//         .append("option")
//         .html(function (d) {
//             return `<option>${d}</option`;
//         });

// });


d3.json("samples.json").then(function createPlotly(data) {
    console.log(data);
    var testid = data.names;
    console.log(testid);

    // Create a dynamic dropdown menu
    d3.select("#selDataset")
        .selectAll("option")
        .data(testid)
        .enter()
        .append("option")
        .html(function (d) {
            return `<option>${d}</option`;
        });






        
});
