<template>
    <div v-if="arr.length">
        <div class="container">
            <div style="display: grid; grid-template-columns:repeat(4, 1fr)">
                <div class="card" v-for="item in arr" :key="item" style="width: 18rem;height:35rem; grid-column:span 1;">
                    <img :src="item.Image" class="card-img-top"  alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{item.brand}}</h5>
                        <p class="card-text">{{item.price}}</p>
                        <button class="btn btn-primary" v-on:click="showAlert">Add to Cart</button>
                      </div>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'Products'
}

// data(); {
//   return {
//     arr: [
//       {
//         brand:'Samsung', 
//         Image:'./assets/samsung.jpg',
//         price: 'R10000'
//       },
//       {
//         brand:'Apple', 
//         Image:'./assets/phonesss.jpg',
//         price: 'R10000'
//       },
//       {
//         brand:'LG', 
//         Image:'./assets/LG.jpg',
//         price: 'R10000'
//       },
//       {
//         brand:'Sony', 
//         Image:'./assets/sony.png',
//         price: 'R10000'
//       }
//     ]
//   }
// }
</script>
<style lang="">
    
</style>