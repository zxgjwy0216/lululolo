import chai from 'chai';
import spies from  'chai-spies';
chai.use(spies);
const expect = chai.expect;

// 单元测试
////////////////测试prop
//测试value
{
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
        propsData: {
            value:'123'
        }
    });
    vm.$mount();
    let inputElement = vm.$el.querySelector('input');
    expect(inputElement.value).to.eq('123');
    vm.$el.remove();
    vm.$destroy()
}
//测试disabled
{
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
        propsData: {
            disabled:true
        }
    });
    vm.$mount();
    let inputElement = vm.$el.querySelector('input');
    expect(inputElement.disabled).to.eq(true);
    vm.$el.remove();
    vm.$destroy()
}
//测试readonly
{
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
        propsData: {
            readonly:true
        }
    });
    vm.$mount();
    let inputElement = vm.$el.querySelector('input');
    expect(inputElement.readOnly).to.eq(true);
    vm.$el.remove();
    vm.$destroy()
}
//测试error的icon 跟 span
{
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
        propsData: {
            error:'你错了'
        }
    });
    vm.$mount();
    const useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#i-error');

    const errorMessage = vm.$el.querySelector('.message-error');
    expect(errorMessage.innerText).to.eq('你错了');
    vm.$el.remove();
    vm.$destroy()
}
///////////////////////////////////测试事件
{
    const Constructor = Vue.extend(Input);
    const vm = new Constructor({
    });
    vm.$mount();
    let spy = chai.spy(function(){});
    vm.$on('change',spy);
    let event = new Event('change');
    let inputElement = vm.$el.querySelector('input');
    inputElement.dispatchEvent(event);
    expect(spy).to.have.been.called.with(event);
}