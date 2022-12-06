/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2022-12-06 10:58:20
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2022-12-06 12:08:33
 * @FilePath: \openai-node\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */

require('dotenv').config();
const chalk = require('chalk');
const { Configuration, OpenAIApi } = require("openai");
console.log(chalk.blue('OpenAI Node.js SDK'));
console.log(chalk.blue(`NODE_ENV: ${process.env.NODE_ENV}`));
const configuration = new Configuration({
  apiKey: process.env.openaiKey,
});

async function main() {
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    model: process.env.openaiModel,
    prompt: "中国",
  });
  console.log(completion.data.choices[0].text);
}
main()