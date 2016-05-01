app.configure(function(){
    
    app.use(express.bodyParser());

    app.use(app.router);
    app.use(express.static(_dirname + '/public'));
});

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', {
	title : 'webApp.in'
    });
});

app.get('/jakub', function(req, res) {
    res.render('jakub', {
	title: 'Jakub\'s EJS at webApp.in'
    });
});

app.get('/about', function(req, res) {
    res.render('about', {
	title : 'About Us'
    });
});
