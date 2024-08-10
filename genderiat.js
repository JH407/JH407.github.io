define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
        category1 : {
            name : global.transgenderLabels, //Will appear in the data.
            title : {
                media : {word : global.transgenderLabels}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'bm1_nc.jpg'},
                {image: 'bm2_nc.jpg'},
                {image: 'bm3_nc.jpg'},
                {image: 'bf1_nc.jpg'},
                {image: 'bf2_nc.jpg'},                 
                {image: 'bf3_nc.jpg'}     
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 : {
            name : global.cisgenderLabels, //Will appear in the data.
            title : {
                media : {word : global.cisgenderLabels}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'wm1_nc.jpg'},
                {image: 'wm2_nc.jpg'},
                {image: 'wm3_nc.jpg'},
                {image: 'wf1_nc.jpg'},
                {image: 'wf2_nc.jpg'},
                {image: 'wf3_nc.jpg'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        attribute1 : {
            name : 'Negatieve woorden',
            title : {
                media : {word : 'Negatieve woorden'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.negWords[0]},
                {word: global.negWords[1]},
                {word: global.negWords[2]},
                {word: global.negWords[3]},
                {word: global.negWords[4]},
                {word: global.negWords[5]},
                {word: global.negWords[6]},
                {word: global.negWords[7]}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Positieve woorden',
            title : {
                media : {word : 'Positieve woorden'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: global.posWords[0]},
                {word: global.posWords[1]},
                {word: global.posWords[2]},
                {word: global.posWords[3]},
                {word: global.posWords[4]},
                {word: global.posWords[5]},
                {word: global.posWords[6]},
                {word: global.posWords[7]}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch,
            
        remindErrorText : '<p align="center" style="font-size:1em; font-family:arial; color:#000000">' +
        'Als je een fout maakt verschijnt er een rode <font color="#ff0000"><b>X</b></font> op je scherm. ' +
        'Druk op de andere toets om verder te gaan.<p/>',

        remindErrorTextTouch : '<p align="center" style="font-size:1.4em; font-family:arial; color:#000000">' +
        'Als je een fout maakt verschijnt er een rode <font color="#ff0000"><b>X</b></font> op je scherm. ' +
        'Druk op de andere kant om verder te gaan.<p/>',

        leftKeyText : 'Druk op "E" voor', 
        rightKeyText : 'Druk op "I" voor', 

        orText : 'of',
        
        finalText : 'Druk op de spatiebalk om verder te gaan', 
        finalTouchText : 'Druk op het groene vlak om verder te gaan',

        instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Deel blockNum van de nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Leg uw linker vinger op de <b>E</b> toets voor de items die bij de categorie <font color="#0000ff">leftAttribute.</font> horen' +
				'<br/>Leg uw rechter vinger op de <b>I</b> toets voor de items die bij de categorie <font color="#0000ff">rightAttribute</font> horen.<br/><br/>' +
				'Als u een fout maakt verschijnt er een rode <font color="#ff0000"><b>X</b></font>.' +
				'Druk op de andere toets om verder te gaan.<br/>' +
				'<u>Ga zo snel als u kan</u> maar blijf ook accuraat.<br/><br/></p>'+
				'<p align="center">Druk op de <b>spatiebalk</b> zodra u klaar bent.</font></p></div>',

        instAttributePracticeTouch: [
            '<div>',
                '<p align="center">',
                    '<u>Deel blockNum van de nBlocks</u>',
                '</p>',
                '<p align="left" style="margin-left:5px">',
                    '<br/>',
                    'Plaats uw linker vinger boven het the <linker>left</b>groene vlak voor items die bij de categorie <font color="#0000ff">leftAttribute</font> horen.<br/>',
                    'Plaats uw rechter vinger boven het <b>rechter</b> groene vlak voor items die bij de categorie <font color="#0000ff">rightAttribute</font> horen.<br/>',
                    'Items komen een voor een voorbij<br/>',
                    '<br/>',
                    'Als u een fout maakt verschijnt er een rode <font color="#ff0000"><b>X</b></font>. Raak de andere kant aan. <u>Ga zo snel als u kan</u> maar blijf ook accuraat.',
                '</p>',
                '<p align="center">Druk op het <b>benedenstaande</b> groene vlak om te beginnen.</p>',
            '</div>'
        ].join('\n'),

        instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Deel blockNum van de nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Leg uw linker vinger op de <b>E</b> toets voor de items die bij de categorie <font color="#336600">leftCategory</font> horen. ' +
				'<br/>Leg uw rechter vinger op de <b>I</b> toets voor de items die bij de categorie <font color="#336600">rightCategory</font> horen.<br/>' +
				'Items komen een voor een voorbij.<br/><br/>' +
				'Als u een fout maakt verschijnt er een rode <font color="#ff0000"><b>X</b></font>. ' +
				'Klik op de andere toets om door te gaan.<br/>' +
				'<u>Ga zo snel als u kan</u> maar blijf ook accuraat.<br/><br/></p>'+
				'<p align="center">Druk op de <b>spatiebalk</b> wanneer u klaar bent om te beginnen.</font></p></div>',
			
        instCategoriesPracticeTouch: [
            '<div>',
                '<p align="center">',
                    '<u>Deel blockNum van de nBlocks</u>',
                '</p>',
                '<p align="left" style="margin-left:5px">',
                    '<br/>',
                    'Plaats uw linker vinger boven het <b>linker</b> groene vlak voor items die bij de categorie <font color="#336600">leftCategory</font> horen.<br/>',
                    'Plaats uw rechter vinger boven het <b>rechter</b> groene vlak voor items die bij de categorie <font color="#336600">rightCategory</font> horen.<br/>',
                    'Items komen een voor een voorbij<br/>',
                    '<br/>',
                    'Als u een fout maakt verschijnt er een rode <font color="#ff0000"><b>X</b></font>. Raak de andere kant aan. <u>Ga zo snel als u kan</u> maar blijf ook accuraat.',
                '</p>',
                '<p align="center">Druk op het <b>benedenstaande</b> groene vlak om te beginnen.</p>',
            '</div>'
        ].join('\n'),

        instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
            '<font color="#000000"><u>Deel blockNum van de nBlocks </u><br/><br/></p>' +
            '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
            'Gebruik de <b>E</b> toets voor <font color="#336600">leftCategory</font> en voor <font color="#0000ff">leftAttribute</font>.<br/>' +
            'Gebruik de <b>I</b> toets voor <font color="#336600">rightCategory</font> en voor <font color="#0000ff">rightAttribute</font>.<br/>' +
            'Elk item hoort maar bij een categorie.<br/><br/>' +
            'Als u een fout maakt verschijnt er een rode <font color="#ff0000"><b>X</b></font>. ' +
            'Klik op de andere toets om door te gaan.<br/>' + 
            '<u>Ga zo snel als u kan</u> maar blijf ook accuraat.<br/><br/></p>' +
            '<p align="center">Druk op de <b>spatiebalk</b> wanneer u klaar bent om te beginnen.</font></p></div>',
        instFirstCombinedTouch:[
            '<div>',
                '<p align="center">',
                    '<u>Deel blockNum van de nBlocks</u>',
                '</p>',
                '<br/>',
                '<br/>',
                '<p align="left" style="margin-left:5px">',
                    'Plaats uw linker vinger boven het <b>linker</b> groene vlak voor items die bij de categorie</font> items en voor <font color= horen"#0000ff">leftAttribute</font>.</br>',
                    'Plaats uw rechter vinger boven het <b>rechter</b> groene vlak voor items die bij de categorie</font> items en voor <font color= horen"#0000ff">rightAttribute</font>.</br>',
                        'Als u een fout maakt verschijnt er een rode <font color="#ff0000"><b>X</b></font>. Raak de andere kant aan. <u>Ga zo snel als u kan</u> maar blijf ook accuraat.</br>',
                    '</p>',
                    '<p align="center">Druk op het <b>benedenstaande</b> groene vlak om te beginnen.</p>',
            '</div>'
        ].join('\n'),

        instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
            '<font color="#000000"><u>Deel blockNum van de nBlocks </u><br/><br/></p>' +
            '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
            'Dit is hetzelfde als het vorige onderdeel.<br/>' +
            'Gebruik de <b>E</b> toets voor <font color="#336600">leftCategory</font> en voor <font color="#0000ff">leftAttribute</font>.<br/>' +
            'Gebruik de <b>I</b> toets voor <font color="#336600">rightCategory</font> en voor <font color="#0000ff">rightAttribute</font>.<br/>' +
            'Elk item hoort maar bij een categorie.<br/><br/>' +
            '<u>Ga zo snel als u kan</u> maar blijf ook accuraat.<br/><br/></p>' +
            '<p align="center">Druk op de <b>spatiebalk</b> wanneer u klaar bent om te beginnen.</font></p></div>',
        instSecondCombinedTouch:[
            '<div>',
                '<p align="center"><u>Deel blockNum van de nBlocks</u></p>',
                '<br/>',
                '<br/>',

                '<p align="left" style="margin-left:5px">',
                    'Plaats uw linker vinger boven het <b>linker</b> groene vlak voor items die bij de categorie</font> items en voor <font color= horen"#0000ff">leftAttribute</font>.<br/>',
                    'Plaats uw rechter vinger boven het <b>rechter</b> groene vlak voor items die bij de categorie</font> items en voor <font color= horen"#0000ff">rightAttribute</font>.<br/>',
                    '<br/>',
                    '<u>Ga zo snel als u kan</u> maar blijf ook accuraat.<br/>',
                '</p>',
                '<p align="center">Druk op het <b>benedenstaande</b> groene vlak om te beginnen.</p>',
            '</div>'
        ].join('\n'),

        instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
            '<font color="#000000"><u>Deel blockNum van de nBlocks </u><br/><br/></p>' +
            '<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
            '<b>Let op, de labels zijn van positie veranderd!</b><br/>' +
            'Gebruik uw linker vinger voor de <b>E</b> toets voor de categorie: <font color="#336600">leftCategory</font>.<br/>' +
            'Gebruik uw rechter vinger voor de <b>I</b> toets voor de categorie: <font color="#336600">rightCategory</font>.<br/><br/>' +
            '<u>Ga zo snel als u kan</u> maar blijf ook accuraat.<br/><br/></p>' +
            '<p align="center">Druk op de <b>spatiebalk</b> wanneer u klaar bent om te beginnen.</font></p></div>',
        instSwitchCategoriesTouch: [
            '<div>',
                '<p align="center">',
                    '<u>Deel blockNum van de nBlocks</u>',
                '</p>',
                '<p align="left" style="margin-left:5px">',
                    '<br/>',
                    'Let op, de labels zijn van positie veranderd!<br/>',
                        'Plaats uw linker vinger boven het <b>linker</b> groene vlak voor items die bij de categorie <font color="#336600">leftCategory</font> horen.<br/>',
                        'Plaats uw rechter vinger boven het <b>rechter</b> groene vlak voor items die bij de categorie <font color="#336600">rightCategory</font> horen.<br/>',
                        'Items komen een voor een voorbij',
                        '<br/>',
                        'Als u een fout maakt verschijnt er een rode <font color="#ff0000"><b>X</b></font>. Raak de andere kant aan. <u>Ga zo snel als u kan</u> maar blijf ook accuraat.<br/>',
                    '</p>',
                    '<p align="center">Druk op het <b>benedenstaande</b> groene vlak om te beginnen.</p>',
            '</div>'
        ].join('\n'),
    });
});

