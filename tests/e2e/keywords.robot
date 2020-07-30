*** Settings ***
Library    SeleniumLibrary


*** Variables ***
${URL}    http://localhost:4200


*** Keywords ***

เริ่มการค้นหาผ่านเว็บ toy-r-not-us
    [Arguments]    ${age}   ${gender}   ${carrier}   ${name}  ${address1}  ${address2}    ${city}    ${province}    ${postcode}    ${payment} 
    ค้นหาของเล่น ที่อายุ และเพศ    ${age}    ${gender}
    เพิ่มสินค้าเข้าไปในรถเข็น
    เลือก shipping คลิกไปที่หน้า checkout    ${carrier}
    กรอก shipping address และ คลิก Deliver to this address   ${name}           ${address1}    	      ${address2}    ${city}    ${province}    ${postcode} 
    เลือก payment method และ คลิก place order    ${payment}
    รอจนกระทั่งมีคำว่า Thank you และ เลข order



ค้นหาของเล่น ที่อายุ และเพศ
    [Arguments]    ${age}       ${gender}    
    คลิกเลือก dropdown อายุ      ${age}
    คลิกเลือก dropdown เพศ      ${age}
    คลิก ค้นหา
    รอจนกระทั่งมีผลลัพธ์ toys ขึ้นมา
    เลือก toy อันแรก

เพิ่มสินค้าเข้าไปในรถเข็น
    รอจนกระทั่งมีหน้าจอ Product Detail ขึ้นมา
    คลิก Add to cart

เลือก shipping คลิกไปที่หน้า checkout
    [Arguments]     ${carrier}
    รอจนขึ้นคำว่า Shopping cart
    เลือก shopping method    ${carrier}
    ตรวจสอบ ความถูกต้อง
    คลิก  Proceed to checkout

 กรอก shipping address และ คลิก Deliver to this address
    [Arguments]      ${name}           ${address1}    	      ${address2}    ${city}    ${province}    ${postcode} 
    รอจนกระทั่งเห็นคำว่า Shipping Address
    กรอกข้อมูลการจัดสั่ง  ${name}           ${address1}    	      ${address2}    ${city}    ${province}    ${postcode} 
    คลิก Deliver to this address

เลือก debit Kbank เป็น payment method และ คลิก place order
    รอจนกระทั่งมีคำว่า Payment methods
    เลือก debit Kbank เป็น payment method
    คลิก Place your order 


Go to Toy R not Us Website
    Open Browser    ${URL}    Chrome


คลิกเลือก dropdown อายุ
    [Arguments]    ${age}
    Select From List By Label    id:age    ${age}

คลิกเลือก dropdown เพศ
    [Arguments]    ${gender}
    Select From List By Label    id:gender    ${gender}

คลิก ค้นหา
    Click Element   id:btn_search

รอจนกระทั่งมีผลลัพธ์ toys ขึ้นมา
    Wait Until Page Contains     toys

เลือก toy อันแรก
    Click Element    id:15

รอจนกระทั่งมีหน้าจอ Product Detail ขึ้นมา
   Wait Until Page Contains    Product Detail

คลิก Add to cart
   Click Element    id:btn_add
    
รอจนขึ้นคำว่า Shopping cart
    Wait Until Page Contains    Shopping cart

 เลือก shopping method 
    [Arguments]    ${carrier}
    Select Radio Button     name:shipping_method    ${carrier}

ตรวจสอบ ความถูกต้อง
   Wait Until Page Contains    Sailboat
   Wait Until Page Contains    $24.95
   Wait Until Page Contains    CoolKidz

คลิก  Proceed to checkout
   Click Element    id:btn_proceed_checkout

รอจนกระทั่งเห็นคำว่า Shipping Address
    Wait Until Page Contains    Shipping Address

กรอกข้อมูลการจัดสั่ง
    [Arguments]         ${name}           ${address1}    	      ${address2}    ${city}    ${province}    ${postcode} 
    Input Text    id:full_name    ${name}
    Input Text    id:address_1    ${address1}
    Input Text    id:address_2    ${address2}

    Input Text    id:city    ${city}
    Input Text    id:province    ${province}
    Input Text    id:postcode    ${postcode}


คลิก Deliver to this address
   Click Element    id:btn_deliver 

รอจนกระทั่งมีคำว่า Payment methods
    Wait Until Page Contains    Payment methods



เลือก payment method และ คลิก place order
    [Arguments]    ${payment} 
    Select Radio Button    name:payment_method    ${payment} 
   
คลิก Place your order 
    Click Element      id:btn_place_order

รอจนกระทั่งมีคำว่า Thank you และ เลข order
    Wait Until Page Contains     Thank you
    
ปิด browser chrome
    Close Browser