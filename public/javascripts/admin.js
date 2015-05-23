$(function (){
	btnListener();
	checkSelectBlogListener();
	checkSelectGroupClick();
});

function checkSelectLabelClick(){
	$('#label-list label').bind('click', function(){
	});
}

function checkSelectGroupClick(){
	$('#groupSelect li a').bind('click', function(){
		$('#group_title').text($(this).html());
		$('#group_id').val($(this).attr('id'));
	});
}

function getSelectedLabelId(){
	var labelIdList = '';
	$('#label-list label').each(function(){
		if($(this).hasClass('am-active')){
			var idstr = $(this).attr('id').substr(3);
			labelIdList += idstr + ' '; 
		}
	});
	return $.trim(labelIdList);
}

function checkSelectBlogListener(){
	$('#blog-list tr td .am-btn-toolbar').bind('click', function(){
		$('#operatedBlogId').val($(this).attr('id'));
	})
}

function btnListener(){

	$('#create-blog-btn').bind('click', function(){
		var blogLabelIdList = getSelectedLabelId();
		var editor = ace.edit("editor");
		$('#preview-content').val(editor.session.getValue());
		$.ajax({
			type: "post",
			url: "/admin/create",
			data: {
				title:$("#blog-title").val(),
				keywords:$('#blog-keywords').val(),
				content:$('#preview-content').val(),
				groupId:$('#group_id').val(),
				labelIdList:blogLabelIdList
			},
			dataType: "json",
			success: function(data){
				if(data.status == 'ok'){
					location.href = 'list';
				}
			}
		});
		$("#blog-title").val("");
		$("#blog-keywords").val("");
		$('#preview-content').val("");
	});

	$('#update-blog-btn').bind('click', function(){
		var blogLabelIdList = getSelectedLabelId();
		var editor = ace.edit("editor");
		$('#preview-content').val(editor.session.getValue());
		$.ajax({
			type: "post",
			url: "/admin/update",
			data: {
				id:$("#blog-id").val(),
				title:$("#blog-title").val(),
				keywords:$('#blog-keywords').val(),
				content:$('#preview-content').val(),
				groupId:$('#group_id').val(),
				labelIdList:blogLabelIdList
			},
			dataType: "json",
			success: function(data){
				if(data.status == 'ok'){
					location.href = 'list';
				}
			}
		});
		$("#blog-title").val("");
		$("#blog-keywords").val("");
		$("#preview_content").val("");
	});

	$('#preview-blog-btn').bind('click', function(){
		alert($("#editor").val());
	});

	$('#edit-blog-btn').bind('click', function(){
		location.href = "editBlog?id=" + $('#operatedBlogId').val();
	});

	$('#write-blog-btn').bind('click', function(){
		location.href = 'writeBlog';
	});
	
	$('#full-screen-btn').bind('click', function(){
		if($("#admin-left-sidebar").is(":visible")){
			$('#admin-left-sidebar').hide();
			$('#full-screen-btn').html("关闭全屏编辑");
		}else{
			$('#admin-left-sidebar').show();
			$('#full-screen-btn').html("开启全屏编辑");
		}
	});

	$('#submit-preview-btn').bind('click', function(){
		var editor = ace.edit("editor");
		$('#preview-content').val(editor.session.getValue());
	});

	$('#create-label-btn').bind('click', function(){
		$.ajax({
			type: "post",
			url:  "/admin/label/create",
			data:{
				content: $('#label-content').val()
			},
			dataType: "json",
			success: function(data){
				if(data.status == 'ok'){
					if(location.search != ''){
						location.href = location.pathname + location.search;
					}else
						location.href = location.pathname;
				}
			}
		});
		var $modal = $('#add-label-modal');
		$modal.modal('close');
		$('#label-content').val("");
	});

	$('#del-blog-btn').bind('click', function(){
		$.ajax({
			type:	"post",
			url:	"/admin/remove",
			data: {
				id:$("#operatedBlogId").val()
			},
			dataType: "json",
			success: function(data){
				if(data.status == 'ok'){
					location.href = '/admin/list';
				}else
					alert("删除失败！");
			}
		});
		var $modal = $('#del-alert');
		$modal.modal('close');
	});

	$('#cancel-createblog-btn').bind('click', function(){
		alert("click cancel blog button");
	});

}


//init blog list.
function initBlogList(){
	$.ajax({
		type:	"get",
		url:	"/admin/listByJson",
		data: 	{},
		dataType:	"json",
		success:	function(data){
			$('#blog-list').empty();
			var html = '';
			$.each(data.blogs, function(index, blog){
				html += '<tr id=\"' + blog._id + '\" >';
				html += '<td><input type="checkbox" /></td>';
				html += '<td>' + (index+1) + '</td>';
				html += '<td><a href=\"/admin/get?id=' + blog._id + '\" >' + blog.title + '</a></td>';
				html += '<td>default</td>';
				html += '<td><div class="am-btn-toolbar"><div class="am-btn-group am-btn-group-xs">';
				html += '<button class="am-btn am-btn-default am-btn-xs am-text-secondary" data-am-modal="{target: \'#doc-modal-1\', closeViaDimmer: 0, width: 900, height: 600}">';
				html += '<span class="am-icon-pencil-square-o"></span> 编辑</button>';
				html += '<button class="am-btn am-btn-default am-btn-xs am-hide-sm-only"><span class="am-icon-copy"></span> 预览 </button>';
				html += '<button class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only" data-am-modal=\"{target: \'#del-alert\'}\">';
				html += '<span class="am-icon-trash-o"></span>删除</button></div></div></td></tr>';
			});
			$('#blog-list').html(html);
		}
	});
}


function initLabelList(){
	$.ajax({
		type:	"post",
		url:	"/admin/label/listByJson",
		data:	{},
		dataType:	"json",
		success:	function(data){
			$('#label-list').empty();
			var html = '';
			var i = 0;
			$.each(data.labels, function(index, label){
				if(label.content.trim() != ''){
					html += '<label id=\"'+ label._id +'\" class="am-btn am-btn-default am-btn-xs"><input type="checkbox">' + label.content + '</label>';
					if(i == 4){
						html +='<br/>';
						i = 0;
					}
					i++;
				}
			});
			html += '<br/><br/><button data-am-modal="{target: \'#add-label-modal\', closeViaDimmer: 0, width: 400, height: 200}" class="am-btn am-btn-default am-btn-xs" type="button">';
			html += '<span class="am-icon-plus"></span>新增</button>'; 
			$('#label-list').html(html);
		}
	});
}

