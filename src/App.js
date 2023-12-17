import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [output, setOutput] = useState("");

  let api_key = "AIzaSyBWSP6m7i_QmpvE65d7yJpn-JeDeyHbvhQ";
  const genAI = new GoogleGenerativeAI(api_key);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const handleButtonClick = async () => {
    const prompt = query;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    setOutput(text);
  };

  return (
    <div className="flex flex-col justify-center items-center w-3/4 mx-auto">
      <div className=" h-[100px] flex items-center">
        <input
          className="max-w-md mx-auto bg-white rounded-md shadow-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          className=" mx-5 bg-green-400 hover:bg-green-500 text-white font-serif py-2 px-4 border border-300 rounded focus:outline-none focus:border-green-800 hover:scale-105 hover:bg-green-700"
          onClick={handleButtonClick}
        >
          Search
        </button>
      </div>

      <p>{output}</p>
    </div>
  );
}

export default App;
