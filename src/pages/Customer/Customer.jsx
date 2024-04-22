import { DataGrid } from "@mui/x-data-grid";
import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";

const columns = [
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "name",
    headerName: "UserName",
    width: 180,
  },
  { field: "date", headerName: "Date", width: 150 },
  {
    field: "totalPurchase",
    headerName: "Total purchase",
    type: "number",
    width: 120,
  },
];

const rows = [
  {
    email: "Marjorie0@gmail.com",
    name: "Kylee.Rath",
    date: "2024-08-09",
    totalPurchase: 156,
    id: "1",
  },
  {
    email: "Alanna57@hotmail.com",
    name: "Tanner6",
    date: "2024-06-15",
    totalPurchase: 849,
    id: "2",
  },
  {
    email: "Kendra_Grimes27@gmail.com",
    name: "Evie.Welch91",
    date: "2024-09-06",
    totalPurchase: 98,
    id: "3",
  },
  {
    email: "Elaina.Schmeler53@gmail.com",
    name: "Buford_Robel",
    date: "2024-01-09",
    totalPurchase: 323,
    id: "4",
  },
  {
    email: "Lorenzo_Kuhic20@yahoo.com",
    name: "Jonathon_Leffler69",
    date: "2024-06-06",
    totalPurchase: 66,
    id: "5",
  },
  {
    email: "Ariane54@yahoo.com",
    name: "Andreanne51",
    date: "2024-09-08",
    totalPurchase: 41,
    id: "6",
  },
  {
    email: "Danielle.Robel@gmail.com",
    name: "Loyal_Marquardt",
    date: "2024-02-05",
    totalPurchase: 23,
    id: "7",
  },
  {
    email: "Lea_Bergstrom58@gmail.com",
    name: "Graciela60",
    date: "2024-10-07",
    totalPurchase: 15,
    id: "8",
  },
  {
    email: "Rosina_Reichert41@hotmail.com",
    name: "Clemmie.Watsica",
    date: "2024-12-12",
    totalPurchase: 54,
    id: "9",
  },
  {
    email: "Ruben_Kautzer@yahoo.com",
    name: "Colleen82",
    date: "2024-09-04",
    totalPurchase: 65,
    id: "10",
  },
  {
    email: "Jack61@hotmail.com",
    name: "Lavada31",
    date: "2024-03-08",
    totalPurchase: 323,
    id: "11",
  },
  {
    email: "Moshe76@gmail.com",
    name: "Jeremie.Oberbrunner87",
    date: "2024-01-02",
    totalPurchase: 123,
    id: "12",
  },
  {
    email: "Bridie80@hotmail.com",
    name: "Arnoldo_Jenkins",
    date: "2024-03-02",
    totalPurchase: 984,
    id: "13",
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Customer() {
  return (
    <>
      <div className="space-y-5">
        <h1 className="text-3xl font-medium text-black">Customer</h1>
        <div className="flex justify-end b">
          <Search className="bg-white text-black rounded-full">
            <SearchIconWrapper>
              <i className="fa-solid fa-magnifying-glass"></i>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
        <div className="w-full">
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
      </div>
    </>
  );
}

export default Customer;
