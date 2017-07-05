
var client = new studio.api.Client(window.location.host);

var app = new Vue({
el: '#vueapp',
data: {
    applications: [],
    cpuload: 0,
    description: "",
    name: "",
    timeelapsed: 0,
    components: []
}
});



client.root().then(function (system) {
    system.forEachChild(function(cdpapp) {
        if (cdpapp.info().is_local) {
            cdpapp.subscribeToChildValues("CPULoad", function (value) {
                app.cpuload = value * 100;
            });
            cdpapp.subscribeToChildValues("Description", function (value) {
                app.description = value;
            });
            cdpapp.subscribeToChildValues("Name", function (value) {
                app.name = value;
            });
            cdpapp.subscribeToChildValues("ProcessTimer/TimeElapsed", function (value) {
                app.timeelapsed = value;
            });

            cdpapp.forEachChild(function (child) {
                if (child.info().node_type == studio.protocol.CDPNodeType.CDP_COMPONENT) {
                    var componentModel = {
                        name: child.name(),
                        description: "",
                        fs: 0,
                        priority: "",
                        state: "",
                        suspended: false,
                        timer: 0,
                        period: 0,
                        components: []
                    }
                    app.components.splice(-1, 0, componentModel)

                    child.subscribeToChildValues("Description", function (value) {
                        componentModel.description = value;
                    });
                    child.subscribeToChildValues("fs", function (value) {
                        componentModel.fs = value;
                    });
                    child.subscribeToChildValues("CurrentState", function (value) {
                        componentModel.state = value;
                    });
                    child.subscribeToChildValues("Priority", function (value) {
                        componentModel.priority = value;
                    });
                    child.subscribeToChildValues("Suspended", function (value) {
                        componentModel.suspended = value;
                    });
                    child.subscribeToChildValues("Process Timer", function (value) {
                        componentModel.timer = value;
                    });
                    child.subscribeToChildValues("Process Period", function (value) {
                        componentModel.period = value;
                    });
                }
            });
        }
    });
});
