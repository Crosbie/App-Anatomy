var config = {
  tabData: {
    tab1: [
      'Eoin Crosbie',
      '09-01-90',
      'eoincrosbie@hotmail.com',
      '086 1515933',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat sem, tristique dignissim facilisis sit amet, congue ac sem. Ut nec consectetur neque. Ut sit amet dui leo. Aliquam elementum posuere tempus. Sed et mi elit, sed ultricies leo. Ut non nisi orci, sit amet sagittis justo. Mauris rutrum dignissim lacus, eu mollis sem facilisis in. Curabitur sit amet est ligula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris sit amet accumsan arcu."],
    tab2: [
      'Primary',
      'Secondary',
      'Third Level - WIT BSc Applied Computing' ],
    tab3: [
      'The extra packages contain an override prefs.js which positions the tabs at different areas on screen.',
      'The iOS and Android packages contain different UI themes - which consist of some different css and different images.',
      'Try adding each of these packages to the Studio Preview under the Configuration accordion item and see the differences after refreshing this preview.'
    ],
    tab4: [
      'The content for the tabs in this app are configured in /shared/config.js',
      'When the app starts up, the latest config is read from the server, and used.',
      'If the config can\'t be retrieved, a fallback of the last known configuration is used.',
      'If there was no last configuration, the app defaults to using the config bundled with the app.',
      'To demonstrate the usefulness of this pattern, the Reload button can be used to update the tab contents after the app has been deployed. From the Studio, edit the contents for any of the tab data in /shared/config.js (after deploying the app to a device) and press the Reload button.'
    ]
  }
};

exports.config = config;
