const chai = require('chai');
const chaihttp = require('chai-http');
const app = require('../index');
const query = require('../db/customer');
const { expect } = require('chai');
const should = chai.should();

chai.use(chaihttp);

const testCustomer = {
  firstname: 'Theo',
  lastname: 'Bells',
  email:'theo@bells.com',
  phone:7777
}

describe('/POST customers', () => {
  beforeEach((done) => {
    query.deleteAllCustomers();
    done();
  });

  it('Add new customer', (done) => {
    chai.request(app)
      .post('/api/customers')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(testCustomer))
      .end((err, res) => {
        res.should.have.status(200);
        should.exist(res);
        done();
       });
  });
});


describe('/GET Customers', () => {
    it('Fetch all customers', (done) => {
      chai.request(app)
        .get('/api/customers')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(1);
          done();
      });
    });
  });