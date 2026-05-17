const fs = require("fs");
const path = require("path");

const targets = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith(".tsx")) targets.push(p);
  }
}
walk("app");
walk("components");

const OPEN_M = "<" + "motion.div";
const CLOSE_M = "</" + "motion.div>";

for (const f of targets) {
  let s = fs.readFileSync(f, "utf8");
  if (s.includes("framer-motion")) continue;
  if (!s.includes("motion.div")) continue;
  s = s.split(OPEN_M).join("<div").split(CLOSE_M).join("</div>");
  fs.writeFileSync(f, s);
  console.log("fixed", f);
}
