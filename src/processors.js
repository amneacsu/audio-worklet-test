class MyWorkletProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.amplitude = .5;
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0];
    const output = outputs[0];

    for (let i = 0; i < input.length; ++i) {
      for (let sample = 0; sample < output[i].length; sample++) {
        output[i][sample] = input[i][sample];
        output[i][sample] += ((Math.random() * 2) - 1) * this.amplitude;
      }
    }

    return true;
  }
}

registerProcessor('my-worklet-processor', MyWorkletProcessor);
