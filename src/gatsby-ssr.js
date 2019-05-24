// eslint-disable-next-line no-unused-vars
import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  return setPostBodyComponents([
    <script
      key="gatsby-plugin-square-payment-form"
      src="https://js.squareup.com/v2/paymentform"
    />
  ]);
};
