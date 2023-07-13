import data from "../data/data.json"


 /* export const pedirProductos = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
  }
  */


export const pedirDatos = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout( ()=>{
            resolve(data);
        }, 500)
    })
}            

export const pedirItem = (id) => {
    return new Promise((res) => {
        const item = data.find(product => product.id === id);
        setTimeout(() => {
            res(item);
        }, 2000);
    });
  }


//export const pedirItem = (id) => {
//    return new Promise((resolve, reject) => {
//        const item = data.find((el) => el.id === id)
//        if (item) {
//            resolve(item)
//        }else{
//            reject({
//                error: "producto no encontrado"
//            })
//        }
//    })
//}

export const getProductsByCategory = (category) => {
    return new Promise((res) => {
        const productos = data.filter(product => product.categoria === category);
        setTimeout(() => {
            res(productos);
        }, 2000);
    });
  }