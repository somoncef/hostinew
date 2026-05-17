const fs = require("fs");
const files = process.argv.slice(2);
const OPEN = "<" + "motion.div";
const CLOSE = "</" + "motion.div>";
for (const f of files) {
  let s = fs.readFileSync(f, "utf8");
  const next = s.split(OPEN).join("<motion.div").split("<motion.div").join("<div").split(CLOSE).join("</motion.div>").split("</motion.div>").join("</div>");
  if (next !== s) {
    fs.writeFileSync(f, next);
    console.log("fixed", f);
  }
}
