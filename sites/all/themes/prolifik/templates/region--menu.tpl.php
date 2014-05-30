<?php
  $main_links = menu_tree_page_data(variable_get('menu_main_links_source', 'main-menu'));
  $main_links = menu_tree_output($main_links);
  $secondary_links = menu_tree_page_data(variable_get('menu_secondary_links_source', 'user-menu'));
  $secondary_links = menu_tree_output($secondary_links);
?>
<div<?php print $attributes; ?>>
  <div<?php print $content_attributes; ?>>
    <?php print $content; ?>
  </div>
</div>
