<?php

namespace Drupal\embark\Theme;

/**
 * @file
 * Contains \Drupal\embark\Theme.
 */

/**
 * The UtilityClasses service. Various theme related utility functions
 */
class UtilityClasses {

  /**
   * Creates valid CSS classes from theme settings.
   *
   * @return variables
   *
   */
  public static function makeClasses($theme_setting, &$variables) {
    if (theme_get_setting($theme_setting)  !== '') {
      $variables[$theme_setting] = preg_replace("/[^a-z0-9_\s-]/", "", strtolower(theme_get_setting($theme_setting)));
    }
    return $variables;
  }

  /**
   * Adds variable from the theme settings to the preprocess.
   *
   * @return variables
   *
   */
  public static function addSetting($theme_setting, &$variables) {
    if (theme_get_setting($theme_setting)  !== 0) {
      $variables[$theme_setting] = theme_get_setting($theme_setting);
    }
    return $variables;
  }

}
