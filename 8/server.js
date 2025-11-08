import express from 'express'
import cors from 'cors'
const port = 5000
const app = express()

let users = [{
    name:"mahesh",
    email:"mahesh@xyz.com",
    age:19
}];

app.use(cors())
app.use(express.json())

app.get('/api/users',(req,res)=>{
    return res.json(users)
})


app.post('/api/user/add',(req,res)=>{
    const user = req.body;
    users.push(user)
    return res.json({msg:"user added..!!!"})
})

app.put('/api/user/:name', (req, res) => {
  const { name } = req.params;
  const updatedUser = req.body;
  const index = users.findIndex((u) => u.name === name);

  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
    console.log("Updated successfully");
    return res.json({ msg: "Updated successfully...!!!", users });
  }

  return res.json({ msg: "User not found!!!" });
});

app.delete('/api/user/:name',(req,res)=>{
    const {name} = req.params;
    users = users.filter((u)=> u.name !== name)
    return res.json({msg:"deleted succesfully...!!!"})
})

app.listen(port ,()=>{
    console.log("server running on port :"+port)
})