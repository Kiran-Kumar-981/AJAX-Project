function displayProduct(){
    let xhr=new XMLHttpRequest();
    xhr.open('get', "https://fakestoreapi.com/products",true);
    xhr.onprogress=function(){
        console.log("lodig");
    }
    xhr.onload=function(){
        if(this.status==200){
            let tableData=document.getElementById('productData')
            let objectData=JSON.parse(this.responseText)
            let dataHtml=""
            for(let data of objectData ){
                dataHtml+=`<tr><td>${data.id}</td><td>${data.title}</td><td>${data.price}</td>
                <td><img src=${data.image} width="100px"></td></tr>`
            }
            tableData.innerHTML=dataHtml;
        }else{
            console.log("something went wrong")
        }
    }
    xhr.send()
}