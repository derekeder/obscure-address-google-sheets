# Obscure Addresses in Google Sheets

Add this Script to your Google Sheet to get a menu item for obscuring addresses with street numbers to the nearest 100 block.

`1234 S State St, Chicago, IL` => `1200 S State St, Chicago, IL`

## Getting started

1. Go the Obscure Addresses - Starter Template, sign in to your account, and File > Make a Copy to your Google Drive: https://docs.google.com/spreadsheets/d/1WIM9Jere5fXm2uOmug4Dlyc3lNWYWBkBDCqKJTBlvWg/edit#gid=0
2. Select two columns for each address you want obscured: the source address and the empty column to put the result.
3. Google Sheets script will ask for permission to run the first time

## Adding this script to your own Google Sheet

1. In your Google Sheet, click on Tools => Script editor
2. Click Close on the pop-up tutorial window, and delete the starter text.
3. Copy the entire code in [obscure-address-google-sheets.gs](https://github.com/derekeder/obscure-address-google-sheets/blob/master/obscure_addresses_gsheets.gs) and paste it in.
4. Save it and give it a name like 'Obscure Address'
5. Reload your Google Sheet and you will see a menu item at the top called 'Obscure Address'
6. Follow the steps in **Getting Started** above!

## Authors

* Derek Eder @derekeder

## Errors / Bugs

If something is not behaving intuitively, it is a bug, and should be reported.
[Report it here](https://github.com/derekeder/obscure-address-google-sheets/issues)


## Note on Patches/Pull Requests
 
* Fork the project.
* Make your feature addition or bug fix.
* Send us a pull request. Bonus points for topic branches.

## Copyright

Copyright (c) 2020 Derek Eder. Released under the [MIT License](https://github.com/derekeder/obscure-address-google-sheets/blob/master/LICENSE).
