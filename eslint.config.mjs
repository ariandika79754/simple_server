import globals from "globals";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  {
    rules: {
      "no-unused-vars": "error",
      "no-under" : "error",
      "semi": "error",
      "ident" :[
        "error",
        2,
      ],
      "quate":["error","double"]
    }
  }
];