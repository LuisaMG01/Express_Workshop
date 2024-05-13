require("dotenv").config();

module.exports = {
  projectId: process.env.GOOGLE_PROJECT_ID,
  clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
  privateKey: process.env.GOOGLE_PRIVATE_KEY,
  bucketName: process.env.GOOGLE_BUCKET_NAME,
};
