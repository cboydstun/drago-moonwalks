import { json, Router } from "express";
import bcrypt from "bcrypt";

const router = Router();

const adminUsername = "manuelprito";
const passwordHash = "$2b$10$LeiReDIs5tnnKx1/H64doeSqa0ot0rngcww22bO3Bx2G9UDtby0IK"

router.post("/login", async (req, res)=> {

        const { username, password } = req.body;
    
        // Checks if the username matches the one we set
        if (username !== adminUsername) {
            return res.status(401).json({ message: "Invalid username or password" });
        }
    
        // Checks the password
        const isMatch = await bcrypt.compare(password, passwordHash);
    
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid username or password" });
        }
    
        // Successful login
        return res.status(200).json({ message: "Login was successful!" });
});

export default router;