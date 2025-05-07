import {app} from "./src/app.js";
import {config} from "./src/lib/config.js";

const PORT=config.PORT||7777;

app.listen(PORT,(req,res)=>{
    console.log("server is On");
});

export {app};