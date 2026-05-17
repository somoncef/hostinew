const fs = require("fs");
const p = "components/home/AirbnbReviewsSection.tsx";
let s = fs.readFileSync(p, "utf8");
s = s.replace(
  '<AirbnbLogo className="h-full w-full text-white" />\n      </motion.div>',
  '<AirbnbLogo className="h-full w-full text-white" />\n      </motion.div>'.replace(
    "</motion.div>",
    "</div>",
  ),
);
s = s.replace(
  "                <Stars />\n              </motion.div>\n            </div>",
  "                <Stars />\n              </motion.div>\n            </motion.div>".replace(
    "</motion.div>",
    "</div>",
  ),
);
s = s.replace(
  "                ))}\n              </motion.div>\n            ) :",
  "                ))}\n              </motion.div>\n            ) :".replace(
    "</motion.div>",
    "</div>",
  ),
);
s = s.replace(
  '<motion.div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-copper-dark to-transparent" />',
  '<motion.div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-copper-dark to-transparent" />'.replace(
    "<motion.div",
    "<div",
  ),
);
fs.writeFileSync(p, s);
console.log("ok");
