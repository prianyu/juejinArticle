var vm = new Vue({
  el: '#main',
  data: {
    edit: false,
    phone: '',
    code: ''
  },
  methods: {
    toggle: function(value){
      this.edit = value;
      if(value){
        history.pushState({page: 'edit'},'');
      } else {
        history.back();
      }
    }
  },
  computed: {
    showPhone: function(){
      return (this.phone || '13688888888').replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3')
    }
  }
});
history.pushState({page:'ucenter'},'' )
window.addEventListener('popstate', function(e){
  if(history.state){
    vm.edit = history.state.page == 'edit';
  }
})

/*
//使用hashchange方案
var vm = new Vue({
  el: '#main',
  data: {
    edit: false,
    phone: '',
    code: ''
  },
  methods: {
    toggle: function(value){
      location.hash = value ? '#edit' : '';
    }
  },
  computed: {
    showPhone: function(){
      return (this.phone || '13688888888').replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3')
    }
  }
});
window.addEventListener('hashchange', function(e){
    vm.edit = location.hash == '#edit';
})
*/