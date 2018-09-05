[![Four Kitchens](https://img.shields.io/badge/4K-Four%20Kitchens-35AA4E.svg)](https://fourkitchens.com/)

# WCM8 Patterns: Pattern Lab + Drupal 8

Component-driven prototyping tool using [Pattern Lab v2](http://patternlab.io/) automated via Gulp/NPM. Also serves as _a starterkit_ Drupal 8 theme.

## Requirements

1.  [PHP 7.1](http://www.php.net/)
2.  [Node (we recommend NVM)](https://github.com/creationix/nvm)
3.  [Gulp](http://gulpjs.com/)
4.  [Composer](https://getcomposer.org/)
5.  Optional: [Yarn](https://github.com/yarnpkg/yarn)

## Prototyping (separate from Drupal, Wordpress, etc.)

WCM8 Patterns supports both NPM and YARN.

Install with NPM:
`composer create-project fourkitchens/wcm8_patterns:^2.0 --stability dev --no-interaction wcm8_patterns && cd wcm8_patterns && npm install`

Install with Yarn:
`composer create-project fourkitchens/wcm8_patterns:^2.0 --stability dev --no-interaction wcm8_patterns && cd wcm8_patterns && yarn install`

## Drupal installation

### In a Composer-based Drupal install (recommended)

1. Require wcm8_patterns in your project `composer require fourkitchens/wcm8_patterns`
2. Move into the original wcm8_patterns theme `cd web/themes/contrib/wcm8_patterns/`
3. Create your new theme by cloning wcm8_patterns `php wcm8_patterns.php "THEME NAME"` (Run `php wcm8_patterns.php -h` for other available options)
4. Move into your theme directory `cd web/themes/custom/THEME_NAME/`
5. Install the theme dependencies `npm install` or `yarn install`
6. Enable your theme and its dependencies `drush then THEME_NAME -y && drush en components unified_twig_ext -y`
7. Proceed to the "Starting Pattern Lab…" section below

If you're not using a Composer-based Drupal install (e.g. tarball download from drupal.org) installation [instructions can be found on the Wiki](https://github.com/fourkitchens/wcm8_patterns/wiki/Installation).

Troubleshooting Installation: See [Drupal Installation FAQ](https://github.com/fourkitchens/wcm8_patterns/wiki/Installation#drupal-installation-faq).

_Note: Once you've created your custom theme, you can remove WCM8 Patterns as a dependency of your project. If you'd like to get updates as we push them, solely for educational/best-practice information, feel free to leave it in and receive the updates. Updating WCM8 Patterns will not affect your custom theme in any way._

## Starting Pattern Lab and watch task

The `start` command spins up a local server, compiles everything (runs all required gulp tasks), and watches for changes.

1.  `npm start` or `yarn start`

---

## Highlighted Features

<table><tbody>
<tr><td>Lightweight</td><td>✔</td><td>WCM8 Patterns is focused on being as lightweight as possible.</td></tr>
<tr><td>SVG sprite support </td><td><strong>✔</strong></td><td>Automated support for creating SVG sprites mixins/classes.</td></tr>
<tr><td>Stock Drupal templates </td><td><strong>✔</strong></td><td>Templates from Stable theme - see /templates directory</td></tr>
<tr><td>Stock Components </td><td><strong>✔</strong></td><td>with Drupal support built-in (https://github.com/fourkitchens/wcm8_patterns#wcm8_patternss-built-in-components-with-drupal-support)</td></tr>
<tr><td>Performance Testing </td><td><strong>✔</strong></td><td>Support for testing via Google PageSpeed Insights and WebPageTest.org (https://github.com/fourkitchens/wcm8_patterns/wiki/Gulp-Config#performance-testing)</td></tr>
<tr><td>Automated Github Deployment </td><td><strong>✔</strong></td><td>Deploy your Pattern Lab instance as a Github page (https://github.com/fourkitchens/wcm8_patterns/wiki/Gulp-Config#deployment)</td></tr>
</tbody></table>

<h3 id="components">WCM8 Patterns's Built in Components with Drupal support</h3>
Forms, tables, video, accordion, cards, breadcrumbs, tabs, pager, status messages, grid

View a [demo of these default WCM8 Patterns components](https://fourkitchens.github.io/wcm8_patterns/pattern-lab/public/).

## Documentation

Documentation is currently provided in [the Wiki](https://github.com/fourkitchens/wcm8_patterns/wiki). Here are a few basic links:

#### General Orientation

See [Orientation](https://github.com/fourkitchens/wcm8_patterns/wiki/Orientation)

We have a [series of videos](https://www.youtube.com/playlist?list=PLO9S6JjNqWsGMQLDfE8Ekt0ryrGa3g4km) for you to learn more about WCM8 Patterns.

#### For Designers (Prototyping)

See [Designers](https://github.com/fourkitchens/wcm8_patterns/wiki/For-Designers)

#### For Drupal 8 Developers

See [Drupal Usage](https://github.com/fourkitchens/wcm8_patterns/wiki/Drupal-Usage)

#### Gulp Configuration

See [Gulp Config](https://github.com/fourkitchens/wcm8_patterns/wiki/Gulp-Config)
