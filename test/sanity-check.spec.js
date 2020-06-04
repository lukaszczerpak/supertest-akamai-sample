const chai = require('chai');
const expect = chai.expect;
const akamaiReq = require('supertest-akamai');

chai.use(require('chai-http'));
chai.use(require('chai-akamai'));

/********************************************************************************
 Sample Test
 ********************************************************************************/

describe('Given I am spoofed to Akamai Staging Network', function () {
  context("When I go to the website", function () {
    it('Then I should get 200 OK from Akamai Staging Network', function () {
      return akamaiReq('http://www.example.com', 'www.example.com.edgesuite-staging.net').get('/')
        .expect((res) => {
          expect(res.statusCode).to.equal(200);
          expect(res).to.be.akamaiStaging;
          expect(res.text).to.contain('<body>\r\n</body>');
        });
    });
  });
});
