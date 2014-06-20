# angular-alerts


An alerts service and directive for setting and displaying alert messages. The directive uses the Twitter Bootstrap Alert component.

# Installation
1. `bower install angular-alerts --save`
1. Inject `alerts` in to your app module `angular.module('app', ['alerts']);`.

# Usage

Create an `AlertsFactory` object to add and clear messages...

```
var alerts = new AlertsFactory();

// Add some messages
alerts.add('Success message', 'success');
alerts.add('Info message', 'info');
alerts.add('Warning message', 'warning');
alerts.add('Danger message', 'danger');

// Clear the alerts
alerts.clear();

// Add the object to the scope so it can be passed to the directive.
scope.alerts = alerts;


// Create another alerts object
scope.otherAlerts = new AlertsFactory();

scope.otherAlerts.add('Other alert', 'info');

```

Use the `alerts` directive to display the messages...

```
<div alerts="alerts"></div>
<div alerts="otherAlerts"></div>
```
