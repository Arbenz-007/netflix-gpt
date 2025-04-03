import { GoogleGenAI } from "@google/genai";
import { GEM_AI } from "./constants";

const ai = new GoogleGenAI({ apiKey: GEM_AI }); 

export default ai;