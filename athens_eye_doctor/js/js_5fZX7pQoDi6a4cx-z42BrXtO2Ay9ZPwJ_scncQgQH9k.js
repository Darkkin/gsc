/*! Originally based on the tinynav.js library found at http://tinynav.viljamis.com by @viljamis */
(function ($, window, i) {
  $.fn.tinyNav = function (options) {
    // Default settings
    var settings = $.extend({
      'active' : 'selected', // String: Set the "active" class
      'header' : false, // Boolean: Show header instead of the active item
      'indent' : '--', // String: Set this to empty to disable identing
      'depth_count' : 3 // Integer: depth to stop counting
    }, options);
    return this.each(function () {
      // Used for namespacing
      i++;
      var $nav = $(this),
        // Namespacing
        namespace = 'tinynav',
        namespace_i = namespace + i,
        l_namespace_i = '.l_' + namespace_i,
        $select = $('<select/>').addClass(namespace + ' ' + namespace_i);
      if ($nav.is('ul,ol')) {
        if (settings.header) {
          $select.append(
            $('<option value="-null-"/>').text(Drupal.t('Navigation'))
          );
        }
        // Build options
        var options = '';
        $nav
          .addClass('l_' + namespace_i)
          .find('a')
          .each(function () {
            var indent = '';
            // indent once for each parent this has
            var parent_count = $(this).parents("ul,ol").length;
            // apply indenting if found
            for (var i=1; i<parent_count; i++) {
              indent += settings.indent;
            }
            // add spacing to end if we indent at all
            if (indent != '') {
              indent += ' ';
            }
            if (parent_count < settings.depth_count) {
              options +=
                '<option value="' + $(this).attr('href') + '">' +
                indent + $(this).text() +
                '</option>';
            }
          });
        // Append options into a select
        $select.append(options);
        // Select the active item
          $select
            .find(':eq(' + (settings.header + $(l_namespace_i + ' li')
            .index($(l_namespace_i + ' .' + settings.active)) + ')'))
            .attr('selected', true);
        
        // Change window location
        $select.change(function () {
          if ($(this).val() != '-null-') {
            window.location.href = $(this).val();
          }
        });
        // Inject select
        $(l_namespace_i).after($select);
      }
    });
  };
})(jQuery, this, 0);;
(function ($) {
  Drupal.behaviors.tinynav = {
    attach: function (context, settings) {
      // make sure we don't try to access an undefined array
      settings.tinynav = settings.tinynav || {
        selector: '#zone-menu .region-menu ul.menu',
        media_query: 'all and (max-width:780px)',
        header: false,
        active: 'active-trail'
      }
      // Add the class to the selectors so we can access it later
      $(settings.tinynav.selector).addClass('tinyjs');

      // Build the Settings array
      var tinyNavSettings = {
        header: settings.tinynav.header
      };
      if (settings.tinynav.active) {
        tinyNavSettings.active = settings.tinynav.active;
      }

      // Tinynav (<-- new verb) them all
      $('.tinyjs').tinyNav(tinyNavSettings);
      // Add a wrapper to the select element
      $('select.tinynav').wrap('<div class="tinynav-wrapper"/>');
    },
    weight: 99
  };
})(jQuery);
;
/**
 * @file
 * Attaches behaviors for the Dashboard module.
 */

(function ($) {

/**
 * Implements Drupal.behaviors for the Dashboard module.
 */
Drupal.behaviors.dashboard = {
  attach: function (context, settings) {
    $('#dashboard', context).once(function () {
      $(this).prepend('<div class="customize clearfix"><ul class="action-links"><li><a href="#">' + Drupal.t('Customize dashboard') + '</a></li></ul><div class="canvas"></div></div>');
      $('.customize .action-links a', this).click(Drupal.behaviors.dashboard.enterCustomizeMode);
    });
    Drupal.behaviors.dashboard.addPlaceholders();
    if (Drupal.settings.dashboard.launchCustomize) {
      Drupal.behaviors.dashboard.enterCustomizeMode();
    }
  },

  addPlaceholders: function() {
    $('#dashboard .dashboard-region .region').each(function () {
      var empty_text = "";
      // If the region is empty
      if ($('.block', this).length == 0) {
        // Check if we are in customize mode and grab the correct empty text
        if ($('#dashboard').hasClass('customize-mode')) {
          empty_text = Drupal.settings.dashboard.emptyRegionTextActive;
        } else {
          empty_text = Drupal.settings.dashboard.emptyRegionTextInactive;
        }
        // We need a placeholder.
        if ($('.placeholder', this).length == 0) {
          $(this).append('<div class="placeholder"></div>');
        }
        $('.placeholder', this).html(empty_text);
      }
      else {
        $('.placeholder', this).remove();
      }
    });
  },

  /**
   * Enters "customize" mode by displaying disabled blocks.
   */
  enterCustomizeMode: function () {
    $('#dashboard').addClass('customize-mode customize-inactive');
    Drupal.behaviors.dashboard.addPlaceholders();
    // Hide the customize link
    $('#dashboard .customize .action-links').hide();
    // Load up the disabled blocks
    $('div.customize .canvas').load(Drupal.settings.dashboard.drawer, Drupal.behaviors.dashboard.setupDrawer);
  },

  /**
   * Exits "customize" mode by simply forcing a page refresh.
   */
  exitCustomizeMode: function () {
    $('#dashboard').removeClass('customize-mode customize-inactive');
    Drupal.behaviors.dashboard.addPlaceholders();
    location.href = Drupal.settings.dashboard.dashboard;
  },

  /**
   * Sets up the drag-and-drop behavior and the 'close' button.
   */
  setupDrawer: function () {
    $('div.customize .canvas-content input').click(Drupal.behaviors.dashboard.exitCustomizeMode);
    $('div.customize .canvas-content').append('<a class="button" href="' + Drupal.settings.dashboard.dashboard + '">' + Drupal.t('Done') + '</a>');

    // Initialize drag-and-drop.
    var regions = $('#dashboard div.region');
    regions.sortable({
      connectWith: regions,
      cursor: 'move',
      cursorAt: {top:0},
      dropOnEmpty: true,
      items: '> div.block, > div.disabled-block',
      placeholder: 'block-placeholder clearfix',
      tolerance: 'pointer',
      start: Drupal.behaviors.dashboard.start,
      over: Drupal.behaviors.dashboard.over,
      sort: Drupal.behaviors.dashboard.sort,
      update: Drupal.behaviors.dashboard.update
    });
  },

  /**
   * Makes the block appear as a disabled block while dragging.
   *
   * This function is called on the jQuery UI Sortable "start" event.
   *
   * @param event
   *  The event that triggered this callback.
   * @param ui
   *  An object containing information about the item that is being dragged.
   */
  start: function (event, ui) {
    $('#dashboard').removeClass('customize-inactive');
    var item = $(ui.item);

    // If the block is already in disabled state, don't do anything.
    if (!item.hasClass('disabled-block')) {
      item.css({height: 'auto'});
    }
  },

  /**
   * Adapts block's width to the region it is moved into while dragging.
   *
   * This function is called on the jQuery UI Sortable "over" event.
   *
   * @param event
   *  The event that triggered this callback.
   * @param ui
   *  An object containing information about the item that is being dragged.
   */
  over: function (event, ui) {
    var item = $(ui.item);

    // If the block is in disabled state, remove width.
    if ($(this).closest('#disabled-blocks').length) {
      item.css('width', '');
    }
    else {
      item.css('width', $(this).width());
    }
  },

  /**
   * Adapts a block's position to stay connected with the mouse pointer.
   *
   * This function is called on the jQuery UI Sortable "sort" event.
   *
   * @param event
   *  The event that triggered this callback.
   * @param ui
   *  An object containing information about the item that is being dragged.
   */
  sort: function (event, ui) {
    var item = $(ui.item);

    if (event.pageX > ui.offset.left + item.width()) {
      item.css('left', event.pageX);
    }
  },

  /**
   * Sends block order to the server, and expand previously disabled blocks.
   *
   * This function is called on the jQuery UI Sortable "update" event.
   *
   * @param event
   *   The event that triggered this callback.
   * @param ui
   *   An object containing information about the item that was just dropped.
   */
  update: function (event, ui) {
    $('#dashboard').addClass('customize-inactive');
    var item = $(ui.item);

    // If the user dragged a disabled block, load the block contents.
    if (item.hasClass('disabled-block')) {
      var module, delta, itemClass;
      itemClass = item.attr('class');
      // Determine the block module and delta.
      module = itemClass.match(/\bmodule-(\S+)\b/)[1];
      delta = itemClass.match(/\bdelta-(\S+)\b/)[1];

      // Load the newly enabled block's content.
      $.get(Drupal.settings.dashboard.blockContent + '/' + module + '/' + delta, {},
        function (block) {
          if (block) {
            item.html(block);
          }

          if (item.find('div.content').is(':empty')) {
            item.find('div.content').html(Drupal.settings.dashboard.emptyBlockText);
          }

          Drupal.attachBehaviors(item);
        },
        'html'
      );
      // Remove the "disabled-block" class, so we don't reload its content the
      // next time it's dragged.
      item.removeClass("disabled-block");
    }

    Drupal.behaviors.dashboard.addPlaceholders();

    // Let the server know what the new block order is.
    $.post(Drupal.settings.dashboard.updatePath, {
        'form_token': Drupal.settings.dashboard.formToken,
        'regions': Drupal.behaviors.dashboard.getOrder
      }
    );
  },

  /**
   * Returns the current order of the blocks in each of the sortable regions.
   *
   * @return
   *   The current order of the blocks, in query string format.
   */
  getOrder: function () {
    var order = [];
    $('#dashboard div.region').each(function () {
      var region = $(this).parent().attr('id').replace(/-/g, '_');
      var blocks = $(this).sortable('toArray');
      $.each(blocks, function() {
        order.push(region + '[]=' + this);
      });
    });
    order = order.join('&');
    return order;
  }
};

})(jQuery);
;
