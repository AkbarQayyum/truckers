const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
const dotenv = require("dotenv");
const usersRouters = require("./routes/Auth_routes");
const builtyroutes = require("./routes/Builty_routes");
const laborroutes = require("./routes/LaborRoutes");
const laborbooking = require("./routes/LaborBooking");
const rikshawBooking = require("./routes/RikshawBooing");
const TruckBooking = require("./routes/TruckBooking");
const ReviewRoutes = require("./routes/ReviewRoutes");
const SellRoutes = require("./routes/SellVehicleRoutes");
const GeneralBookingRoute = require("./routes/GeneralBookingRoute");
const notifications = require("./routes/NotificationRoutes");

const transporter = require("./routes/Registration/transporterRoutes");
const beopari = require("./routes/Registration/BeopariRoutes");
const drivers = require("./routes/Registration/DriverRoutes");
const hotals = require("./routes/Registration/HotalRoutes");
const mechanic = require("./routes/Registration/MechanicRoutes");
const servicestations = require("./routes/Registration/ServiceRoutes");
const spareparts = require("./routes/Registration/SpareRoutes");
const vehicles = require("./routes/Registration/VehicleRoutes");
const TransporterReceipt = require("./routes/TransporterReceiptRoute");

dotenv.config();
require("./config/mongodb_connection");

app.use("/users/auth/", usersRouters);
app.use("/api/builty", builtyroutes);
app.use("/api/labor", laborroutes);
app.use("/api/labor", laborbooking);
app.use("/api/rikshaw", rikshawBooking);
app.use("/api/truck", TruckBooking);
app.use("/api/reviews", ReviewRoutes);
app.use("/api/sell", SellRoutes);
app.use("/api/bookings", GeneralBookingRoute);
app.use("/api/notifications", notifications);
app.use("/api/vehicles", vehicles);
app.use("/api/spareparts", spareparts);
app.use("/api/servicestations", servicestations);
app.use("/api/mechanic", mechanic);
app.use("/api/hotals", hotals);
app.use("/api/drivers", drivers);
app.use("/api/beopari", beopari);
app.use("/api/transporter", transporter);
app.use("/api/transporterreceipt", TransporterReceipt);

const PORT = process.env.PORT || 4433;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, console.log("Server started ..."));
