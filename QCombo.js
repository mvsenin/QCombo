requirejs.config({
  paths: {
    "amcharts": "/extensions/QCombo/library/amcharts",
    "amcharts.serial": "/extensions/QCombo/library/serial",
    "amcharts.theme.dark": "/extensions/QCombo/library/dark",
    "amcharts.theme.black": "/extensions/QCombo/library/black",
    "amcharts.theme.chalk": "/extensions/QCombo/library/light",
    "amcharts.theme.light": "/extensions/QCombo/library/chalk",
    //"amcharts.theme.patterns": "/extensions/QCombo/library/patterns"
  },
  shim: {
    "amcharts.serial": {
      deps: ["amcharts", "amcharts.theme.dark", "amcharts.theme.black", "amcharts.theme.chalk", "amcharts.theme.light"],
      exports: "AmCharts",
      init: function() {
        AmCharts.isReady = true;
      }
    }
  }
});
define([
    'qlik',
    'jquery',
    './properties',
    './library/numeral',
    './dataProvider',
    'amcharts.serial'
  ],
  function(qlik, $, props, numeral) {
    return {
      definition: props,
      initialProperties: {
        qHyperCubeDef: {
          qDimensions: [],
          qMeasures: [],
          qInitialDataFetch: [{
            qWidth: 7,
            qHeight: 1250
          }]
        }
      },
      paint: function($element, layout) {
        var self = this;
        var hc = layout.qHyperCube;
        var dataProvider = new DataProvider(layout.qHyperCube);
        dataProvider.addData();
        dataProvider.addGraphs();

        //Set themes
        AmCharts.themes.dark = amChartsThemesDark;
        AmCharts.themes.light = amChartsThemesLight;
        AmCharts.themes.black = amChartsThemesBlack;
        AmCharts.themes.chalk = amChartsThemesChalk;
        var valueAxesLeft = {
          "id": "v1",
          "position": "left",
          "autoGridCount": false,
          "isHidden": false,
          "stackType": layout.amChart.valueAxis.leftStackType,
          "fontSize": layout.amChart.valueAxis.fontSize,
          "title": layout.amChart.valueAxis.leftTitle
        };
        if (layout.amChart.valueAxis.leftMinimum !== "") {
          valueAxesLeft.minimum = layout.amChart.valueAxis.leftMinimum;
        }
        var valueAxesRight = {
          "id": "v2",
          "position": "right",
          "autoGridCount": false,
          "isHidden": true,
          "stackType": layout.amChart.valueAxis.rightStackType,
          "fontSize": layout.amChart.valueAxis.fontSize,
          "title": layout.amChart.valueAxis.rightTitle,

        };
        if (layout.amChart.valueAxis.rightMinimum !== "") {
          valueAxesRight.minimum = layout.amChart.valueAxis.rightMinimum;
        }
        var chart = AmCharts.makeChart($element[0], {
          "type": "serial",
          "rotate": layout.amChart.rotate,
          "theme": layout.amChart.theme,
          "depth3D": layout.amChart.depth3D,
          "angle": layout.amChart.angle,
          "fontFamily": layout.amChart.fontFamily,
          "fontSize": layout.amChart.fontSize,
          "handDrawn": layout.amChart.handDrawn,
          "precision": 2,
          "titles": [{
            text: layout.amChart.titles.text,
            alpha: layout.amChart.titles.alpha,
            bold: layout.amChart.titles.bold,
            size: layout.amChart.titles.size
          }],
          "valueAxes": [valueAxesLeft, valueAxesRight],
          "graphs": dataProvider.amGraphs, //amGraphs,
          "chartScrollbar": {
            "enabled": layout.amChart.categoryAxis.chartScrollbar.show,
            "graph": typeof dataProvider.amGraphs[layout.amChart.categoryAxis.chartScrollbar.graph] !== 'undefined' ?
              dataProvider.amGraphs[layout.amChart.categoryAxis.chartScrollbar.graph].id : dataProvider.amGraphs[0].id,
            "oppositeAxis": false,
            "offset": 30,
            "scrollbarHeight": layout.amChart.categoryAxis.chartScrollbar.scrollbarHeight,
            "backgroundAlpha": layout.amChart.categoryAxis.chartScrollbar.backgroundAlpha,
            "selectedBackgroundAlpha": layout.amChart.categoryAxis.chartScrollbar.selectedBackgroundAlpha,
            "selectedBackgroundColor": layout.amChart.categoryAxis.chartScrollbar.selectedBackgroundColor,
            "graphFillAlpha": layout.amChart.categoryAxis.chartScrollbar.graphFillAlpha,
            "graphLineAlpha": layout.amChart.categoryAxis.chartScrollbar.graphLineAlpha,
            "selectedGraphFillAlpha": layout.amChart.categoryAxis.chartScrollbar.selectedGraphFillAlpha,
            "selectedGraphLineAlpha": layout.amChart.categoryAxis.chartScrollbar.selectedGraphLineAlpha,
            "autoGridCount": true,
            "color": layout.amChart.categoryAxis.chartScrollbar.color
          },
            "trendLines": dataProvider.trendLines,
          "chartCursor": {
            "selectWithoutZooming": true,
            "pan": false,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
          },
          "categoryField": "text" + hc.qDimensionInfo[0].cId,
          "categoryAxis": {
            "parseDates": false,
            "dashLength": 1,
            "minorGridEnabled": true,
            "autoWrap": layout.amChart.categoryAxis.autoWrap,
            "labelRotation": layout.amChart.categoryAxis.labelRotation,
            "fontSize": layout.amChart.categoryAxis.fontSize,
            "title": layout.amChart.categoryAxis.title
          },
          "legend": {
            "equalWidths": false,
            "useGraphSettings": true,
            "valueText": "",
            "enabled": layout.amChart.legend.enabled,
            "position": layout.amChart.legend.position
          },
          "balloon": {
            "enabled": layout.amChart.balloon.enabled
          },
          "export": {
            "enabled": true
          },
          "dataProvider": dataProvider.dataProvider
        });

        //CSS STUFF
        if (layout.amChart.handDrawn) {
          $element.find("*").css("font-family", "Kristen ITC");
        } else {
          $element.find("*").css("font-family", layout.amChart.fontFamily);
        }

        if (layout.amChart.theme == 'dark' || layout.amChart.theme == 'chalk') {
          $element.css("background-color", "#282828");
        } else {
          if (layout.amChart.theme == 'black') {
            $element.css("background-color", "#222222");
          } else {
            $element.css("background-color", "#FFFFFF");
          }
        }

        $element.css('border-radius', '10px');

        //EVENTS
        chart.chartCursor.addListener("selected", zoomy);

        function zoomy(zomzom) {
          var dimValArray = [];
          dataProvider.dataProvider.forEach(function(row, index) {
            if (index >= zomzom.start && index <= zomzom.end && row["elemNumber" + hc.qDimensionInfo[0].cId] >= 0) {
              dimValArray.push(row["elemNumber" + hc.qDimensionInfo[0].cId]);
            }
          });
          self.selectValues(0, dimValArray, false);
        }

        chart.addListener("clickGraphItem", handleClickGraphItem);

        function handleClickGraphItem(event) {
          var dimValArray = [];
          if (dataProvider.dataProvider[event.index]["elemNumber" + hc.qDimensionInfo[0].cId] >= 0) {
            dimValArray.push(dataProvider.dataProvider[event.index]["elemNumber" + hc.qDimensionInfo[0].cId]);
          }
          self.selectValues(0, dimValArray, false);
        }
      }

    };

  });
