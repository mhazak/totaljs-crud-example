exports.install = function() {
	ROUTE('GET 	/');
	ROUTE('GET 	/api/example/read/			*Example --> @read');
	ROUTE('POST /api/example/create/		*Example --> @insert');
	ROUTE('POST /api/example/update/		*Example --> @update');
	ROUTE('POST /api/example/remove/		*Example --> @remove');
};