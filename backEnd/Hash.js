import bcrypt from "bcrypt";

const password = "DragoMoonwalks2024"
const saltRounds = 10;

const hash = async () => {
    try {
        const hashPassword = await bcrypt.hash(password, saltRounds);
        console.log("Hashed Password:", hashPassword)
    } catch (error) {
        console.log("Error Hashing Password")
    }
} 

hash();