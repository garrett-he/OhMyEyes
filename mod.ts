const filename = "hd\\missiles\\missiles.json";
const content = D2RMM.readJson(filename);

content["clawsofthunderbolt"] = "expansion_bladefury_b";
content["royalstrikechainlightning"] = "expansion_bladefury";

D2RMM.writeJson(filename, content);