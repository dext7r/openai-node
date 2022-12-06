/**
import default from './../boot/axios';
 * @author        h7ml <h7ml@qq.com>
 * @date          2022-12-06 15:37:20
 * @lastModified  2022-12-06 15:38:02
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2022-12-06 15:37:20
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2022-12-06 17:36:55
 * @FilePath: \openai-node\package\browser\src\utils\openai.js
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

/**
 * @docs https://www.npmjs.com/package/openai
 * @param {*} prompt 
 * @returns 
 */
export async function chat(prompt, model = "text-davinci-002") {
  try {
    const completion = await openai.createCompletion({
      model,
      prompt,
    });
    return completion.data.choices[0].text
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      return error.response.data?.error
    } else {
      return error.message
    }
  }
}
