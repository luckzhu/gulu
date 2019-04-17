const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })

    it('可以设置value',() => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                value: 'hi'
            }
        })
        vm.$mount()
        let inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.eq('hi')
        vm.$el.remove()
        vm.$destroy()
    })

    it('可以设置error',()=>{
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                error: '你写错了'
            }
        })
        vm.$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.eq('#icon-error')

        const errorMessage = vm.$el.querySelector('.errorMessage')
        expect(errorMessage.innerText).to.eq('你写错了')
        vm.$el.remove()
        vm.$destroy()
    })

})

describe('事件',()=>{
    it('支持input', function () {
        const Consturctor = Vue.extend(Input)
        let vm = new Consturctor({}).$mount()
        const callback = sinon.fake();
        vm.$on('input',callback)
        let event = new Event('input')
        Object.defineProperty(
            event, 'target', {
                value: {value: 'hi'}, enumerable: true
            }
        )
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')

    });
})