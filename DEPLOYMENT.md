# Deployment Guide

Deployment setup with S3:
- Follow this [walkthrough](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af)
  - When setting up CloudFront, click "restrict bucket access" to ensure that the app is canonically only accessible through CloudFront HTTPS connections.
  - Same place (CloudFront setup) select "Redirect HTTP to HTTPS".
  - CloudFront, again: select "Compress Objects Automatically"
  - `www.analog.cafe, files.analog.cafe`
- `npm run deploy` will work if you have followed the article, including the Amazon CLI installation instructions.
  - You will need to replace `s3://analog.cafe` with your bucket name in `package.json` under `scripts:{...}`
  - Deployment script also sets long caches for the following file formats on s3: `*.jpg` `*.png` `*.svg` `*.js` `*.eot` `*.mtd` `*.woff` `*.woff2` `*.ico`

### Note:
Because this app is a compiled web-app it doesn't need to be deployed onto Heroku, EC2 or any Node servers for that matter. The final product is a bunch of static files that could be comfortably sitting in a place like Amazon s3, that can further be optimized for cost and delivery speed. Everything can be compiled on your machine and does not need to have a server set up just to have it compiled once in a blue moon for a consistently higher price and performance not optimized for simple static asset delivery.
