const fs = require("fs");
const p = "components/home/HomeAuditCard.tsx";
let s = fs.readFileSync(p, "utf8");
s = s.replace(
  "                  </p>\n                </motion.div>\n              </motion.div>",
  "                  </p>\n                </div>\n              </motion.div>",
);
s = s.replace(
  "                  </p>\n                </div>\n              </motion.div>",
  "                  </p>\n                </div>\n              </motion.div>",
);
fs.writeFileSync(p, s);
console.log("ok");
