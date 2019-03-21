import chai from 'chai';
import spies from  'chai-spies';
chai.use(spies);
const expect = chai.expect;

// 单元测试

{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'set'
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-set');
    vm.$el.remove();
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'set',
            loading: true
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-loading');
    vm.$el.remove();
    vm.$destroy();
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'set'
        }
    })
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('1');
    vm.$el.remove();
    vm.$destroy()
}
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'set',
            iconPosition: 'right'
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('2');
    vm.$el.remove();
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'set',
        }
    });
    vm.$mount();
    let spy = chai.spy(function(){});

    vm.$on('click',spy);
    let button = vm.$el;
    button.click();
    expect(spy).to.have.been.called()