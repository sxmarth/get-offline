var Archiver = require('archiver');
var sites = require('../../core/sites');

module.exports = {
	scrape: sites.scrape,
	list: sites.list,
	find: function(params) {
		return sites.find(params.dirname);
	},

	download: function scrape(params, req, res) {
		return sites.getFullPath(params.dirname).then(function(fullPath) {
			console.log('FULL PATH', fullPath)
			console.log(' Params', params)
			console.log(' Response', res)
			res.writeHead(200, {
				'Content-Type': 'application/zip',
				'Content-disposition': 'attachment; filename=' + params.dirname + '.zip'
			});

			var zip = Archiver('zip');
			zip.pipe(res);
			zip.directory(fullPath, false).finalize();
		});
	}
};
