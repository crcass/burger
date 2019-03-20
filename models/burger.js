const orm = require('../config/orm.js');

// database calls using orm go here
const burger = {
  all(cb) {
    orm.selectAll('burgers', res => {
      cb(res);
    });
  },
  create(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, res => {
      cb(res);
    });
  },
  update(col, val, cond, cb) {
    orm.updateOne('burgers', col, val, cond, res => {
      cb(res);
    });
  }
};

module.exports = burger;
