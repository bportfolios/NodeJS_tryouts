const express= require("express");
const bodyParser = require("body-parser");
const query = require("./db/customer");

const app= express();
app.use(bodyParser.json());

const port =3000;

// Get all customers
app.get("/api/customers", query.getAllCustomers)

// Get customer by id
app.get("/api/customers/:id", query.getCustomerById)

//insert new customer
app.post("/api/customers", query.addCustomer);

//delete customer
app.delete("/api/customers/:id", query.deleteCustomer);

//update customer
app.put("/api/customers/:id", query.updateCustomer);


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})


module.exports = app;