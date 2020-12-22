module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: 'AKIAI6S6SJEFZBZR7JLQ',
      secretAccessKey: '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',
      region: 'eu-central-1',
      params: {
        Bucket: 'airanalyzer',
      },
    },
  },
});
