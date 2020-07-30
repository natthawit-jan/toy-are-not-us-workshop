*** Settings ***
Library    SeleniumLibrary
Resource    keywords.robot
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







