import  Vue from 'vue';
import  Button from './button';
import  Icon from './icon';
Vue.component('g-button',Button);
Vue.component('g-icon',Icon);
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false
    }
});

import chai from 'chai';
import spies from  'chai-spies';
chai.use(spies);

const expect = chai.expect;

{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData:{
            icon:'set',
        }
    });
    button.$mount('#test');
    let uesElement = button.$el.querySelector('use');
    let href = uesElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-set');
    button.$el.remove();
    button.$destroy();
}

{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData:{
            icon:'set',
            loading:true
        }
    });
    button.$mount();
    let uesElement = button.$el.querySelector('use');
    let href = uesElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-loading');
    button.$el.remove();
    button.$destroy();
}

{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData:{
            icon:'set',
        }
    });
    button.$mount(div);
    let svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq("1");
    button.$el.remove();
    button.$destroy();
}

{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData:{
            icon:'set',
            iconPosition:'right'
        }
    });
    button.$mount(div);
    let svg = button.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq("2");
    button.$el.remove();
    button.$destroy();
}

{
    //mock
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData:{
            icon:'set',
        }
    });
    vm.$mount();
    let spy = chai.spy(function () {});
    vm.$on('click',spy);
    //希望函数执行
    let button = vm.$el;
    button.click();
    expect(spy).to.have.been.called();
}