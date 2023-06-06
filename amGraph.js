define([], function() {
    'use strict';
    // *****************************************************************************
    // Standard Settings > Various
    // *****************************************************************************
    var amGraphType = {
        type: "string",
        component: "dropdown",
        label: "Type",
        ref: "qDef.amGraph.type",
        options: [{
            value: "column",
            label: "Bar"
        }, {
            value: "line",
            label: "Line"
        }, {
            value: "smoothedLine",
            label: "Smoothed Line"
        }, {
            value: "Waterfall",
            label: "Waterfall"
        }]
    };

    var waterfallStart = {
        type: "number",
        label: "Start value for waterfall",
        ref: "qDef.waterfall.start",
        expression: "always",
        defaultValue: "'0'",
        show: function(m) {
            return m.qDef.amGraph.type == 'Waterfall';
        }
    };
    var waterfallStartLabel = {
        type: "string",
        label: "Start Label for waterfall",
        ref: "qDef.waterfall.startLabel",
        expression: "always",
        defaultValue: "'Start'",
        show: function(m) {
            return m.qDef.amGraph.type == 'Waterfall';
        }
    };
    var waterfallEnd = {
        type: "number",
        label: "End value for waterfall",
        ref: "qDef.waterfall.end",
        expression: "always",
        defaultValue: "'0'",
        show: function(m) {
            return m.qDef.amGraph.type == 'Waterfall';
        }
    };
    var waterfallEndLabel = {
        type: "string",
        label: "End Label for waterfall",
        ref: "qDef.waterfall.endLabel",
        expression: "always",
        defaultValue: "'End'",
        show: function(m) {
            return m.qDef.amGraph.type == 'Waterfall';
        }
    };

    var waterfallNegativeColor = {
        type: "string",
        label: "Negative Color",
        ref: "qAttributeExpressions.2.qExpression",
        expression: "always",
        defaultValue: "'#cc4b48'",
        show: function(m) {
            return m.qDef.amGraph.type == 'Waterfall';
        },
        change: function(data) {
            data.qDef.amGraph.negativeColor = data.qDef.amGraph.negativeColor || {};
            data.qDef.amGraph.negativeColor.qStringExpression = data.qAttributeExpressions[2].qExpression;
        }
    };

    var waterfallPositiveColor = {
        type: "string",
        label: "Positive Color",
        ref: "qAttributeExpressions.3.qExpression",
        expression: "always",
        defaultValue: "'#54cb6a'",
        show: function(m) {
            return m.qDef.amGraph.type == 'Waterfall';
        },
        change: function(data) {
            data.qDef.amGraph.positiveColor = data.qDef.amGraph.positiveColor || {};
            data.qDef.amGraph.positiveColor.qStringExpression = data.qAttributeExpressions[3].qExpression;
        }
    };

    var valueAxis = {
        type: "string",
        component: "dropdown",
        label: "Axis",
        ref: "qDef.amGraph.valueAxis",
        options: [{
            value: "v1",
            label: "left"
        }, {
            value: "v2",
            label: "right"
        }],
        deaultValue: "v1"
    };
    var fillColors = {
        type: "string",
        label: "Fill Color",
        ref: "qAttributeExpressions.0.qExpression",
        expression: "always",
        defaultValue: "",
        change: function(data) {
            data.qDef.amGraph.fillColors = data.qDef.amGraph.fillColors || {};
            data.qDef.amGraph.fillColors.qStringExpression = data.qAttributeExpressions[0].qExpression;
            if (data.qAttributeExpressions[0].qExpression === "") {
                data.qDef.amGraph.lineColor = "";
            }
        }
    };
    var fillAlphas = {
        type: "number",
        component: "slider",
        label: "Area fill Opacity",
        ref: "qDef.amGraph.fillAlphas",
        min: 0,
        max: 1,
        step: 0.1,
        defaultValue: 1
    };
    var fontSize = {
        type: "number",
        label: "Font size",
        ref: "qDef.amGraph.fontSize",
        defaultValue: 10
    };
    var columnWidth = {
        type: "number",
        component: "slider",
        label: "Bar Width",
        ref: "qDef.amGraph.columnWidth",
        min: 0,
        max: 1,
        step: 0.1,
        defaultValue: 0.8
    };
    var clustered = {
        type: "boolean",
        component: "switch",
        label: "Columns Clustered",
        ref: "qDef.amGraph.clustered",
        options: [{
            value: true,
            label: "On"
        }, {
            value: false,
            label: "Off"
        }],
        defaultValue: true
    };

    var groupColumn = {
        type: "items",
        items: {
            columnWidth: columnWidth,
            columnClustered: clustered
        },
        show: function(m) {
            if (m.qDef.amGraph.type == "column" || m.qDef.amGraph.type == "Waterfall") {
                return true;
            } else {
                return false;
            }
        }
    };

    // *****************************************************************************
    // Standard Settings > Line/Border settings
    // *****************************************************************************
    var lineColor = {
        type: "string",
        label: "line Color",
        ref: "qAttributeExpressions.1.qExpression",
        expression: "always",
        defaultValue: "",
        change: function(data) {
            data.qDef.amGraph.lineColor = data.qDef.amGraph.lineColor || {};
            data.qDef.amGraph.lineColor.qStringExpression = data.qAttributeExpressions[1].qExpression;
            if (data.qAttributeExpressions[1].qExpression === "") {
                data.qDef.amGraph.lineColor = "";
            }
        }
    };
    var lineThickness = {
        type: "number",
        component: "slider",
        label: "Line Thickness",
        ref: "qDef.amGraph.lineThickness",
        min: 0,
        max: 10,
        step: 0.5,
        defaultValue: 1
    };
    var dashLength = {
        type: "number",
        component: "slider",
        label: "Dash Length",
        ref: "qDef.amGraph.dashLength",
        min: 0,
        max: 20,
        step: 1,
        defaultValue: 0
    };
    var groupLine = {
        type: "items",
        items: {
            lineColor: lineColor,
            lineThickness: lineThickness,
            dashLength: dashLength
        }
    };
    // *****************************************************************************
    // Standard Settings Grouping
    // *****************************************************************************
    var groupStandard = {
        type: "items",
        label: "Measure Settings",
        items: {
            amGraphType: amGraphType,
            waterfallStart: waterfallStart,
            waterfallStartLabel: waterfallStartLabel,
            waterfallEnd: waterfallEnd,
            waterfallEndLabel: waterfallEndLabel,
            waterfallNegativeColor: waterfallNegativeColor,
            waterfallPositiveColor: waterfallPositiveColor,
            valueAxis: valueAxis,
            fillColors: fillColors,
            fillAlphas: fillAlphas,
            fontSize: fontSize,
            groupColumn: groupColumn,
            groupLine: groupLine
        }
    };

    // *****************************************************************************
    // Advanced Settings > Bullets
    // *****************************************************************************
    var bullet = {
        type: "string",
        component: "dropdown",
        label: "Bullet Icon",
        ref: "qDef.amGraph.bullet",
        options: [{
            value: "none",
            label: "None"
        }, {
            value: "round",
            label: "Round"
        }, {
            value: "square",
            label: "Square"
        }, {
            value: "triangleUp",
            label: "Triangle Up"
        }, {
            value: "triangleDown",
            label: "Triangle Down"
        }, {
            value: "bubble",
            label: "Bubble"
        }],
        defaultValue: "none"
    };
    var bulletAlpha = {
        type: "number",
        component: "slider",
        label: "Bullet Alpha",
        ref: "qDef.amGraph.bulletAlpha",
        min: 0,
        max: 1,
        step: 0.1,
        defaultValue: 1
    };
    var bulletColor = {
        type: "string",
        label: "Bullet Color",
        ref: "qDef.amGraph.bulletColor",
        defaultValue: "#FFFFFF"
    };
    var bulletSize = {
        type: "number",
        component: "slider",
        label: "Bullet Size",
        ref: "qDef.amGraph.bulletSize",
        min: 0,
        max: 20,
        step: 1,
        defaultValue: 5
    };
    var groupBullet = {
        type: "items",
        items: {
            bullet: bullet,
            bulletAlpha: bulletAlpha,
            bulletColor: bulletColor,
            bulletSize: bulletSize
        }
    };
    // *****************************************************************************
    // Advanced Settings > Value Labels
    // *****************************************************************************
    var labelOffset = {
        ref: "qDef.amGraph.labelOffset",
        label: "Label Offset",
        component: "slider",
        type: "number",
        min: 0,
        max: 10,
        step: 0.1,
        defaultValue: 0
    };
    var labelPosition = {
        ref: "qDef.amGraph.labelPosition",
        label: "Label Position",
        component: "dropdown",
        type: "string",
        options: [{
            value: "top",
            label: "Top"
        }, {
            value: "bottom",
            label: "Bottom"
        }, {
            value: "right",
            label: "Right"
        }, {
            value: "left",
            label: "Left"
        }, {
            value: "inside",
            label: "Inside"
        }, {
            value: "middle",
            label: "Middle"
        }],
        defaultValue: "top"
    };
    var labelRotation = {
        type: "number",
        component: "slider",
        label: "Rotate Value Labels",
        ref: "qDef.amGraph.labelRotation",
        min: 0,
        max: 360,
        step: 1,
        defaultValue: 0
    };
    var showLabel = {
        ref: "qDef.amGraph.showLabel",
        type: "boolean",
        label: "Show Labels",
        component: "switch",
        options: [{
            value: true,
            label: "On"
        }, {
            value: false,
            label: "off"
        }],
        defaultValue: false
    };
    var groupLabel = {
        type: "items",
        items: {
            showLabel: showLabel,
            labelOffset: labelOffset,
            labelPosition: labelPosition,
            labelRotation: labelRotation
        }
    };
    // *****************************************************************************
    // Advanced Settings > Various
    // *****************************************************************************
    var behindColumns = {
        type: "boolean",
        component: "dropdown",
        label: "line graphs behind columns",
        ref: "qDef.amGraph.behindColumns",
        options: [{
            value: true,
            label: "On"
        }, {
            value: false,
            label: "Off"
        }],
        defaultValue: false
    };
    var groupVarious = {
        type: "items",
        items: {
            behindColumns: behindColumns
        }
    };
    // *****************************************************************************
    // RETURN OBJECT
    // *****************************************************************************
    return {
        groupStandard: groupStandard,
        groupBullet: groupBullet,
        groupLabel: groupLabel,
        groupVarious: groupVarious
    };
});
