export const chartOptions: any = ({
    // Data: Data to be displayed in the chart
    data: [
        { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
        { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
        { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
        { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
        { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
        { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
    ],
    // Series: Defines which chart type and data to use
    series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }],
});



function getPieData() {
    return [
        { asset: "Stocks", amount: 60000 },
        { asset: "Bonds", amount: 40000 },
        { asset: "Cash", amount: 7000 },
        { asset: "Real Estate", amount: 5000 },
        { asset: "Commodities", amount: 3000 },
    ];
}
export const pieCharts: any = ({
    data: getPieData(),
    title: {
        text: "Portfolio Composition",
    },
    series: [
        {
            type: "pie",
            angleKey: "amount",
            legendItemKey: "asset",
        },
    ],
});

function getLineData() {
    return [
      {
        quarter: "Q1",
        petrol: 200,
        diesel: 100,
      },
      {
        quarter: "Q2",
        petrol: 300,
        diesel: 130,
      },
      {
        quarter: "Q3",
        petrol: 350,
        diesel: 160,
      },
      {
        quarter: "Q4",
        petrol: 400,
        diesel: 200,
      },
    ];
  }

export const lineCharts: any = ({
    title: {
        text: "Annual Fuel Expenditure",
    },
    data: getLineData(),
    series: [
        {
            type: "line",
            xKey: "quarter",
            yKey: "petrol",
            yName: "Petrol",
        },
        {
            type: "line",
            xKey: "quarter",
            yKey: "diesel",
            yName: "Diesel",
        },
    ],
});


function getDuntData() {
    return [
      { asset: "Stocks", amount: 60000 },
      { asset: "Bonds", amount: 40000 },
      { asset: "Cash", amount: 7000 },
      { asset: "Real Estate", amount: 5000 },
      { asset: "Commodities", amount: 3000 },
    ];
  }

export const donutCharts:any = ({
    data: getDuntData(),
    title: {
      text: "Portfolio Composition",
    },
    series: [
      {
        type: "donut",
        calloutLabelKey: "asset",
        angleKey: "amount",
        innerRadiusRatio: 0.7,
      },
    ],
  });