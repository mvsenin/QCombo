define([], function() {

    var fontSize = {
        type: "number",
        label: "Font Size",
        ref: "amChart.valueAxis.fontSize",
        defaultValue: 12
    };

    var leftTitle = {
        type: "string",
        label: "Left Axis Title",
        ref: "amChart.valueAxis.leftTitle",
        defaultValue: "Left Value Axis"
    };

    var rightTitle = {
        type: "string",
        label: "Right Axis Title",
        ref: "amChart.valueAxis.rightTitle",
        defaultValue: "Right Value Axis"
    };

    var leftStackType = {
        type: "string",
        component: "dropdown",
        label: "Left Axis Stack Type",
        ref: "amChart.valueAxis.leftStackType",
        options: [{
            value: "none",
            label: "None"
        },
        {
            value: "regular",
            label: "Regular"
        },
        {
            value: "100%",
            label: "100%"
        },{
            value: "3d",
            label: "3d"
        }],
        defaultValue: "none"
    };
    var rightStackType = {
        type: "string",
        component: "dropdown",
        label: "Right Axis Stack Type",
        ref: "amChart.valueAxis.rightStackType",
        options: [{
            value: "none",
            label: "None"
        },
        {
            value: "regular",
            label: "Regular"
        },
        {
            value: "100%",
            label: "100%"
        },{
            value: "3d",
            label: "3d"
        }],
        defaultValue: "none"
    };

    var leftMinimum = {
        type: "number",
        label: "Left Axis Minimum",
        ref: "amChart.valueAxis.leftMinimum",
        expression: "always",
        defaultValue: ""
    };
    var rightMinimum = {
        type: "number",
        label: "Right Axis Minimum",
        ref: "amChart.valueAxis.rightMinimum",
        expression: "always",
        defaultValue: ""
    };

    return {
        type: "items",
        label: "Y-Axis",
        items: {
            fontSize: fontSize,
            leftTitle: leftTitle,
            leftStackType: leftStackType,
            leftMinimum: leftMinimum,
            rightTitle: rightTitle,
            rightStackType: rightStackType,
            rightMinimum: rightMinimum
        }
    };

});
