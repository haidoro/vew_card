Vue.component('my-card',{
	template:`<div><section class="card" v-for="item in items" >
<img :src="item.img" alt="food" class="card__img">
<div class="card__heading">
<h2 class="card__heading">{{item.heading}}</h2>
<ul class="card__list">
	<li class="card__list-item">{{item.description}}</li>
	<li class="card__list-item">カロリー:{{item.cal}}</li>
	<li class="card__list-item">価格:{{item.price}}</li>
</ul>
</div>
	</section></div>`,
	data: function () {
	    return {
	  	  items: [
		      { img:'img/food1-sub.jpg',
		      	heading:'Best Lunch',
		      	description:'とっておきのランチをご紹介します。',
		      	cal:'560kcal',
		      	price:'1200円'
		      	 },
		      { img:'img/food2-sub.jpg',
		      	heading:'Best Fruits',
		      	description:'とっておきのフルーツをご紹介します。',
		      	cal:'160kcal',
		      	price:'640円'
		      	 },
		      { img:'img/food3-sub.jpg',
		      	heading:'Best Pizza',
		      	description:'とっておきのピザをご紹介します。',
		      	cal:'760kcal',
		      	price:'1800円'
		      	 },
		      { img:'img/food4-sub.jpg',
		      	heading:'Best Dessert',
		      	description:'とっておきのデザートをご紹介します。',
		      	cal:'460kcal',
		      	price:'980円'
		      	 },
    		]
  		}

  	},
	computed:{
		
	},
	methods:{
		myCount:function(){
			return this.newVal++;

		}
	}
})

var app = new Vue({
	el:'#app',
	data:{
		name:''
	}
	

})