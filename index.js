/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2022-12-06 10:58:20
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2022-12-06 12:33:18
 * @FilePath: \openai-node\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */

require('dotenv').config();
const chalk = require('chalk');
const { Configuration, OpenAIApi } = require("openai");
const log = console.log
log(chalk.blue('OpenAI Node.js SDK'));
log(chalk.blue(`NODE_ENV: ${process.env.NODE_ENV}`));
const configuration = new Configuration({
  apiKey: process.env.openaiKey,
});

async function main() {
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    model: process.env.openaiModel,
    prompt: "twelvet微服务",
  });
  log(completion.data.choices[0].text);
  log(completion.data.choices);
}
main()