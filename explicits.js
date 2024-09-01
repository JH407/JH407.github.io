define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: true,
        declineText: isTouch ? 'Weiger' : 'Wil ik liever niet beantwoorden', 
        autoFocus:true, 
        progressBar:  'Pagina <%= pagesMeta.number %> van 13'
    });
	
    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Selecteer een antwoord of klik op \'Weiger\'' 
                : 'Selecteer een antwoord of klik op \'Wil ik liever niet beantwoorden\''
        },
        autoSubmit:'true',
        numericValues:'true',
        help: '<%= pagesMeta.number < 14 %>',
        helpText: 'Tip: Klik twee maal op uw keuze om snel te antwoorden.'
    });

	API.addQuestionsSet('singleChoice',{
		inherit: 'basicQ',
		type: 'selectOne', 
		
	});

    API.addQuestionsSet('basicSelect',{
        inherit :'basicQ',
        type: 'selectOne'
    });
	
	API.addQuestionsSet('basicText',{
        inherit :'basicQ',
        type: 'text'
    });
	
	API.addQuestionsSet('singleChoicedrop',{
		inherit: 'basicQ',
		autoSubmit:false,
		type: 'dropdown'
	});
	
    API.addQuestionsSet('basicDropdown',{
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });

	API.addQuestionsSet('multiChoice',{
		inherit: 'basicQ',
		type: 'selectMulti'
	});

	
    API.addQuestionsSet('therm',{
        inherit: 'basicSelect',
        answers: [
            {text:'4 - Zeer positief', value:4},
            {text:'3 - Positief', value:3},
            {text:'2 - Neutraal', value:2},
            {text:'1 - Negatief', value:1},
            {text:'0 - Zeer negatief', value:0}
        ]
    });

	
    /**
	*Specific questions
	*/	
    API.addQuestionsSet('attributes7',{
        inherit : 'basicSelect',
        name: 'attributes7',
        stem: 'Welk statement pas het beste bij u?',
        answers: [
            {text:'Ik heb een sterke voorkeur voor <%= global.cisgenderLabels %> boven <%= global.transgenderLabels %>.',value:7},
            {text:'Ik heb een matige voorkeur voor <%= global.cisgenderLabels %> boven <%= global.transgenderLabels %>.',value:6},
            {text:'Ik heb een lichte voorkeur voor <%= global.cisgenderLabels %> boven <%= global.transgenderLabels %>.',value:5},
            {text:'Ik heb tussen <%= global.cisgenderLabels %> en <%= global.transgenderLabels %> geen voorkeur.',value:4},
            {text:'Ik heb een lichte voorkeur voor <%= global.transgenderLabels %> boven <%= global.cisgenderLabels %>.',value:3},
            {text:'Ik heb een matige voorkeur voor <%= global.transgenderLabels %> boven <%= global.cisgenderLabels %>.',value:2},
            {text:'Ik heb een sterke voorkeur voor <%= global.transgenderLabels %> boven <%= global.cisgenderLabels %>.',value:1}
        ]
    });
	API.addQuestionsSet('birthMonth',{
		inherit: 'singleChoice',
		style:'multiButtons',
		name: 'birthmonth',
		stem: "In welke maand bent u geboren?",
		answers: [
			{text:'Januari',value:1},
			{text:'Februari',value:2},
			{text:'Maart',value:3},
			{text:'April',value:4},
			{text:'Mei',value:5},
			{text:'Juni',value:6},
			{text:'Juli',value:7},
			{text:'Augustus',value:8},
			{text:'September',value:9},
			{text:'Oktober',value:10},
			{text:'November',value:11},
			{text:'December',value:12}
		]
	});

    API.addQuestionsSet('age', {
        inherit : 'basicDropdown',
        name: 'age',
        stem: 'Wat is uw geboortejaar?',
	answers: [2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950,1949,1948,1947,1946,1945,1944,1943,1942,1941,1940,1939,1938,1937,1936,1935,1934,1933,1932,1931,1930,1929,1928,1927,1926,1925,1924,1923,1922,1921,1920]
    });

API.addQuestionsSet('raceombmulti',{
		inherit: 'multiChoice',
		name: 'raceombmulti',
        stem: "Please select the categories that comprise your race. (Click a category once to select it. Click it again to deselect. You may select as many categories as you wish. When you are finished, click Submit.)",
        answers: [
			{text:'American Indian/Alaska Native',value:1},
			{text:'East Asian',value:2},
			{text:'South Asian',value:3},
			{text:'Native Hawaiian or other Pacific Islander',value:4},
			{text:'Black or African American',value:5},
			{text:'White',value:6},
			{text:'Other or Unknown',value:7}
		]
	});
	var countriesArray = [
		{text:"U.S.A. ",value:1},
		{text:"Afghanistan",value:2},
		{text:"Albania",value:3},
		{text:"Algeria",value:4},
		{text:"American Samoa",value:5},
		{text:"Andorra",value:6},
		{text:"Angola",value:7},
		{text:"Anguilla",value:8},
		{text:"Antarctica",value:9},
		{text:"Antigua And Barbuda",value:10},
		{text:"Argentina",value:11},
		{text:"Armenia",value:12},
		{text:"Aruba",value:13},
		{text:"Australia",value:14},
		{text:"Austria",value:15},
		{text:"Azerbaijan",value:16},
		{text:"Bahamas, The",value:17},
		{text:"Bahrain",value:18},
		{text:"Bangladesh",value:19},
		{text:"Barbados",value:20},
		{text:"Belarus",value:21},
		{text:"Belgium",value:22},
		{text:"Belize",value:23},
		{text:"Benin",value:24},
		{text:"Bermuda",value:25},
		{text:"Bhutan",value:26},
		{text:"Bolivia",value:27},
		{text:"Bosnia and Herzegovina",value:28},
		{text:"Botswana",value:29},
		{text:"Bouvet Island",value:30},
		{text:"Brazil",value:31},
		{text:"British Indian Ocean Territory",value:32},
		{text:"Brunei",value:33},
		{text:"Bulgaria",value:34},
		{text:"Burkina Faso",value:35},
		{text:"Burundi",value:36},
		{text:"Cambodia",value:37},
		{text:"Cameroon",value:38},
		{text:"Canada",value:39},
		{text:"Cape Verde",value:40},
		{text:"Cayman Islands",value:41},
		{text:"Central African Republic",value:42},
		{text:"Chad",value:43},
		{text:"Chile",value:44},
		{text:"China",value:45},
		{text:"Christmas Island",value:46},
		{text:"Cocos (Keeling) Islands",value:47},
		{text:"Colombia",value:48},
		{text:"Comoros",value:49},
		{text:"Congo",value:50},
		{text:"Congo, Democractic Republic of the",value:51},
		{text:"Cook Islands",value:52},
		{text:"Costa Rica",value:53},
		{text:"Cote D'Ivoire (Ivory Coast)",value:54},
		{text:"Croatia (Hrvatska)",value:55},
		{text:"Cuba",value:56},
		{text:"Cyprus",value:57},
		{text:"Czech Republic",value:58},
		{text:"Denmark",value:59},
		{text:"Djibouti",value:60},
		{text:"Dominica",value:61},
		{text:"Dominican Republic",value:62},
		{text:"East Timor",value:63},
		{text:"Ecuador",value:64},
		{text:"Egypt",value:65},
		{text:"El Salvador",value:66},
		{text:"Equatorial Guinea",value:67},
		{text:"Eritrea",value:68},
		{text:"Estonia",value:69},
		{text:"Ethiopia",value:70},
		{text:"Falkland Islands (Islas Malvinas)",value:71},
		{text:"Faroe Islands",value:72},
		{text:"Fiji Islands",value:73},
		{text:"Finland",value:74},
		{text:"France",value:75},
		{text:"French Guiana",value:76},
		{text:"French Polynesia",value:77},
		{text:"French Southern Territories",value:78},
		{text:"Gabon",value:79},
		{text:"Gambia, The",value:80},
		{text:"Georgia",value:81},
		{text:"Germany",value:82},
		{text:"Ghana",value:83},
		{text:"Gibraltar",value:84},
		{text:"Greece",value:85},
		{text:"Greenland",value:86},
		{text:"Grenada",value:87},
		{text:"Guadeloupe",value:88},
		{text:"Guam",value:89},
		{text:"Guatemala",value:90},
		{text:"Guinea",value:91},
		{text:"Guinea-Bissau",value:92},
		{text:"Guyana",value:93},
		{text:"Haiti",value:94},
		{text:"Heard and McDonald Islands",value:95},
		{text:"Honduras ",value:96},
		{text:"Hong Kong S.A.R. ",value:97},
		{text:"Hungary ",value:98},
		{text:"Iceland ",value:99},
		{text:"India ",value:100},
		{text:"Indonesia ",value:101},
		{text:"Iran ",value:102},
		{text:"Iraq ",value:103},
		{text:"Ireland ",value:104},
		{text:"Israel ",value:105},
		{text:"Italy ",value:106},
		{text:"Jamaica ",value:107},
		{text:"Japan ",value:108},
		{text:"Jordan ",value:109},
		{text:"Kazakhstan ",value:110},
		{text:"Kenya ",value:111},
		{text:"Kiribati ",value:112},
		{text:"Korea ",value:113},
		{text:"Korea, North",value:114},
		{text:"Kuwait ",value:115},
		{text:"Kyrgyzstan ",value:116},
		{text:"Laos ",value:117},
		{text:"Latvia ",value:118},
		{text:"Lebanon ",value:119},
		{text:"Lesotho ",value:120},
		{text:"Liberia ",value:121},
		{text:"Libya ",value:122},
		{text:"Liechtenstein ",value:123},
		{text:"Lithuania ",value:124},
		{text:"Luxembourg ",value:125},
		{text:"Macau S.A.R. ",value:126},
		{text:"Macedonia, Former Yugoslav Republic of ",value:127},
		{text:"Madagascar ",value:128},
		{text:"Malawi ",value:129},
		{text:"Malaysia ",value:130},
		{text:"Maldives ",value:131},
		{text:"Mali ",value:132},
		{text:"Malta ",value:133},
		{text:"Marshall Islands ",value:134},
		{text:"Martinique ",value:135},
		{text:"Mauritania ",value:136},
		{text:"Mauritius ",value:137},
		{text:"Mayotte ",value:138},
		{text:"Mexico ",value:139},
		{text:"Micronesia ",value:140},
		{text:"Moldova ",value:141},
		{text:"Monaco ",value:142},
		{text:"Mongolia ",value:143},
		{text:"Montenegro",value:144},
		{text:"Montserrat ",value:145},
		{text:"Morocco ",value:146},
		{text:"Mozambique ",value:147},
		{text:"Myanmar ",value:148},
		{text:"Namibia ",value:149},
		{text:"Nauru ",value:150},
		{text:"Nepal ",value:151},
		{text:"Netherlands Antilles ",value:152},
		{text:"The Netherlands",value:153},
		{text:"New Caledonia ",value:154},
		{text:"New Zealand ",value:155},
		{text:"Nicaragua ",value:156},
		{text:"Niger ",value:157},
		{text:"Nigeria ",value:158},
		{text:"Niue ",value:159},
		{text:"Norfolk Island ",value:160},
		{text:"Northern Mariana Islands ",value:161},
		{text:"Norway ",value:162},
		{text:"Oman ",value:163},
		{text:"Pakistan ",value:164},
		{text:"Palau ",value:165},
		{text:"Palestine", value:240},
		{text:"Panama ",value:166},
		{text:"Papua new Guinea ",value:167},
		{text:"Paraguay ",value:168},
		{text:"Peru ",value:169},
		{text:"Philippines ",value:170},
		{text:"Pitcairn Island ",value:171},
		{text:"Poland ",value:172},
		{text:"Portugal ",value:173},
		{text:"Puerto Rico ",value:174},
		{text:"Qatar ",value:175},
		{text:"Reunion ",value:176},
		{text:"Romania ",value:177},
		{text:"Russia ",value:178},
		{text:"Rwanda ",value:179},
		{text:"Saint Helena ",value:180},
		{text:"Saint Kitts And Nevis ",value:181},
		{text:"Saint Lucia ",value:182},
		{text:"Saint Pierre and Miquelon ",value:183},
		{text:"Saint Vincent And The Grenadines ",value:184},
		{text:"Samoa ",value:185},
		{text:"San Marino ",value:186},
		{text:"Sao Tome and Principe ",value:187},
		{text:"Saudi Arabia ",value:188},
		{text:"Senegal ",value:189},
		{text:"Serbia",value:241},
		{text:"Seychelles ",value:190},
		{text:"Sierra Leone ",value:191},
		{text:"Singapore ",value:192},
		{text:"Slovakia ",value:193},
		{text:"Slovenia ",value:194},
		{text:"Solomon Islands ",value:195},
		{text:"Somalia ",value:196},
		{text:"South Africa ",value:197},
		{text:"South Georgia And The South Sandwich Islands ",value:198},
		{text:"South Sudan",value:199},
		{text:"Spain ",value:200},
		{text:"Sri Lanka ",value:201},
		{text:"Sudan ",value:202},
		{text:"Suriname ",value:203},
		{text:"Svalbard And Jan Mayen Islands ",value:204},
		{text:"Swaziland ",value:205},
		{text:"Sweden ",value:206},
		{text:"Switzerland ",value:207},
		{text:"Syria ",value:208},
		{text:"Taiwan ",value:209},
		{text:"Tajikistan ",value:210},
		{text:"Tanzania ",value:211},
		{text:"Thailand ",value:212},
		{text:"Togo ",value:213},
		{text:"Tokelau ",value:214},
		{text:"Tonga ",value:215},
		{text:"Trinidad And Tobago ",value:216},
		{text:"Tunisia ",value:217},
		{text:"Turkey ",value:218},
		{text:"Turkmenistan ",value:219},
		{text:"Turks And Caicos Islands ",value:220},
		{text:"Tuvalu ",value:221},
		{text:"Uganda ",value:222},
		{text:"Ukraine ",value:223},
		{text:"United Arab Emirates ",value:224},
		{text:"United Kingdom ",value:225},
		{text:"U.S.A. ",value:1},
		{text:"United States Minor Outlying Islands ",value:226},
		{text:"Uruguay ",value:227},
		{text:"Uzbekistan ",value:228},
		{text:"Vanuatu ",value:229},
		{text:"Vatican City State (Holy See) ",value:230},
		{text:"Venezuela ",value:231},
		{text:"Vietnam ",value:232},
		{text:"Virgin Islands (British) ",value:233},
		{text:"Virgin Islands (US) ",value:234},
		{text:"Wallis And Futuna Islands ",value:235},
		{text:"Yemen ",value:236},
		{text:"Zambia ",value:238},
		{text:"Zimbabwe", value:239}
	];
	API.addQuestionsSet('countrycit',{
		inherit: 'singleChoicedrop',
		name: 'countrycit002',
		stem: "What's your country/region of primary citizenship?",
		answers: countriesArray
	});

	API.addQuestionsSet('countryres',{
		inherit: 'singleChoicedrop',
		name: 'countryres002',
		stem: "What is your country/region of residence?",
		answers: countriesArray
	});

	
    API.addQuestionsSet('education',{
     	inherit : 'basicSelect',
      	name: 'educationlevel',
      	stem: 'Wat is uw huidige functie?',
      	answers: [
            {text:'Coassistent',value:4},
            {text:'ANIOS',value:3},
            {text:'AIOS',value:2},
            {text:'Specialist',value:1},
        ]
    });

	
    API.addQuestionsSet('patienten',{
     	inherit : 'basicSelect',
      	name: 'patienten',
      	stem: 'Heeft u ooit contact (gehad) met een patiënt die zich als transgender identificeren?',
      	answers: [
            {text:'Ja',value:2},
            {text:'Nee',value:1},
        ]
    });
	
	API.addQuestionsSet('familie',{
     	inherit : 'basicSelect',
      	name: 'familie',
      	stem: 'Heeft u iemand in uw familie die zich als transgender identificeert?',
      	answers: [
            {text:'Ja',value:2},
            {text:'Nee',value:1},
        ]
    });

	API.addQuestionsSet('vriend',{
     	inherit : 'basicSelect',
      	name: 'vriend',
      	stem: 'Heeft u iemand in uw vriendenkring die zich als transgender identificeert?',
      	answers: [
            {text:'Ja',value:2},
            {text:'Nee',value:1},
        ]
    });
	
	API.addQuestionsSet('genderidentity',{
     	   inherit : 'basicSelect',
      	  name: 'genderidentity',
	stem: 'Hoe zou u uw het best genderidentiteit omschrijven?',
	answers: [
            {text:'Transgender of gender diverse',value:4},
	    {text:'Man',value:3},
            {text:'Vrouw',value:2},
	    {text:'Geen van alle passen bij mij',value:1},
      	 ]
     });

	API.addQuestionsSet('lhbt',{
     	inherit : 'basicSelect',
      	name: 'lhbt',
      	stem: 'Maakt u deel uit van de LHBTQ+ gemeenschap?',
      	answers: [
            {text:'Ja',value:2},
            {text:'Nee',value:1},
        ]
    });
	API.addQuestionsSet('religieus',{
     	inherit : 'basicSelect',
      	name: 'religieus',
      	stem: 'Bent u religieus, en zo ja, welk geloof hangt u aan?',
      	answers: [
            {text:'Ik ben niet gelovig',value:8},
            {text:'Anders',value:7},
		{text:'Boeddhisme',value:6},
            {text:'Hindoeïsme',value:5},
		{text:'Jodendom',value:4},
            {text:'Islam',value:3},
		{text:'Protestantse kerk',value:2},
            {text:'Katholieke kerk',value:1},
        ]
    });
	API.addQuestionsSet('gelovig',{
     	inherit : 'basicSelect',
      	name: 'gelovig',
      	stem: 'Hoe gelovig zou u zichzelf omschrijven?',
      	answers: [
		{text:'Sterk gelovig',value:4},
            {text:'Redelijk gelovig',value:3},
		{text:'Een beetje gelovig',value:2},
            {text:'Helemaal niet gelovig',value:1},
        ]
    });
	API.addQuestionsSet('politiek',{
     	inherit : 'basicSelect',
      	name: 'politiek',
      	stem: 'Hoe zou u uw politieke overtuiging omschrijven?',
      	answers: [
            {text:'Zeer conservatief',value:7},
		{text:'Redelijk conservatief',value:6},
            {text:'Een beetje conservatief',value:5},
		{text:'Noch conservatief noch progressief',value:4},
            {text:'Een beetje progressief',value:3},
		{text:'Redelijk progressief',value:2},
            {text:'Sterk progressief',value:1},
        ]
    });
	
    API.addQuestionsSet('thermBlack',{
        inherit : 'therm',
        name: 'Tblack_0to10',
        stem: 'Wat is uw gevoel richting <b><%= global.transgenderLabels %></b>?'
    });

    API.addQuestionsSet('thermWhite',{
        inherit : 'therm',
        name: 'Twhite_0to10',
        stem: 'Wat is uw gevoel richting <b><%= global.cisgenderLabels %></b>?'
    });

    API.addSequence([
        	{
			inherit: 'basicPage',
			questions: [{inherit: 'birthMonth'}]
		},
	    {
                    inherit:'basicPage', 
                    questions: [{inherit:'age'}]
                },
	    {
			inherit: 'basicPage',
			questions: [{inherit: 'raceombmulti'}]
		},
	    {
			inherit: 'basicPage',
			questions: [{inherit: 'countrycit'}]
		},
		{
			inherit: 'basicPage',
			questions: [{inherit: 'countryres'}]
		},
		{
                    inherit:'basicPage', 
                    questions: [{inherit:'education'}]
                },
	  	{
                    inherit:'basicPage', 
                    questions: [{inherit:'religieus'}]
                },
	   	{
                    inherit:'basicPage', 
                    questions: [{inherit:'gelovig'}]
                },
	    	{
                    inherit:'basicPage', 
                    questions: [{inherit:'politiek'}]
                },
	    	{
                    inherit:'basicPage', 
                    questions: [{inherit:'genderidentity'}]
                },
	   	{
                    inherit:'basicPage', 
                    questions: [{inherit:'lhbt'}]
                },
		{
                    inherit:'basicPage', 
                    questions: [{inherit:'familie'}]
                },
		{
                    inherit:'basicPage', 
                    questions: [{inherit:'vriend'}]
                },
	    	{	
                    inherit:'basicPage', 
                    questions: [{inherit:'patienten'}]
                },
		{
			inherit:'basicPage', 
       			questions: {inherit:'thermBlack'}
		},
	    
        	{	   		
			inherit:'basicPage', 
                	questions: {inherit:'thermWhite'}							
      		},
      		{	
                    inherit:'basicPage', 
                    questions: {inherit:'attributes7'}
                }
    ]);

    return API.script;
});
