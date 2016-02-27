function $(id) {
    return document.getElementById(id);
}
function _$(className) {
    return document.getElementsByClassName(className);
}
function $$(tagName) {
    return document.createElement(tagName);
}
HTMLElement.prototype.css = function (attrName, attrValue) {
	this.style[attrName] = attrValue;
	return this;
}