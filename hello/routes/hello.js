
/*
 * GET home page.
 */

exports.view = function(req, res){
	var nameToShow = req.params.userName;
	console.log('name ' + nameToShow);
	if (nameToShow == null){
		nameToShow = 'World';
	}
  res.render('index', {
  	'name': nameToShow,
  });
};
