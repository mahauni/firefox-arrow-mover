browser.commands.onCommand.addListener(async (command) => {
  if (command !== "next-tab" && command !== "prev-tab") {
    return;
  }

  const tabs = await browser.tabs.query({ currentWindow: true });
  tabs.sort((a, b) => a.index - b.index);

  const currentIndex = tabs.findIndex((tab) => tab.active);
  const offset = command === "next-tab" ? 1 : -1;
  const target = tabs[(currentIndex + offset + tabs.length) % tabs.length];

  browser.tabs.update(target.id, { active: true });
});
