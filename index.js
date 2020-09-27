require("dotenv").config();
const aws = require("aws-sdk");

console.log(process.env.AWS_ACCESS_KEY);
console.log(process.env.AWS_SECRET_ACCESS_KEY);

function setCreds() {
  aws.config.setPromisesDependency();
  aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1",
  });
}

setCreds();

const s3 = new aws.S3();

async function getS3Data() {
  const s3response = await s3
    .listObjectsV2({
      Bucket: "rentalsstorage144017-dev",
      Prefix: "",
    })
    .promise();

  console.log(s3response.Contents);
}
getS3Data();
