module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: 'AKIAIUJI6N6VOLIZ6UJA',
      secretAccessKey: '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',
      region: 'eu-central-1',
      params: {
        Bucket: 'air-analyzer',
      },
    },
  },
});
