*** Settings ***
Library    SeleniumLibrary
Resource 
Suite Setup   Go to Toy R not Us Website
Suite Teardown    ปิด browser chrome

*** Variables ***
${URL}    http://localhost:4200
${age}    9
${gender}    male
${carrier}    kerry
${name}    Veeraphat Amornsirikul
${address1}    73 Phet Kasem 32
${address2}    Phet Kasem rd.
${city}    Bangkok
${province}    Phasi Charoen
${postcode}    10160
${payment}    kbank_debit


*** Test cases ***

ค้นหาของเล่น ด้วยอายุ 9 ขวบ เพศชาย และเลือกผลลัพท์อันแรก
เพิ่มสินค้าเข้าไปในรถเข็น
เลือก shipping เป็น kerry และคลิกไปที่หน้า checkout
กรอก shipping address และ คลิก Deliver to this address
เลือก debit Kbank เป็น payment method และ คลิก place order
รอจนกระทั่งมีคำว่า Thank you และ เลข order


*** Keywords ***


ค้นหาของเล่น ด้วยอายุ 9 ขวบ เพศชาย และเลือกผลลัพท์อันแรก
    คลิกเลือก dropdown อายุ และ เลือกอายุ 9 ขวบ
    คลิกเลือก dropdown เพศ และ เลือกเพศชาย
    คลิก ค้นหา
    รอจนกระทั่งมีผลลัพธ์ toys ขึ้นมา
    เลือก toy อันแรก

เพิ่มสินค้าเข้าไปในรถเข็น
    รอจนกระทั่งมีหน้าจอ Product Detail ขึ้นมา
    คลิก Add to cart

เลือก shipping เป็น kerry และคลิกไปที่หน้า checkout
    รอจนขึ้นคำว่า Shopping cart
    shipping method เป็น kerry
    ตรวจสอบ ความถูกต้อง
    คลิก  Proceed to checkout

กรอก shipping address และ คลิก Deliver to this address
    รอจนกระทั่งเห็นคำว่า Shipping Address
    กรอกข้อมูลการจัดสั่ง
    คลิก Deliver to this address

เลือก debit Kbank เป็น payment method และ คลิก place order
    รอจนกระทั่งมีคำว่า Payment methods
    เลือก debit Kbank เป็น payment method
    คลิก Place your order 


Go to Toy R not Us Website
    Open Browser    ${URL}    Chrome


คลิกเลือก dropdown อายุ และ เลือกอายุ 9 ขวบ
    Select From List By Label    id:age    ${age}

คลิกเลือก dropdown เพศ และ เลือกเพศชาย
    Select From List By Label    id:gender    ${gender}

คลิก ค้นหา
Click Element 
    Click Button    id:btn_search

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

shipping method เป็น kerry 
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



เลือก debit Kbank เป็น payment method
    Select Radio Button    name:payment_method    ${payment} 

   
คลิก Place your order 
    Click Element      id:btn_place_order

รอจนกระทั่งมีคำว่า Thank you และ เลข order
    Wait Until Page Contains     Thank you
    
ปิด browser chrome
    Close Browser




