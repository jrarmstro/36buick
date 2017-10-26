const img_path = "img/gallery/";
const thumb_path = img_path + "/thumbs/";
const img_types = /\.(jpe?g|png|gif)$/;

const $gallery_container = $("#gallery");

$.ajax({
	url: img_path,
	success: function (data) {
		$(data).find("a").attr("href", function (i, val) {
			if (val.match(img_types)) {
				$gallery_container.append(`
					<div class="masonry-grid-item col-sm-12 col-md-6 col-lg-4 col-xl-3">
						<a href="${img_path}${val}" target="_blank">
							<img src="${thumb_path}${val}"
							     class="thumbnail"
								 onerror="if (this.src !== '${img_path}${val}') this.src='${img_path}${val}';">
						</a>
					</div>
				`)
			}
			
			$gallery_container.imagesLoaded(function(){
				$gallery_container.masonry({
					itemSelector: '.masonry-grid-item',
					columnWidth: '.masonry-grid-sizer',
					isAnimated: true,
					transitionDuration: '0.25s',
				});
			});
		});
	},
	error: function (jqXHR, exception) {
		console.log(exception, jqXHR);
	}
});