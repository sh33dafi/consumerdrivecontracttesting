const server = require('../src/todo-service').server;

const {
    Verifier
} = require('@pact-foundation/pact');
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);

describe('Pact Verification', () => {

    it('should validate the expectations of Matching Service',  function () { // lexical binding required here

        this.timeout(10000);
        let opts = {
            provider: 'Todo MicroService',
            providerBaseUrl: 'http://localhost:9000',
            pactBrokerUrl: 'http://localhost:9292',
            publishVerificationResult: true,
            providerVersion: '2.0.0'
        };

        return new Verifier().verifyProvider(opts)
            .then(output => {
                console.log('Pact Verification Complete!');
            })
    });
});
