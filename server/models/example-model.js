module.exports = (ExampleModel) => {
  ExampleModel.observe('before save', (context) => {
    const {instance} = context;
console.log(instance);
    if (instance.misc) {
      instance.meta.misc = instance.misc;
    }
    else if (instance.meta && Object.keys(instance.meta).length > 0) {
      console.error(`
        what the monkey?
        instance.meta.misc should be empty, not ${instance.misc}
      `);
    }

    return Promise.resolve();
  });
};
