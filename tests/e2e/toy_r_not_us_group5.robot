*** Settings ***
Library    SeleniumLibrary
Resource    keywords.robot
Suite Setup   Go to Toy R not Us Website
Test Template     เริ่มการค้นหาผ่านเว็บ toy-r-not-us   
Suite Teardown    ปิด browser chrome

*** Test cases ***      ${age}          ${gender}           ${carrier}         ${name}                   ${address1}    	   ${address2}           ${city}        ${province}           ${postcode}         ${payment} 


เริ่มการค้นหา veeraphat    9                male                kerry             Veeraphat Amornsirikul    40 Phet Kasem 42      Phet Kasem rd.         Bangkok       Pasi Charoen           10160                kbank_debit
