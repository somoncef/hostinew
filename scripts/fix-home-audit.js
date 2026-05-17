const fs = require("fs");
const p = "components/home/HomeAuditCard.tsx";
let s = fs.readFileSync(p, "utf8");
s = s.replace(
  "                </motion.div>\n              </motion.div>\n              <motion.div className=\"p-8",
  "                </div>\n              </div>\n              <div className=\"p-8",
);
s = s.replace(
  "                  <ContactForm compact />\n                </motion.div>\n              </motion.div>\n            </motion.div>",
  "                  <ContactForm compact />\n                </div>\n              </div>\n            </div>",
);
s = s.replace(
  "        </Reveal>\n      </motion.div>\n    </section>",
  "        </Reveal>\n      </div>\n    </section>",
);
fs.writeFileSync(p, s);
console.log("fixed");
