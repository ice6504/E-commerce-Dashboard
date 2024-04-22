import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "date", headerName: "Date", width: 150 },
  {
    field: "productName",
    headerName: "Product Name",
    align:"center",
    width: 120,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    align:"center",
    width: 80,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 70,
  },
];

const rows = [
  {
    id: 1,
    date: "2024-02-1",
    productName: "A",
    quantity: 35,
    price: 10,
  },
  {
    id: 2,
    date: "2024-02-18",
    productName: "B",
    quantity: 42,
    price: 265,
  },
  {
    id: 3,
    date: "2024-02-17",
    productName: "C",
    quantity: 45,
    price: 895,
  },
  {
    id: 4,
    date: "2024-02-16",
    productName: "D",
    quantity: 16,
    price: 565,
  },
  {
    id: 5,
    date: "2024-02-29",
    productName: "E",
    quantity: 54,
    price: 5153,
  },
  {
    id: 6,
    date: "2024-02-31",
    productName: "F",
    quantity: 150,
    price: 1513,
  },
  {
    id: 7,
    date: "2024-02-25",
    productName: "G",
    quantity: 44,
    price: 1313,
  },
  {
    id: 8,
    date: "2024-02-12",
    productName: "H",
    quantity: 36,
    price: 2131,
  },
  {
    id: 9,
    date: "2024-02-10",
    productName: "I",
    quantity: 65,
    price: 321,
  },
  {
    id: 10,
    date: "2024-02-9",
    productName: "J",
    quantity: 65,
    price: 546,
  },
  {
    id: 11,
    date: "2024-02-4",
    productName: "K",
    quantity: 65,
    price: 879,
  },
  {
    id: 12,
    date: "2024-02-3",
    productName: "L",
    quantity: 65,
    price: 147,
  },
];

function Sales() {
  return (
    <>
      <h1 className="text-3xl font-medium text-black mb-5">Sales Report</h1>
      <div className="h-fit w-full">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
        />
      </div>
    </>
  );
}

export default Sales;
