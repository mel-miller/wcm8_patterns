# WCM8 Patterns: Pattern Lab + Drupal 8

Component-driven prototyping tool using [Pattern Lab v2](http://patternlab.io/) automated via Gulp/NPM. Derived from Four Kitchens [Emulsify theme](https://github.com/fourkitchens/emulsify) starter kit.

<br/>

## Overview
This theme is a combination of a atomic design based living style guide (Pattern Lab) and a Drupal 8 theme. The recommended workflow is to build and style everything as a Pattern Lab pattern and then wire the pattern to the corresponding Drupal template.

This method allows for rapid prototyping, non-developer contribution to theming, and allows the patterns to be platform agnostic.

<br/>

## Requirements

1.  [PHP 7.1](http://www.php.net/)
2.  [Node](https://nodejs.org/en/)
3.  [Gulp](http://gulpjs.com/)
4.  [Composer](https://getcomposer.org/)
5.  [Yarn](https://github.com/yarnpkg/yarn)

**NOTE:** [Component Libraries](https://www.drupal.org/project/components) and [Unified Twig Extensions](https://packagist.org/packages/drupal-pattern-lab/unified-twig-extensions) Drupal modules must both be enabled for this theme to work on a Drupal site.

<br/>

## Installation and Local Development Setup

### On a Composer-based Drupal 8 site

  1. Add Composer Installers to your site's Composer project if it isn't already required. `composer require composer/installers`
  2. Add this code to your site's composer.json repositories section:

    {
      "type": "vcs",
      "url": "git@code.osu.edu:ocio_odee_web/wcm8_patterns.git"
    }
  3. Run `composer require ocio_odee_web/wcm8_patterns dev-master`
  4. Enable WCM8 Emulsify `drush theme-enable wcm8_patterns`
  5. Enable its dependencies `drush en components unified_twig_ext -y`
  6. Navigate to the root of your theme
  7. Run `yarn install`

### On an existing WCM8 site with the theme already installed
1. Follow steps 6-7 above.

<br/>

## Local Development

### Starting Pattern Lab and watch task

The `yarn start` command spins up a local server and pattern lab site, compiles everything (runs all required gulp tasks), and watches for changes. You will be provided a url for your local instance of Pattern Lab.

<br/>

### Working with Pattern Lab
The patterns for this theme are organized into the default Pattern Lab categories (Atoms, Molecules, etc...) plus one additional category for Drupal-specific items.

<br/>

#### How to add a new pattern

1. Navigate to `wcm8_patterns/components/_patterns/[category]`
2. Create a directory with the name of your component (no spaces)
3. All code for a pattern should be stored within the pattern's directory. Use your folder name as the base file name like the examples below:
a. `pattern-name.twig`
b. `pattern-name.yml` (optional, but used for dummy content and setting variables for style guide)
c. `_pattern-name.scss` (optional, for component-specific styles)
d. `pattern-name.js` (optional, if component-specific js is needed)
e. `pattern-name.md` (optional, but helpful to display additional information for your component in the styleguide)

If you used component-specific js, it must be registered with `wcm8_patterns.libraries.yml` and then attached to the appropriate component twig file via `{{ attach_library('wcm8_patterns/[library_name]') }}`.

Each directory is ordered alphabetically. To re-order the patterns, just add numbers to the beginning. You may optionally organize patterns into subtypes with subdirectories.

**NOTE:** Adding a new folder may require you to restart your task runner.

<br/>

#### Nested Patterns
It is best practice to build up patterns from smaller patterns when appropriate. For example the "site-header" pattern is comprised of the "osu-navbar" and "masthead" patterns.

See: `03-organisms/site-header/site-header.twig` for usage example.

Also see Emulsify's documentation for more info:
[When to use include, extends, and embed](https://github.com/fourkitchens/emulsify/wiki/When-to-use-include,-extends,-and-embed)

<br/>

#### How to create sample content
It is important to create sample content for each pattern. The data should mimic the Drupal environment and anticipate various possible scenarios.

Sample content is generated via the patterns's .yml file. Any variables included in the corresponding .twig file can be defined in the .yml file.

Below is an example of `address-block.yml` contents.
This example contains an assortement of Drupal core, Site Information, and theme setting variables.

**NOTE:** Sample content does not nest along with the pattern's .twig file. For example, this content must also be included in the `site-footer.yml` file since "address-block" is nested within "site-footer".

````
footer_color:
  white
site_name:
  Name of Website
address_1:
  100 Mount Hall
address_2:
 1050 Carmack Road
city:
  Columbus
state:
  OH
zip:
  43210
phone:
  614-292-8860
fax:
  614-292-8860
contact_email:
  odee@osu.edu
````

In addition to component-specific data, some sample data has been created at the root-level of the styleguide in the `wcm8_patterns/components/_data/` directory. Component-level data will override data from this directory.

<br/>

#### How to create pseudo-patterns
Pseudo-patterns are used to create variants of existing patterns. This is useful for showing multiple color variations, content variants, alternate states, etc...

The tilde (`~`) is used to designate a pseudo-pattern. All pseudo-patterns should be stored within the original pattern's directory.

For example `masthead~white.yml` is a a pseudo-pattern of `masthead.yml` and they share all of the same resources within the `masthead` directory. The pseudo-pattern .yml file should only contain data that overrides the original patter. In this case only the `masthead_color` theme setting variable with a value of `white` should be included in `masthead~white.yml`.

In addition to being helpful for writing scss style variations, pseudo-patterns can also be helpful to test logic within twig templates.

<br/>


#### Image locations
TBD: Researching best practices

<br/>

#### BEM Methodology

- Let's try it.
- Here's the details: [Methodology / BEM](https://en.bem.info/methodology/)
- Here's a helpful function that is available in this theme: [bem-twig-extension](https://github.com/drupal-pattern-lab/bem-twig-extension)

<br/>

### Drupal theme specifics
While most of the work in this theme happens in Pattern Lab via the `components` directory, there are some important Drupal theme bits to point out.

<br/>

#### How does Drupal know what we did in Pattern Lab?
This happens primarily in two places.
1. `wcm8_patterns/components` – This is where the Drupal twig templates live.
2. `wcm8_patterns/dist` – This is where the complied css and js from Pattern Lab lives.

<br/>

#### How to wire Pattern Lab components to Drupal theme templates

It is important to keep all of the Drupal templates as sparse as possible as to not deviate from the work we have done in Pattern Lab. The goal here is to use twig include to import pattern lab twig files into the appropriate Drupal twig file.

<br/>

#### How to create additional theme settings
Follow existing organizational and naming conventions.
1. Form components and theme setting variables are added within `wcm8_patterns.theme`
2. Define default theme settings in `config/install/wcm8_patterns.settings.yml`

<br/>

## Deployment

Use Gitflow -- more info TBD

Drupal Theme -- Will eventually be deployed separately, more info TBD


## Theme Organization

### Drupal regions vs. Fixed regions
For this theme I am treating the header and footer as fixed regions that do not accept Drupal blocks. However, the header and footer are still customizable via theme settings and variables provided by the [Site Information Module](https://code.osu.edu/ocio_odee_web/wcm8_siteinfo).

**Fixed Regions**
- Site Header: Contains OSU Navbar and masthead
- Site Footer: Contains the address block, social media icons, and footer text.

**Drupal Regions**
- Primary Menu (should this be part of the header?)
- Hero
- Breadcrumbs (should this be fixed too?)
- Highlighted
- Help
- Content
- Sidebar
- Content After
- Pre-Footer

<br/>


## Original Emulsify Documentation
Documentation is currently provided in [the Wiki](https://github.com/fourkitchens/emulsify/wiki). Here are a few basic links:

#### General Orientation

See [Orientation](https://github.com/fourkitchens/emulsify/wiki/Orientation)

#### For Designers (Prototyping)

See [Designers](https://github.com/fourkitchens/emulsify/wiki/For-Designers)

#### For Drupal 8 Developers

See [Drupal Usage](https://github.com/fourkitchens/emulsify/wiki/Drupal-Usage)

#### Gulp Configuration

See [Gulp Config](https://github.com/fourkitchens/emulsify/wiki/Gulp-Config)
