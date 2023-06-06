define([], function() {

  var fontSize = {
    type: "number",
    label: "Font Size",
    ref: "amChart.categoryAxis.fontSize",
    defaultValue: 12
  };
  var Title = {
    type: "string",
    label: "Title",
    ref: "amChart.categoryAxis.Title",
    defaultValue: "Category Label"
  };

  var labelRotation = {
    type: "number",
    component: "slider",
    label: "Rotate X-Axis Labels",
    ref: "amChart.categoryAxis.labelRotation",
    min: 0,
    max: 90,
    step: 1,
    defaultValue: 0
  };

  var showScrollbar = {
    ref: "amChart.categoryAxis.chartScrollbar.show",
    type: "boolean",
    label: "Show Scrollbar",
    component: "switch",
    options: [{
      value: true,
      label: "On"
    }, {
      value: false,
      label: "Off"
    }],
    defaultValue: false
  };

  var scrollbarGraph = {
    type: "Number",
    component: "dropdown",
    label: "Scrollbar Graph",
    ref: "amChart.categoryAxis.chartScrollbar.graph",
    options: [{
      value: 0,
      label: 1
    }, {
      value: 1,
      label: 2
    }, {
      value: 2,
      label: 3
    }, {
      value: 3,
      label: 4
    }, {
      value: 4,
      label: 5
    }, {
      value: 5,
      label: 6
    }],
    deaultValue: 0,
    show: function(m) {
      return m.amChart.categoryAxis.chartScrollbar.show === true;
    }
  };

  var scrollbarSelectedBackgroundColor = {
    type: "string",
    label: "Selected Background Color",
    ref: "amChart.categoryAxis.chartScrollbar.selectedBackgroundColor",
    defaultValue: "#888888",
    show: function(m) {
      return m.amChart.categoryAxis.chartScrollbar.show === true;
    }
  };

  var scrollbarColor = {
    type: "string",
    label: "Color",
    ref: "amChart.categoryAxis.chartScrollbar.color",
    defaultValue: "#AAAAAA",
    show: function(m) {
      return m.amChart.categoryAxis.chartScrollbar.show === true;
    }
  };

  var scrollbarHeight = {
    type: "number",
    component: "slider",
    label: "Scrollbar Height",
    ref: "amChart.categoryAxis.chartScrollbar.scrollbarHeight",
    min: 0,
    max: 150,
    step: 1,
    defaultValue: 80,
    show: function(m) {
      return m.amChart.categoryAxis.chartScrollbar.show === true;
    }
  };

  var scrollbarBackgroundAlpha = {
    type: "number",
    component: "slider",
    label: "Scrollbar Background Alpha",
    ref: "amChart.categoryAxis.chartScrollbar.backgroundAlpha",
    min: 0,
    max: 1,
    step: 0.1,
    defaultValue: 0,
    show: function(m) {
      return m.amChart.categoryAxis.chartScrollbar.show === true;
    }
  };

  var scrollbarSelectedBackgroundAlpha = {
    type: "number",
    component: "slider",
    label: "Scrollbar Selected Background Alpha",
    ref: "amChart.categoryAxis.chartScrollbar.selectedBackgroundAlpha",
    min: 0,
    max: 1,
    step: 0.1,
    defaultValue: 0.1,
    show: function(m) {
      return m.amChart.categoryAxis.chartScrollbar.show === true;
    }
  };

  var scrollbarSelectedFillAlpha = {
    type: "number",
    component: "slider",
    label: "Scrollbar Selected Fill Alpha",
    ref: "amChart.categoryAxis.chartScrollbar.selectedGraphFillAlpha",
    min: 0,
    max: 1,
    step: 0.1,
    defaultValue: 0,
    show: function(m) {
      return m.amChart.categoryAxis.chartScrollbar.show === true;
    }
  };

  var scrollbarSelectedLineAlpha = {
    type: "number",
    component: "slider",
    label: "Scrollbar Selected Line Alpha",
    ref: "amChart.categoryAxis.chartScrollbar.selectedGraphLineAlpha",
    min: 0,
    max: 1,
    step: 0.1,
    defaultValue: 1,
    show: function(m) {
      return m.amChart.categoryAxis.chartScrollbar.show === true;
    }
  };

  var scrollbarGraphFillAlpha = {
    type: "number",
    component: "slider",
    label: "Scrollbar Graph Fill Alpha",
    ref: "amChart.categoryAxis.chartScrollbar.graphFillAlpha",
    min: 0,
    max: 1,
    step: 0.1,
    defaultValue: 0,
    show: function(m) {
      return m.amChart.categoryAxis.chartScrollbar.show === true;
    }
  };

  var scrollbarGraphLineAlpha = {
    type: "number",
    component: "slider",
    label: "Scrollbar Graph Line Alpha",
    ref: "amChart.categoryAxis.chartScrollbar.graphLineAlpha",
    min: 0,
    max: 1,
    step: 0.1,
    defaultValue: 0.5,
    show: function(m) {
      return m.amChart.categoryAxis.chartScrollbar.show === true;
    }
  };

  return {
    type: "items",
    label: "X-Axis",
    items: {
      fontSize: fontSize,
      Title: Title,
      labelRotation: labelRotation,
      showScrollbar: showScrollbar,
      scrollbarGraph: scrollbarGraph,
      scrollbarColor: scrollbarColor,
      scrollbarHeight: scrollbarHeight,
      scrollbarBackgroundAlpha: scrollbarBackgroundAlpha,
      scrollbarSelectedBackgroundColor: scrollbarSelectedBackgroundColor,
      scrollbarSelectedBackgroundAlpha: scrollbarSelectedBackgroundAlpha,
      scrollbarSelectedFillAlpha: scrollbarSelectedFillAlpha,
      scrollbarSelectedLineAlpha: scrollbarSelectedLineAlpha,
      scrollbarGraphFillAlpha: scrollbarGraphFillAlpha,
      scrollbarGraphLineAlpha: scrollbarGraphLineAlpha
    }
  };

});
