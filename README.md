<h1 align="center">Activity Page</h1>

<div align="center">

[![MIT](https://img.shields.io/github/license/spider-nest/activity-page)](https://cdn.jsdelivr.net/gh/spider-nest/activity-page@main/LICENSE)
[![Release](https://img.shields.io/github/v/release/spider-nest/activity-page)](https://github.com/spider-nest/activity-page/releases/latest)

</div>

## Usage

1. Install dependencies

```bash
$ yarn
```

2. Create a page

```bash
$ yarn create:page pageA
```

3. Replace the `main.js` path in `index.html`

```html
<script type="module" src="/src/pages/pageA/main.js"></script>
```

## Structure

```
|-- public         # Static resources that do not need to be compiled
|-- scripts        # NodeJS script
|-- src                # Code files that need to be compiled
    |-- pages          # Multi-page
        |-- home           # Home page: /home/index.html
        |-- pageA          # Page A：/pageA/index.html
        |-- pageB          # Page B：/pageB/index.html
    |-- styles         # Global Style
    |-- ...
|-- template       # Page Template
|-- ...
```

## Other scripts

- Delete page: `yarn delete:page pageA`
- ...

## Tips

1. Don't delete `home` page

`home` page is the default page, multi-page link aggregation
