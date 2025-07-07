const Customer = require("../models/Customer");

exports.createCustomer = async (req, res) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).json(customer);
    } catch (err) {
        console.error("❌ Validation Error:", err.message);
        res.status(400).json({ error: err.message });
    }
};


exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findOne({ id: req.params.id });
        if (!customer) return res.status(404).json({ message: "Not found" });
        res.json(customer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const updated = await Customer.findOneAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        await Customer.findOneAndDelete({ id: req.params.id });
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
