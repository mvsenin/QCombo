define([
    './amGraph',
    './amChart'
], function(amGraph, amChart) {

    var dimensions = {
        uses: "dimensions",
        min: 1,
        max: 1
    };

    var measures = {
        uses: "measures",
        min: 1,
        max: 6,
        items: amGraph
    };

    var sorting = {
        uses: "sorting"
    };

    var settings = {
        uses: "settings"
    };

    return {
        type: "items",
        component: "accordion",
        items: {
            dimensions: dimensions,
            measures: measures,
            sorting: sorting,
            settings: settings,
            amChart: amChart
        }
    };
});


