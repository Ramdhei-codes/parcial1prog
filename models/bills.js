const mongoose = require('mongoose');
const billSchema = mongoose.Schema({
  dueDate: {
    type: String,
    required: true,
  },
  personDocument: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  line: {
    type: Object,
    required: true,
    amount: {
      type: Number,
      required: true,
    },
    detailType: {
      type: String,
      required: true,
    },
    expenseDetail: {
      type: Object,
      required: true,

      customer: {
        value: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        ref: {
          type: Object,
          required: true,

          value: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
        },
      },
      account: {
        value: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
      lineStatus: {
        type: String,
        required: true,
      },
    },
  },
  vendor: {
    type: Object,
    required: true,

    value: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('billDocument', billSchema);
