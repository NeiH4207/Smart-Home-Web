const subscriberRouter = require('./subscribers');
const authRouter = require('./auth');
const sensorRouter = require('./sensor');
const deviceRouter = require('./device');
const roomRouter = require('./room');

//Index of route middleware
const route = (app) => {
	//Route middleware subscribers
	app.use('/subscribers', subscriberRouter);

	//Route middleware auth
	app.use('/api/auth', authRouter);

	//Route sensor
	app.use('/api/sensor', sensorRouter);

	//Route device
	app.use('/devices', deviceRouter);

	//Route room
	app.use('/rooms', roomRouter);
};

module.exports = route;
