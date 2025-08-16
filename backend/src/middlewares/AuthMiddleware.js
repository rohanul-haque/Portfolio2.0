import jwt from "jsonwebtoken";

const AuthMiddleware = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.json({
      success: false,
      message: "Unauthorized. Token missing.",
    });
  }

  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.id = decodeToken.id;

    next();
  } catch (error) {
    return res.json({
      success: false,
      message: "Unauthorized. Token missing.",
    });
  }
};

export default AuthMiddleware;
