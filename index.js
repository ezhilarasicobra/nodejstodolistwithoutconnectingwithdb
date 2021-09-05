const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: "*" }));
app.use(express.json())
const tasks = [];
app.get("/products",(req, res) => {
  res.json(tasks);
});
app.post("/createtask",(req, res) => {
  req.body.id=tasks.length+1;
  req.body.date=new Date();
  req.body.status=false;
  tasks.push(req.body);
  res.json({message:"task created"})
});
app.put("/updatetask/:id",(req,res)=>{
let selecttask=tasks.findIndex(obj=>obj.id==req.params.id)
if(selecttask!=-1){
tasks[selecttask].status = req.body.status;
res.json({
  message:"task Updated"
})}
else{
  res.status(400).json({
    message:"No task found"
  })
}
})
app.delete("/deletetask/:id",(req,res)=>{
  let selecttask=tasks.findIndex(obj=>obj.id==req.params.id)
  if(selecttask!=-1){
  tasks.splice(selecttask,1)
  res.json({
    message:"deleted"
  })
}
else{
  res.status(400).json({
    message:"no tasks"
  })
}
})
app.listen(3000, () => {
  console.log("the port is listening in 3000");
});
