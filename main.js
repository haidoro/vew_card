Vue.component('my-card',{
	template:`<div><section class="card" v-for="item in items" >
<img :src="item.img" alt="food" class="card__img">
<div class="card__heading">
<h2 class="card__heading">{{item.heading}}</h2>
<ul class="card__list">
	<li class="card__list-item">texttexttexttext</li>
	<li class="card__list-item">texttexttexttext</li>
	<li class="card__list-item">texttexttexttext</li>
</ul>
</div>
	</section></div>`,
	data: function () {
	    return {
	  	  items: [
		      { img:'img/food1-sub.jpg',heading:'Best Lunch' },
		      { img:'img/food2-sub.jpg',heading:'Best Fruits' },
		      { img:'img/food3-sub.jpg',heading:'Best Pizza' },
		      { img:'img/food4-sub.jpg',heading:'Best Dessert' },
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