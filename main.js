Vue.component('my-card',{
	template:`<div><section class="card" v-for="img in imgs">
<img :src="img" alt="food" class="card__img">
<div class="card__heading">
<h2 class="card__heading">Lorem ipsum</h2>
<ul class="card__list">
	<li class="card__list-item">texttexttexttext</li>
	<li class="card__list-item">texttexttexttext</li>
	<li class="card__list-item">texttexttexttext</li>
</ul>
</div>
	</section></div>`,
	data: function () {
	    return {
	      imgs:['img/food1-sub.jpg','img/food2-sub.jpg','img/food3-sub.jpg','img/food4-sub.jpg']
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