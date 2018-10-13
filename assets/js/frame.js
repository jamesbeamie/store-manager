var $ = function (x) {
	if (x == null) {
		return;
	}
	var self =  this == window ? document : this;
	var nodeList =  typeof x == 'string' ? self.querySelectorAll(x) : x;
	if (nodeList.length == 0) {
		return;
	}
	return nodeList.length == 1 ? nodeList[0] : nodeList;
}

Node.prototype.$ = $;

Node.prototype.name = function(x) {
	if (this.getAttribute('name') != null) {
		this.getElementsByClassName(x);
	} else {
		return;
	}
}

Node.prototype.on = function(event, callback, option) {
	if (option == null) {
		option = false
	}
	this.addEventListener(event, function(e) {callback.call(this, e)}, option)
}

Node.prototype.addClass = function(c) {
	this.classList.add(c);
}

Node.prototype.removeClass = function(c) {
	this.classList.remove(c);
}

Node.prototype.toggleClass = function(c) {
	this.classList.toggle(c);
}

Node.prototype.hasClass = function(c) {
	return this.classList.contains(c);
}

Node.prototype.id = (function() {
	if (this == window) {
		return;
	}
	this.getAttribute('id');
})();

NodeList.prototype.forEach = function (c) {
	Array.prototype.forEach.call(this, c);
}

Element.prototype.css = function (rule) {
	for (p in rule) {
		if (!rule.hasOwnProperty(p)) {
			continue;
		}
		this.style[p] = rule[p];
	}
}

Element.prototype.display = function(state) {
	if (state == null) {
		state = true;
	}
	switch(state) {
		case true:
			this.css({display:'block'});
			break;
		case false:
			this.css({display:'none'});
			break;
	}
}

function isArray(a) {
  return Object.prototype.toString.call(a) === '[object Array]' || Object.prototype.toString.call(a) === '[object NodeList]';
}

function exists (x) {
	return document.documentElement.contains($(x));
}
