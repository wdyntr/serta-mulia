const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    console.log('model URL:', process.env.MODEL_URL);
    return tf.loadGraphModel("https://storage.googleapis.com/ml-wwd/%20model-in-prod/model.json");
}

module.exports = loadModel;