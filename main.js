Vue.component('my-card',{
	template:`<section class="card">
<img :src="img" alt="food" class="card__img">
<div class="card__heading">
<h2 class="card__heading">Lorem ipsum</h2>
<ul class="card__list">
	<li class="card__list-item">texttexttexttext</li>
	<li class="card__list-item">texttexttexttext</li>
	<li class="card__list-item">texttexttexttext</li>
</ul>
</div>
</section>`,
	data: function () {
	    return {
	      img:'img/food1-sub.jpg'
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