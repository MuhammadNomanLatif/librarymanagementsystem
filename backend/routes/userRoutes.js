import express from "express";
import {registerUser,delteUser,getAllregisterUser,getUser,updateUser,updatePartialUerd} from "../controllers/userController.js";
const router = express.Router();
router.post("/users", registerUser);

// READ ALL: GET /api/v1/users
router.get("/users",getAllregisterUser)



// READ ONE: GET /api/v1/users/:id
router.get("/users/:id",getUser) 


// UPDATE (REPLACE): PUT /api/v1/users/:id
router.put("/users/:id",updateUser) 
// UPDATE (PARTIAL): PATCH /api/v1/users/:id
router.patch("/users/:id",updatePartialUerd) 

// Delete: Delete /api/v1/users/:id
router.delete("/users/:id",delteUser)


export default router;
