const path = require('path')

module.exports = {
  componentsRoot: 'src/components',
  components: '**/[A-Z]*.vue',
  outDir: 'src/stories',
  getDestFile: (file, config) => path.join(config.outDir, file).replace(/\.vue$/, '.story.md'),
  apiOptions: {
    addScriptHandlers: [
      function (documentation, componentDefinition, astPath) {
        const componentDoc = astPath.tokens
          .filter((token) => token.type === 'CommentBlock' && token.value.includes('@component'))
          .find(() => true)
        if (componentDoc) {
          const lines = componentDoc.value.split('\n')

          documentation.set(
            'description',
            lines
              .filter((line) => !line.includes('@component'))
              .map((line) => line.substring(componentDoc.loc.indent))
              .join('\n')
          )
        }
      }
    ]
  }
}
