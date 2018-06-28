const PI2 = Math.PI * 2.0;

class MyWorkletProcessor extends AudioWorkletProcessor {
  constructor(ctx) {
    super();
    this.frequency = 344;
    this.amplitude = 10;
    this.phase = 0;
  }

  process(inputs, outputs, parameters) {
    const output = outputs[0];

    const theta = PI2 * this.frequency;
    const sampleRate = 44800;

    for (let i = 0; i < output.length; ++i) {
      for (let sample = 0; sample < output[i].length; sample++) {
        const s = this.amplitude * Math.sin(this.phase * this.frequency);
        output[i][sample] = s;
        this.phase += Math.PI * 2 / sampleRate;
      }
    }

    return true;
  }
}

registerProcessor('my-worklet-processor', MyWorkletProcessor);
