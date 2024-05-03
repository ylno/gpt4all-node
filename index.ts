import { loadModel, createCompletion } from "gpt4all";
import * as readline from 'readline';

// let modelName = "orca-mini-3b-gguf2-q4_0.gguf";
let modelName = "em_german_mistral_v01.Q4_0.gguf";
const model = await loadModel(modelName, {
    verbose: true,
    device: "gpu",
});


const chat = await model.createChatSession({
  promptTemplate: "### Mensch:\n%1\n\n### Assistent:\n",
});

// await createCompletion(
//     chat,
//     "Why are bananas rather blue than bread at night sometimes?",
//     {
//         verbose: true,
//     }
// );
// await createCompletion(chat, "Are you sure?", { verbose: true, });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Ereignisbehandler für jede eingegebene Zeile
rl.on('line', async (line) => {
  console.log(`Empfangene Zeile: ${line}`);
  await createCompletion(
      chat,
      line,
      {
        verbose: true,
      }
  );
});


