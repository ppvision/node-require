
let map_preFix = new Map();


function set_root_dir(d){
	map_preFix.set('@',d);
}

function trans(fname){
	let dir_arr = fname.split('/');
	if(dir_arr[0]){
		let prefix = map_preFix.get(dir_arr[0]);
		if(prefix) {
			dir_arr[0] = prefix;
			return dir_arr.join('/');
		}
	}
	/*
	if(dir_arr[0] ==='' || dir_arr[0] ==='@'){
		dir_arr[0] = root_dir;//if root_dir is empty ?
		return dir_arr.join('/')
	}
	*/
	return fname;
}
function include(fname){
	let real_file = trans(fname);
	return require(real_file)
}


function get_root_dir(){
	return map_preFix.get('@');
}

function set_prefix(f,t){
	if(f&&t){
		if(map_preFix.has(f)) console.log(`PREFIX '${f}' ALREADY SETED`);
		map_preFix.set(f,t)
	} 
}

function show_config(){
	console.log("==========CONFIG===========")
	console.log("root_dir:",get_root_dir())

	for (let item of map_preFix.entries()) {
	  	console.log(item[0], item[1]);
	}
}

module.exports = {
	set_root_dir,
	include,
	trans,
	set_prefix,
	show:show_config
}