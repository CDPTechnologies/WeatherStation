
Vue.component('app-card', {
  props: ['appname','description','timeelapsed','cpuload'],
  template: '\
   <div class="ui raised link blue card">\
     <div class="content">\
        <div class="header">{{appname}}</div>\
        <div class="meta">Running: {{ timeelapsed | time }}</div>\
        <div class="description">\
        <p>{{description}}</p>\
        </div>\
    </div>\
    <div class="extra content">\
        Controller load: {{ cpuload | precision }}%\
    </div>\
   </div>'
})
