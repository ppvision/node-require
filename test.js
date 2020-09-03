		
let {include,set_root_dir,show,trans,set_prefix} = require("./index");

set_root_dir("/www/Sale")
set_prefix("~","/Users/bright");
set_prefix("#","/Users/bright3");
set_prefix("#","/Users/bright4");

console.log("~/Work",">",trans("~/Work"))
console.log("@/Work",">",trans("@/Work"))
console.log("/Work",">",trans("/Work"))
console.log("#/Work",">",trans("#/Work"))

show()