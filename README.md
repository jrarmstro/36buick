# 36buick
GitHub Pages hosting of [36buick.ca](http://www.36buick.ca), a webpage originally selling a restored 1936 Buick, which now serves simply as a legacy webpage for the car (as well as a personal learning opportunity).

The main goal: go technically overboard whilst still being stylish.


## Maintenance
In order for jQuery AJAX to successfully pull images in gallery.js, indexing must be enabled for the folder. Unfortunately this is not possible in GitHub Pages and thus we must index the page ourselves. make-index.py can be called with a directory and it will create the index.

The public_html directory is subtree pushed to the gh-pages branch, and this can be automatically done by executing deploy-gh-pages.bat whilst on the master branch.