'use strict'

export var BUILTIN: string[] = [
	"Documentation", "Library", "Resouce", "sizzle=", "css=", "dom=", "return", "id=", "identifier=", "name=", "xpath=", "link=", "partial link=",
	"jquery=", "tag=", "default=", "text=", "timeout=", "message=", "loglevel=", "persist=", "hidden=", "True", "False", "Test Setup", "Test Teardown",
	"Call Method", "Catenate", "Comment", "Continue For Loop", "Continue For Loop If", "Convert To Binary", "Convert To Boolean", "Convert To Bytes",
	"Convert To Hex", "ELSE", "Convert To Integer", "Convert To Number", "Convert To Octal", "Convert To String", "Create Dictionary", "Create List",
	"Evaluate", "Exit For Loop", "Exit For Loop If", "Fail", "Fatal Error", "Get Count", "Get Length", "Get Library Instance", "Get Time",
	"Get Variable Value", "Get Variables", "Import Library", "Import Resource", "Import Variables", "Keyword Should Exist", "Length Should Be",
	"Log", "Log Many", "Log To Console", "Log Variables", "No Operation", "Pass Execution", "Pass Execution If", "Regexp Escape", "Reload Library",
	"Remove Tags", "Repeat Keyword", "Replace Variables", "Return From Keyword", "Return From Keyword If", "Run Keyword",
	"Run Keyword And Continue On Failure", "Run Keyword And Expect Error", "Run Keyword And Ignore Error", "Run Keyword And Return",
	"Run Keyword And Return If", "Run Keyword And Return Status", "Run Keyword If", "Run Keyword If All Critical Tests Passed",
	"Run Keyword If All Tests Passed", "Run Keyword If Any Critical Tests Failed", "Run Keyword If Any Tests Failed", "Run Keyword If Test Failed",
	"Run Keyword If Test Passed", "Run Keyword If Timeout Occurred", "Run Keyword Unless", "Run Keywords", "Set Global Variable",
	"Set Library Search Order", "Set Log Level", "Set Suite Documentation", "Set Suite Metadata", "Set Suite Variable", "Set Tags",
	"Set Test Documentation", "Set Test Message", "Set Test Variable", "Set Variable", "Set Variable If", "Should Be Empty", "Should Be Equal",
	"Should Be Equal As Integers", "Should Be Equal As Numbers", "Should Be Equal As Strings", "Should Be True", "Should Contain",
	"Should Contain Any", "Should Contain X Times", "Should End With", "Should Match", "Should Match Regexp", "Should Not Be Empty",
	"Should Not Be Equal", "Should Not Be Equal As Integers", "Should Not Be Equal As Numbers", "Should Not Be Equal As Strings",
	"Should Not Be True", "Should Not Contain", "Should Not Contain Any", "Should Not End With", "Should Not Match", "Should Not Match Regexp",
	"Should Not Start With", "Should Start With", "Sleep", "Variable Should Exist", "Variable Should Not Exist", "Wait Until Keyword Succeeds"
];

export var LIB =
	[
        	{
            		name: "RequestsLibrary",
            		key: [
                		"Create Digest Session", "Create Ntlm Session", "Create Session", "Delete", "Delete All Sessions", "Delete Request", "Get", 
                		"Get Request", "Head", "Head Request", "Options", "Options Request", "Patch", "Patch Request", "Post", "Post Request", "Put", 
                		"Put Request", "To Json" 
            		]
        	},
		{
			name: "FakerLibrary",
			key: [
				"Add Provider", "Address", "Am Pm", "Boolean", "Bothify", "Bs", "Building Number", "Catch Phrase", "Century", "Chrome", "City",
				"City Prefix", "City Suffix", "Color Name", "Company", "Company Email", "Company Suffix", "Country", "Country Code",
				"Credit Card Expire", "Credit Card Full", "Credit Card Number", "Credit Card Provider", "Credit Card Security Code", "Date",
				"Date Time", "Date Time Ad", "Date Time Between", "Date Time This Century", "Date Time This Decade", "Date Time This Month",
				"Date Time This Year", "Day Of Month", "Day Of Week", "Domain Name", "Domain Word", "Email", "Firefox", "First Name",
				"First Name Female", "First Name Male", "Format", "Free Email", "Free Email Domain", "Generator Format Token", "Geo Coordinate",
				"Get Formatter", "Get Providers", "Hex Color", "Init", "Internet Explorer", "Ipv 4", "Ipv 6", "Iso 8601", "Job", "Language Code",
				"Last Name", "Latitude", "Lexify", "Linux Platform Token", "Linux Processor", "Locale", "Longitude", "Mac Platform Token",
				"Mac Processor", "Md 5", "Mime Type", "Month", "Month Name", "Name", "Name Female", "Name Male", "Null Boolean", "Numerify",
				"Opera", "Paragraph", "Paragraphs", "Parse", "Password", "Phone Number", "Postcode", "Prefix", "Prefix Female", "Prefix Male",
				"Profile", "Provider", "Pybool", "Pydecimal", "Pydict", "Pyfloat", "Pyint", "Pyiterable", "Pylist", "Pyset", "Pystr", "Pystruct",
				"Pytuple", "Random Digit", "Random Digit Not Null", "Random Digit Not Null Or Empty", "Random Digit Or Empty", "Random Element",
				"Random Int", "Random Letter", "Random Number", "Randomize Nb Elements", "Rgb Color", "Rgb Color List", "Rgb Css Color", "Safari",
				"Safe Color Name", "Safe Email", "Safe Hex Color", "Secondary Address", "Seed", "Sentence", "Sentences", "Set Formatter", "Sha 1",
				"Sha 256", "Simple Profile", "Slug", "Ssn", "State", "State Abbr", "Street Address", "Street Name", "Street Suffix", "Suffix",
				"Suffix Female", "Suffix Male", "Text", "Time", "Timezone", "Tld", "Unix Time", "Uri", "Uri Extension", "Uri Page", "Uri Path",
				"Url", "User Agent", "User Name", "Windows Platform Token", "Word", "Words", "Year"
			]
		},
		{
			name: "AppiumLibrary",
			key: [
				"Background App", "Capture Page Screenshot", "Clear Text", "Click Button", "Click Element", "Close All Applications",
				"Close Application", "Element Name Should Be", "Element Should Be Disabled", "Element Should Be Enabled", "Get Contexts",
				"Get Current Context", "Get Network Connection Status", "Get Source", "Go Back", "Go To Url", "Hide Keyboard", "Input Password",
				"Input Text", "Input Value", "Lock", "Log Source", "Long Press", "Long Press Keycode", "Open Application",
				"Page Should Contain Element", "Page Should Contain Text", "Page Should Not Contain Element", "Page Should Not Contain Text",
				"Pinch", "Press Keycode", "Pull File", "Pull Folder", "Push File", "Register Keyword To Run On Failure", "Remove Application",
				"Reset Application", "Scroll", "Set Network Connection Status", "Shake", "Swipe", "Switch Application", "Switch To Context",
				"Tap", "Wait Until Page Contains", "Wait Until Page Contains Element", "Wait Until Page Does Not Contain",
				"Wait Until Page Does Not Contain Element", "Zoom"
			]
		},
		{
			name: "Process",
			key: [
				"Get Process Id", "Get Process Object", "Get Process Result", "Is Process Running", "Join Command Line", "Process Should Be Running",
				"Process Should Be Stopped", "Run Process", "Send Signal To Process", "Split Command Line", "Start Process", "Switch Process",
				"Terminate All Processes", "Terminate Process", "Wait For Process"
			]
		},
		{
			name: "DateTime",
			key: [
				"Add Time To Date", "Add Time To Time", "Convert Date", "Convert Time", "Get Current Date", "Subtract Date From Date",
				"Subtract Time From Date", "Subtract Time From Time"
			]
		},
		{
			name: "Dialogs",
			key: [
				"Execute Manual Step", "Get Selection From User", "Get Value From User", "Pause Execution"
			]
		},
		{
			name: "XvfbRobot",
			key: [
				"Start Virtual Display"
			]
		},
		{
			name: "ExtendedSelenium2Library",
			key: [
				"Add Cookie", "Add Location Strategy", "Alert Should Be Present", "Assign Id To Element", "Capture Page Screenshot",
				"Checkbox Should Be Selected", "Checkbox Should Not Be Selected", "Choose Cancel On Next Confirmation", "Choose File",
				"Choose Ok On Next Confirmation", "Clear Element Text", "Click Button", "Click Element", "Click Element At Coordinates",
				"Click Image", "Click Link", "Close All Browsers", "Close Browser", "Close Window", "Confirm Action", "Create Webdriver",
				"Current Frame Contains", "Current Frame Should Not Contain", "Delete All Cookies", "Delete Cookie", "Dismiss Alert",
				"Double Click Element", "Drag And Drop", "Drag And Drop By Offset", "Element Attribute Should Contain",
				"Element Attribute Should Not Contain", "Element Should Be Disabled", "Element Should Be Enabled", "Element Should Be Visible",
				"Element Should Contain", "Element Should Not Be Visible", "Element Should Not Contain", "Element Text Should Be",
				"Execute Async Javascript", "Execute Async Javascript With Replaced Variables", "Execute Javascript",
				"Execute Javascript With Replaced Variables", "Fast Wait Until Page Contains", "Focus", "Frame Should Contain", "Get Alert Message",
				"Get All Links", "Get Browser Logs", "Get Cookie Value", "Get Cookies", "Get Element Attribute", "Get Horizontal Position",
				"Get List Items", "Get Location", "Get Matching Xpath Count", "Get Screen Size", "Get Selected List Label",
				"Get Selected List Labels", "Get Selected List Value", "Get Selected List Values", "Get Selenium Implicit Wait",
				"Get Selenium Speed", "Get Selenium Timeout", "Get Source", "Get Table Cell", "Get Text", "Get Title", "Get Value",
				"Get Vertical Position", "Get Webelement", "Get Webelements", "Get Window Identifiers", "Get Window Names", "Get Window Position",
				"Get Window Size", "Get Window Titles", "Go Back", "Go To", "Input Password", "Input Text", "Input Text Into Prompt",
				"Is Element Visible", "List Selection Should Be", "List Should Have No Selections", "List Windows", "Location Should Be",
				"Location Should Contain", "Locator Should Match X Times", "Log Location", "Log Source", "Log Title", "Maximize Browser Window",
				"Mouse Down", "Mouse Down On Image", "Mouse Down On Link", "Mouse Out", "Mouse Over", "Mouse Up", "Open Browser", "Open Context Menu",
				"Page Should Contain", "Page Should Contain Button", "Page Should Contain Checkbox", "Page Should Contain Element",
				"Page Should Contain Image", "Page Should Contain Link", "Page Should Contain List", "Page Should Contain Radio Button",
				"Page Should Contain Textfield", "Page Should Not Contain", "Page Should Not Contain Button", "Page Should Not Contain Checkbox",
				"Page Should Not Contain Element", "Page Should Not Contain Image", "Page Should Not Contain Link", "Page Should Not Contain List",
				"Page Should Not Contain Radio Button", "Page Should Not Contain Textfield", "Press Key", "Radio Button Should Be Set To",
				"Radio Button Should Not Be Selected", "Register Keyword To Run On Failure", "Register Page Ready Keyword", "Reload Page",
				"Remove Location Strategy", "Remove Page Ready Keyword", "Scroll Element Into View", "Select All From List", "Select Checkbox",
				"Select Frame", "Select From List", "Select From List By Index", "Select From List By Label", "Select From List By Value",
				"Select Radio Button", "Select Window", "Set Browser Implicit Wait", "Set Screenshot Directory", "Set Selenium Implicit Wait",
				"Set Selenium Speed", "Set Selenium Timeout", "Set Window Position", "Set Window Size", "Simulate", "Submit Form", "Switch Browser",
				"Table Cell Should Contain", "Table Column Should Contain", "Table Footer Should Contain", "Table Header Should Contain",
				"Table Row Should Contain", "Table Should Contain", "Textarea Should Contain", "Textarea Value Should Be", "Textfield Should Contain",
				"Textfield Value Should Be", "Title Should Be", "Unselect Checkbox", "Unselect Frame", "Unselect From List",
				"Unselect From List By Index", "Unselect From List By Label", "Unselect From List By Value", "Wait For Async Condition",
				"Wait For Condition", "Wait For Condition With Replaced Variables", "Wait Until Angular Ready", "Wait Until Element Contains",
				"Wait Until Element Contains Attribute", "Wait Until Element Does Not Contain", "Wait Until Element Does Not Contain Attribute",
				"Wait Until Element Is Enabled", "Wait Until Element Is Not Visible", "Wait Until Element Is Visible",
				"Wait Until Location Contains", "Wait Until Location Does Not Contain", "Wait Until Page Contains",
				"Wait Until Page Contains Element", "Wait Until Page Does Not Contain", "Wait Until Page Does Not Contain Element",
				"Warn Any Javascript Errors", "Xpath Should Match X Times"
			]
		},
		{
			name: "Selenium2Library",
			key: [
				"Add Cookie", "Add Location Strategy", "Alert Should Be Present", "Assign Id To Element", "Capture Page Screenshot",
				"Checkbox Should Be Selected", "Checkbox Should Not Be Selected", "Choose Cancel On Next Confirmation", "Choose File",
				"Choose Ok On Next Confirmation", "Clear Element Text", "Click Button", "Click Element", "Click Element At Coordinates",
				"Click Image", "Click Link", "Close All Browsers", "Close Browser", "Close Window", "Confirm Action", "Create Webdriver",
				"Current Frame Contains", "Current Frame Should Not Contain", "Delete All Cookies", "Delete Cookie", "Dismiss Alert",
				"Double Click Element", "Drag And Drop", "Drag And Drop By Offset", "Element Should Be Disabled", "Element Should Be Enabled",
				"Element Should Be Visible", "Element Should Contain", "Element Should Not Be Visible", "Element Should Not Contain",
				"Element Text Should Be", "Execute Async Javascript", "Execute Javascript", "Focus", "Frame Should Contain", "Get Alert Message",
				"Get All Links", "Get Cookie Value", "Get Cookies", "Get Element Attribute", "Get Element Size", "Get Horizontal Position",
				"Get List Items", "Get Location", "Get Matching Xpath Count", "Get Selected List Label", "Get Selected List Labels",
				"Get Selected List Value", "Get Selected List Values", "Get Selenium Implicit Wait", "Get Selenium Speed", "Get Selenium Timeout",
				"Get Source", "Get Table Cell", "Get Text", "Get Title", "Get Value", "Get Vertical Position", "Get Webelement", "Get Webelements",
				"Get Window Identifiers", "Get Window Names", "Get Window Position", "Get Window Size", "Get Window Titles", "Go Back", "Go To",
				"Input Password", "Input Text", "Input Text Into Prompt", "List Selection Should Be", "List Should Have No Selections",
				"List Windows", "Location Should Be", "Location Should Contain", "Locator Should Match X Times", "Log Location", "Log Source",
				"Log Title", "Maximize Browser Window", "Mouse Down", "Mouse Down On Image", "Mouse Down On Link", "Mouse Out", "Mouse Over",
				"Mouse Up", "Open Browser", "Open Context Menu", "Page Should Contain", "Page Should Contain Button", "Page Should Contain Checkbox",
				"Page Should Contain Element", "Page Should Contain Image", "Page Should Contain Link", "Page Should Contain List",
				"Page Should Contain Radio Button", "Page Should Contain Textfield", "Page Should Not Contain", "Page Should Not Contain Button",
				"Page Should Not Contain Checkbox", "Page Should Not Contain Element", "Page Should Not Contain Image",
				"Page Should Not Contain Link", "Page Should Not Contain List", "Page Should Not Contain Radio Button",
				"Page Should Not Contain Textfield", "Press Key", "Radio Button Should Be Set To", "Radio Button Should Not Be Selected",
				"Register Keyword To Run On Failure", "Reload Page", "Remove Location Strategy", "Select All From List", "Select Checkbox",
				"Select Frame", "Select From List", "Select From List By Index", "Select From List By Label", "Select From List By Value",
				"Select Radio Button", "Select Window", "Set Browser Implicit Wait", "Set Screenshot Directory", "Set Selenium Implicit Wait",
				"Set Selenium Speed", "Set Selenium Timeout", "Set Window Position", "Set Window Size", "Simulate", "Submit Form", "Switch Browser",
				"Table Cell Should Contain", "Table Column Should Contain", "Table Footer Should Contain", "Table Header Should Contain",
				"Table Row Should Contain", "Table Should Contain", "Textarea Should Contain", "Textarea Value Should Be",
				"Textfield Should Contain", "Textfield Value Should Be", "Title Should Be", "Unselect Checkbox", "Unselect Frame",
				"Unselect From List", "Unselect From List By Index", "Unselect From List By Label", "Unselect From List By Value",
				"Wait For Condition", "Wait Until Element Contains", "Wait Until Element Does Not Contain", "Wait Until Element Is Enabled",
				"Wait Until Element Is Not Visible", "Wait Until Element Is Visible", "Wait Until Page Contains", "Wait Until Page Contains Element",
				"Wait Until Page Does Not Contain", "Wait Until Page Does Not Contain Element", "Xpath Should Match X Times"
			]
		},
		{
		    name: "SeleniumLibrary",
		    key: [
			"Add Cookie", "Add Location Strategy", "Alert Should Be Present", "Alert Should Not Be Present", "Assign Id To Element", 
			"Capture Page Screenshot", "Checkbox Should Be Selected", "Checkbox Should Not Be Selected", "Choose Cancel On Next Confirmation", "Choose File", 
			"Choose Ok On Next Confirmation", "Clear Element Text", "Click Button", "Click Element", "Click Element At Coordinates", 
			"Click Image", "Click Link", "Close All Browsers", "Close Browser", "Close Window", 
			"Confirm Action", "Create Webdriver", "Current Frame Contains", "Current Frame Should Contain", "Current Frame Should Not Contain", 
			"Delete All Cookies", "Delete Cookie", "Dismiss Alert", "Double Click Element", "Drag And Drop", 
			"Drag And Drop By Offset", "Element Should Be Disabled", "Element Should Be Enabled", "Element Should Be Focused", "Element Should Be Visible", 
			"Element Should Contain", "Element Should Not Be Visible", "Element Should Not Contain", "Element Text Should Be", "Execute Async Javascript", 
			"Execute Javascript", "Focus", "Frame Should Contain", "Get Alert Message", "Get All Links", "Get Cookie", "Get Cookie Value", "Get Cookies", 
			"Get Element Attribute", "Get Element Count", "Get Element Size", "Get Horizontal Position", "Get List Items", "Get Location", "Get Locations", 
			"Get Matching Xpath Count", "Get Selected List Label", "Get Selected List Labels", "Get Selected List Value", "Get Selected List Values", 
			"Get Selenium Implicit Wait", "Get Selenium Speed", "Get Selenium Timeout", "Get Source", "Get Table Cell", "Get Text", 
			"Get Title", "Get Value", "Get Vertical Position", "Get WebElement", "Get WebElements", "Get Window Handles", "Get Window Identifiers", 
			"Get Window Names", "Get Window Position", "Get Window Size", "Get Window Titles", "Go Back", "Go To", "Handle Alert", "Input Password", 
			"Input Text", "Input Text Into Alert", "Input Text Into Prompt", "List Selection Should Be", "List Should Have No Selections", 
			"List Windows", "Location Should Be", "Location Should Contain", "Locator Should Match X Times", "Log Location", "Log Source", 
			"Log Title", "Maximize Browser Window", "Mouse Down", "Mouse Down On Image", "Mouse Down On Link", "Mouse Out", "Mouse Over", 
			"Mouse Up", "Open Browser", "Open Context Menu", "Page Should Contain", "Page Should Contain Button", "Page Should Contain Checkbox", 
			"Page Should Contain Element", "Page Should Contain Image", "Page Should Contain Link", "Page Should Contain List", 
			"Page Should Contain Radio Button", "Page Should Contain Textfield", "Page Should Not Contain", "Page Should Not Contain Button", 
			"Page Should Not Contain Checkbox", "Page Should Not Contain Element", "Page Should Not Contain Image", "Page Should Not Contain Link", 
			"Page Should Not Contain List", "Page Should Not Contain Radio Button", "Page Should Not Contain Textfield","Press Key", 
			"Radio Button Should Be Set To", "Radio Button Should Not Be Selected", "Register Keyword To Run On Failure", "Reload Page", 
			"Remove Location Strategy", "Select All From List", "Select Checkbox", "Select Frame", "Select From List", "Select From List By Index", 
			"Select From List By Label", "Select From List By Value", "Select Radio Button", "Select Window", "Set Browser Implicit Wait", 
			"Set Focus To Element", "Set Screenshot Directory", "Set Selenium Implicit Wait", "Set Selenium Speed", "Set Selenium Timeout", 
			"Set Window Position", "Set Window Size", "Simulate", "Simulate Event", "Submit Form", "Switch Browser", "Table Cell Should Contain", 
			"Table Column Should Contain", "Table Footer Should Contain", "Table Header Should Contain", "Table Row Should Contain", 
			"Table Should Contain", "Textarea Should Contain", "Textarea Value Should Be", "Textfield Should Contain", "Textfield Value Should Be", 
			"Title Should Be", "Unselect All From List", "Unselect Checkbox", "Unselect Frame", "Unselect From List", "Unselect From List By Index", 
			"Unselect From List By Label", "Unselect From List By Value", "Wait For Condition", "Wait Until Element Contains", "Wait Until Element Does Not Contain", 
			"Wait Until Element Is Enabled", "Wait Until Element Is Not Visible", "Wait Until Element Is Visible", "Wait Until Page Contains", 
			"Wait Until Page Contains Element", "Wait Until Page Does Not Contain", "Wait Until Page Does Not Contain Element", "Xpath Should Match X Times"
		    ]
		},		
		{
			name: "Collections",
			key: [
				"Append To List", "Combine Lists", "Convert To Dictionary", "Convert To List", "Copy Dictionary", "Copy List", "Count Values In List",
				"Dictionaries Should Be Equal", "Dictionary Should Contain Item", "Dictionary Should Contain Key",
				"Dictionary Should Contain Sub Dictionary", "Dictionary Should Contain Value", "Dictionary Should Not Contain Key",
				"Dictionary Should Not Contain Value", "Get Dictionary Items", "Get Dictionary Keys", "Get Dictionary Values", "Get From Dictionary",
				"Get From List", "Get Index From List", "Get Match Count", "Get Matches", "Get Slice From List", "Insert Into List",
				"Keep In Dictionary", "List Should Contain Sub List", "List Should Contain Value", "List Should Not Contain Duplicates",
				"List Should Not Contain Value", "Lists Should Be Equal", "Log Dictionary", "Log List", "Pop From Dictionary", "Remove Duplicates",
				"Remove From Dictionary", "Remove From List", "Remove Values From List", "Reverse List", "Set List Value", "Set To Dictionary",
				"Should Contain Match", "Should Not Contain Match", "Sort List"
			]
		},
		{
			name: "String",
			key: [
				"Convert To Lowercase", "Convert To Uppercase", "Decode Bytes To String", "Encode String To Bytes", "Fetch From Left",
				"Fetch From Right", "Generate Random String", "Get Line", "Get Line Count", "Get Lines Containing String",
				"Get Lines Matching Pattern", "Get Lines Matching Regexp", "Get Regexp Matches", "Get Substring", "Remove String",
				"Remove String Using Regexp", "Replace String", "Replace String Using Regexp", "Should Be Byte String", "Should Be Lowercase",
				"Should Be String", "Should Be Titlecase", "Should Be Unicode String", "Should Be Uppercase", "Should Not Be String", "Split String",
				"Split String From Right", "Split String To Characters", "Split To Lines", "Strip String"
			]
		}
	]
