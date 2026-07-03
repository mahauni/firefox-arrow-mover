# Arrow Mover

A tiny Firefox extension that switches between tabs with the arrow keys:

- **Ctrl+Alt+Right** — next tab
- **Ctrl+Alt+Left** — previous tab

Wraps around at the ends, so going right on the last tab jumps back to the first.
No permissions, no data collection, no UI — just the shortcuts.

> **Note for GNOME/KDE users:** `Ctrl+Alt+Left/Right` may be bound to workspace
> switching by your desktop. Free those keys in your system keyboard settings,
> or rebind the extension's shortcuts in `about:addons` → gear icon →
> "Manage Extension Shortcuts".

## Development

Load it temporarily via `about:debugging#/runtime/this-firefox` →
"Load Temporary Add-on…" → select `manifest.json`.

To package: `zip -r arrow-mover.xpi manifest.json background.js icons/icon-48.png icons/icon-96.png icons/icon-128.png`

## License

[MIT](LICENSE)
