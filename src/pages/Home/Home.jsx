import { LineChart, lineElementClasses } from "@mui/x-charts";
import Stat from "../../components/Statbox/Stat";

function Home() {
  const now = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthName = monthNames[now.getMonth()];

  const totalSales = 25690;

  const data = [
    { Product: "A", Sale: 4000 },
    { Product: "B", Sale: 3000 },
    { Product: "C", Sale: 2000 },
    { Product: "D", Sale: 2780 },
    { Product: "E", Sale: 1890 },
    { Product: "F", Sale: 2390 },
    { Product: "G", Sale: 3490 },
  ];

  const sortedData = data.sort((a, b) => b.Sale - a.Sale);

  return (
    <>
      <div className="space-y-5 lg:space-y-8">
        <h1 className="text-3xl font-medium text-black">Overview</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl sm:hover:scale-105 duration-300 transition-all sm:hover:shadow-xl max-lg:h-[30vh]">
            <LineChart
              xAxis={[
                {
                  scaleType: "point",
                  data: data.map((item) => item.Product),
                  label: "Product",
                },
              ]}
              series={[
                {
                  data: data.map((item) => item.Sale),
                  label: monthName,
                  area: true,
                  showMark: false,
                },
              ]}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  display: "none",
                },
              }}
            />
          </div>
          <div className="col-span-1 bg-white rounded-3xl grid text-black sm:hover:scale-105 duration-300 transition-all sm:hover:shadow-xl">
            <div className="py-5 lg:py-16 flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-center">
                Top 5 Product Sales <br /> in {monthName}
              </h3>
              <ol className="text-lg sm:text-3xl lg:max-xl:list-none list-decimal">
                {sortedData.slice(0, 5).map((product, index) => {
                  return (
                    <li key={index}>
                      <span className="font-medium">
                        Product {product.Product}
                      </span>
                      : {product.Sale}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 lg:gap-8 text-black">
          <Stat title="Total sales" percent={300} up={true}>
            <sup>$</sup>
            {totalSales.toLocaleString()}
          </Stat>
          <Stat title="New Customers" percent={20} up={true}>
            252
          </Stat>
          <Stat title="Products sold" percent={5} up={false}>
            3954
          </Stat>
        </div>
      </div>
    </>
  );
}

export default Home;
