const filename = "hd\\missiles\\missiles.json";
const content = D2RMM.readJson(filename);

content["bladesoficeexplode"] = "null";
content["bladesoficecubes"] = "expansion_lure_cloud";
content["bladesoficecubesmelt"] = "ice_break_small_melt";

content["fistsoffireexplode"] = "null";
content["fistsoffirefirewall"] = "ground_fire_small";

content["clawsofthunderbolt"] = "expansion_bladefury_b";
content["clawsofthundernova"] = "expansion_hurricane_swoosh";
content["royalstrikechainlightning"] = "expansion_bladefury";
content["royalstrikemeteorexplode"] = "null";
content["royalstrikemeteorfire"] = "ground_fire_small";

D2RMM.writeJson(filename, content);
