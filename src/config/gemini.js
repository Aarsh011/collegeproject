import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDTLeos9WedXP3pvsDD0FzoFXsUIoayurI" });

async function main(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt, // Use the input question dynamically
    });
    console.log(response.text);
    return response.text; // Return the response to use in your application
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return response.text()
  }
}

export default main;
