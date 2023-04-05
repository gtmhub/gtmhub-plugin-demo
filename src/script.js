import { initialiseSdk } from "@gtmhub/sdk";

const sdk = initialiseSdk({ pluginId: "my-plugin-id" });

const btn = document.getElementById("btn");
const messageDiv = document.getElementById("msg");
btn.onclick = async () => {
  const currentItem = await sdk.getCurrentItem();

  sdk.createTask({ name: `update-goal-${currentItem.name}`, parentId: currentItem.id, status: "todo" }).then(() => {
    messageDiv.innerHTML = `Created task with name: update-goal-${currentItem.name}`;
    setTimeout(() => {
      messageDiv.innerHTML = ``;
    }, 2000)
  });
};
