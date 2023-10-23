function req_gl_Request_Content_Send(serviceClass, serviceName){
    var svClass 	= App['const'].SV_CLASS;
    var svName		= App['const'].SV_NAME;
    var sessId		= App['const'].SESS_ID;
    var userId      = App['const'].USER_ID;

    var ref 		= {};
    ref[svClass] 	= serviceClass; 
    ref[svName]		= serviceName;
    ref[userId]		= App.data.user ? App.data.user.id : -1;
    ref[sessId]		= App.data.session_id;

    return ref;
}

export {
    req_gl_Request_Content_Send
}