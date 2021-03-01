const jwt = require('jsonwebtoken');

module.exports = {
	tokenVerification: async token => {
		let promise = new Promise((resolve, reject) => {
			jwt.verify(token, 'jares', (err, result) => {
				if (err) {
					reject(err);
				}
				resolve(result);
			});
		});
		return await promise;
	}
};
