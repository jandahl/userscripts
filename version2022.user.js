// ==UserScript==
// @name        Remove cruft
// @namespace   http://version2.dk
// @include		https://version2.dk/*
// @include		http://*.version2.dk/*
// @include		https://*.version2.dk/*
// @include		https://v2.dk/*
// @include		http://*.v2.dk/*
// @version     1
// ==/UserScript==

window.addEventListener('load', function() {
	badClasses=["block-tm-kevel","jobs-horizontal-block","section-header--title","continue-reading-block"]
	for (var badClassNumber = badClasses.length - 1; badClassNumber >= 0; badClassNumber--) {
		var classToRemove = document.getElementsByClassName(badClasses[badClassNumber])
		for (var individualBlock = classToRemove.length - 1; individualBlock >= 0; individualBlock--) {
			classToRemove[individualBlock].remove()
		}
	}
}, false);
