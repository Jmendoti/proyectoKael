import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";



export const register = async (req, res) => {
  const { password, username, email } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound) return res.status(400).json(["El email ya esta en uso"]);

    const passwordHash = await bcrypt.hash(password, 10); //realiza proceso de encriptacion del password

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);

    //mostrar la informacion que se desea visualizar
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { password, email } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (!userFound)
      return res.status(400).json({ message: "Usuario no encontrado" }); //valida si se encuentra el usuario registrado

    const isMatch = await bcrypt.compare(password, userFound.password); //Realiza el proceso de comparacion de el password con el usuario encontrado
    if (!isMatch)
      return res.status(400).json({ message: "Password Incorrecto" });

    const token = await createAccessToken({ id: userFound._id }); //crea el token del usuario encontrado

    res.cookie("token", token,{
      sameSite: 'none',
      secure: true,
      httpOnly: false
    });

    //mostrar la informacion que se desea visualizar
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

//se modifico para realizar la busqueda de miltiples usuarios y ya funciona 
export const getProfiles = async (req, res) => {
  try {
    const userFound = await User.find({})
    return res.json(userFound);
    
  } catch (error) {
    res.json({message: "no se encuentra usuarios"})
  }
};



export const getProfile = async (req, res) => {
  try {
    const userFound = await User.findById(req.params.id);
    if (!userFound) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(userFound);
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};





export const updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user)
      return res.status(404).json({message: "Perfil no encontrado"});
    res.json(user)
  } catch (error) {
    return res.status(404).json({message: "Perfil no se encontro"})
  }
}

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({message:'No tienes Permisos Activos'})

    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
      if(error) return res.sendStatus(401).json({message: 'No estas Autorizado'})

      const userFound = await User.findById(user.id)
      if(!userFound) return res.sendStatus(401).json({message: 'No autorizado'})

      return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
      })
    })
}
