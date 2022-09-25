*** Settings ***
Library           SeleniumLibrary
Resource  resource.robot
Resource  wrapperTests.robot
Test Setup  Open Browser To Page
Test Teardown  Close Browser
*** Variables ***

*** Keywords ***

*** Test Cases ***
TESTS
    
