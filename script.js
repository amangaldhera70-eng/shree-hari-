// ===================================
// NEELKANTH SALES
// SCRIPT.JS - J1
// ===================================

// Products List

const products = [

    // ===================
    // 500 ગ્રામ
    // ===================

    {category:"500 ગ્રામ",name:"સ્પે. સેવ",price:65},
    {category:"500 ગ્રામ",name:"ભાવનગરી ગાંઠિયા",price:65},
    {category:"500 ગ્રામ",name:"નાયલોન ગાંઠિયા",price:65},
    {category:"500 ગ્રામ",name:"મસાલા તીખા ગાંઠિયા",price:65},
    {category:"500 ગ્રામ",name:"સ્પે. ચવાણું",price:65},
    {category:"500 ગ્રામ",name:"ખટા મીઠા મિક્સ",price:65},
    {category:"500 ગ્રામ",name:"મસાલા ચણા દાળ",price:65},
    {category:"500 ગ્રામ",name:"મોળી ચણા દાળ",price:65},
    {category:"500 ગ્રામ",name:"મસાલા વટાણા",price:65},
    {category:"450 ગ્રામ",name:"ડાયમંડ ચવાણું",price:50},

    {category:"500 ગ્રામ",name:"રતલામી સેવ",price:70},
    {category:"500 ગ્રામ",name:"આલુ સેવ",price:70},
    {category:"500 ગ્રામ",name:"શીંગ ભજીયા",price:70},
    {category:"500 ગ્રામ",name:"તીખી ફરાળી ચેવડો",price:70},
    {category:"500 ગ્રામ",name:"સ્વીટ ફરાળી ચેવડો",price:70},

    // ===================
    // 400 ગ્રામ
    // ===================

    {category:"400 ગ્રામ",name:"દાબેલા ચણા",price:45},
    {category:"400 ગ્રામ",name:"સેવ મમરા ગાર્લિક",price:45},
    {category:"400 ગ્રામ",name:"સેવ મમરા મોળા",price:45},
    {category:"400 ગ્રામ",name:"શક્કરપારા",price:45},
    {category:"400 ગ્રામ",name:"ભાખરવડી",price:45},

    // ===================
    // 250 ગ્રામ
    // ===================

    {category:"250 ગ્રામ",name:"મિક્સ ચવાણું",price:35},
    {category:"250 ગ્રામ",name:"ખઠામીઠામિક્સ ચવાણું",price:35},
    {category:"250 ગ્રામ",name:"ભાવનગરી ગાંઠિયા",price:35},
    {category:"250 ગ્રામ",name:"નાયલોન ગાંઠિયા",price:35},
    {category:"250 ગ્રામ",name:"સ્પે. સેવ",price:35},
    {category:"250 ગ્રામ",name:"રતલામી સેવ",price:35},
    {category:"250 ગ્રામ",name:"મસાલા દાળ",price:35},
    {category:"250 ગ્રામ",name:"શીંગ ભજીયા",price:35},
    {category:"250 ગ્રામ",name:"તીખી ફરાળી ચેવડો",price:35},
    {category:"250 ગ્રામ",name:"સ્વીટ ફરાળી ચેવડો",price:35},
    {category:"250 ગ્રામ",name:"સોયા સ્ટિક",price:35},


];

// Table Reference

const table = document.getElementById("orderTable");

// Category Variable

let lastCategory = "";

// ===================================
// SCRIPT.JS - J2
// CREATE PRODUCT TABLE
// ===================================

products.forEach((item, index) => {

    // Category Heading
    if (lastCategory !== item.category) {

        table.innerHTML += `
        <tr class="category-row">
            <td colspan="4">${item.category}</td>
        </tr>
        `;

        lastCategory = item.category;
    }

    // Product Row
    table.innerHTML += `
    <tr class="product-row">

        <td class="item-name">
            ${item.name}
        </td>

        <td class="price">
            ₹${item.price}
        </td>

        <td class="qty-box">

            <button
                type="button"
                class="minus"
                onclick="changeQty(${index},-1)">
                −
            </button>

            <input
                type="number"
                id="qty${index}"
                class="qty"
                value="0"
                min="0"
                readonly>

            <button
                type="button"
                class="plus"
                onclick="changeQty(${index},1)">
                +
            </button>

        </td>

        <td id="total${index}" class="item-total">
            ₹0
        </td>

    </tr>
    `;

});

// Search Box

document
.getElementById("search")
.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    document.querySelectorAll(".product-row")
    .forEach(row => {

        row.style.display =
            row.innerText.toLowerCase().includes(value)
            ? ""
            : "none";

    });

});

// પ્રથમ વખત Total ગણો

calculate();

// ===================================
// SCRIPT.JS - J3
// TOTAL + QTY + CLEAR
// ===================================

// Grand Total

function calculate() {

    let grandTotal = 0;

    products.forEach((item, index) => {

        let qty = parseInt(document.getElementById("qty" + index).value) || 0;

        let total = qty * item.price;

        document.getElementById("total" + index).innerHTML = "₹" + total;

        grandTotal += total;

    });

    document.getElementById("grandTotal").innerHTML = grandTotal;

}

// + / -

function changeQty(index, value) {

    const qtyBox = document.getElementById("qty" + index);

    let qty = parseInt(qtyBox.value) || 0;

    qty += value;

    if (qty < 0) {

        qty = 0;

    }

    qtyBox.value = qty;

    calculate();

}

// Clear Order

function clearOrder() {

    if (!confirm("બધો ઓર્ડર ક્લિયર કરવો છે?")) {

        return;

    }

    products.forEach((item, index) => {

        document.getElementById("qty" + index).value = 0;

        document.getElementById("total" + index).innerHTML = "₹0";

    });

    calculate();

}

// Page Load

calculate();


// ===================================
// SCRIPT.JS - J4-1
// BILL PREVIEW
// ===================================

function previewBill() {

    let party = document.getElementById("party").value;
    let village = document.getElementById("village").value;
    let mobile = document.getElementById("mobile").value;
    let date = document.getElementById("date").value;

    let online = Number(document.getElementById("online").value) || 0;
    let cash = Number(document.getElementById("cash").value) || 0;

    let grandTotal = 0;

    let html = `

<div id="saveBill">

<h2 style="
text-align:center;
color:#d32f2f;
font-size:30px;
font-weight:bold;
margin-bottom:5px;
">

અમાન સેલ્સ એજન્સી

</h2>

<p style="
text-align:center;
font-size:16px;
margin-bottom:12px;
">

મો.9510233419

</p>

<hr style="margin-bottom:15px;">

<table style="
width:100%;
border:none;
margin-bottom:15px;
font-size:15px;
">

<tr>

<td><b>પાર્ટી :</b></td>

<td>${party}</td>

</tr>

<tr>

<td><b>ગામ :</b></td>

<td>${village}</td>

</tr>

<tr>

<td><b>મોબાઇલ :</b></td>

<td>${mobile}</td>

</tr>

<tr>

<td><b>તારીખ :</b></td>

<td>${date}</td>

</tr>

</table>

<table style="
width:100%;
border-collapse:collapse;
">

<tr>

<th>આઇટમ</th>

<th>ભાવ</th>

<th>Qty</th>

<th>કુલ</th>

</tr>

`;

    let currentCategory = "";

    products.forEach((item,index)=>{

        let qty =
        parseInt(document.getElementById("qty"+index).value) || 0;

        if(qty>0){

            if(currentCategory!==item.category){

                currentCategory=item.category;

                html += `

<tr>

<td colspan="4"
style="
background:#ffe082;
font-weight:bold;
color:#d32f2f;
padding:8px;
border:1px solid #ccc;
">

${currentCategory}

</td>

</tr>

`;

            }

            let total = qty * item.price;

            grandTotal += total;
            
            
                        html += `

            <tr>

                <td style="padding:8px;border:1px solid #ccc;">
                    ${item.name}
                </td>

                <td style="text-align:center;border:1px solid #ccc;">
                    ₹${item.price}
                </td>

                <td style="text-align:center;border:1px solid #ccc;">
                    ${qty}
                </td>

                <td style="text-align:right;padding-right:8px;border:1px solid #ccc;">
                    ₹${total}
                </td>

            </tr>

            `;

        }

    });

    let balance = grandTotal - online - cash;

    html += `

    </table>

    <br>

    <table style="
    width:100%;
    border-collapse:collapse;
    font-size:16px;
    ">

        <tr>

            <td><b>Grand Total</b></td>

            <td style="
            text-align:right;
            color:#d32f2f;
            font-weight:bold;
            ">
            ₹${grandTotal}
            </td>

        </tr>

        <tr>

            <td><b>Online Payment</b></td>

            <td style="text-align:right;">
            ₹${online}
            </td>

        </tr>

        <tr>

            <td><b>Cash Payment</b></td>

            <td style="text-align:right;">
            ₹${cash}
            </td>

        </tr>

        <tr>

            <td><b>Balance</b></td>

            <td style="
            text-align:right;
            color:red;
            font-weight:bold;
            ">
            ₹${balance}
            </td>

        </tr>

    </table>

    <hr style="margin:15px 0;">

    <h3 style="
    text-align:center;
    color:#28a745;
    font-size:22px;
    ">
    🙏 Thank You 🙏
    </h3>

    <div style="
    text-align:center;
    margin-top:15px;
    ">

        <img
        src="images/payment.png"
        style="
        width:180px;
        height:180px;
        object-fit:contain;
        ">

    </div>

    </div>

    `;

    document.getElementById("billPreview").innerHTML = html;

    document.getElementById("previewBox").style.display = "flex";

}

// Close Preview

function closeBill(){

    document.getElementById("previewBox").style.display = "none";

}
                   

  


      

       
            
            
             
           
       
      

    

        
         
           

    
     
  
  
    
    
    
    
    

// SCRIPT.JS - J5 (UPDATED)
// SAVE BILL IMAGE
// ===================================

// Submit Bill

function submitBill() {

    const bill = document.getElementById("saveBill");

    html2canvas(bill,{

        scale:3,

        backgroundColor:"#ffffff",

        useCORS:true

    }).then(function(canvas){

        const link=document.createElement("a");

        link.download="Order_Bill.png";

        link.href=canvas.toDataURL("image/png");

        link.click();

        closeBill();

    });

}

// ફોટો સેવ કરો

function saveImage(){

    previewBill();

    setTimeout(function(){

        const bill = document.getElementById("saveBill");

        html2canvas(bill,{
            scale:3,
            backgroundColor:"#ffffff",
            useCORS:true
        }).then(function(canvas){

            const link = document.createElement("a");

            link.download = "Order_Bill.png";

            link.href = canvas.toDataURL("image/png");

            link.click();

            closeBill();

        });

    },300);

}



// Preview બંધ

function closeBill(){

    document.getElementById("previewBox").style.display="none";

}

// ESC Key

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        closeBill();

    }

});

// Preview બહાર ક્લિક

window.addEventListener("click",function(e){

    let box=document.getElementById("previewBox");

    if(e.target===box){

        closeBill();

    }

});

// Start

calculate();
