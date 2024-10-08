import AdminSidebar from "../../components/AdminSidebar";
import { Barchart } from "../../components/Charts";

const months = [
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

const BarCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <Barchart
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            data_2={[300, 144, 433, 655, 237, 755, 190]}
            title_1="Product"
            title_2="Users"
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2={`hsl(360,90%,90%)`}
          />
          <h2>TOP SELLING PRODUCTS & TOP CUSTOMERS</h2>
        </section>

        <section>
          <Barchart
            horizontal={true}
            data_1={[
              200, 444, 343, 556, 778, 455, 990, 444, 122, 334, 890, 909,
            ]}
            data_2={[]}
            title_1="Product"
            title_2="Users"
            bgColor_1={`hsl(180,40%,50%)`}
            bgColor_2=""
            labels={months}
          />
          <h2>ORDERS THROUGHOUT THE YEAR</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
