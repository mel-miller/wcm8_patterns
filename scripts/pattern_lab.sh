#!/bin/bash
# Install Pattern Lab

# Remove existing PL directory
rm -rf pattern-lab

# Install PL
composer create-project -n pattern-lab/edition-twig-standard pattern-lab

# aleksip/plugin-data-transform
# cd ./pattern-lab
# composer require 'aleksip/plugin-data-transform:^1.2.0'
# cd ..

# Delete the default source directory
rm -rf pattern-lab/source

# Symlink our components directory to the source location we just deleted
ln -s ../components pattern-lab/source
