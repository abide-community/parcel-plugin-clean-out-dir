# `@abide-community/parcel-plugin-clean-out-dir`

> Cleans the [Parcel](https://github.com/parcel-bundler/parcel) output directory before building

## Usage

Install the plugin with your package manager of choice.

```sh
yarn add @abide-community/parcel-plugin-clean-out-dir --dev

# or

npm install --save-dev @abide-community/parcel-plugin-clean-out-dir
```

Per Parcel's [documentation](https://parceljs.org/plugins.html#using-plugins), the plugin will be registered with Parcel during initialization. Now, Parcel's [output directory](https://parceljs.org/cli.html#output-directory) will be cleaned before a build to ensure that previous build assets are not carried over between builds.
