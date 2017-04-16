# robotf-extension README

This is visual studio extension for robot framework. this extension is still in its early stage but fully functioning

## Features

* Keyword Autocomplete
    * it scans all the included resources and search for its keywords
    * it will suggest common keywords from BuiltIn, Selenium2Library, ExtendedSelenium2Library, and more

![Keyword Autocomplete](smart-keyword-autocomplete.png)

* Resource Autocomplete
    * it scans all resources

![Resource Autocomplete](smart-resource-autocomplete.png)

* Variable Autocomplete
    * it scans all the included resources and search for its global variables
    * it scans all variables from local files

![Variable Autocomplete](smart-variable-autocomplete.png)

* Language Autocomplete

![Language Autocomplete](builtin-grammar-autocomplete.png)

* Keyword Definition
    * Show the original keyword location
    * ctrl + click to the keyword will bring you to the original keyword location

![Keyword Definition](keyword-definition.png)

* Keyword Rename
    * can rename keyword and all its refference

![Keyword Rename](keyword-rename.png)

## Requirements

You need to have robotframework language support for visual studio code

## Known Issues

Performance issues when handle more than 350++ files in workspace

## For Contributors

You can added new library with its keywords at src/commonKeywordDictionary.ts with format:
``` typescript
export var LIB =
	[
        //your new library is here
		{
			name: "libraryName", //name must be correct
			key: [ "keyword1", "keyword2" ]
        },
        ...
    ]
    
```

## Release Notes

Initial release

### 1.0.0
Initial release of robot framework extension

### 1.1.0
Added definition provider

### 1.2.0
Added rename provider