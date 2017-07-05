
Vue.component('component-card', {
  props: ['name','description','state','priority','fs','suspended','timer','period'],
  template: '\
   <div class="ui raised link teal card">\
     <div class="content">\
        <div class="header">{{name}}</div>\
        <div class="meta">Frequency: {{ fs }}Hz</div>\
        <div class="meta">Priority: {{ priority }}</div>\
        <div class="meta">State: {{ state }}</div>\
        <div class="description">\
        <p>{{description}}</p>\
        </div>\
    </div>\
    <div class="extra content">\
        <span class="left floated load">\
            Component load: {{ (1/period)*timer*100 | precision }}%\
        </span>\
        <span class="right floated suspend" data-tooltip="Component is suspended">\
            <i v-show="suspended" class="red wait icon"></i>\
        </span>\
    </div>\
   </div>'
})
