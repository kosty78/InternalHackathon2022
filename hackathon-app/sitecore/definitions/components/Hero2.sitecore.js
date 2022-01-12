// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Hero2 component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Hero2',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'title', type: CommonFieldTypes.SingleLineText },
      { name: 'price', type: CommonFieldTypes.SingleLineText },
      { name: 'buttontext', type: CommonFieldTypes.SingleLineText },
      { name: 'buttonurl', type: CommonFieldTypes.SingleLineText },
      { name: 'title2', type: CommonFieldTypes.SingleLineText },
      { name: 'price2', type: CommonFieldTypes.SingleLineText },
      { name: 'buttontext2', type: CommonFieldTypes.SingleLineText },
      { name: 'buttonurl2', type: CommonFieldTypes.SingleLineText },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
