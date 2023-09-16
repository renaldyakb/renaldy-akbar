const imageConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  module.exports = imageConfig;