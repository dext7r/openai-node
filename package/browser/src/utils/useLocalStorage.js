/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2022-12-06 18:21:22
 * @lastModified  2022-12-06 18:21:27
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2022-12-06 18:21:22
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2022-12-06 18:21:23
 * @FilePath: \openai-node\package\browser\src\utils\useLocalStorage.js
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
function parse(str) {
  let value
  try {
    value = JSON.parse(str)
  } catch {
    value = null
  }
  return value
}

function stringify(obj) {
  let value
  try {
    value = JSON.stringify(obj)
  } catch {
    value = null
  }
  return value
}

export default function useLocalStorage() {
  function setItem(key, value) {
    value = stringify(value)
    window.localStorage.setItem(key, value)
  }

  function getItem(key) {
    let value = window.localStorage.getItem(key)
    if (value) {
      value = parse(value)
    }
    return value
  }

  return {
    setItem,
    getItem
  }
}