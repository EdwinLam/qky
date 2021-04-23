import Button from './button'
import ButtonGroup from './button/src/button-group'

const components = [
    Button,ButtonGroup
]
const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    })
}

export default {
    install
}
