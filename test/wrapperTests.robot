*** Settings ***
Library           SeleniumLibrary
Resource     variables.robot
Resource  resource.robot

*** Keywords ***
Quote Box Exists
    Page Should Contain Element      ${QBoxId} 

Quote Text Exists
    Page Should Contain Element 
    ...  //div/*[@id="${TextId}"]
Qoute Text Is Not Empty
    Element Text Should Not Be 
    ...   //div/*[@id="${TextId}"]   ${EMPTY}

Quote Author Exists
    Page Should Contain Element 
    ...  //div/*[@id="${AuthorId}"]

Quote Author's Name is Not Empty Exists
    Element Text Should Not Be 
    ...   //div/*[@id="${AuthorId}"]   ${EMPTY}

New Quote Button Exists Text
    Page Should Contain Element 
    ...  //div/*[@id="${AuthorId}"]
New Quote Button Click Changes The Quote Text
    ${OldQuote} =  Get Quote Text
    Click New Quote Button
    ${NewQuote} =  Get Quote Text
    Should Not Be Equal   ${NewQuote}  ${OldQuote}

Tweet Quotes Exists
    Click Element
    ...  //div/a[@id="${TweetQuoteId}"]

Tweet Quote Works
    Element Attribute Value Should Be
    ...  //div/a[@id="${TweetQuoteId}"]  href  ${TweeterLink}


    







