      const Io = require('../utils/Io')
      const Users = new Io("././src/db/users.json" )
      const User = require("../models/users")
      const bcrypt = require("bcrypt")
      const jwt = require("../utils/jwt")
      const {authDTO} = require('../validation/auth.validation')
const { log } = require('async')
      
    const login =async(req, res)=>{
        try {
    
            const {username, password} = req.body
        
           const users = await Users.read()

            const user = users.find((user) => {
                return user.username === username
            })

            if(!user)
            return res.redirect("/register")


            const verified = await bcrypt.compare(password, user.password)


            if(!verified) return res.redirect("/login")



            const token = jwt.sign({id:user.id, username:user.username})

            
            res.cookie("token", token) 
            res.redirect("/")

        } catch (error) {


            console.log(error)
            

        }
            }
    
    const loginGet =(req, res)=>{
            try {
        
                res.render('login')
            } catch (error) {
                
            }
            }
    
    const register = async(req, res)=>{
    try {        

    const {ism,username, password } = req.body
    const {image} = req.files
    image.mv(process.cwd()+"/src/uploads/"+image.name)

    const {error} = authDTO({ism, password})
    // res.send({error:error.message})
console.log(333333333);
    if (error) {
        console.log(error);
    }
    if(error) return res.redirect("/register")
    console.log(2222222);

    const users = await Users.read()
    //  const user = users.find((user) => {
    //    return user.username === username
    

    // })
    // if(user)return res.redirect('/')


     const id = (users[users.length - 1]?.id||0)+1
     const hashedPass = await bcrypt.hash(password, 12)
     const newUser = new User(id,ism,username,image.name,hashedPass,false)
     console.log(111111111);
     req.push(newUser)
    
     
     const allUsers = users.length?[...users, newUser]:[newUser]
     Users.write(allUsers)

     const token = jwt.sign({id:newUser.id, username:newUser.username})
     
     res.cookie("token", token)
    
     res.redirect("/")

     
     } catch (error) {
        console.log(error);
                    res.status(500).end

                     }
            }
    
    const registerGet =(req, res)=>{
                try {
            
                    res.render('register')
                } catch (error) {
                    
                }
            }

    const logOut = (req, res)=>{
        try {
            res.clearCookie("token")
            res.redirect("/login")
        } catch (error) {
            res.redirect("/login")
        }
    }
        
        module.exports = {
         login,loginGet,registerGet,register,logOut
        }