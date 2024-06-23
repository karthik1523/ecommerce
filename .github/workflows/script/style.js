let fetchRes = fetch(
     
    "https://different-glasses-eel.cyclic.app/api/v1/productapi/getProductList");
// fetchRes is the promise to resolve
// it by using.then() method
fetchRes.then(res =>
    res.json()).then(d => {
        


    
      let vegetableList = d.data.filter((res) =>  res.category === 'Vegetables & Fruits'  && res.image_set.mobile_view !== '');
     
      let meatList = d.data.filter((res) =>  res.category === 'Meat & Sea Food'  && res.image_set.mobile_view !== '');
    
      let groceriesList = d.data.filter((res) =>  res.category === 'Grocery & Condiments'  && res.image_set.mobile_view !== '') ;
      let dairyList = d.data.filter((res) =>  res.category === 'Dairy & Beverages'  && res.image_set.mobile_view !== '');
      let packingList = d.data.filter((res) =>  res.category === 'Packagings'  && res.image_set.mobile_view !== '');
      let tablewareList = d.data.filter((res) =>  res.category === 'Tableware'  && res.image_set.mobile_view !== '');
      let frozenList = d.data.filter((res) =>  res.category === 'Frozen Ready to Cook'  && res.image_set.mobile_view !== '');
       let combineList =[]
       combineList.push(vegetableList,meatList,groceriesList,dairyList,packingList,tablewareList,frozenList)
      
    console.log(combineList,'combine')
        let fruits = "";
        
        let friuts1="";
        let meat1="";
        let meat2="";
        let groceries1="";
        let groceries2="";
        let dairy1 =''
        let dairy2 =''
        let packaging1 =''
        let packaging2 =''
        let tableware1=''
        let tableware2=''
        let frozen1='';
        let frozen2 =''
        let text='Organic';
        let meattext='Fresh'
        let groceriestext='Masala';
        let frozenttext='Frozen';
        let text2='Buy Now';
        let packingtext ='Pack';
        let tablewaretext ='Glass';
        let totalfruitscount =0;
        let meatcount=0;
        let frozencount=0;
        let groceriescount=0;
        let dairycount=0;
        let packagingcount=0;
        let tablecount = 0;

       
        combineList.forEach((res) =>{

            for (let i = 0; i < res.length/2; i++) {
            
           
                if(res[i].category === 'Vegetables & Fruits'  && res[i].image_set.mobile_view !== ''){
                    fruits +=  `<div class = 'image-container' >
                    <div>
                    <div class='content-image'><img  src = '${res[i].image_set.mobile_view} ' ></div>
                    <div class='ms-1' >
                    <div class='toolip-content'>${text}  </div>
                    <h3 class='inner-title mb-0'>   ${res[i].name}</h3>
                    <div class='inner-title-2'>  ${res[i].variant_name}</div>
                    <div class='text-center'>    <a href="https://buyer.supplybuy.in/#/sign-up"> <button  class=' button'>${text2} </button></a> </div>
    
                    </div>
                    
                     </div>
                     
                     </div>`
                     totalfruitscount +=1
                }
                
             if(res[i].category === 'Meat & Sea Food'  && res[i].image_set.web_view !== ''){
                meat1 +=  `<div class = 'image-container' >
                <div>
                <div class='content-image'><img  src = '${res[i].image_set.web_view} ' ></div>
                <div class='ms-1' >
                <div class='toolip-content' style="background-color:#FC6E6E ;">${meattext}  </div>
                <h3 class='inner-title mb-0'>  ${res[i].name}</h3>
                <div class='inner-title-2'>  ${res[i].variant_name}</div>
                <div class='text-center'>    <a href="https://buyer.supplybuy.in/#/sign-up"> <button  class=' button'>${text2} </button> </a> </div>
    
                </div>
                
                 </div>
                 
                 </div>`
                 meatcount += 1
    
             }
    
             if(res[i].category === 'Grocery & Condiments'  && res[i].image_set.web_view !== ''){
                groceries1 +=  `<div class = 'image-container' >
                <div>
                <div class='content-image'><img  src = '${res[i].image_set.web_view} ' ></div>
                <div class='ms-1' >
                <div class='toolip-content' style="background-color: #CB8B2E;">${groceriestext}  </div>
                <h3 class='inner-title mb-0'>   ${res[i].name}</h3>
                <div class='inner-title-2'>  ${res[i].variant_name}</div>
                <div class='text-center'>    <a href="https://buyer.supplybuy.in/#/sign-up"> <button  class=' button'>${text2} </button> </a> </div>
    
                </div>
                
                 </div>
                 
                 </div>`
    
                 groceriescount += 1
                
            }
    
            if(res[i].category === 'Dairy & Beverages'  && res[i].image_set.web_view !== ''){
                dairy1 +=  `<div class = 'image-container' >
                <div>
                <div class='content-image'><img  src = '${res[i].image_set.web_view} ' ></div>
                <div class='ms-1' >
                <div class='toolip-content' style="background-color: #4CC3EF;">${text}  </div>
                <h3 class='inner-title mb-0'>   ${res[i].name}</h3>
                <div class='inner-title-2'>  ${res[i].variant_name}</div>
                <div class='text-center'>    <a href="https://buyer.supplybuy.in/#/sign-up"> <button  class=' button'>${text2} </button> </a> </div>
    
                </div>
                
                 </div>
                 
                 </div>`
                 dairycount += 1
            }
    
            if(res[i].category === 'Packagings'  && res[i].image_set.web_view !== ''){
                packaging1 +=  `<div class = 'image-container' >
                <div>
                <div class='content-image'><img  src = '${res[i].image_set.web_view} ' ></div>
                <div class='ms-1' >
                <div class='toolip-content' style="background-color: #E3AB6E;">${packingtext}  </div>
                <h3 class='inner-title mb-0'>   ${res[i].name}</h3>
                <div class='inner-title-2'>  ${res[i].variant_name}</div>
                <div class='text-center'>    <a href="https://buyer.supplybuy.in/#/sign-up"> <button  class=' button'>${text2} </button> </a> </div>
    
                </div>
                
                 </div>
                 
                 </div>`
                 packagingcount +=1
            }
            if(res[i].category === 'Tableware'  && res[i].image_set.web_view !== ''){
                tableware1 +=  `<div class = 'image-container' >
                <div>
                <div class='content-image'><img  src = '${res[i].image_set.web_view} ' ></div>
                <div class='ms-1' >
                <div class='toolip-content' style="background-color: #C2BBFF;">${tablewaretext}  </div>
                <h3 class='inner-title mb-0'>   ${res[i].name}</h3>
                <div class='inner-title-2'>  ${res[i].variant_name}</div>
                <div class='text-center'>    <a href="https://buyer.supplybuy.in/#/sign-up"> <button  class=' button'>${text2} </button> </a> </div>
    
                </div>
                
                 </div>
                 
                 </div>`
                 tablecount += 1
            }
            if(res[i].category === 'Frozen Ready to Cook'  && res[i].image_set.web_view !== ''){
                frozen1 +=  `<div class = 'image-container' >
                <div>
                <div class='content-image'><img  src = '${res[i].image_set.web_view} ' ></div>
                <div class='ms-1' >
                <div class='toolip-content' style="background-color: #FF774D;">${frozenttext}  </div>
                <h3 class='inner-title mb-0'>   ${res[i].name}</h3>
                <div class='inner-title-2'>  ${res[i].variant_name}</div>
                <div class='text-center'>    <a href="https://buyer.supplybuy.in/#/sign-up"> <button  class=' button'>${text2} </button> </a> </div>
    
                </div>
                
                 </div>
                 
                 </div>`
                frozencount += 1
            }
                
              };
              for(let i = Math.trunc( res.length/2 ) ; i < res.length; i++){
            

                // console.log("category == > " ,d.data[i]);
                
                if(res[i].category === 'Vegetables & Fruits'  && res[i].image_set.mobile_view !== ''){
                    friuts1 += `<div class = 'image-container' >
                    <div>
                    <div class='content-image'><img  src = '${res[i].image_set.mobile_view} ' > </div>
                    <div class='ms-1' >
                    <div class='toolip-content'>${text}  </div>
                    <h3 class='inner-title mb-0'>   ${res[i].name}</h3>
                    <div class='inner-title-2'>  ${res[i].variant_name}</div>
                    <div class='text-center'>    <a href="https://buyer.supplybuy.in/#/sign-up"> <button  class=' button'>${text2} </button></a> </div>
    
                    </div>
                    
                     </div>
                     
                     </div>`
                     totalfruitscount +=1
                    
                }
    
                 if(res[i].category === 'Meat & Sea Food'  && res[i].image_set.web_view !== ''){
                    meat2 +=  `<div class = 'image-container' >
                    <div>
                    <div class='content-image'><img  src = '${res[i].image_set.web_view} ' ></div>
                    <div class='ms-1' >
                    <div class='toolip-content' style="background-color:#FC6E6E ;">${meattext}  </div>
                    <h3 class='inner-title mb-0'>   ${res[i].name}</h3>
                    <div class='inner-title-2'>  ${res[i].variant_name}</div>
                    <div class='text-center'>    <a href="https://buyer.supplybuy.in/#/sign-up"> <button  class=' button'>${text2} </button> </a> </div>
        
                    </div>
                    
                     </div>
                     
                     </div>`
    
                     meatcount +=1
        
                 }
    
                 if(res[i].category === 'Grocery & Condiments'  && res[i].image_set.web_view !== ''){
                    groceries2 +=  `<div class = 'image-container' >
                    <div>
                    <div class='content-image'><img  src = '${res[i].image_set.web_view} ' ></div>
                    <div class='ms-1' >
                    <div class='toolip-content' style="background-color: #CB8B2E;">${groceriestext}  </div>
                    <h3 class='inner-title mb-0'>   ${res[i].name}</h3>
                    <div class='inner-title-2'>  ${res[i].variant_name}</div>
                    <div class='text-center'>    <a href="https://buyer.supplybuy.in/#/sign-up"> <button  class=' button'>${text2} </button> </a> </div>
        
                    </div>
                    
                     </div>
                     
                     </div>`
                     groceriescount += 1
                }
    
                if(res[i].category === 'Dairy & Beverages'  && res[i].image_set.web_view !== ''){
                    dairy2 +=  `<div class = 'image-container' >
                    <div>
                    <div class='content-image'><img  src = '${res[i].image_set.web_view} ' ></div>
                    <div class='ms-1' >
                    <div class='toolip-content' style="background-color:#4CC3EF;">${text}  </div>
                    <h3 class='inner-title mb-0'>   ${res[i].name}</h3>
                    <div class='inner-title-2'>  ${res[i].variant_name}</div>
                    <div class='text-center'>    <a href="https://buyer.supplybuy.in/#/sign-up"> <button  class=' button'>${text2} </button> </a> </div>
        
                    </div>
                    
                     </div>
                     
                     </div>`
                     dairycount += 1
                    
                }
    
                if(res[i].category === 'Packagings'  && res[i].image_set.web_view !== ''){
                    packaging2 +=  `<div class = 'image-container' >
                    <div>
                    <div class='content-image'><img  src = '${res[i].image_set.web_view} ' ></div>
                    <div class='ms-1' >
                    <div class='toolip-content' style="background-color: #E3AB6E;">${packingtext}  </div>
                    <h3 class='inner-title mb-0'>   ${res[i].name}</h3>
                    <div class='inner-title-2'>  ${res[i].variant_name}</div>
                    <div class='text-center'>    <a href="https://buyer.supplybuy.in/#/sign-up"> <button  class=' button'>${text2} </button> </a> </div>
        
                    </div>
                    
                     </div>
                     
                     </div>`
                     packagingcount +=1
                    
                }
    
                if(res[i].category === 'Tableware'  && res[i].image_set.web_view !== ''){
                    tableware2 +=  `<div class = 'image-container' >
                    <div>
                    <div class='content-image'><img  src = '${res[i].image_set.web_view} ' ></div>
                    <div class='ms-1' >
                    <div class='toolip-content' style="background-color: #C2BBFF;">${tablewaretext}  </div>
                    <h3 class='inner-title mb-0'>   ${res[i].name}</h3>
                    <div class='inner-title-2'>  ${res[i].variant_name}</div>
                    <div class='text-center'>    <a href="https://buyer.supplybuy.in/#/sign-up"> <button  class=' button'>${text2} </button> </a> </div>
        
                    </div>
                    
                     </div>
                     
                     </div>`
                     tablecount += 1
                }
    
                if(res[i].category === 'Frozen Ready to Cook'  && res[i].image_set.web_view !== ''){
                    frozen2 +=  `<div class = 'image-container' >
                    <div>
                    <div class='content-image'><img  src = '${res[i].image_set.web_view} ' ></div>
                    <div class='ms-1' >
                    <div class='toolip-content' style="background-color: #FF774D;">${frozenttext}  </div>
                    <h3 class='inner-title mb-0'>   ${res[i].name}</h3>
                    <div class='inner-title-2'>  ${res[i].variant_name}</div>
                    <div class='text-center'>    <a href="https://buyer.supplybuy.in/#/sign-up"> <button  class=' button'>${text2} </button> </a> </div>
        
                    </div>
                    
                     </div>
                     
                     </div>`
                     frozencount += 1
                }
              };

        })

       
       
        

          
       document.getElementById("demo").innerHTML = fruits;
       document.getElementById("demo1").innerHTML = friuts1;
       document.getElementById('meat1').innerHTML= meat1;
       document.getElementById('meat2').innerHTML= meat2;
       document.getElementById('groceries1').innerHTML= groceries1;
       document.getElementById('groceries2').innerHTML= groceries2;
       document.getElementById('dairy1').innerHTML= dairy1;
       document.getElementById('dairy2').innerHTML= dairy2;
       document.getElementById('packaging1').innerHTML= packaging1;
       document.getElementById('packaging2').innerHTML= packaging2;
       document.getElementById('tableware1').innerHTML= tableware1;
       document.getElementById('tableware2').innerHTML= tableware2;
       document.getElementById('frozen1').innerHTML= frozen1;
       document.getElementById('frozen2').innerHTML= frozen2;

       document.getElementById('fruits-count').innerHTML = totalfruitscount
       document.getElementById('meat-count').innerHTML = meatcount
       document.getElementById('frozen-count').innerHTML = frozencount
       document.getElementById('groceries-count').innerHTML = groceriescount
       document.getElementById('dairy-count').innerHTML = dairycount
       document.getElementById('packing-count').innerHTML = packagingcount
       document.getElementById('table-count').innerHTML = tablecount



   

          

    });


  
//                   the Next Content

  
    let titles = [ `<img src="https://supplybuy.s3.ap-south-1.amazonaws.com/website/product-category-images/product-1-sec.png" class="invent-1" alt="">` ,     `<img src="https://supplybuy.s3.ap-south-1.amazonaws.com/website/product-category-images/product-2-sec.png" class="invent-1" alt="">`, `<img src="https://supplybuy.s3.ap-south-1.amazonaws.com/website/product-category-images/product-3-sec.png" class="invent-1" alt="">`];
    let currentIndex = 0;
    let aSpan = document.getElementById('imageChange');
    // let aspan2=document.getElementById('spanChange')
    aSpan.classList.add('changing')


    setInterval(() => {

        aSpan.innerHTML = titles[currentIndex];

        currentIndex++;


        if (currentIndex === 3)
            currentIndex = 0;

    }, 2000)



    function onSend(){
        const value = document.getElementById('procure-product-mail').value
        fetch(`https://mail.supplybuy.in/api/email/${value}`,{method: 'POST'}).then((response) => console.log(response) );
        document.getElementById('procure-product-mail').value = ''
       
    }