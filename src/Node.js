class MyWorkletNode extends AudioWorkletNode {
  constructor(context, name) {
    super(context, name);
  }
}

export class Node {
  constructor(context, params) {
    context.audioWorklet.addModule('src/RecamanOscillator.js').then(() => {
      let node = new MyWorkletNode(context, 'my-worklet-processor');

      if (params.input) {
        params.input.connect(node);
      }

      if (params.output) {
        node.connect(params.output);
      }
    });
  }
};
