// Setup
var notification = new Notif({
    topPos: 10,
    classNames: 'success danger',
    autoClose: true,
    autoCloseTimeout: 2000
  });
  
  
  
  function Notif(option){
    var el = this;
    
    el.self = $('.toast-message');
    el.close = this.self.find('.close');
    el.message = el.self.find('.message');
    el.top = option.topPos;
    el.classNames = option.classNames;
    el.autoClose = (typeof option.autoClose === "boolean")? option.autoClose: false;
    el.autoCloseTimeout = (option.autoClose && typeof option.autoCloseTimeout === "number")? option.autoCloseTimeout: 2000;
    
    
    // Methods
    el.reset = function(){
      el.message.empty();
      el.self.removeClass(el.classNames);
    }
    el.show = function(msg,type){
      el.reset();
      el.self.css('top', el.top);
      el.message.text(msg);
      el.self.addClass(type);
      
      if(el.autoClose){
        setTimeout(function(){
          el.hide();
        }, el.autoCloseTimeout);
      }
    }
    el.hide = function(){
      el.self.css('top','-100%');
      el.reset();
    };
    
    el.close.on('click', this.hide);
    
  }
  
  
  