# node-require
like webpack alias '@' to require(file)
# Api
## set_root_dir(dir) 
set workspace(project root) dir
## include(file_name)
replace require call
## set_prefix(f,t)
set alias prefix dir name
## how to use it
at project's main entry app.js add below lines:
  require('my-require').set_root_dir("/home/workspace")
or
  require('my-require').set_root_dir(__dirname);

## sample code
```javascript
var config           = require('../../../../config/upload.js')
//TO 
let {include}     = require('my-require')
var config        = include('@/config/upload')

```
