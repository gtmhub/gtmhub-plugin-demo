# Gtmhub plugins-sdk

This repository a sample code of minimum working repository for gtmhub-demo plugin.

## Build & run locally

Add the following to your `/etc/hosts` file to allow the Quantive Results webapp to load your UI app:

```
127.0.0.1 localplugins.com
````

To install the dependencies, you need to run the following command:

```bash
npm i
```

To start the local server, you need to run the following command:

```bash
npm start
```

## Access it in browser?

Open your favourite browser and visit https://localplugins.com:5000/hello-world

If you get a warning "Your connection is not private" you can ignore it and click "Proceed to localplugins.com (unsafe)". The reason here is that the temporary SSL certificate that we're creating is not trusted by the browser, but is needed to establish SSL connection when the plugin is embeded into our page.
