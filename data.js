module.exports= function(){
  return{
    products:[
          {id:1,name:"Iphone XS",price:10000,imageUrl:'iphone.png'
          ,description:'Outlet bir üründür, FaceID özelliği çalışmamaktadır. Kozmetik açısından birkaç kusuru mevcuttur.',
          category:"Phone"},
          {id:2,name:"Iphone 7",price:6000,imageUrl:'iphone.png',
          description:'Durumu iyi, bütün özellikleri çalışıyor fakat üründe kozmetik açısndan kusurlar bulunmaktadır.',
          category:"Phone"},
          {id:3,name:"Iphone 8",price:9000,imageUrl:'iphone.png',
          description:'Harika, kozmetik açısından harika. Çalışmayan bir özelliği yoktur.',
          category:"Phone"},
          {id:4,name:"Iphone 9",price:9500,imageUrl:'iphone.png',
          description:'Çok iyi, kozmetik açısından çok iyi. Çalışmayan bir özelliği yoktur.',
          category:"Phone"},
          {id:5,name:"Iphone 11",price:20000,imageUrl:'iphone11.png',
          description:'Kötü, FaceID özelliği ve kamerasında kusurlar mevcuttur. Kozmetik açısından iyi durumdadır.',
          category:"Phone"},
          {id:6,name:"Iphone 12",price:24000,imageUrl:'iphone11.png',
          description:'Mükemmel, kusursuz bir üründür.',
          category:"Phone"},
          {id:7,name:"macbook 13",price:35000,imageUrl:'macbook.png',
          description:'İyi, her açıdan iyi bir üründür.',
          category:'Computer'},
          {id:8,name:"macbook 14",price:39000,imageUrl:'macbook.png',
          description:'Çok iyi, yeni sayılabilecek düzeyde bir üründür.',
          category:'Computer'},

    ],
    categories:[
        {id:1, name:"Phone"},
        {id:2, name:"Computer"},
        {id:3, name:"Electronic"},
    ],
    orders:[

    ]
  }
}
