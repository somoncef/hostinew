fixes = {
    "components/home/AirbnbReviewsSection.tsx": [
        (
            '<AirbnbLogo className="h-full w-full text-white" />\n      </motion.div>',
            '<AirbnbLogo className="h-full w-full text-white" />\n      </div>',
        ),
        (
            "                <Stars />\n              </motion.div>\n            </div>",
            "                <Stars />\n              </div>\n            </div>",
        ),
        (
            "                ))}\n              </motion.div>\n            ) :",
            "                ))}\n              </div>\n            ) :",
        ),
        (
            '<motion.div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-copper-dark to-transparent" />',
            '<motion.div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-copper-dark to-transparent" />'.replace(
                "<motion.div", "<div"
            ),
        ),
    ],
    "components/home/HomeAuditCard.tsx": [
        (
            "                  </p>\n                </motion.div>\n              </div>",
            "                  </p>\n                </div>\n              </div>",
        ),
        (
            "                  <ContactForm compact />\n                </motion.div>\n              </motion.div>",
            "                  <ContactForm compact />\n                </div>\n              </motion.div>",
        ),
    ],
    "components/contact/ContactMapCard.tsx": [
        (
            '<motion.div className="grid lg:grid-cols-[1fr_1.2fr]">',
            '<motion.div className="grid lg:grid-cols-[1fr_1.2fr]">'.replace("<motion.div", "<div"),
        ),
        (
            "                <ContactForm compact showLegal />\n              </motion.div>\n            </div>",
            "                <ContactForm compact showLegal />\n              </motion.div>\n            </motion.div>".replace(
                "</motion.div>\n            </motion.div>", "</div>\n            </div>"
            ),
        ),
    ],
    "components/home/ManagementPillars.tsx": [
        (
            "        </div>\n      </motion.div>\n    </section>",
            "        </div>\n      </motion.div>\n    </section>".replace(
                "</motion.div>", "</motion.div>"
            ),
        ),
    ],
}

for path, reps in fixes.items():
    with open(path, encoding="utf-8") as f:
        s = f.read()
    for old, new in reps:
        if old in s:
            s = s.replace(old, new)
            print("applied", path)
    with open(path, "w", encoding="utf-8") as f:
        f.write(s)
