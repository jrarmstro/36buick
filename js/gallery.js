let img_path = "img/gallery/";
let thumb_path = img_path + "/thumbs/";
let img_types = /\.(jpe?g|png|gif)$/;

$.ajax({
	url: img_path,
	success: function (data) {
		$(data).find("a").attr("href", function (i, val) {
			if (val.match(img_types)) {
				$("#gallery").append(`
					<div class="thumbnail col-sm-12 col-md-6 col-lg-4 col-xl-3">
						<a href="${img_path}${val}" class="thumbnail" target="_blank">
							<img src="${thumb_path}${val}">
						</a>
					</div>
				`)
			}
		});
	},
	error: function (jqXHR, exception) {
		console.log(exception, jqXHR);
	}
});