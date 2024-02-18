// browser events
// events , responds in events, data stored in event , stop an event , life cycle in event
// events are invisible we can see this event with monitor event() method 
// turn off - unmonitor event 
// event listner  
// here we use interface use as a blue print
// event target(top level entity) is interface implemented by object that can recive events and may have listener for thm
// add event listener , remove event listener , dispatch event
// node inherit all from the event target and element inherit from the node 
// event target , event type , event function
//<event-target>.addeventlistner(<event-to-listen-for>,<function to run when event happen>);
//  document . add event listener ('click', function(){console.log('i have clicked on the document)});
// remove event listener
// condition is 1) same target 2) same type 3) same function
// phases of an event 1)capturing phase 2)at target phase 3) bubbling phase 
// capturing phase ma gote ke element kya che , element e pochi jai toh e target phase hoi che , aane pachu jaai upar e bublingg phase
//by defulat event listener execute in bubbling phase
// the event object
// when an event occurs , add event listener function has an event object which have lot of information about event
// default action  