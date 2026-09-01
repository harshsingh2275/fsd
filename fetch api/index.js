const btn=document.getElementById("btn");
const h2=document.querySelector("h2");
async function fetchData(){
    // alert("hii");
     
    try{
        const serverData= await fetch('https://fakestoreapi.com/products');
        console.log("serverData is",serverData);
        const data= await serverData.json();
       let table=`<table>
       ${
        data.map((item)=>{
            return `<tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.price}</td>
            <td><img src=${item.image} width="100px" height="100px"/></td>
            </tr>`
        }
    )
       }`;

       h2.innerHTML=table;
    }catch(error){
        console.log("error is",error);
    }finally{
        console.log("fetching data");
    }
    
}

btn.addEventListener("click",fetchData);