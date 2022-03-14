const express = require('express');
const router = express.Router();
const billSchema = require('../models/bills');

router.get('/', (req, res) => {
  billSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//Endpoint para consultar factura por el valor de su referencia
router.get('/:referenceValue', (req, res) => {
  const { referenceValue } = req.params;
  billSchema
    .findOne({ 'line.expenseDetail.customer.ref.value': referenceValue })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

//Endpoint para crear una nueva factura
router.post('/bill', (req, res) => {
  const bill = billSchema(req.body);
  bill
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

router.put('/:billId', (req, res) => {
  const { billId } = req.params;
  const { dueDate, personDocument, status, line, vendor, totalAmount } =
    req.body;
  billSchema
    .updateOne(
      { _id: billId },
      { $set: { dueDate, personDocument, status, line, vendor, totalAmount } },
      {upsert: true}
    )
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

router.delete('/:billId', (req, res) => {
  const { billId } = req.params;
  billSchema
    .remove({ _id: billId })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

module.exports = router;
