const { Storage } = require("@google-cloud/storage");
const ejs = require("ejs");
require("dotenv").config();
const cloudStorageConfig = require("../config/cloudStorage");

const storage = new Storage({
  projectId: cloudStorageConfig.projectId,
  credentials: {
    client_email: cloudStorageConfig.clientEmail,
    private_key: cloudStorageConfig.privateKey.replace(/\\n/g, "\n"),
  },
});

const bucket = storage.bucket(cloudStorageConfig.bucketName);

function getRandomPhilosophicalQuote() {
  const philosophicalQuotes = [
    "Plata o plomo.",
    "Sabe que carabana, si no le gusta el motilado pues paila, no lo mire.",
    "Estamos perdidasss!! Perdidas, perdidas",
    "Uy ñero no!",
    "Por eso robo p****** como usted",
  ];

  const randomIndex = Math.floor(Math.random() * philosophicalQuotes.length);
  return philosophicalQuotes[randomIndex];
}

async function getPokenea(req, res) {
  try {
    const [files] = await bucket.getFiles();

    const randomIndex = Math.floor(Math.random() * files.length);
    const randomImage = files[randomIndex].name;
    const randomPhilosophy = getRandomPhilosophicalQuote();
    const containerId =
      process.env.HOSTNAME || "Could not obtain the container ID";

    ejs.renderFile(
      __dirname + "/../resources/views/pokenea.ejs",
      {
        imageUrl: `https://storage.googleapis.com/${bucket.name}/${randomImage}`,
        philosophy: randomPhilosophy,
        containerId,
      },
      function (err, str) {
        if (err) {
          console.error("Error rendering the view:", err);
          res.status(500).send("Internal Server Error");
        } else {
          res.send(str);
        }
      }
    );
  } catch (error) {
    console.error("Error fetching the image:", error);
    res.status(500).send("Internal Server Error");
  }
}

function getContainerId(req, res) {
  const containerId =
    process.env.HOSTNAME || "Could not obtain the container ID";
  res.send(`The container ID is: ${containerId}`);
}

module.exports = { getPokenea, getContainerId };
