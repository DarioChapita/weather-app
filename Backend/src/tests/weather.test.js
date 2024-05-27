const request = require('supertest');
const should = require('should');
const app = require('../src/app');

describe('Weather API', () => {
    describe('GET /api/v1/location', () => {
        it('should return location data', (done) => {
            request(app)
                .get('/api/v1/location')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    res.body.should.have.property('city');
                    res.body.should.have.property('lat');
                    res.body.should.have.property('lon');
                    done();
                });
        });
    });

    describe('GET /api/v1/current/:city?', () => {
        it('should return current weather for a provided city', (done) => {
            request(app)
                .get('/api/v1/current/London')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    res.body.should.have.property('weather');
                    done();
                });
        });

        it('should return current weather for the detected location', (done) => {
            request(app)
                .get('/api/v1/current')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    res.body.should.have.property('weather');
                    done();
                });
        });

        it('should return 400 for invalid city format', (done) => {
            request(app)
                .get('/api/v1/current/123,abc')
                .expect(400)
                .end((err, res) => {
                    if (err) return done(err);
                    res.body.should.have.property('error');
                    done();
                });
        });
    });

    describe('GET /api/v1/forecast/:city?', () => {
        it('should return weather forecast for a provided city', (done) => {
            request(app)
                .get('/api/v1/forecast/London?count=5')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    res.body.should.have.property('list');
                    res.body.list.should.be.instanceof(Array).and.have.lengthOf(5);
                    done();
                });
        });

        it('should return weather forecast for the detected location', (done) => {
            request(app)
                .get('/api/v1/forecast?count=5')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    res.body.should.have.property('list');
                    res.body.list.should.be.instanceof(Array).and.have.lengthOf(5);
                    done();
                });
        });

        it('should return 400 for invalid count value', (done) => {
            request(app)
                .get('/api/v1/forecast/London?count=abc')
                .expect(400)
                .end((err, res) => {
                    if (err) return done(err);
                    res.body.should.have.property('error');
                    done();
                });
        });

        it('should return 400 for invalid city format', (done) => {
            request(app)
                .get('/api/v1/forecast/123,abc?count=5')
                .expect(400)
                .end((err, res) => {
                    if (err) return done(err);
                    res.body.should.have.property('error');
                    done();
                });
        });
    });
});
