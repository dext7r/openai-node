<template>
  <div style="width: 96vw; margin: 0 auto">
    <div style="height: 100vh; display: flex; flex-direction: column">
      <q-layout view="lHh Lpr lFf">
        <q-header elevated>
          <q-toolbar>
            <q-btn flat dense round icon="menu" aria-label="Menu" />

            <q-toolbar-title> openai-node browser </q-toolbar-title>

            <div>
              <q-btn
                to="https://github.com/dext7r/openai-node/tree/main/package/browser"
                label="Github"
                outline
                color="purple"
              />
            </div>
          </q-toolbar>
        </q-header>

        <q-page-container style="height: calc(100% - 100px); flex-shrink: 0">
          <q-chat-message
            name="me"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            :text="['hey, how are you?']"
            stamp="7 minutes ago"
            sent
            bg-color="amber-7"
          />
          <p>{{ message }}</p>
          <div
            class="q-pa-md row justify-center"
            v-for="message in filteredTodos"
            :key="message.stamp"
          >
            <q-chat-message
              v-if="message.name === 'h7ml'"
              :name="message.name"
              :text="message.text"
              sent
              :bg-color="message.bgColor"
            />
            <q-chat-message
              v-else
              :name="message.name"
              :text="message.text"
              stamp="4 minutes ago"
              text-color="white"
              :bg-color="message.bgColor"
            />
          </div>
        </q-page-container>
        <q-input
          style="flex-grow: 2; overflow-y: auto"
          outlined
          bottom-slots
          v-model="text"
          counter
          :dense="dense"
        >
          <template v-slot:before>
            <q-avatar>
              <img src="~assets/h7ml.png" />
            </q-avatar>
          </template>

          <template v-slot:append>
            <q-icon
              v-if="text !== ''"
              name="close"
              @click="text = ''"
              class="cursor-pointer"
            />
          </template>

          <template v-slot:hint
            >Free Research Preview: ChatGPT is optimized for dialogue. Our goal
            is to make AI systems more natural to interact with, and your
            feedback will help us improve our systems and make them safer.
          </template>

          <template v-slot:after>
            <q-btn
              :disabled="text.length == 0"
              round
              dense
              flat
              icon="send"
              @keyup.enter="handleClick(text)"
              @click="handleClick(text)"
            />
          </template>
        </q-input>
      </q-layout>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watchEffect } from "vue";
import { chat } from "../utils/openai.js";
import useLocalStorage from "../utils/useLocalStorage";

const storage = useLocalStorage();

const useStorage = () => {
  const KEY = "chatMessage";
  const chatMessage = ref(storage.getItem(KEY) || []);
  // 监视todos的变化
  watchEffect(() => {
    storage.setItem(KEY, chatMessage.value);
  });
  return chatMessage;
};
const useAdd = (chatMessage) => {
  let message = "";
  const handleClick = async (text) => {
    if (!text.length) return;
    const info = await chat(text);
    message = info;
  };
  const filteredTodos = chatMessage;
  console.log(message);
  return {
    handleClick,
    message,
    filteredTodos,
  };
};
export default defineComponent({
  name: "IndexPage",
  setup() {
    const text = ref("");
    const dense = ref(false);
    let chatMessage = useStorage();
    return {
      ...useAdd(chatMessage),
      text,
      dense,
      chatMessage,
    };
  },
});
</script>
