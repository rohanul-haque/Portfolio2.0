import multer from "multer";

const storage = multer.diskStorage({});

const Uploads = multer({ storage });

export default Uploads;
