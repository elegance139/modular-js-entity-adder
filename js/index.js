$(function(){
	(function(){
		var PeopleAdder = {
			$input : null,
			$delete : null,
			$add : null,
			$display : null,
			$ul : null,
			people_count : 0,
			init : function(){
				this.cacheDom();
				this.bindEvent();
			},
			cacheDom : function(){
				this.$input = $('#people-name');
				this.$add = $('#add-people');
				this.$delete = $('#delete-people');
				this.$display = $('#display-people');
				this.$ul = $('#display-ul');
				this.$counter = $('#people-count');
			},
			bindEvent : function(){
				this.$add.on('click',this.addPeople.bind(this));
				this.$delete.on('click',this.removePeople.bind(this));
			},
			render : function(){
				if(this.$input.val() !== ""){
					if(this.people_count == 0){
						this.$ul.html('');
					}
					this.$ul.append("<li>" + this.$input.val() + "</li>");
					this.people_count++;
					this.displayCount();
					this.$input.val('');
				}
			},
			addPeople : function(e){
				this.render();
			},
			removePeople : function(e){
				if(this.people_count > 0){
					this.$ul.find('li:last').remove();
					this.people_count--;	
					if(this.people_count == 0){
						this.defaultDisplay();
					}
					this.displayCount();
				}
			},
			defaultDisplay : function(e){
				this.$ul.html('<li style="color:grey" id="default-prompt">People name appear here</li>');
			},
			displayCount : function(e){
				this.$counter.html(this.people_count);
			}
		}
		PeopleAdder.init();
	})();
});