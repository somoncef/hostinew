const fs = require("fs");
const p = "components/home/Hero.tsx";
let s = fs.readFileSync(p, "utf8");
s = s.replace(
  '<motion.div className="relative mx-auto flex min-h-[100svh]',
  '<div className="relative mx-auto flex min-h-[100svh]',
);
s = s.replace(
  "          </motion.ul>\n        </motion.div>\n      </motion.div>\n    </section>",
  "          </motion.ul>\n        </motion.div>\n      </motion.div>\n    </section>".replace(
    "        </motion.div>\n      </motion.div>",
    "        </div>\n      </div>",
  ),
);
fs.writeFileSync(p, s);
console.log("ok");
