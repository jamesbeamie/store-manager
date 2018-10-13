(function(d,w){
	var toggler = $('header > ul > li');
			menu = toggler[toggler.length - 1].$('ul');

	toggler[toggler.length - 1].on('click', function() {
		menu.toggleClass('hidden');
	}, false);

	if ($('article.product-details')) {
		var editors = $('div.description i');

		editors.forEach(function(editor) {
			editor.on('click', function(){
				var editable = this.previousSibling;
				console.log(editable)
				editable.setAttribute("contenteditable", "")
			})
		})
	}
	
})(document, window);
