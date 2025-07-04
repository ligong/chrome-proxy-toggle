# Chrome Proxy Toggle Extension

A simple and intuitive Chrome extension to quickly enable and disable an HTTP proxy with a single click.

## Features

*   **One-Click Toggle:** Easily switch your browser's HTTP proxy on or off by clicking the extension icon.
*   **Visual Feedback:** The extension icon changes color (orange for ON, black for OFF) to instantly show the proxy status.
*   **Configurable Proxy Settings:** Set your desired proxy host and port via a dedicated options page.

## Installation

To install this extension in Google Chrome:

1.  **Download/Clone:** Obtain the project files by downloading the ZIP or cloning this repository:
    ```bash
    git clone https://github.com/ligong/chrome-proxy-toggle.git
    ```

2.  **Open Chrome Extensions:** Open your Chrome browser and navigate to `chrome://extensions`.

3.  **Enable Developer Mode:** In the top-right corner, toggle on the **Developer mode** switch.

4.  **Load Unpacked:** Click the **Load unpacked** button that appears.

5.  **Select Project Folder:** In the file dialog, navigate to and select the root directory of this project (e.g., the `proxy-extension` folder you cloned/downloaded).

6.  **Extension Installed:** The extension should now appear in your list of installed extensions.

## Usage

### 1. Configure Proxy Settings

Before using the toggle, you need to set your proxy details:

1.  Right-click on the **Proxy Toggle** extension icon in your Chrome toolbar.
2.  Select **Options** from the context menu.
3.  In the opened tab, enter your **Proxy Host** (e.g., `127.0.0.1`) and **Proxy Port** (e.g., `8080`).
4.  Click the **Save** button.

### 2. Toggle Proxy On/Off

*   Simply click the **Proxy Toggle** extension icon in your Chrome toolbar.
*   The icon will change from **black** (OFF) to **orange** (ON) and vice-versa, indicating the current proxy status.

## Project Structure

```
proxy-extension/
├── manifest.json         # Extension manifest (permissions, background script, etc.)
├── background.js         # Service worker handling proxy logic and icon updates
├── options.html          # HTML for the proxy settings page
├── options.js            # JavaScript for saving proxy settings
└── icons/                # Directory for extension icons
    ├── icon-on-128.png   # Orange ladder icon (proxy ON)
    └── icon-off-128.png  # Black ladder icon (proxy OFF)
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or find issues, please open an issue or submit a pull request.

## License

This project is open-sourced under the MIT License. See the `LICENSE` file for more details.
