import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const columns = [
  {
    field: "productName",
    headerName: "Product Name",
    align: "center",
    width: 120,
  },
  {
    field: "category",
    headerName: "Category",
    align: "center",
    width: 100,
  },
  {
    field: "remaining",
    headerName: "Remaining",
    type: "number",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
  },
];

const rows = [
  {
    id: 1,
    productName: "A",
    category: "food",
    remaining: 120,
    status: "In Stock",
  },
  {
    id: 2,
    productName: "B",
    category: "drink",
    remaining: 72,
    status: "Low Stock",
  },
  {
    id: 3,
    productName: "C",
    category: "snack",
    remaining: null,
    status: "Out of Stock",
  },
];

function Inventory() {
  return (
    <>
      <div className=" space-y-5">
        <h1 className="text-3xl font-medium text-black">Inventory</h1>
        <div className="h-fit w-full">
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            checkboxSelection
          />
        </div>
        <div className="flex gap-4">
          <Button className="bg-green-400 w-20 font-semibold rounded-full" variant="contained">Add</Button>
          <Button className="bg-yellow-400 w-20 font-semibold rounded-full" variant="contained">Edit</Button>
          <Button className="bg-red-400 w-20 font-semibold rounded-full" variant="contained">Delete</Button>
        </div>
      </div>
    </>
  );
}

export default Inventory;
