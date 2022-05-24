$(document).ready(function(){

	var dataRecords = $('#recordListing').DataTable({
		stateSave: true,
		"scrollX": true,
		"lengthChange": false,
		"processing":true,
		"serverSide":true,
		'processing': true,
		'serverSide': true,
		"order":[],
		"ajax":{
			url:"ajax_action.php",
			type:"POST",
			data:{action:'listRecords'},
			dataType:"json"
		},
		"pageLength": 10
	});

});