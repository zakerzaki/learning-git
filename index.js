function add(a, b) {
    console.log(a + b);
}


to_search = document.getElementById('search_input');

btn_search = document.getElementById('search_btn');

btn_search.onclick = function(){
	sidebar.innerHTML = to_search.value;
}

sidebar = document.getElementById('side');
sidebar.onclick = function() {
    add(5, 55);
};