const fs = require("fs");
const p = "components/home/ManagementPillars.tsx";
let s = fs.readFileSync(p, "utf8");
const closeGrid = "        </" + "motion.div>";
const closeWrap = "      </" + "motion.div>";
s = s.replace(closeGrid + "\n" + closeWrap + "\n    </section>", "        </div>\n      </div>\n    </section>");
fs.writeFileSync(p, s);
console.log("ok");
