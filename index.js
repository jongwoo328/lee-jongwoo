#!/usr/bin/env node

import { styleText } from "node:util";
import boxen from "boxen";

const name = styleText(["bold", "cyan"], "Lee Jongwoo");
const title = styleText("dim", "Software Engineer");
const label = (s) => styleText("yellow", s);
const val = (s) => styleText("white", s);
const link = (s) => styleText(["blue", "underline"], s);

const content = [
  `${name}`,
  `${title} @ ${val("Kakao Games")}`,
  "",
  `${label("Languages")}  : ${val("Java, Python, JavaScript, TypeScript")}`,
  `             ${val("HTML, CSS")}`,
  `${label("Frameworks")} : ${val("Spring Boot, Vue, Nuxt")}`,
  `${label("Tools")}      : ${val("IntelliJ, Neovim, AWS, Vercel")}`,
  `             ${val("Claude Code, Codex")}`,
  "",
  `${label("Email")}      : ${val("jongwoo328@gmail.com")}`,
  `${label("GitHub")}     : ${link("https://github.com/jongwoo328")}`,
].join("\n");

console.log(
  boxen(content, {
    padding: 1,
    borderStyle: "double",
    borderColor: "cyan",
    width: 61,
  })
);
