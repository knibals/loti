/**
 * @file
 * Loti behaviors.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Behavior description.
   */
  Drupal.behaviors.fontload = {
    attach: function (context, settings) {
      WebFont.load({
        google: {
          families: ['Open Sans', 'Merriweather:700'],
          text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!'
        }
      });
    }
  };

} (jQuery, Drupal));
