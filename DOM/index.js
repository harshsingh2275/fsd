const root= document.getElementById('container');
const button= document.getElementById('btn');
const img=document.createElement("img");
console.log(root);
const h2= document.createElement('h2');
const div=document.createElement('div');
function showData(){
    try{
    h2.innerText= 'Welcome to DOM';
    h2.style.color='red';
    h2.style.backgroundColor='pink';
    root.appendChild(h2);
    img.src='https://cpcontents.adobe.com/fr/public/account/2135/thumbnails/courses/4058921/2025-10-22%2013:52:44.7707090780d629fa2-25b6-4be9-85b7-6123a3f98476_25720f499d8f46ba8e799aa3bfbe0a42.png';
    img.setAttribute('height', 200);
    img.setAttribute('width', 200);
    root.appendChild(img);
    root.appendChild(h2);
    }catch(e){
        console.log(e);
    }
    finally{}
}
button.addEventListener('click', showData);