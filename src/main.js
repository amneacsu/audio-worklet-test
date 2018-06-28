import { Node } from './Node.js';
// console.log(Node);

const context = new AudioContext();

const oscillator = new OscillatorNode(context);
oscillator.start();

const noise = new Node(context, {
  input: oscillator,
  output: context.destination,
});
