const fs = require("fs");
const p = "components/contact/ContactMapCard.tsx";
let s = fs.readFileSync(p, "utf8");
s = s.replace('<motion.div className="grid lg:grid-cols-[1fr_1.2fr]">', '<motion.div className="grid lg:grid-cols-[1fr_1.2fr]">');
s = s.replace('<motion.div className="grid lg:grid-cols-[1fr_1.2fr]">', '<div className="grid lg:grid-cols-[1fr_1.2fr]">');
s = s.replace(
  "                <ContactForm compact showLegal />\n              </motion.div>\n            </div>",
  "                <ContactForm compact showLegal />\n              </motion.div>\n            </motion.div>",
);
// fix the above - form column close
const closeForm = "                <ContactForm compact showLegal />\n              </motion.div>\n            </motion.div>";
const closeFormFixed = "                <ContactForm compact showLegal />\n              </div>\n            </div>";
if (s.includes(closeForm)) s = s.replace(closeForm, closeFormFixed);
fs.writeFileSync(p, s);
console.log("ok");
