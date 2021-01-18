function createLink(element){
	var pages = [
	{"name":"Index", "fn":"Index"},
	{"name":"Books&Movies", "fn":"interests"},
	{"name":"Trips", "fn":"trips"},
	{"name":"Shows", "fn":"shows"},
	{"name":"Resumé", "fn":"resume"},
	{"name":"College Projects", "fn":"projects"},
	{"name":"About", "fn":"about"}];
	
	var currentPage = document.getElementById(element).innerHTML;

	var con = '';
	pages.forEach(function(p){
		if(currentPage != p.fn){
			con += '<li><a href\=' + p.fn + '.html>' + p.name + '</a></li>';
		}
		else{
			con += '<li><a href\=#>' + p.name + '</a></li>';

		}
	});
	document.getElementById(element).innerHTML = con;
};

createLink("nav");