## Relevant code

##### Dev proxy / production endpoint
`multiple_entries_basic/urls.py`
```python
...
urlpatterns = [
    path('', TemplateView.as_view(template_name="index.html")),
    path('about/', TemplateView.as_view(template_name="about/index.html")),
...
```
`multiple_entries_basic/settings.py`
```python
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'build/static')]
```

`config/webpack.config.dev.js | config/webpack.config.prod.js`
```javascript
  ...
  entry: {
    index: [
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appIndexJs, // src/index.js
    ],
    about: [
      require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appSrc + '/about.js', // src/about.js
    ],
  },
  output: {
    path: paths.appBuild, // Mimic build folder in development
    ...
  }
  ...
  plugins: [
      new HtmlWebpackPlugin({
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
      template: paths.appHtml,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['about'],
      filename: 'about/index.html',
      template: paths.appHtml,
    }),
  ...
```
