import { initialiseSdk } from "@gtmhub/sdk";

const sdk = initialiseSdk({ pluginId: "my-plugin-id" });

const btn = document.getElementById("btn");
btn.onclick = async () => {
  const currentItem = await sdk.getCurrentItem();

  sdk.createTask({ name: `update-goal-${currentItem.name}`, parentId: currentItem.id, status: "todo" });
};
